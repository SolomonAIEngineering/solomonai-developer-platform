"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = Footer;
const components_1 = require("@react-email/components");
const responsive_react_email_1 = require("responsive-react-email");
function Footer({ baseUrl }) {
    return (<components_1.Section className='w-full'>
      <components_1.Hr />

      <br />

      <components_1.Text className='font-regular text-[21px]'>
        A better way to act on your finances
      </components_1.Text>

      <br />

      <responsive_react_email_1.TripleColumn pX={0} pY={0} styles={{ textAlign: 'left' }} columnOneContent={<components_1.Section className='m-0 p-0 text-left'>
            <components_1.Row>
              <components_1.Text className='font-medium'>Features</components_1.Text>
            </components_1.Row>

            <components_1.Row className='mb-1.5'>
              <components_1.Link className='text-[14px] text-[#707070]' href='https://solomon-ai.app/pricing'>
                Pricing
              </components_1.Link>
            </components_1.Row>

            <components_1.Row className='mb-1.5'>
              <components_1.Link className='text-[14px] text-[#707070]' href='https://solomon-ai.app/download'>
                Download
              </components_1.Link>
            </components_1.Row>
          </components_1.Section>} columnOneStyles={{ paddingRight: 0, paddingLeft: 0, width: 185 }} columnTwoContent={<components_1.Section className='m-0 p-0 text-left'>
            <components_1.Row>
              <components_1.Text className='font-medium'>Resources</components_1.Text>
            </components_1.Row>
            <components_1.Row className='mb-1.5'>
              <components_1.Link className='text-[14px] text-[#707070]' href='https://solomon-ai.app/'>
                Homepage
              </components_1.Link>
            </components_1.Row>
            <components_1.Row className='mb-1.5'>
              <components_1.Link className='text-[14px] text-[#707070]' href='https://github.com/SolomonAIEngineering/frontend-financial-platform'>
                Github
              </components_1.Link>
            </components_1.Row>
            <components_1.Row className='mb-1.5'>
              <components_1.Link className='text-[14px] text-[#707070]' href='https://solomon-ai.app/support'>
                Support
              </components_1.Link>
            </components_1.Row>
            <components_1.Row className='mb-1.5'>
              <components_1.Link className='text-[14px] text-[#707070]' href='https://solomon-ai.app/terms'>
                Terms of service
              </components_1.Link>
            </components_1.Row>
            <components_1.Row className='mb-1.5'>
              <components_1.Link className='text-[14px] text-[#707070]' href='https://solomon-ai.app/policy'>
                Privacy policy
              </components_1.Link>
            </components_1.Row>

            <components_1.Row className='mb-1.5'>
              <components_1.Link className='text-[14px] text-[#707070]' href='https://solomon-ai.app/feature-request'>
                Feature Request
              </components_1.Link>
            </components_1.Row>
          </components_1.Section>} columnTwoStyles={{ paddingRight: 0, paddingLeft: 0, width: 185 }} columnThreeContent={<components_1.Section className='m-0 p-0 text-left'>
            <components_1.Row>
              <components_1.Text className='font-medium'>Company</components_1.Text>
            </components_1.Row>
            <components_1.Row className='mb-1.5'>
              <components_1.Link className='text-[14px] text-[#707070]' href='https://solomon-ai.app/story'>
                Story
              </components_1.Link>
            </components_1.Row>
            <components_1.Row className='mb-1.5'>
              <components_1.Link className='text-[14px] text-[#707070]' href='https://solomon-ai.app/updates/v1.0.0'>
                Updates
              </components_1.Link>
            </components_1.Row>
          </components_1.Section>} columnThreeStyles={{ paddingRight: 0, paddingLeft: 0, width: 185 }}/>

      <br />
      <br />

      <components_1.Row>
        <components_1.Text className='text-xs text-[#B8B8B8]'>Solomon AI</components_1.Text>
      </components_1.Row>

      <components_1.Row>
        <components_1.Link className='text-[14px] text-[#707070]' href='https://business.solomon-ai.app/settings/notifications' title='Unsubscribe'>
          Notification preferences
        </components_1.Link>
      </components_1.Row>

      <br />
      <br />

      <components_1.Row>
        <components_1.Link href='https://solomon-ai.app/'>
          <components_1.Img src={`${baseUrl}/logo-footer.png`} width='100' alt='Solomon AI' className='block'/>
        </components_1.Link>
      </components_1.Row>
    </components_1.Section>);
}
