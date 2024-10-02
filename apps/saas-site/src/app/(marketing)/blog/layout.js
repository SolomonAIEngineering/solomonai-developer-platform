"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Layout;
const footer_1 = __importDefault(require("@/components/sections/footer"));
const header_1 = __importDefault(require("@/components/sections/header"));
async function Layout({ children }) {
    return (<>
      <header_1.default />
      <main>{children}</main>
      <footer_1.default />
    </>);
}
