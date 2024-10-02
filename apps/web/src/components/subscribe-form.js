"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribeForm = SubscribeForm;
const subscribe_action_1 = require("@/actions/subscribe-action");
const button_1 = require("@v1/ui/button");
const icons_1 = require("@v1/ui/icons");
const input_1 = require("@v1/ui/input");
const react_1 = require("react");
const react_dom_1 = require("react-dom");
function SubmitButton() {
    const { pending } = (0, react_dom_1.useFormStatus)();
    return (<button_1.Button type="submit" className="ml-auto rounded-full">
      {pending ? <icons_1.Icons.Loader className="size-4"/> : "Subscribe"}
    </button_1.Button>);
}
function SubscribeForm({ group, placeholder, className }) {
    const [isSubmitted, setSubmitted] = (0, react_1.useState)(false);
    return (<div>
      <div>
        {isSubmitted ? (<div className="border border-[#2C2C2C] text-sm text-primary h-9 w-[290px] flex items-center py-0.5 px-2 justify-between">
            <p>Subscribed</p>

            <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Check</title>
              <path d="m14.546 4.724-8 8-3.667-3.667.94-.94 2.727 2.72 7.06-7.053.94.94Z" fill="currentColor"/>
            </svg>
          </div>) : (<form className="flex flex-col gap-4" action={async (formData) => {
                setSubmitted(true);
                await (0, subscribe_action_1.subscribeAction)(formData, group);
                setTimeout(() => {
                    setSubmitted(false);
                }, 5000);
            }}>
            <input_1.Input placeholder={placeholder} type="email" name="email" id="email" autoComplete="email" aria-label="Email address" required className={className}/>

            <SubmitButton />
          </form>)}
      </div>
    </div>);
}