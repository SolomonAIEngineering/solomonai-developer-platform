"use client";
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimePicker = TimePicker;
const React = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const label_1 = require("./label");
const time_picker_input_1 = require("./time-picker-input");
function TimePicker({ date, setDate }) {
    const minuteRef = React.useRef(null);
    const hourRef = React.useRef(null);
    const secondRef = React.useRef(null);
    return (<div className="flex items-end gap-2">
      <div className="grid gap-1 text-center">
        <label_1.Label htmlFor="hours" className="text-xs">
          Hours
        </label_1.Label>
        <time_picker_input_1.TimePickerInput picker="hours" date={date} setDate={setDate} ref={hourRef} onRightFocus={() => minuteRef.current?.focus()}/>
      </div>
      <div className="grid gap-1 text-center">
        <label_1.Label htmlFor="minutes" className="text-xs">
          Minutes
        </label_1.Label>
        <time_picker_input_1.TimePickerInput picker="minutes" date={date} setDate={setDate} ref={minuteRef} onLeftFocus={() => hourRef.current?.focus()} onRightFocus={() => secondRef.current?.focus()}/>
      </div>
      <div className="grid gap-1 text-center">
        <label_1.Label htmlFor="seconds" className="text-xs">
          Seconds
        </label_1.Label>
        <time_picker_input_1.TimePickerInput picker="seconds" date={date} setDate={setDate} ref={secondRef} onLeftFocus={() => minuteRef.current?.focus()}/>
      </div>
      <div className="flex h-10 items-center">
        <lucide_react_1.Clock className="ml-2 h-4 w-4"/>
      </div>
    </div>);
}
