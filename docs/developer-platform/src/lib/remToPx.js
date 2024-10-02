"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remToPx = remToPx;
function remToPx(remValue) {
    let rootFontSize = typeof window === "undefined"
        ? 16
        : parseFloat(window.getComputedStyle(document.documentElement).fontSize);
    return remValue * rootFontSize;
}
