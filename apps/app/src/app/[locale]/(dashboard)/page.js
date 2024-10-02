"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = Page;
const sign_out_1 = require("@/components/sign-out");
const server_1 = require("@/locales/server");
const queries_1 = require("@v1/supabase/queries");
exports.metadata = {
    title: "Home",
};
async function Page() {
    const user = await (0, queries_1.getUser)();
    const t = await (0, server_1.getI18n)();
    return (<div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <p>{t("welcome", { name: user?.email })}</p>

        <sign_out_1.SignOut />
      </div>
    </div>);
}
