"use client";
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploader = FileUploader;
const React = __importStar(require("react"));
const react_icons_1 = require("@radix-ui/react-icons");
const react_dropzone_1 = __importDefault(require("react-dropzone"));
const sonner_1 = require("sonner");
const useControllableState_1 = require("../../hooks/useControllableState");
const file_upload_utils_1 = require("../../lib/file-upload-utils");
const cn_1 = require("../../utils/cn");
const button_1 = require("../button");
const progress_1 = require("../progress");
const scroll_area_1 = require("../scroll-area");
function FileUploader(props) {
    const { value: valueProp, onValueChange, onUpload, progresses, accept = {
        "image/*": [], // Accept all image formats
        "video/*": [], // Accept all video formats
        "application/pdf": [], // Specifically accept PDF files
    }, maxSize = 1024 * 1024 * 2, maxFiles = 1, multiple = false, disabled = false, className, ...dropzoneProps } = props;
    const [files, setFiles] = (0, useControllableState_1.useControllableState)({
        prop: valueProp,
        onChange: onValueChange,
    });
    const onDrop = React.useCallback((acceptedFiles, rejectedFiles) => {
        if (!multiple && maxFiles === 1 && acceptedFiles.length > 1) {
            sonner_1.toast.error("Cannot upload more than 1 file at a time");
            return;
        }
        if ((files?.length ?? 0) + acceptedFiles.length > maxFiles) {
            sonner_1.toast.error(`Cannot upload more than ${maxFiles} files`);
            return;
        }
        const newFiles = acceptedFiles.map((file) => Object.assign(file, {
            preview: URL.createObjectURL(file),
        }));
        const updatedFiles = files ? [...files, ...newFiles] : newFiles;
        setFiles(updatedFiles);
        if (rejectedFiles.length > 0) {
            rejectedFiles.forEach(({ file }) => {
                sonner_1.toast.error(`File ${file.name} was rejected`);
            });
        }
        if (onUpload &&
            updatedFiles.length > 0 &&
            updatedFiles.length <= maxFiles) {
            const target = updatedFiles.length > 0 ? `${updatedFiles.length} files` : `file`;
            sonner_1.toast.promise(onUpload(updatedFiles), {
                loading: `Uploading ${target}...`,
                success: () => {
                    setFiles([]);
                    return `${target} uploaded`;
                },
                error: `Failed to upload ${target}`,
            });
        }
    }, [files, maxFiles, multiple, onUpload, setFiles]);
    function onRemove(index) {
        if (!files)
            return;
        const newFiles = files.filter((_, i) => i !== index);
        setFiles(newFiles);
        onValueChange?.(newFiles);
    }
    // Revoke preview url when component unmounts
    React.useEffect(() => {
        return () => {
            if (!files)
                return;
            files.forEach((file) => {
                // Add type annotation to 'file' parameter
                if (isFileWithPreview(file)) {
                    URL.revokeObjectURL(file.preview);
                }
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const isDisabled = disabled || (files?.length ?? 0) >= maxFiles;
    return (<div className="relative flex flex-col gap-6 overflow-hidden">
      <react_dropzone_1.default onDrop={onDrop} accept={accept} maxSize={maxSize} maxFiles={maxFiles} multiple={maxFiles > 1 || multiple} disabled={isDisabled}>
        {({ getRootProps, getInputProps, isDragActive }) => (<div {...getRootProps()} className={(0, cn_1.cn)("group relative grid h-52 w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed border-muted-foreground/25 px-5 py-2.5 text-center transition hover:bg-muted/25", "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", isDragActive && "border-muted-foreground/50", isDisabled && "pointer-events-none opacity-60", className)} {...dropzoneProps}>
            <input {...getInputProps()}/>
            {isDragActive ? (<div className="flex flex-col items-center justify-center gap-4 sm:px-5">
                <div className="rounded-full border border-dashed p-3">
                  <react_icons_1.UploadIcon className="size-7 text-muted-foreground" aria-hidden="true"/>
                </div>
                <p className="font-medium text-muted-foreground">
                  Drop the files here
                </p>
              </div>) : (<div className="flex flex-col items-center justify-center gap-4 sm:px-5">
                <div className="rounded-full border border-dashed p-3">
                  <react_icons_1.UploadIcon className="size-7 text-muted-foreground" aria-hidden="true"/>
                </div>
                <div className="space-y-px">
                  <p className="font-medium text-muted-foreground">
                    Drag {`'n'`} drop files here, or click to select files
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    You can upload
                    {maxFiles > 1
                    ? ` ${maxFiles === Infinity ? "multiple" : maxFiles}
                      files (up to ${(0, file_upload_utils_1.formatBytes)(maxSize)} each)`
                    : ` a file with ${(0, file_upload_utils_1.formatBytes)(maxSize)}`}
                  </p>
                </div>
              </div>)}
          </div>)}
      </react_dropzone_1.default>
      {files?.length ? (<scroll_area_1.ScrollArea className="h-fit w-full px-3">
          <div className="max-h-48 space-y-4">
            {files?.map((file, index) => (<FileCard key={index} file={file} onRemove={() => onRemove(index)} progress={progresses?.[file.name] ?? 0}/>))}
          </div>
        </scroll_area_1.ScrollArea>) : null}
    </div>);
}
function FileCard({ file, progress, onRemove }) {
    return (<div className="relative flex items-center space-x-4">
      <div className="flex flex-1 space-x-4">
        {isFileWithPreview(file) ? (<img src={file.preview} alt={file.name} width={48} height={48} loading="lazy" className="aspect-square shrink-0 rounded-md object-cover"/>) : null}
        <div className="flex w-full flex-col gap-2">
          <div className="space-y-px">
            <p className="line-clamp-1 text-sm font-medium text-foreground/80">
              {file.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {(0, file_upload_utils_1.formatBytes)(file.size)}
            </p>
          </div>
          {progress ? <progress_1.Progress value={progress}/> : null}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button_1.Button type="button" variant="outline" size="icon" className="size-7" onClick={onRemove}>
          <react_icons_1.Cross2Icon className="size-4" aria-hidden="true"/>
          <span className="sr-only">Remove file</span>
        </button_1.Button>
      </div>
    </div>);
}
function isFileWithPreview(file) {
    return "preview" in file && typeof file.preview === "string";
}
