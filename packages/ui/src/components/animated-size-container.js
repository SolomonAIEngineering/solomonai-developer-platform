"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimatedSizeContainer = void 0;
const react_1 = require("react");
const framer_motion_1 = require("framer-motion");
const hooks_1 = require("../hooks");
const utils_1 = require("../utils");
/**
 * A container with animated width and height (each optional) based on children dimensions
 */
const AnimatedSizeContainer = (0, react_1.forwardRef)(({ width = false, height = false, className, transition, children, ...rest }, forwardedRef) => {
    const containerRef = (0, react_1.useRef)(null);
    const resizeObserverEntry = (0, hooks_1.useResizeObserver)(containerRef);
    return (<framer_motion_1.motion.div ref={forwardedRef} className={(0, utils_1.cn)("overflow-hidden", className)} animate={{
            width: width
                ? resizeObserverEntry?.contentRect?.width ?? "auto"
                : "auto",
            height: height
                ? resizeObserverEntry?.contentRect?.height ?? "auto"
                : "auto",
        }} transition={transition ?? { type: "spring", duration: 0.3 }} {...rest}>
        <div ref={containerRef} className={(0, utils_1.cn)(height && "h-max", width && "w-max")}>
          {children}
        </div>
      </framer_motion_1.motion.div>);
});
exports.AnimatedSizeContainer = AnimatedSizeContainer;
AnimatedSizeContainer.displayName = "AnimatedSizeContainer";
