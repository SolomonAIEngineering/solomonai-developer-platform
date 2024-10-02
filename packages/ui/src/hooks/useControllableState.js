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
exports.useControllableState = useControllableState;
const React = __importStar(require("react"));
const useCallbackRef_1 = require("./useCallbackRef");
function useControllableState({ prop, defaultProp, onChange = () => { }, }) {
    const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({
        defaultProp,
        onChange,
    });
    const isControlled = prop !== undefined;
    const value = isControlled ? prop : uncontrolledProp;
    const handleChange = (0, useCallbackRef_1.useCallbackRef)(onChange);
    const setValue = React.useCallback((nextValue) => {
        if (isControlled) {
            const setter = nextValue;
            const value = typeof nextValue === "function" ? setter(prop) : nextValue;
            if (value !== prop)
                handleChange(value);
        }
        else {
            setUncontrolledProp(nextValue);
        }
    }, [isControlled, prop, setUncontrolledProp, handleChange]);
    return [value, setValue];
}
function useUncontrolledState({ defaultProp, onChange, }) {
    const uncontrolledState = React.useState(defaultProp);
    const [value] = uncontrolledState;
    const prevValueRef = React.useRef(value);
    const handleChange = (0, useCallbackRef_1.useCallbackRef)(onChange);
    React.useEffect(() => {
        if (prevValueRef.current !== value) {
            handleChange(value);
            prevValueRef.current = value;
        }
    }, [value, prevValueRef, handleChange]);
    return uncontrolledState;
}
