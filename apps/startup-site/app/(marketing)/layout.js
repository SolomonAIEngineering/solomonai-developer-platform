"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MarketingLayout;
const site_footer_1 = require("@/components/site-footer");
const site_header_1 = require("@/components/site-header");
async function MarketingLayout({ children, }) {
    return (<>
      {/* <SiteBanner /> */}
      <site_header_1.SiteHeader />
      <main className="mx-auto flex-1 overflow-hidden">{children}</main>
      <site_footer_1.SiteFooter />
    </>);
}
