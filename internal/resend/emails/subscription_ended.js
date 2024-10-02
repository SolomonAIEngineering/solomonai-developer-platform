'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionEnded = SubscriptionEnded;
const react_1 = __importDefault(require("react"));
const button_1 = require("@react-email/button");
const container_1 = require("@react-email/container");
const head_1 = require("@react-email/head");
const heading_1 = require("@react-email/heading");
const hr_1 = require("@react-email/hr");
const html_1 = require("@react-email/html");
const section_1 = require("@react-email/section");
const tailwind_1 = require("@react-email/tailwind");
const text_1 = require("@react-email/text");
const tailwind_config_1 = __importDefault(require("../tailwind.config"));
function SubscriptionEnded({ username }) {
    return (<tailwind_1.Tailwind config={tailwind_config_1.default}>
      <html_1.Html className='font-sans text-zinc-800'>
        <head_1.Head />
        <section_1.Section className='bg-white'>
          <container_1.Container className='container mx-auto'>
            <heading_1.Heading className='text-semibold font-sans text-2xl'>
              Your Solomon AI subscription has ended.
            </heading_1.Heading>
            <text_1.Text>Hey {username},</text_1.Text>
            <text_1.Text>
              We're reaching out to let you know that your trial period has come
              to an end for Solomon AI Pro. We have downgraded the workspace to
              free, which means you lose access to the workspace, but we will
              retain all your team and key data.
            </text_1.Text>
            <text_1.Text>
              If you want to continue with Solomon AI Pro, click the button
              below, and you can add your credit card.
            </text_1.Text>

            <container_1.Container className='my-8 flex items-center justify-center'>
              <button_1.Button href='https://app-business.solomon-ai.app/app/settings/billing' className='rounded bg-black px-4 py-2 text-white'>
                Upgrade Now
              </button_1.Button>
            </container_1.Container>

            <hr_1.Hr />
            <text_1.Text>
              If you have any feedback, please reply to this email. We would
              love to hear all about it.
            </text_1.Text>

            <text_1.Text>
              Cheers,
              <br />
              Andreas
            </text_1.Text>
          </container_1.Container>
        </section_1.Section>
      </html_1.Html>
    </tailwind_1.Tailwind>);
}
SubscriptionEnded.PreviewProps = {
    username: 'Mike Wazowski',
};
exports.default = SubscriptionEnded;
