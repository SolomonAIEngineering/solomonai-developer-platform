"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTimestamp = exports.getLastMessage = exports.loggedInUserData = exports.userData = exports.createUser = exports.createMessage = void 0;
const uuid_1 = require("uuid");
__exportStar(require("./menu"), exports);
__exportStar(require("./resource"), exports);
__exportStar(require("./appointment"), exports);
const createMessage = (avatar, name, message, timestamp = new Date()) => ({
    id: (0, uuid_1.v4)(),
    avatar,
    name,
    message,
});
exports.createMessage = createMessage;
const createUser = (avatar, name, messages = [], lastActive = new Date()) => ({
    id: (0, uuid_1.v4)(),
    avatar,
    name,
    messages,
    lastActive,
});
exports.createUser = createUser;
exports.userData = [
    (0, exports.createUser)("/User1.png", "Jane Doe", [
        (0, exports.createMessage)("/User1.png", "Jane Doe", "Hey, Jakob", new Date("2023-07-01T09:00:00")),
        (0, exports.createMessage)("/LoggedInUser.jpg", "Jakob Hoeg", "Hey!", new Date("2023-07-01T09:01:00")),
        (0, exports.createMessage)("/User1.png", "Jane Doe", "How are you?", new Date("2023-07-01T09:02:00")),
        (0, exports.createMessage)("/LoggedInUser.jpg", "Jakob Hoeg", "I am good, you?", new Date("2023-07-01T09:03:00")),
        (0, exports.createMessage)("/User1.png", "Jane Doe", "I am good too!", new Date("2023-07-01T09:04:00")),
        (0, exports.createMessage)("/LoggedInUser.jpg", "Jakob Hoeg", "That is good to hear!", new Date("2023-07-01T09:05:00")),
        (0, exports.createMessage)("/User1.png", "Jane Doe", "How has your day been so far?", new Date("2023-07-01T09:06:00")),
        (0, exports.createMessage)("/LoggedInUser.jpg", "Jakob Hoeg", "It has been good. I went for a run this morning and then had a nice breakfast. How about you?", new Date("2023-07-01T09:07:00")),
        (0, exports.createMessage)("/User1.png", "Jane Doe", "I had a relaxing day. Just catching up on some reading.", new Date("2023-07-01T09:08:00")),
    ]),
    (0, exports.createUser)("/User2.png", "John Doe"),
    (0, exports.createUser)("/User3.png", "Elizabeth Smith"),
    (0, exports.createUser)("/User4.png", "John Smith"),
];
exports.loggedInUserData = {
    id: (0, uuid_1.v4)(),
    avatar: "/LoggedInUser.jpg",
    name: "Jakob Hoeg",
    lastActive: new Date(),
};
const getLastMessage = (user) => {
    return user.messages.length > 0
        ? user.messages[user.messages.length - 1]
        : null;
};
exports.getLastMessage = getLastMessage;
const formatTimestamp = (date) => {
    return new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    }).format(date);
};
exports.formatTimestamp = formatTimestamp;
