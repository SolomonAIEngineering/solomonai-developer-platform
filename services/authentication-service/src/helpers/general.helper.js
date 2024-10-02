"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomString = generateRandomString;
function generateRandomString(length = 10) {
    const possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";
    for (let i = 0; i < length; i++) {
        randomString += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }
    return randomString;
}
