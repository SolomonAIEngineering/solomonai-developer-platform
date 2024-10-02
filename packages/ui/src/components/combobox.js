"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Combobox = void 0;
const react_1 = require("react");
const cmdk_1 = require("cmdk");
const lucide_react_1 = require("lucide-react");
const utils_1 = require("../utils");
const command_1 = require("./command");
const icons_1 = require("./icons");
const Combobox = ({ options, placeholder, value, onSelect, onRemove, onCreate, disabled, className, classNameList, isLoading = false, showIcon = true, autoFocus, onValueChange, CreateComponent, }) => {
    const inputRef = (0, react_1.useRef)(null);
    const [isOpen, setOpen] = (0, react_1.useState)(false);
    const [selected, setSelected] = (0, react_1.useState)(value);
    const [inputValue, setInputValue] = (0, react_1.useState)(value?.name || "");
    const handleOnValueChange = (value) => {
        setInputValue(value);
        onValueChange?.(value);
        if (value) {
            setOpen(true);
        }
        else {
            setOpen(false);
        }
    };
    const handleOnRemove = () => {
        setSelected(undefined);
        setInputValue("");
        onRemove?.();
    };
    const handleBlur = (0, react_1.useCallback)(() => {
        setOpen(false);
        setInputValue(selected?.name);
    }, [selected]);
    const handleOnFocus = () => {
        if (inputValue !== value?.name) {
            setOpen(true);
        }
    };
    const handleSelectOption = (0, react_1.useCallback)((selectedOption) => {
        setInputValue(selectedOption.name);
        setSelected(selectedOption);
        onSelect?.(selectedOption);
        // This is a hack to prevent the input from being focused after the user selects an option
        // We can call this hack: "The next tick"
        setTimeout(() => {
            inputRef?.current?.blur();
        }, 0);
    }, [onSelect]);
    return (<cmdk_1.Command className="w-full">
      <div className="flex items-center w-full relative">
        {showIcon && (<icons_1.Icons.Search className="w-[18px] h-[18px] absolute left-4 pointer-events-none"/>)}

        <command_1.CommandInput ref={inputRef} value={inputValue} onValueChange={handleOnValueChange} onBlur={handleBlur} onFocus={handleOnFocus} placeholder={placeholder} disabled={disabled} className={className} autoFocus={autoFocus}/>

        {isLoading && (<lucide_react_1.Loader2 className="w-[16px] h-[16px] absolute right-2 animate-spin text-dark-gray"/>)}

        {!isLoading && selected && onRemove && (<icons_1.Icons.Close className="w-[18px] h-[18px] absolute right-2" onClick={handleOnRemove}/>)}
      </div>

      <div className="relative w-full">
        <command_1.CommandList className="w-full outline-none animate-in fade-in-0 zoom-in-95" hidden={!isOpen}>
          {inputValue?.length > 0 && (<command_1.CommandGroup className={(0, utils_1.cn)("bg-background absolute z-10 w-full max-h-[250px] overflow-auto py-2 border px-2", classNameList)}>
              {options?.map(({ component: Component, ...option }) => {
                return (<command_1.CommandItem key={option.id} value={`${option.name}_${option.id}`} onMouseDown={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                    }} onSelect={() => handleSelectOption(option)} className="flex items-center gap-2 w-full px-2">
                    {Component ? <Component /> : option.name}
                  </command_1.CommandItem>);
            })}

              {onCreate &&
                !options?.find((o) => o.name.toLowerCase() === inputValue.toLowerCase()) && (<command_1.CommandItem key={inputValue} value={inputValue} onSelect={() => onCreate(inputValue)} onMouseDown={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                }}>
                    {CreateComponent ? (<CreateComponent value={inputValue}/>) : (`Create "${inputValue}"`)}
                  </command_1.CommandItem>)}
            </command_1.CommandGroup>)}
        </command_1.CommandList>
      </div>
    </cmdk_1.Command>);
};
exports.Combobox = Combobox;
