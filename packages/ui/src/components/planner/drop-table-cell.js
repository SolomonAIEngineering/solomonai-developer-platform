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
const React = __importStar(require("react"));
const react_1 = require("react");
const adapter_1 = require("@atlaskit/pragmatic-drag-and-drop/element/adapter");
const cn_1 = require("../../utils/cn");
const table_1 = require("../table");
const DropTableCell = ({ children, resourceId, columnIndex, ...props }) => {
    const ref = (0, react_1.useRef)(null);
    const [isOver, setIsOver] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const element = ref.current;
        return (0, adapter_1.dropTargetForElements)({
            element,
            getData: () => {
                return { resourceId: resourceId, columnIndex: columnIndex };
            },
            onDragEnter: () => setIsOver(true),
            onDragLeave: () => setIsOver(false),
            onDrop: () => {
                setIsOver(false);
            },
        });
    }, []);
    const style = {
        backgroundColor: isOver ? "#f0f0f0" : "#fff",
        border: "1px solid #ddd",
    };
    return (<table_1.TableCell className={(0, cn_1.cn)("border bg-background", isOver ? "bg-primary-foreground" : "bg-background")} ref={ref} {...props}>
      <div className="grid grid-flow-row grid-cols-2 gap-2">{children}</div>
    </table_1.TableCell>);
};
exports.default = DropTableCell;
