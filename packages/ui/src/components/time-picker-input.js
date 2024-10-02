"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimePickerInput = void 0;
const react_1 = __importDefault(require("react"));
const cn_1 = require("../utils/cn");
const input_1 = require("./input");
const time_picker_utils_1 = require("./time-picker-utils");
const TimePickerInput = react_1.default.forwardRef(({ className, type = "tel", value, id, name, date = new Date(new Date().setHours(0, 0, 0, 0)), setDate, onChange, onKeyDown, picker, onLeftFocus, onRightFocus, ...props }, ref) => {
    const [flag, setFlag] = react_1.default.useState(false);
    /**
     * allow the user to enter the second digit within 2 seconds
     * otherwise start again with entering first digit
     */
    react_1.default.useEffect(() => {
        if (flag) {
            const timer = setTimeout(() => {
                setFlag(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [flag]);
    const calculatedValue = react_1.default.useMemo(() => (0, time_picker_utils_1.getDateByType)(date, picker), [date, picker]);
    const handleKeyDown = (e) => {
        if (e.key === "Tab")
            return;
        e.preventDefault();
        if (e.key === "ArrowRight")
            onRightFocus?.();
        if (e.key === "ArrowLeft")
            onLeftFocus?.();
        if (["ArrowUp", "ArrowDown"].includes(e.key)) {
            const step = e.key === "ArrowUp" ? 1 : -1;
            const newValue = (0, time_picker_utils_1.getArrowByType)(calculatedValue, step, picker);
            if (flag)
                setFlag(false);
            const tempDate = new Date(date);
            setDate((0, time_picker_utils_1.setDateByType)(tempDate, newValue, picker));
        }
        if (e.key >= "0" && e.key <= "9") {
            const newValue = !flag
                ? "0" + e.key
                : calculatedValue.slice(1, 2) + e.key;
            if (flag)
                onRightFocus?.();
            setFlag((prev) => !prev);
            const tempDate = new Date(date);
            setDate((0, time_picker_utils_1.setDateByType)(tempDate, newValue, picker));
        }
    };
    return (<input_1.Input ref={ref} id={id || picker} name={name || picker} className={(0, cn_1.cn)("w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none", className)} value={value || calculatedValue} onChange={(e) => {
            e.preventDefault();
            onChange?.(e);
        }} type={type} inputMode="decimal" onKeyDown={(e) => {
            onKeyDown?.(e);
            handleKeyDown(e);
        }} {...props}/>);
});
exports.TimePickerInput = TimePickerInput;
TimePickerInput.displayName = "TimePickerInput";
