"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pattern = exports.Default = void 0;
const input_otp_1 = require("input-otp");
const _1 = require(".");
const meta = {
    component: _1.InputOTP,
    args: {
        maxLength: 6,
        render: ({ slots }) => (<>
        <_1.InputOTPGroup>
          {slots.slice(0, 3).map((slot, index) => (<_1.InputOTPSlot key={index} {...slot}/>))}
        </_1.InputOTPGroup>
        <_1.InputOTPSeparator />
        <_1.InputOTPGroup>
          {slots.slice(3).map((slot, index) => (<_1.InputOTPSlot key={index + 3} {...slot}/>))}
        </_1.InputOTPGroup>
      </>),
    },
};
exports.default = meta;
exports.Default = {};
exports.Pattern = {
    args: {
        pattern: input_otp_1.REGEXP_ONLY_DIGITS_AND_CHARS,
    },
};
