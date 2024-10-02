'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentIssue = PaymentIssue;
const react_1 = __importDefault(require("react"));
const button_1 = require("@react-email/button");
const container_1 = require("@react-email/container");
const head_1 = require("@react-email/head");
const heading_1 = require("@react-email/heading");
const hr_1 = require("@react-email/hr");
const html_1 = require("@react-email/html");
const link_1 = require("@react-email/link");
const section_1 = require("@react-email/section");
const tailwind_1 = require("@react-email/tailwind");
const text_1 = require("@react-email/text");
const tailwind_config_1 = __importDefault(require("../tailwind.config"));
function PaymentIssue({ username, date }) {
    return (<tailwind_1.Tailwind config={tailwind_config_1.default}>
      <html_1.Html className='font-sans text-zinc-800'>
        <head_1.Head />
        <section_1.Section className='bg-white'>
          <container_1.Container className='container mx-auto'>
            <heading_1.Heading className='text-semibold font-sans text-2xl'>
              There was an issue with your payment.
            </heading_1.Heading>
            <text_1.Text>Hey {username},</text_1.Text>
            <text_1.Text>
              We had trouble processing your payment on {date}. Please update
              your payment information below to prevent your account from being
              downgraded.
            </text_1.Text>

            <container_1.Container className='my-8 flex items-center justify-center'>
              <button_1.Button href='https://app-business.solomon-ai.app/app/settings/billing/stripe' className='rounded bg-black px-4 py-2 text-white'>
                Update payment information
              </button_1.Button>
            </container_1.Container>

            <hr_1.Hr />
            <text_1.Text>
              Need help? Please reach out to{' '}
              <link_1.Link href='mailto:support@inbox.solomon-ai.app'>
                support@inbox.solomon-ai.app
              </link_1.Link>{' '}
              or just reply to this email.
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
PaymentIssue.PreviewProps = {
    username: 'Mr. Pilkington',
    date: '2024 03 08',
};
exports.default = PaymentIssue;
