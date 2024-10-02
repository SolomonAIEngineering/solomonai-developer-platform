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
const react_1 = __importStar(require("react"));
const FlickeringGrid = ({ squareSize = 4, gridGap = 6, flickerChance = 0.3, color = "rgb(0, 0, 0)", width, height, className, maxOpacity = 0.3, }) => {
    const canvasRef = (0, react_1.useRef)(null);
    const [isInView, setIsInView] = (0, react_1.useState)(false);
    const memoizedColor = (0, react_1.useMemo)(() => {
        const toRGBA = (color) => {
            if (typeof window === "undefined") {
                return `rgba(0, 0, 0,`;
            }
            const canvas = document.createElement("canvas");
            canvas.width = canvas.height = 1;
            const ctx = canvas.getContext("2d");
            if (!ctx)
                return "rgba(255, 0, 0,";
            // Handle HSL colors
            if (color.startsWith("hsl")) {
                ctx.fillStyle = color;
                ctx.fillRect(0, 0, 1, 1);
                const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
                return `rgba(${r}, ${g}, ${b},`;
            }
            // Handle other color formats (rgb, hex, etc.)
            ctx.fillStyle = color;
            ctx.fillRect(0, 0, 1, 1);
            const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
            return `rgba(${r}, ${g}, ${b},`;
        };
        return toRGBA(color);
    }, [color]);
    const setupCanvas = (0, react_1.useCallback)((canvas) => {
        const canvasWidth = width || canvas.clientWidth;
        const canvasHeight = height || canvas.clientHeight;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = canvasWidth * dpr;
        canvas.height = canvasHeight * dpr;
        canvas.style.width = `${canvasWidth}px`;
        canvas.style.height = `${canvasHeight}px`;
        const cols = Math.floor(canvasWidth / (squareSize + gridGap));
        const rows = Math.floor(canvasHeight / (squareSize + gridGap));
        const squares = new Float32Array(cols * rows);
        for (let i = 0; i < squares.length; i++) {
            squares[i] = Math.random() * maxOpacity;
        }
        return {
            width: canvasWidth,
            height: canvasHeight,
            cols,
            rows,
            squares,
            dpr,
        };
    }, [squareSize, gridGap, width, height, maxOpacity]);
    const updateSquares = (0, react_1.useCallback)((squares, deltaTime) => {
        for (let i = 0; i < squares.length; i++) {
            if (Math.random() < flickerChance * deltaTime) {
                squares[i] = Math.random() * maxOpacity;
            }
        }
    }, [flickerChance, maxOpacity]);
    const drawGrid = (0, react_1.useCallback)((ctx, width, height, cols, rows, squares, dpr) => {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "transparent";
        ctx.fillRect(0, 0, width, height);
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const opacity = squares[i * rows + j];
                ctx.fillStyle = `${memoizedColor}${opacity})`;
                ctx.fillRect(i * (squareSize + gridGap) * dpr, j * (squareSize + gridGap) * dpr, squareSize * dpr, squareSize * dpr);
            }
        }
    }, [memoizedColor, squareSize, gridGap]);
    (0, react_1.useEffect)(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        let animationFrameId;
        let { width, height, cols, rows, squares, dpr } = setupCanvas(canvas);
        let lastTime = 0;
        const animate = (time) => {
            if (!isInView)
                return;
            const deltaTime = (time - lastTime) / 1000;
            lastTime = time;
            updateSquares(squares, deltaTime);
            drawGrid(ctx, width * dpr, height * dpr, cols, rows, squares, dpr);
            animationFrameId = requestAnimationFrame(animate);
        };
        const handleResize = () => {
            ({ width, height, cols, rows, squares, dpr } = setupCanvas(canvas));
        };
        const observer = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting);
        }, { threshold: 0 });
        observer.observe(canvas);
        window.addEventListener("resize", handleResize);
        if (isInView) {
            animationFrameId = requestAnimationFrame(animate);
        }
        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
        };
    }, [setupCanvas, updateSquares, drawGrid, width, height, isInView]);
    return (<canvas ref={canvasRef} className={`size-full pointer-events-none ${className}`} style={{
            width: width || "100%",
            height: height || "100%",
        }} width={width} height={height}/>);
};
exports.default = FlickeringGrid;
