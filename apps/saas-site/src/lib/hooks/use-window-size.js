"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = useWindowSize;
const react_1 = require("react");
function useWindowSize() {
    const [windowSize, setWindowSize] = (0, react_1.useState)({
        width: undefined,
        height: undefined,
    });
    (0, react_1.useEffect)(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return {
        windowSize,
        isMobile: typeof windowSize?.width === "number" && windowSize?.width < 768,
        isDesktop: typeof windowSize?.width === "number" && windowSize?.width >= 768,
    };
}
