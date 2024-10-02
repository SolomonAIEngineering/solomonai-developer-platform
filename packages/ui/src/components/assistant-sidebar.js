"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssistantSidebar = void 0;
const resizable_1 = require("./resizable");
const thread_1 = require("./thread");
const AssistantSidebar = ({ children }) => {
    return (<resizable_1.ResizablePanelGroup direction="horizontal">
      <resizable_1.ResizablePanel>{children}</resizable_1.ResizablePanel>
      <resizable_1.ResizableHandle />
      <resizable_1.ResizablePanel>
        <thread_1.Thread />
      </resizable_1.ResizablePanel>
    </resizable_1.ResizablePanelGroup>);
};
exports.AssistantSidebar = AssistantSidebar;
