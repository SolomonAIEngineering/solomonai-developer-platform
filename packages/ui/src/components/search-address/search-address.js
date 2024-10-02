"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const cmdk_1 = require("cmdk");
const lucide_react_1 = require("lucide-react");
const use_search_address_1 = require("../../hooks/use-search-address");
const cn_1 = require("../../utils/cn");
const button_1 = require("../button");
const command_1 = require("../command");
const popover_1 = require("../popover");
/**
 * SearchAddress component for searching and selecting addresses.
 *
 * This component provides an interface for users to search for addresses and select
 * a result from the search. It uses the leaflet-geosearch library for address lookup.
 *
 * @component
 * @example
 * ```tsx
 * import dynamic from "next/dynamic";
 *
 * const SearchAddress = dynamic(() => import("@/components/ui/search-address"), {
 *   ssr: false,
 * });
 *
 * // In your component:
 * <SearchAddress onSelectLocation={(location) => console.log(location)} />
 *
 * Using dynamic imports with SSR disabled helps avoid the
 * window is not defined error during server-side rendering.
 * ```
 */
const SearchAddress = ({ onSelectLocation }) => {
    const [open, setOpen] = react_1.default.useState(false);
    const [value, setValue] = react_1.default.useState("");
    const { query, results, loading, handleSearch, selectedItem, setSelectedItem, } = (0, use_search_address_1.useSearchAddress)();
    return (<popover_1.Popover open={open} onOpenChange={setOpen}>
      <popover_1.PopoverTrigger asChild>
        <button_1.Button variant="outline" role="combobox" aria-expanded={open} className="w-80 justify-between truncate">
          <p className="truncate">
            {selectedItem
            ? `${selectedItem.label} (${selectedItem.raw.entityType})`
            : "Select place..."}
          </p>

          <lucide_react_1.ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
        </button_1.Button>
      </popover_1.PopoverTrigger>
      <popover_1.PopoverContent className="w-80 p-[3%]">
        <command_1.Command>
          <command_1.CommandInput placeholder="Search the place..." onValueChange={(value) => handleSearch(value)} className="w-full"/>
          <command_1.CommandList>
            {loading ? (<cmdk_1.CommandLoading>
                <command_1.CommandEmpty>Type to search</command_1.CommandEmpty>
              </cmdk_1.CommandLoading>) : Object.keys(results).length > 0 ? (Object.entries(results).map(([type, items]) => (<command_1.CommandGroup key={type} heading={type.charAt(0).toUpperCase() + type.slice(1)}>
                  {items.map((item, index) => (<command_1.CommandItem key={index} value={item.label} onSelect={(currentValue) => {
                    const item = results[type]?.find((item) => item.label === currentValue);
                    setValue(currentValue === value ? "" : currentValue);
                    setSelectedItem(item ?? null);
                    onSelectLocation(item ?? null);
                    setOpen(false);
                }}>
                      <lucide_react_1.Check className={(0, cn_1.cn)("mr-2 h-4 w-4", value === item.label ? "opacity-100" : "opacity-0")}/>
                      {item.label}
                    </command_1.CommandItem>))}
                </command_1.CommandGroup>))) : (<command_1.CommandEmpty>No results found.</command_1.CommandEmpty>)}
          </command_1.CommandList>
        </command_1.Command>
      </popover_1.PopoverContent>
    </popover_1.Popover>);
};
exports.default = SearchAddress;
