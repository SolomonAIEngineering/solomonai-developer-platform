"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateRangePicker = DateRangePicker;
const utils_1 = require("../utils");
const button_1 = require("./button");
const calendar_1 = require("./calendar");
const icons_1 = require("./icons");
const popover_1 = require("./popover");
function DateRangePicker({ className, range, disabled, onSelect, placeholder, }) {
    return (<div className={(0, utils_1.cn)("grid gap-2", className)}>
      <popover_1.Popover>
        <popover_1.PopoverTrigger asChild disabled={disabled}>
          <button_1.Button variant="outline" className={(0, utils_1.cn)("justify-start text-left font-medium space-x-2")}>
            <span>{placeholder}</span>
            <icons_1.Icons.ChevronDown />
          </button_1.Button>
        </popover_1.PopoverTrigger>
        <popover_1.PopoverContent className="w-auto p-0 mt-2" align="end">
          <calendar_1.Calendar initialFocus mode="range" defaultMonth={range?.from} selected={range} onSelect={onSelect} numberOfMonths={2}/>
        </popover_1.PopoverContent>
      </popover_1.Popover>
    </div>);
}
