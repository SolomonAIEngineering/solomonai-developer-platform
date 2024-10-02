"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlurFade;
const framer_motion_1 = require("framer-motion");
const react_1 = require("react");
function BlurFade({ children, className, variant, duration = 0.4, delay = 0, yOffset = 6, inView = false, inViewMargin = "-50px", blur = "6px", }) {
    const ref = (0, react_1.useRef)(null);
    const inViewResult = (0, framer_motion_1.useInView)(ref, { once: true, margin: inViewMargin });
    const isInView = !inView || inViewResult;
    const defaultVariants = {
        hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
        visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
    };
    const combinedVariants = variant || defaultVariants;
    return (<framer_motion_1.AnimatePresence>
      <framer_motion_1.motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} exit="hidden" variants={combinedVariants} transition={{
            delay: 0.04 + delay,
            duration,
            ease: "easeOut",
        }} className={className}>
        {children}
      </framer_motion_1.motion.div>
    </framer_motion_1.AnimatePresence>);
}
