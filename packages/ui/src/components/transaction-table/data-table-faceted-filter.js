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
exports.DataTableFacetedFilter = DataTableFacetedFilter;
const React = __importStar(require("react"));
const react_icons_1 = require("@radix-ui/react-icons");
const cn_1 = require("../../utils/cn");
const badge_1 = require("../badge");
const button_1 = require("../button");
const command_1 = require("../command");
const popover_1 = require("../popover");
const separator_1 = require("../separator");
function DataTableFacetedFilter({ column, title, options, }) {
    const facets = column?.getFacetedUniqueValues();
    const selectedValues = new Set(column?.getFilterValue());
    return (<popover_1.Popover>
      <popover_1.PopoverTrigger asChild>
        <button_1.Button variant="outline" size="sm" className="h-8 border-dashed">
          <react_icons_1.PlusCircledIcon className="mr-2 h-4 w-4"/>
          {title}
          {selectedValues?.size > 0 && (<>
              <separator_1.Separator orientation="vertical" className="mx-2 h-4"/>
              <badge_1.Badge variant="secondary" className="rounded-sm px-1 font-normal lg:hidden">
                {selectedValues.size}
              </badge_1.Badge>
              <div className="hidden space-x-1 lg:flex">
                {selectedValues.size > 2 ? (<badge_1.Badge variant="secondary" className="rounded-sm px-1 font-normal">
                    {selectedValues.size} selected
                  </badge_1.Badge>) : (options
                .filter((option) => selectedValues.has(option.value))
                .map((option) => (<badge_1.Badge variant="secondary" key={option.value} className="rounded-sm px-1 font-normal text-zinc-950">
                        {option.label}
                      </badge_1.Badge>)))}
              </div>
            </>)}
        </button_1.Button>
      </popover_1.PopoverTrigger>
      <popover_1.PopoverContent className="w-[200px] p-0" align="start">
        <command_1.Command>
          <command_1.CommandInput placeholder={title}/>
          <command_1.CommandList>
            <command_1.CommandEmpty>No results found.</command_1.CommandEmpty>
            <command_1.CommandGroup>
              {options.map((option) => {
            const isSelected = selectedValues.has(option.value);
            return (<command_1.CommandItem key={option.value} onSelect={() => {
                    if (isSelected) {
                        selectedValues.delete(option.value);
                    }
                    else {
                        selectedValues.add(option.value);
                    }
                    const filterValues = Array.from(selectedValues);
                    column?.setFilterValue(filterValues.length ? filterValues : undefined);
                }}>
                    <div className={(0, cn_1.cn)("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary", isSelected
                    ? "bg-primary text-primary-foreground"
                    : "opacity-50 [&_svg]:invisible")}>
                      <react_icons_1.CheckIcon className={(0, cn_1.cn)("h-4 w-4")}/>
                    </div>
                    {option.icon && (<option.icon className="mr-2 h-4 w-4 text-muted-foreground"/>)}
                    <span>{option.label}</span>
                    {facets?.get(option.value) && (<span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
                        {facets.get(option.value)}
                      </span>)}
                  </command_1.CommandItem>);
        })}
            </command_1.CommandGroup>
            {selectedValues.size > 0 && (<>
                <command_1.CommandSeparator />
                <command_1.CommandGroup>
                  <command_1.CommandItem onSelect={() => column?.setFilterValue(undefined)} className="justify-center text-center">
                    Clear filters
                  </command_1.CommandItem>
                </command_1.CommandGroup>
              </>)}
          </command_1.CommandList>
        </command_1.Command>
      </popover_1.PopoverContent>
    </popover_1.Popover>);
}
