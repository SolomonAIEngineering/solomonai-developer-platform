"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = Page;
const cal_embed_1 = require("@/components/cal-embed");
exports.metadata = {
    title: "Talk to us",
};
function Page() {
    return (<div className="flex flex-col items-center justify-center h-screen w-full">
      <div className="mt-24 w-full">
        <cal_embed_1.CalEmbed calLink={process.env.NEXT_PUBLIC_CAL_LINK}/>
      </div>
    </div>);
}
