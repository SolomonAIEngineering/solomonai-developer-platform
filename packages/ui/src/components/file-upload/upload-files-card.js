"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadedFilesCard = UploadedFilesCard;
const react_1 = __importDefault(require("react"));
const card_1 = require("../card");
const scroll_area_1 = require("../scroll-area");
const empty_file_upload_card_1 = require("./empty-file-upload-card");
function UploadedFilesCard({ uploadedFiles }) {
    return (<card_1.Card>
      <card_1.CardHeader>
        <card_1.CardTitle>Uploaded files</card_1.CardTitle>
        <card_1.CardDescription>View the uploaded files here</card_1.CardDescription>
      </card_1.CardHeader>
      <card_1.CardContent>
        {uploadedFiles.length > 0 ? (<scroll_area_1.ScrollArea className="pb-4">
            <div className="flex w-max space-x-2.5">
              {uploadedFiles.map((file) => (<div key={file.id} className="relative aspect-video w-64">
                  <img src={file.location} alt={file.name} sizes="(min-width: 640px) 640px, 100vw" loading="lazy" className="rounded-md object-cover"/>
                </div>))}
            </div>
            <scroll_area_1.ScrollBar orientation="horizontal"/>
          </scroll_area_1.ScrollArea>) : (<empty_file_upload_card_1.EmptyFileUploadCard title="No files uploaded" description="Upload some files to see them here" className="w-full"/>)}
      </card_1.CardContent>
    </card_1.Card>);
}
