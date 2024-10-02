'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.TransactionsEmail = void 0
const components_1 = require('@react-email/components')
const date_fns_1 = require('date-fns')
const cn_1 = require('@v1/ui/cn')
const footer_1 = require('../components/footer')
const logo_1 = require('../components/logo')
const locales_1 = require('../locales')
const defaultTransactions = [
  {
    id: '1',
    date: new Date().toISOString(),
    amount: -1000,
    currency: 'USD',
    name: 'Spotify',
    status: 'pending',
  },
  {
    id: '2',
    date: new Date().toISOString(),
    amount: 1000,
    currency: 'USD',
    name: 'H23504959',
    category: 'income',
    status: 'pending',
  },
  {
    id: '3',
    date: new Date().toISOString(),
    amount: -1000,
    currency: 'USD',
    name: 'Webflow',
    status: 'posted',
  },
  {
    id: '4',
    date: new Date().toISOString(),
    amount: -1000,
    currency: 'USD',
    name: 'Netflix',
    status: 'posted',
  },
]
const baseUrl =
  process.env.VERCEL_ENV === 'production'
    ? 'https://solomon-ai.app/email'
    : 'http://localhost:3000/email'
const baseAppUrl =
  process.env.VERCEL_ENV === 'production'
    ? 'https://business.solomon-ai.app'
    : 'http://localhost:3001'
const TransactionsEmail = ({
  fullName = 'Solomon AI Customer',
  transactions = defaultTransactions,
  locale = 'en',
}) => {
  const { t } = (0, locales_1.getI18n)({ locale })
  const firstName = fullName.split(' ').at(0)
  const previewText = t('transactions.preview', {
    firstName,
    numberOfTransactions: transactions.length,
  })
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
        <components_1.Preview>{previewText}</components_1.Preview>

        <components_1.Body className='mx-auto my-auto bg-[#fff] font-sans'>
          <components_1.Container
            className='mx-auto my-[40px] max-w-[600px] border-transparent p-[20px] md:border-[#E8E7E1]'
            style={{ borderStyle: 'solid', borderWidth: 1 }}
          >
            <logo_1.Logo baseUrl={baseUrl} />
            <components_1.Heading className='mx-0 my-[30px] p-0 text-center text-[21px] font-normal text-[#121212]'>
              {t('transactions.title1')}
              <span className='font-semibold'>
                {t('transactions.title2', {
                  numberOfTransactions: transactions.length,
                })}{' '}
              </span>
              {t('transactions.title3')} <br />
              {t('transactions.title4')}
            </components_1.Heading>
            <components_1.Text className='text-[14px] leading-[24px] text-[#121212]'>
              {t('transactions.description1', { firstName })},
              <br />
              <br />
              {t('transactions.description2')}{' '}
              <span className='font-semibold'>
                {t('transactions.description3', {
                  numberOfTransactions: transactions.length,
                })}{' '}
              </span>
              {t('transactions.description4')}
            </components_1.Text>

            <br />

            <table
              style={{ width: '100% !important', minWidth: '100%' }}
              className='w-full border-collapse'
            >
              <thead style={{ width: '100%' }}>
                <tr className='h-[45px] border-0 border-b-[1px] border-t-[1px] border-solid border-[#E8E7E1]'>
                  <th align='left'>
                    <components_1.Text className='m-0 p-0 text-[14px] font-semibold'>
                      {t('transactions.date')}
                    </components_1.Text>
                  </th>
                  <th align='left' style={{ width: '50%' }}>
                    <components_1.Text className='m-0 p-0 text-[14px] font-semibold'>
                      {t('transactions.description')}
                    </components_1.Text>
                  </th>
                  <th align='left'>
                    <components_1.Text className='m-0 p-0 text-[14px] font-semibold'>
                      {t('transactions.amount')}
                    </components_1.Text>
                  </th>
                </tr>
              </thead>

              <tbody style={{ width: '100%', minWidth: '100% !important' }}>
                {transactions?.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className='h-[45px] border-0 border-b-[1px] border-solid border-[#E8E7E1]'
                  >
                    <td align='left'>
                      <components_1.Text className='m-0 mt-1 p-0 pb-1 text-[14px]'>
                        {(0, date_fns_1.format)(
                          new Date(transaction.date),
                          'MMM d',
                        )}
                      </components_1.Text>
                    </td>
                    <td align='left' style={{ width: '50%' }}>
                      <components_1.Link
                        href={`${baseAppUrl}/transactions?id=${transaction.id}`}
                        className={(0, cn_1.cn)(
                          'text-[#121212]',
                          transaction?.category === 'income' &&
                            '!text-[#00C969]',
                        )}
                      >
                        <div className='flex items-center space-x-2'>
                          <components_1.Text className='m-0 mt-1 line-clamp-1 p-0 pb-1 text-[14px]'>
                            {transaction.name}
                          </components_1.Text>

                          {transaction.status === 'pending' && (
                            <div className='flex h-[22px] items-center space-x-1 rounded-md border px-2 py-1 text-xs text-[#878787]'>
                              <span>Pending</span>
                            </div>
                          )}
                        </div>
                      </components_1.Link>
                    </td>
                    <td align='left'>
                      <components_1.Text
                        className={(0, cn_1.cn)(
                          'm-0 mt-1 p-0 pb-1 text-[14px] text-[#121212]',
                          transaction?.category === 'income' &&
                            '!text-[#00C969]',
                        )}
                      >
                        {Intl.NumberFormat(locale, {
                          style: 'currency',
                          currency: transaction.currency,
                        }).format(transaction.amount)}
                      </components_1.Text>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <br />

            <components_1.Section className='mb-[32px] mt-[32px] text-center'>
              <components_1.Button
                className='rounded-md border border-solid border-[#121212] bg-transparent px-6 py-3 text-center text-[14px] font-medium text-[#121212] text-primary no-underline'
                href={`${baseAppUrl}/transactions?filter=${JSON.stringify({
                  date: {
                    from: transactions.at(0)?.date,
                    to: transactions[transactions.length - 1]?.date,
                  },
                })}`}
              >
                {t('transactions.button')}
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
exports.TransactionsEmail = TransactionsEmail
exports.default = exports.TransactionsEmail
