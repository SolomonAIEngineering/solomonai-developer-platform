"use strict";
// SmartTextarea.stories.tsx
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const smart_textarea_1 = require("./smart-textarea");
const meta = {
    component: smart_textarea_1.SmartTextarea,
    args: {
        context: {},
        sampleQuestions: ["What is the weather today?", "How far is the moon?"], // You can provide default sample questions for the story.
        placeholder: "Type your text here...",
        globalFinancialContext: {},
        userAccount: {},
    },
};
exports.default = meta;
exports.Primary = {
    args: {
        userId: "1234",
        userName: "John Doe",
    },
};
