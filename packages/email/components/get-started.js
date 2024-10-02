'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.GetStarted = GetStarted
const components_1 = require('@react-email/components')
function GetStarted() {
  return (
    <components_1.Section className='mb-[50px] mt-[50px] text-center'>
      <components_1.Button
        className='rounded-md border border-solid border-[#121212] bg-transparent px-6 py-3 text-center text-[14px] font-medium text-[#121212] text-primary no-underline'
        href='https://solomon-ai.app/'
      >
        Get started
      </components_1.Button>
    </components_1.Section>
  )
}
