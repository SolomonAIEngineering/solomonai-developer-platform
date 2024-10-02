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
exports.useWrapperState = exports.ChartWrapper = void 0;
const react_1 = __importStar(require("react"));
const react_icons_1 = require("@radix-ui/react-icons");
const button_1 = require("../../button");
/**
 * A wrapper component with a toggleable button at the bottom left.
 * The button reveals or hides the wrapped content.
 *
 * @example
 * <ChartWrapper
 *   buttonText="Open"
 *   openButtonText="Close"
 *   onOpen={() => console.log('Opened')}
 * >
 *   <div>Content to be revealed</div>
 * </ChartWrapper>
 */
const ChartWrapper = ({ children, buttonText, openButtonText, className = "", initiallyOpen = false, onOpen, onClose, animationDuration = 300, }) => {
    // State to track whether the content is open or closed
    const [isOpen, setIsOpen] = (0, react_1.useState)(initiallyOpen);
    // Memoized toggle function to prevent unnecessary re-renders
    const toggleOpen = (0, react_1.useCallback)(() => setIsOpen((prev) => !prev), []);
    // Effect to trigger onOpen or onClose callbacks
    (0, react_1.useEffect)(() => {
        if (isOpen) {
            onOpen?.();
        }
        else {
            onClose?.();
        }
    }, [isOpen, onOpen, onClose]);
    // Determine the current button text
    const buttonIcon = isOpen ? (<react_icons_1.CaretDownIcon className="h-4 w-4"/>) : (<react_icons_1.CaretRightIcon className="h-4 w-4"/>);
    return (<div className={`flex flex-col ${className}`}>
      {/* Toggle button */}
      <button_1.Button onClick={toggleOpen} className="self-start rounded-md bg-background text-foreground transition-all hover:bg-background focus:outline-none focus:ring-2 focus:ring-background focus:ring-opacity-50" variant="outline" size="sm" style={{ transitionDuration: `${animationDuration / 2}ms` }} aria-expanded={isOpen}>
        {buttonIcon}
        <span className="ml-2">{isOpen ? openButtonText : buttonText}</span>
      </button_1.Button>
      {/* Wrapper for the revealing content */}
      <div className={`mt-2 overflow-hidden transition-all ease-in-out ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`} style={{ transitionDuration: `${animationDuration}ms` }}>
        {children}
      </div>
    </div>);
};
exports.ChartWrapper = ChartWrapper;
/**
 * Custom hook to use the ChartWrapper state in child components.
 * @param initialState - The initial open state
 * @returns An object containing the current state and a toggle function
 *
 * @example
 * const { isOpen, toggleOpen } = useWrapperState(false);
 */
const useWrapperState = (initialState = false) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(initialState);
    const toggleOpen = (0, react_1.useCallback)(() => setIsOpen((prev) => !prev), []);
    return { isOpen, toggleOpen };
};
exports.useWrapperState = useWrapperState;
exports.default = exports.ChartWrapper;
