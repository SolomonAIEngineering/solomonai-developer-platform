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
exports.ComboboxDropdown = ComboboxDropdown;
const React = __importStar(require("react"));
const cmdk_1 = require("cmdk");
const lucide_react_1 = require("lucide-react");
const utils_1 = require("../utils");
const button_1 = require("./button");
const command_1 = require("./command");
const popover_1 = require("./popover");
function ComboboxDropdown({ headless, placeholder, searchPlaceholder, items, onSelect, selectedItem: incomingSelectedItem, renderSelectedItem, renderListItem, renderOnCreate, emptyResults, popoverProps, disabled, onCreate, }) {
    const [open, setOpen] = React.useState(false);
    const [internalSelectedItem, setInternalSelectedItem] = React.useState();
    const [inputValue, setInputValue] = React.useState("");
    const selectedItem = incomingSelectedItem ?? internalSelectedItem;
    const filteredItems = items.filter((item) => item.label.toLowerCase().includes(inputValue.toLowerCase()));
    const showCreate = onCreate && Boolean(inputValue) && !filteredItems.length;
    const Component = (<command_1.Command loop shouldFilter={false}>
      <command_1.CommandInput value={inputValue} onValueChange={setInputValue} placeholder={searchPlaceholder ?? "Search item..."} className="px-3"/>

      <command_1.CommandGroup>
        <cmdk_1.CommandList className="max-h-[225px] overflow-auto">
          {filteredItems.map((item) => {
            const isChecked = selectedItem?.id === item.id;
            return (<command_1.CommandItem disabled={item.disabled} className="cursor-pointer" key={item.id} value={item.id} onSelect={(id) => {
                    const foundItem = items.find((item) => item.id === id);
                    if (!foundItem) {
                        return;
                    }
                    onSelect(foundItem);
                    setInternalSelectedItem(foundItem);
                    setOpen(false);
                }}>
                {renderListItem ? (renderListItem({ isChecked, item })) : (<>
                    <lucide_react_1.Check className={(0, utils_1.cn)("mr-2 h-4 w-4", isChecked ? "opacity-100" : "opacity-0")}/>
                    {item.label}
                  </>)}
              </command_1.CommandItem>);
        })}

          <command_1.CommandEmpty>{emptyResults ?? "No item found"}</command_1.CommandEmpty>

          {showCreate && (<command_1.CommandItem key={inputValue} value={inputValue} onSelect={() => {
                onCreate(inputValue);
                setOpen(false);
                setInputValue("");
            }} onMouseDown={(event) => {
                event.preventDefault();
                event.stopPropagation();
            }}>
              {renderOnCreate ? renderOnCreate(inputValue) : null}
            </command_1.CommandItem>)}
        </cmdk_1.CommandList>
      </command_1.CommandGroup>
    </command_1.Command>);
    if (headless) {
        return Component;
    }
    return (<popover_1.Popover open={open} onOpenChange={setOpen} modal={true}>
      <popover_1.PopoverTrigger asChild disabled={disabled}>
        <button_1.Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between relative">
          {selectedItem
            ? (<div className="flex items-center">
                  {renderSelectedItem?.(selectedItem)}
                </div>) ?? selectedItem.label
            : placeholder ?? "Select item..."}
          <lucide_react_1.ChevronsUpDown className="size-4 opacity-50 absolute right-2"/>
        </button_1.Button>
      </popover_1.PopoverTrigger>

      <popover_1.PopoverContent className="p-0" {...popoverProps} style={{
            width: "var(--radix-popover-trigger-width)",
            ...popoverProps?.style,
        }}>
        {Component}
      </popover_1.PopoverContent>
    </popover_1.Popover>);
}
