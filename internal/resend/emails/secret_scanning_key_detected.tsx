'use client'

import React from 'react'

import { Button } from '@react-email/button'
import { Container } from '@react-email/container'
import { Head } from '@react-email/head'
import { Heading } from '@react-email/heading'
import { Hr } from '@react-email/hr'
import { Html } from '@react-email/html'
import { Link } from '@react-email/link'
import { Section } from '@react-email/section'
import { Tailwind } from '@react-email/tailwind'
import { Text } from '@react-email/text'

import tailwindConfig from '@v1/ui/tailwind.config.ts'

export type Props = {
  date: string
  source: string
  url: string
}

export function SecretScanningKeyDetected({ date, source, url }: Props) {
  return (
    <Tailwind config={tailwindConfig}>
      <Html className='font-sans text-zinc-800'>
        <Head />
        <Section className='bg-white'>
          <Container className='container mx-auto'>
            <Heading className='font-sans text-2xl text-semibold'>
              Alert! One of your keys was found to be leaked.
            </Heading>
            <Text>Hello</Text>
            <Text>
              Github has found one of your keys has been leaked. Details are as
              follows:
            </Text>
            <Text>- Source: {source} </Text>
            <Text>- Date: {date} </Text>
            <Text>- URL: {url} </Text>
            <Container className='flex items-center justify-center my-8'>
              <Button
                href={url}
                className='px-4 py-2 text-white bg-black rounded'
              >
                Go to source
              </Button>
            </Container>
            <Hr />
            <Text>
              You can disable the Root Key in your dashboard by following our
              docs listed here:{' '}
              <Link href='https://app-business.solomon-ai.app/docs/security/root-keys'>
                here.
              </Link>{' '}
              If you have any problems or questions, please reach out to
              <Link href='mailto:support@inbox.solomon-ai.app'>
                support@inbox.solomon-ai.app
              </Link>{' '}
              or just reply to this email.
            </Text>
            <Text>
              Cheers,
              <br />
              James
            </Text>
          </Container>
        </Section>
      </Html>
    </Tailwind>
  )
}
SecretScanningKeyDetected.PreviewProps = {
  date: '7/12/2024',
  source: 'commit',
  url: 'https://app-business.solomon-ai.app',
} satisfies Props

export default SecretScanningKeyDetected
