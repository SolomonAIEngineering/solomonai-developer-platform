"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSidebarToggle = void 0;
const zustand_1 = require("zustand");
const middleware_1 = require("zustand/middleware");
const useSidebarToggle = (0, zustand_1.create)((0, middleware_1.persist)((set, get) => ({
    isOpen: true,
    setIsOpen: () => {
        set({ isOpen: !get().isOpen });
    },
}), {
    name: "sidebarOpen",
    storage: (0, middleware_1.createJSONStorage)(() => localStorage),
}));
exports.useSidebarToggle = useSidebarToggle;
