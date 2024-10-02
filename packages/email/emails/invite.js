'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.InviteEmail = void 0
const components_1 = require('@react-email/components')
const footer_1 = require('../components/footer')
const logo_1 = require('../components/logo')
const locales_1 = require('../locales')
const baseUrl =
  process.env.VERCEL_ENV === 'production'
    ? 'https://solomon-ai.app/email'
    : 'http://localhost:3000/email'
const baseAppUrl =
  process.env.VERCEL_ENV === 'production'
    ? 'https://business.solomon-ai.app'
    : 'http://localhost:3001'
const InviteEmail = ({
  invitedByEmail = 'bukinoshita@example.com',
  invitedByName = 'Yoan Yomba',
  email = 'yoanyomba@solomon-ai.co',
  teamName = 'Acme Co',
  inviteCode = 'jnwe9203frnwefl239jweflasn1230oqef',
  ip = '204.13.186.218',
  location = 'São Paulo, Brazil',
  locale = 'en',
}) => {
  const { t } = (0, locales_1.getI18n)({ locale })
  const inviteLink = `${baseAppUrl}/teams/invite/${inviteCode}`
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
        <components_1.Preview>
          {t('invite.preview', { teamName })}
        </components_1.Preview>

        <components_1.Body className='mx-auto my-auto bg-[#fff] font-sans'>
          <components_1.Container
            className='mx-auto my-[40px] max-w-[600px] border-transparent p-[20px] md:border-[#E8E7E1]'
            style={{ borderStyle: 'solid', borderWidth: 1 }}
          >
            <logo_1.Logo baseUrl={baseUrl} />
            <components_1.Heading className='mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-[#121212]'>
              {t('invite.title1')} <strong>{teamName}</strong>{' '}
              {t('invite.title2')} <strong>Solomon AI</strong>
            </components_1.Heading>

            <components_1.Text className='text-[14px] leading-[24px] text-[#121212]'>
              {invitedByName} (
              <components_1.Link
                href={`mailto:${invitedByEmail}`}
                className='text-[#121212] no-underline'
              >
                {invitedByEmail}
              </components_1.Link>
              ) {t('invite.link1')} <strong>{teamName}</strong>{' '}
              {t('invite.link2')} <strong>Solomon AI</strong>.
            </components_1.Text>
            <components_1.Section className='mb-[42px] mt-[32px] text-center'>
              <components_1.Button
                className='rounded-md border border-solid border-[#121212] bg-transparent px-6 py-3 text-center text-[14px] font-medium text-[#121212] text-primary no-underline'
                href={inviteLink}
              >
                {t('invite.join')}
              </components_1.Button>
            </components_1.Section>

            <components_1.Text className='break-all text-[14px] leading-[24px] text-[#707070]'>
              {t('invite.link3')}:{' '}
              <components_1.Link
                href={inviteLink}
                className='text-[#707070] underline'
              >
                {inviteLink}
              </components_1.Link>
            </components_1.Text>

            <br />
            <components_1.Section>
              <components_1.Text className='text-[12px] leading-[24px] text-[#666666]'>
                {t('invite.footer1')}{' '}
                <span className='text-[#121212]'>{email}</span>.{' '}
                {t('invite.footer2')}{' '}
                <span className='text-[#121212]'>{ip}</span>{' '}
                {t('invite.footer3')}{' '}
                <span className='text-[#121212]'>{location}</span>.{' '}
                {t('invite.footer4')}
              </components_1.Text>
            </components_1.Section>

            <br />

            <footer_1.Footer baseUrl={baseUrl} />
          </components_1.Container>
        </components_1.Body>
      </components_1.Tailwind>
    </components_1.Html>
  )
}
exports.InviteEmail = InviteEmail
exports.default = exports.InviteEmail
