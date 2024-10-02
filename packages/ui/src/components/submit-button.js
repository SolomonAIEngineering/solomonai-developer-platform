"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitButton = SubmitButton;
const lucide_react_1 = require("lucide-react");
const utils_1 = require("../utils");
const button_1 = require("./button");
function SubmitButton({ children, isSubmitting, ...props }) {
    return (<button_1.Button disabled={isSubmitting} {...props} className={(0, utils_1.cn)(props.className, "relative")}>
      <span className={(0, utils_1.cn)({ "opacity-0": isSubmitting })}>{children}</span>

      {isSubmitting && (<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <lucide_react_1.Loader2 className="h-4 w-4 animate-spin"/>
        </span>)}
    </button_1.Button>);
}
