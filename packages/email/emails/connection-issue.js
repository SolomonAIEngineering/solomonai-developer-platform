'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.ConnectionIssueEmail = void 0
const components_1 = require('@react-email/components')
const footer_1 = require('../components/footer')
const logo_1 = require('../components/logo')
const baseUrl =
  process.env.VERCEL_ENV === 'production'
    ? 'https://solomon-ai.app/email'
    : 'http://localhost:3000/email'
const ConnectionIssueEmail = ({
  fullName = 'Solomon AI Customer',
  bankName = 'Revolut',
  teamName = 'Solomon AI',
}) => {
  const firstName = fullName.split(' ').at(0)
  const text = `Hi ${firstName}, We wanted to inform you that our connection to your bank ${bankName} for your team ${teamName} is currently disconnected.`
  return (
    <components_1.Html>
      <components_1.Tailwind>
        <head>
          <components_1.Font
            fontFamily='Geist'
            fallbackFontFamily='Helvetica'
            webFont={{
              url: 'https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.1/files/geist-sans-latin-400-normal.woff2',
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle='normal'
          />

          <components_1.Font
            fontFamily='Geist'
            fallbackFontFamily='Helvetica'
            webFont={{
              url: 'https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.1/files/geist-sans-latin-500-normal.woff2',
              format: 'woff2',
            }}
            fontWeight={500}
            fontStyle='normal'
          />
        </head>
        <components_1.Preview>{text}</components_1.Preview>

        <components_1.Body className='mx-auto my-auto bg-[#fff] font-sans'>
          <components_1.Container
            className='mx-auto my-[40px] max-w-[600px] border-transparent p-[20px] md:border-[#E8E7E1]'
            style={{ borderStyle: 'solid', borderWidth: 1 }}
          >
            <logo_1.Logo baseUrl={baseUrl} />
            <components_1.Heading className='mx-0 my-[30px] p-0 text-center text-[21px] font-normal text-[#121212]'>
              Bank Connection Issue
            </components_1.Heading>

            <br />

            <span className='font-medium'>Hi {firstName},</span>
            <components_1.Text className='text-[#121212]'>
              We hope you're having a great day!
              <br />
              <br />
              We wanted to let you know that your bank{' '}
              <strong>{bankName}</strong> for team <strong>{teamName}</strong>{' '}
              is currently disconnected. To keep Solomon AI running smoothly,
              we'll need you to reconnect your bank.
              <br />
              <br />
              The good news? It only takes 60 seconds to get everything back on
              track!
            </components_1.Text>

            <components_1.Section className='mb-[50px] mt-[50px] text-center'>
              <components_1.Button
                className='rounded-md border border-solid border-[#121212] bg-transparent px-6 py-3 text-center text-[14px] font-medium text-[#121212] text-primary no-underline'
                href='https://solomon-ai.app/'
              >
                Reconnect
              </components_1.Button>
            </components_1.Section>

            <br />

            <footer_1.Footer baseUrl={baseUrl} />
          </components_1.Container>
        </components_1.Body>
      </components_1.Tailwind>
    </components_1.Html>
  )
}
exports.ConnectionIssueEmail = ConnectionIssueEmail
exports.default = exports.ConnectionIssueEmail
