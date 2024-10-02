"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Layout;
async function Layout({ children }) {
    return (<main className="flex flex-col items-center justify-center h-screen">
      {children}
    </main>);
}
