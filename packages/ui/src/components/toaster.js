"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toaster = Toaster;
const lucide_react_1 = require("lucide-react");
const icons_1 = require("./icons");
const progress_1 = require("./progress");
const toast_1 = require("./toast");
const use_toast_1 = require("./use-toast");
function Toaster() {
    const { toasts } = (0, use_toast_1.useToast)();
    return (<toast_1.ToastProvider>
      {toasts.map(({ id, title, description, progress = 0, action, footer, ...props }) => {
            return (<toast_1.Toast key={id} {...props} className="flex flex-col">
              <div className="flex w-full">
                <div className="space-y-2 w-full justify-center">
                  <div className="flex space-x-2 justify-between">
                    <div className="flex space-x-2 items-center">
                      {props?.variant && (<div className="w-[20px] h-[20px] flex items-center">
                          {props.variant === "ai" && (<icons_1.Icons.AI className="text-[#0064D9]"/>)}
                          {props?.variant === "success" && <icons_1.Icons.Check />}
                          {props?.variant === "error" && (<icons_1.Icons.Error className="text-[#FF3638]"/>)}
                          {props?.variant === "progress" && (<lucide_react_1.Loader2 className="h-4 w-4 animate-spin"/>)}
                          {props?.variant === "spinner" && (<lucide_react_1.Loader2 className="h-4 w-4 animate-spin"/>)}
                        </div>)}
                      <div>{title && <toast_1.ToastTitle>{title}</toast_1.ToastTitle>}</div>
                    </div>

                    <div>
                      {props?.variant === "progress" && (<span className="text-sm text-[#878787]">
                          {progress}%
                        </span>)}
                    </div>
                  </div>

                  {props.variant === "progress" && (<progress_1.Progress value={progress} className="w-full rounded-none h-[3px] bg-border"/>)}

                  {description && (<toast_1.ToastDescription>{description}</toast_1.ToastDescription>)}
                </div>
                {action}
                <toast_1.ToastClose />
              </div>

              <div className="w-full flex justify-end">{footer}</div>
            </toast_1.Toast>);
        })}
      <toast_1.ToastViewport />
    </toast_1.ToastProvider>);
}
