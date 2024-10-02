"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
const cn_1 = require("../utils/cn");
const bars = Array(12).fill(0);
const Spinner = ({ size = 16, className, }) => {
    return (<div className={(0, cn_1.cn)("loading-parent", className)}>
      <div className="loading-wrapper" data-visible 
    // @ts-ignore
    style={{ "--spinner-size": `${size}px` }}>
        <div className="spinner">
          {bars.map((_, i) => (<div className="loading-bar" key={`spinner-bar-${i.toString()}`}/>))}
        </div>
      </div>
    </div>);
};
exports.Spinner = Spinner;
