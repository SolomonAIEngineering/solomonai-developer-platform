"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMPTY_FOLDER_PLACEHOLDER_FILE_NAME = void 0;
exports.upload = upload;
exports.remove = remove;
exports.deleteFolder = deleteFolder;
exports.createFolder = createFolder;
exports.download = download;
exports.share = share;
exports.EMPTY_FOLDER_PLACEHOLDER_FILE_NAME = '.emptyFolderPlaceholder';
async function upload(client, { file, path, bucket }) {
    const storage = client.storage.from(bucket);
    const result = await storage.upload(path.join('/'), file, {
        upsert: true,
        cacheControl: '3600',
    });
    if (!result.error) {
        return storage.getPublicUrl(path.join('/')).data.publicUrl;
    }
    throw result.error;
}
async function remove(client, { bucket, path }) {
    return client.storage
        .from(bucket)
        .remove([decodeURIComponent(path.join('/'))]);
}
async function deleteFolder(client, { bucket, path }) {
    const { data: list } = await client.storage
        .from(bucket)
        .list(decodeURIComponent(path.join('/')));
    const filesToRemove = list?.flatMap((file) => {
        // Folder, remove empty file before folder
        if (!file.id) {
            return [
                `${decodeURIComponent([...path, file.name].join('/'))}/${exports.EMPTY_FOLDER_PLACEHOLDER_FILE_NAME}`,
                decodeURIComponent([...path, file.name].join('/')),
            ];
        }
        return [decodeURIComponent([...path, file.name].join('/'))];
    });
    return client.storage.from(bucket).remove(filesToRemove);
}
async function createFolder(client, { bucket, path, name }) {
    const fullPath = decodeURIComponent([...path, name, exports.EMPTY_FOLDER_PLACEHOLDER_FILE_NAME].join('/'));
    const { error, data } = await client.storage
        .from(bucket)
        .upload(fullPath, new File([], exports.EMPTY_FOLDER_PLACEHOLDER_FILE_NAME));
    if (error) {
        throw Error(error.message);
    }
    return data;
}
async function download(client, { bucket, path }) {
    return client.storage.from(bucket).download(path);
}
async function share(client, { bucket, path, expireIn, options }) {
    return client.storage.from(bucket).createSignedUrl(path, expireIn, options);
}
