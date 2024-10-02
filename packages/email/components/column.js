'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.Column = Column
const react_1 = __importDefault(require('react'))
const components_1 = require('@react-email/components')
function Column({ title, description, footer, imgSrc }) {
  return (
    <components_1.Section className='m-0 p-0 text-left'>
      <components_1.Section className='m-0 mb-4 box-border inline-block w-[265px] w-full p-0 text-left align-top md:mb-0'>
        <components_1.Section className='m-0 p-0 pb-10 text-left'>
          <components_1.Img src={imgSrc} alt={title} className='w-[245px]' />
        </components_1.Section>
      </components_1.Section>
      <components_1.Section className='box-border inline-block w-[280px] w-full text-left align-top'>
        <components_1.Section className='m-0 p-0 text-left'>
          <components_1.Text className='m-0 mb-2 pt-0 font-medium'>
            {title}
          </components_1.Text>
          <components_1.Text className='m-0 p-0 text-[#707070]'>
            {description}
          </components_1.Text>
          <components_1.Text className='mt-2 p-0 text-[#707070]'>
            {footer}
          </components_1.Text>
        </components_1.Section>
      </components_1.Section>
    </components_1.Section>
  )
}
