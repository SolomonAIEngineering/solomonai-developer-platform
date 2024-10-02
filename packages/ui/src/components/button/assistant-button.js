"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const framer_motion_1 = require("framer-motion");
require("../../styles/assistant-button.css");
const cn_1 = require("../../utils/cn");
const AssistantButton = ({ callback, className, }) => {
    return (<div className={(0, cn_1.cn)(className)}>
      <div className={(0, cn_1.cn)("absolute bottom-0 right-0 pb-10 pr-10")}>
        <framer_motion_1.motion.div className="text-[70px] duration-500 ease-in-out hover:scale-105 hover:cursor-pointer">
          <div className="rainbow-container">
            <div className="green"></div>
            <div className="pink"></div>
          </div>
        </framer_motion_1.motion.div>
      </div>
    </div>);
};
exports.default = AssistantButton;
