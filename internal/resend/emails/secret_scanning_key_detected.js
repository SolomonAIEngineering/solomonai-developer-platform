'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretScanningKeyDetected = SecretScanningKeyDetected;
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
function SecretScanningKeyDetected({ date, source, url }) {
    return (<tailwind_1.Tailwind config={tailwind_config_1.default}>
      <html_1.Html className='font-sans text-zinc-800'>
        <head_1.Head />
        <section_1.Section className='bg-white'>
          <container_1.Container className='container mx-auto'>
            <heading_1.Heading className='text-semibold font-sans text-2xl'>
              Alert! One of your keys was found to be leaked.
            </heading_1.Heading>
            <text_1.Text>Hello</text_1.Text>
            <text_1.Text>
              Github has found one of your keys has been leaked. Details are as
              follows:
            </text_1.Text>
            <text_1.Text>- Source: {source} </text_1.Text>
            <text_1.Text>- Date: {date} </text_1.Text>
            <text_1.Text>- URL: {url} </text_1.Text>
            <container_1.Container className='my-8 flex items-center justify-center'>
              <button_1.Button href={url} className='rounded bg-black px-4 py-2 text-white'>
                Go to source
              </button_1.Button>
            </container_1.Container>
            <hr_1.Hr />
            <text_1.Text>
              You can disable the Root Key in your dashboard by following our
              docs listed here:{' '}
              <link_1.Link href='https://app-business.solomon-ai.app/docs/security/root-keys'>
                here.
              </link_1.Link>{' '}
              If you have any problems or questions, please reach out to
              <link_1.Link href='mailto:support@inbox.solomon-ai.app'>
                support@inbox.solomon-ai.app
              </link_1.Link>{' '}
              or just reply to this email.
            </text_1.Text>
            <text_1.Text>
              Cheers,
              <br />
              James
            </text_1.Text>
          </container_1.Container>
        </section_1.Section>
      </html_1.Html>
    </tailwind_1.Tailwind>);
}
SecretScanningKeyDetected.PreviewProps = {
    date: '7/12/2024',
    source: 'commit',
    url: 'https://app-business.solomon-ai.app',
};
exports.default = SecretScanningKeyDetected;
