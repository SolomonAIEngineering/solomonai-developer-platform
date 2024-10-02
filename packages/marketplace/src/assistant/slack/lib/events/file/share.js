"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileShare = fileShare;
const jobs_1 = require("@orbitkit/jobs");
async function fileShare(event, { teamId, token }) {
    const files = event?.files?.map((file) => ({
        id: file.id,
        name: file.name,
        mimetype: file.mimetype,
        size: file.size,
        url: file.url_private_download,
    }));
    if (files && files.length > 0) {
        await Promise.all(files.map((file) => jobs_1.client.sendEvent({
            name: jobs_1.Events.INBOX_SLACK_UPLOAD,
            payload: {
                teamId,
                token,
                channelId: event.channel,
                threadId: event.thread_ts,
                file,
            },
        })));
    }
}
