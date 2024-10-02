"use client";

import React from "react";

import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Heading } from "@react-email/heading";
import { Hr } from "@react-email/hr";
import { Html } from "@react-email/html";
import { Link } from "@react-email/link";
import { Section } from "@react-email/section";
import { Tailwind } from "@react-email/tailwind";
import { Text } from "@react-email/text";

import tailwindConfig from "@v1/ui/tailwind.config.ts";

export type Props = {
  username: string;
  date: string;
};

export function WelcomeEmail() {
  return (
    <Tailwind config={tailwindConfig}>
      <Html className="font-sans text-zinc-800">
        <Head />
        <Section className="bg-white">
          <Container className="container mx-auto">
            <Heading className="font-sans text-2xl text-semibold">
              Welcome to Solomon AI!
            </Heading>
            <Text>Hi there!</Text>
            <Text>
              My name is James. I am one of the co-founders of Solomon AI. We
              believe that Solomon AI's API management platform makes it easy to
              secure, manage and scale your API.
            </Text>
            <Section>
              <Text className="font-semibold">
                We know integrating a new system is overwhelming, so here are
                some resources to get you started:{" "}
              </Text>
              <Text>
                <li>
                  {" "}
                  <Link href="https://app-business.solomon-ai.app/api-onboard">
                    Solomon AI Public API Protection Quickstart Guide
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="https://app-business.solomon-ai.app/ratelimit">
                    Ratelimiting Quickstart Guide
                  </Link>
                </li>
                <li>
                  <Link href="https://app-business.solomon-ai.app/docs/security">
                    {" "}
                    Why is Solomon AI secure?{" "}
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="https://app-business.solomon-ai.app/discord">
                    Solomon AI Community Discord{" "}
                  </Link>
                </li>
              </Text>
            </Section>
            <Hr />
            <Text>Also, just curious - how did you hear about Solomon AI?</Text>
            <Text>
              Cheers,
              <br />
              James
            </Text>
            <Text className="text-xs">
              P.S. - if you have any questions or feedback, reply to this email.
              I read and reply to every single one.
            </Text>
          </Container>
        </Section>
      </Html>
    </Tailwind>
  );
}

export default WelcomeEmail;
