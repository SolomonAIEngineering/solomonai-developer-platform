"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const authErrors_json_1 = __importDefault(require("./authErrors.json"));
const generalErrors_json_1 = __importDefault(require("./generalErrors.json"));
const errors = Object.assign(
  {},
  authErrors_json_1.default,
  generalErrors_json_1.default,
);
exports.default = errors;
