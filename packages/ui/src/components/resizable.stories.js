"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithHandle = exports.Vertical = exports.Default = void 0;
const _1 = require(".");
const meta = {
    component: _1.ResizablePanelGroup,
    render: (args) => (<_1.ResizablePanelGroup {...args} direction="horizontal" className="max-w-md rounded-lg border">
      <_1.ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </_1.ResizablePanel>
      <_1.ResizableHandle />
      <_1.ResizablePanel defaultSize={50}>
        <_1.ResizablePanelGroup direction="vertical">
          <_1.ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </_1.ResizablePanel>
          <_1.ResizableHandle />
          <_1.ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </_1.ResizablePanel>
        </_1.ResizablePanelGroup>
      </_1.ResizablePanel>
    </_1.ResizablePanelGroup>),
};
exports.default = meta;
exports.Default = {};
exports.Vertical = {
    render: (args) => (<_1.ResizablePanelGroup {...args} direction="vertical" className="min-h-[200px] max-w-md rounded-lg border">
      <_1.ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </_1.ResizablePanel>
      <_1.ResizableHandle />
      <_1.ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </_1.ResizablePanel>
    </_1.ResizablePanelGroup>),
};
exports.WithHandle = {
    render: (args) => (<_1.ResizablePanelGroup {...args} direction="horizontal" className="min-h-[200px] max-w-md rounded-lg border">
      <_1.ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </_1.ResizablePanel>
      <_1.ResizableHandle withHandle/>
      <_1.ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </_1.ResizablePanel>
    </_1.ResizablePanelGroup>),
};
