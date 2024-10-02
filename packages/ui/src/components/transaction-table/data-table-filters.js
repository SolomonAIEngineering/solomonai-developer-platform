"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTableFilter = DataTableFilter;
const react_1 = __importDefault(require("react"));
const outline_1 = require("@heroicons/react/24/outline");
const button_1 = require("../button");
const input_1 = require("../input");
const popover_1 = require("../popover");
function DataTableFilter({ column, table, }) {
    const firstValue = table
        .getPreFilteredRowModel()
        .flatRows[0]?.getValue(column.id);
    const columnFilterValue = column.getFilterValue();
    const sortedUniqueValues = react_1.default.useMemo(() => typeof firstValue === "number"
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(), [column.getFacetedUniqueValues()]);
    return typeof firstValue === "number" ? (<div>
      <popover_1.Popover>
        <popover_1.PopoverTrigger asChild>
          <button_1.Button variant="ghost" size="sm" className="h-8 border-dashed">
            <outline_1.ChevronDoubleDownIcon className="mr-2 h-4 w-4 border-0"/>
          </button_1.Button>
        </popover_1.PopoverTrigger>
        <popover_1.PopoverContent>
          <div className="flex space-x-2">
            <DebouncedInput type="number" min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")} max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")} value={columnFilterValue?.[0] ?? ""} onChange={(value) => column.setFilterValue((old) => [
            value,
            old?.[1],
        ])} placeholder={`Min ${column.getFacetedMinMaxValues()?.[0]
            ? `(${column.getFacetedMinMaxValues()?.[0]})`
            : ""}`} className="w-24 border shadow rounded"/>
            <DebouncedInput type="number" min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")} max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")} value={columnFilterValue?.[1] ?? ""} onChange={(value) => column.setFilterValue((old) => [
            old?.[0],
            value,
        ])} placeholder={`Max ${column.getFacetedMinMaxValues()?.[1]
            ? `(${column.getFacetedMinMaxValues()?.[1]})`
            : ""}`} className="w-24 border shadow rounded"/>
          </div>
          <div className="h-1"/>
        </popover_1.PopoverContent>
      </popover_1.Popover>
    </div>) : (<>
      <datalist id={column.id + "list"}>
        {sortedUniqueValues.slice(0, 5000).map((value) => (<option value={value} key={value}/>))}
      </datalist>
      <DebouncedInput type="text" value={(columnFilterValue ?? "")} onChange={(value) => column.setFilterValue(value)} placeholder={`Search... (${column.getFacetedUniqueValues().size})`} className="w-36 border shadow rounded" list={column.id + "list"}/>
      <div className="h-1"/>
    </>);
}
// A debounced input react component
function DebouncedInput({ value: initialValue, onChange, debounce = 500, ...props }) {
    const [value, setValue] = react_1.default.useState(initialValue);
    react_1.default.useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);
    react_1.default.useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);
        return () => clearTimeout(timeout);
    }, [value]);
    return (<input_1.Input {...props} value={value} onChange={(e) => setValue(e.target.value)} className="w-32 border shadow rounded-xl"/>);
}
