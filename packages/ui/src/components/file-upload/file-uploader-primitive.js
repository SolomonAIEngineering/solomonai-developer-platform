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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploaderTrigger = exports.FileUploaderItem = exports.FileUploaderContent = exports.FileUploader = void 0;
const React = __importStar(require("react"));
const react_icons_1 = require("@radix-ui/react-icons");
const class_variance_authority_1 = require("class-variance-authority");
const react_dropzone_1 = require("react-dropzone");
const sonner_1 = require("sonner");
const useControllableState_1 = require("../../hooks/useControllableState");
const file_upload_utils_1 = require("../../lib/file-upload-utils");
const cn_1 = require("../../utils/cn");
const button_1 = require("../button");
const input_1 = require("../input");
const progress_1 = require("../progress");
const FileUploaderContext = React.createContext(null);
function useFileUploader() {
    const context = React.useContext(FileUploaderContext);
    if (!context) {
        throw new Error("useFileUploader must be used within a <FileUploader />");
    }
    return context;
}
function isFileWithPreview(file) {
    return "preview" in file && typeof file.preview === "string";
}
const FileUploader = React.forwardRef(({ value: valueProp, onValueChange, onUpload, progresses, opts, children, className, ...props }, ref) => {
    const { accept = { "image/*": [] }, maxSize = 1024 * 1024 * 4, maxFiles = 1, multiple = false, disabled = false, ...dropzoneProps } = opts ?? {};
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
                if (isFileWithPreview(file)) {
                    URL.revokeObjectURL(file.preview);
                }
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const isDisabled = disabled || (files?.length ?? 0) >= maxFiles;
    const dropzone = (0, react_dropzone_1.useDropzone)({
        onDrop,
        accept,
        maxSize,
        maxFiles,
        multiple,
        disabled: isDisabled,
        ...dropzoneProps,
    });
    return (<FileUploaderContext.Provider value={{
            files: files ?? [],
            maxFiles,
            maxSize,
            setFiles,
            onRemove,
            progresses: progresses ?? {},
            disabled: isDisabled,
            ...dropzone,
        }}>
        <div ref={ref} className={(0, cn_1.cn)("relative flex flex-col gap-6 overflow-hidden", className)} {...props}>
          {children}
        </div>
      </FileUploaderContext.Provider>);
});
exports.FileUploader = FileUploader;
FileUploader.displayName = "FileUploader";
const FileUploaderContent = React.forwardRef(({ children, className, ...props }, ref) => {
    return (<div ref={ref} className={(0, cn_1.cn)(className)} {...props}>
      {children}
    </div>);
});
exports.FileUploaderContent = FileUploaderContent;
FileUploaderContent.displayName = "FileUploaderContent";
const fileUploaderInputVariants = (0, class_variance_authority_1.cva)("group relative cursor-pointer focus-visible:outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50", {
    variants: {
        variant: {
            default: "grid h-52 w-full place-items-center rounded-lg border-2 border-dashed border-muted-foreground/25 px-5 py-2.5 text-center ring-offset-background transition hover:bg-muted/25 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:border-muted-foreground/50",
            button: "inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90",
            headless: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
const FileUploaderTrigger = React.forwardRef(({ children, className, variant, ...props }, ref) => {
    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, maxFiles, maxSize, disabled, } = useFileUploader();
    return (<div ref={ref} data-state={isDragActive
            ? "active"
            : isDragAccept
                ? "accept"
                : isDragReject
                    ? "reject"
                    : undefined} data-disabled={disabled ? "" : undefined} className={(0, cn_1.cn)(fileUploaderInputVariants({ variant, className }))} {...props} {...getRootProps()}>
      <input_1.Input type="file" {...getInputProps()}/>
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
      {children}
    </div>);
});
exports.FileUploaderTrigger = FileUploaderTrigger;
FileUploaderTrigger.displayName = "FileUploaderTrigger";
const FileUploaderItem = React.forwardRef(({ file, index, progress, className, ...props }, ref) => {
    const { onRemove } = useFileUploader();
    return (<div ref={ref} className={(0, cn_1.cn)("relative flex items-center space-x-4", className)} {...props}>
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
        <button_1.Button type="button" variant="outline" size="icon" className="size-7" onClick={() => onRemove(index)}>
          <react_icons_1.Cross2Icon className="size-4" aria-hidden="true"/>
          <span className="sr-only">Remove file</span>
        </button_1.Button>
      </div>
    </div>);
});
exports.FileUploaderItem = FileUploaderItem;
FileUploaderItem.displayName = "FileUploaderItem";
