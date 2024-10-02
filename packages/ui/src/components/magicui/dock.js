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
exports.dockVariants = exports.DockIcon = exports.Dock = void 0;
const react_1 = __importStar(require("react"));
const class_variance_authority_1 = require("class-variance-authority");
const framer_motion_1 = require("framer-motion");
const utils_1 = require("@/lib/utils");
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;
const dockVariants = (0, class_variance_authority_1.cva)("mx-auto w-max mt-8 h-[58px] p-2 flex gap-2 rounded-2xl border supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md");
exports.dockVariants = dockVariants;
const Dock = react_1.default.forwardRef(({ className, children, magnification = DEFAULT_MAGNIFICATION, distance = DEFAULT_DISTANCE, direction = "bottom", ...props }, ref) => {
    const mouseX = (0, framer_motion_1.useMotionValue)(Infinity);
    const renderChildren = () => {
        return react_1.default.Children.map(children, (child) => {
            return react_1.default.cloneElement(child, {
                mouseX: mouseX,
                magnification: magnification,
                distance: distance,
            });
        });
    };
    return (<framer_motion_1.motion.div ref={ref} onMouseMove={(e) => mouseX.set(e.pageX)} onMouseLeave={() => mouseX.set(Infinity)} {...props} className={(0, utils_1.cn)(dockVariants({ className }), {
            "items-start": direction === "top",
            "items-center": direction === "middle",
            "items-end": direction === "bottom",
        })}>
        {renderChildren()}
      </framer_motion_1.motion.div>);
});
exports.Dock = Dock;
Dock.displayName = "Dock";
const DockIcon = ({ size, magnification = DEFAULT_MAGNIFICATION, distance = DEFAULT_DISTANCE, mouseX, className, children, ...props }) => {
    const ref = (0, react_1.useRef)(null);
    const distanceCalc = (0, framer_motion_1.useTransform)(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });
    let widthSync = (0, framer_motion_1.useTransform)(distanceCalc, [-distance, 0, distance], [40, magnification, 40]);
    let width = (0, framer_motion_1.useSpring)(widthSync, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    return (<framer_motion_1.motion.div ref={ref} style={{ width }} className={(0, utils_1.cn)("flex aspect-square cursor-pointer items-center justify-center rounded-full", className)} {...props}>
      {children}
    </framer_motion_1.motion.div>);
};
exports.DockIcon = DockIcon;
DockIcon.displayName = "DockIcon";
