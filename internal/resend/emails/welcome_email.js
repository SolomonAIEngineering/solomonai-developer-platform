'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomeEmail = WelcomeEmail;
const react_1 = __importDefault(require("react"));
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
function WelcomeEmail() {
    return (<tailwind_1.Tailwind config={tailwind_config_1.default}>
      <html_1.Html className='font-sans text-zinc-800'>
        <head_1.Head />
        <section_1.Section className='bg-white'>
          <container_1.Container className='container mx-auto'>
            <heading_1.Heading className='text-semibold font-sans text-2xl'>
              Welcome to Solomon AI!
            </heading_1.Heading>
            <text_1.Text>Hi there!</text_1.Text>
            <text_1.Text>
              My name is James. I am one of the co-founders of Solomon AI. We
              believe that Solomon AI's API management platform makes it easy to
              secure, manage and scale your API.
            </text_1.Text>
            <section_1.Section>
              <text_1.Text className='font-semibold'>
                We know integrating a new system is overwhelming, so here are
                some resources to get you started:{' '}
              </text_1.Text>
              <text_1.Text>
                <li>
                  {' '}
                  <link_1.Link href='https://app-business.solomon-ai.app/api-onboard'>
                    Solomon AI Public API Protection Quickstart Guide
                  </link_1.Link>
                </li>
                <li>
                  {' '}
                  <link_1.Link href='https://app-business.solomon-ai.app/ratelimit'>
                    Ratelimiting Quickstart Guide
                  </link_1.Link>
                </li>
                <li>
                  <link_1.Link href='https://app-business.solomon-ai.app/docs/security'>
                    {' '}
                    Why is Solomon AI secure?{' '}
                  </link_1.Link>
                </li>
                <li>
                  {' '}
                  <link_1.Link href='https://app-business.solomon-ai.app/discord'>
                    Solomon AI Community Discord{' '}
                  </link_1.Link>
                </li>
              </text_1.Text>
            </section_1.Section>
            <hr_1.Hr />
            <text_1.Text>Also, just curious - how did you hear about Solomon AI?</text_1.Text>
            <text_1.Text>
              Cheers,
              <br />
              James
            </text_1.Text>
            <text_1.Text className='text-xs'>
              P.S. - if you have any questions or feedback, reply to this email.
              I read and reply to every single one.
            </text_1.Text>
          </container_1.Container>
        </section_1.Section>
      </html_1.Html>
    </tailwind_1.Tailwind>);
}
exports.default = WelcomeEmail;
