'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.WelcomeEmail = void 0
const components_1 = require('@react-email/components')
const footer_1 = require('../components/footer')
const get_started_1 = require('../components/get-started')
const logo_1 = require('../components/logo')
const baseUrl =
  process.env.VERCEL_ENV === 'production'
    ? 'https://solomon-ai.app/email'
    : 'http://localhost:3000/email'
const WelcomeEmail = ({ fullName = 'Viktor Hofte' }) => {
  const firstName = fullName.split(' ').at(0)
  const text = `Hi ${firstName}, Welcome to Solomon AI! I'm Yoan, one of the founders. It's really important to us that you have a great experience ramping up.`
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
              Welcome to Solomon AI
            </components_1.Heading>

            <br />

            <span className='font-medium'>Hi {firstName},</span>
            <components_1.Text className='text-[#121212]'>
              Welcome to Solomon AI! I'm Yoan, one of the founders.
              <br />
              <br />
              We've been working on Solomon AI for the past months, and during
              this time, we've implemented the basic functionality to get
              started. However, with your feedback, we can make the right
              decisions to help run your business smarter.
              <br />
              <br />
              During our beta phase, you may encounter some bugs, but we
              genuinely want all your feedback.
              <br />
              <br />
              Should you have any questions, please don't hesitate to reply
              directly to this email or to{' '}
              <components_1.Link
                href='https://cal.com/solomonai/15min'
                className='text-[#121212] underline'
              >
                schedule a call with me
              </components_1.Link>
              .
            </components_1.Text>

            <br />

            <components_1.Img
              src={`${baseUrl}/founders.jpeg`}
              alt='Founders'
              className='mx-auto my-0 block w-full'
            />

            <components_1.Text className='text-[#707070]'>
              Best regards, founders
            </components_1.Text>

            <br />
            <br />

            <get_started_1.GetStarted />

            <br />

            <footer_1.Footer baseUrl={baseUrl} />
          </components_1.Container>
        </components_1.Body>
      </components_1.Tailwind>
    </components_1.Html>
  )
}
exports.WelcomeEmail = WelcomeEmail
exports.default = exports.WelcomeEmail
