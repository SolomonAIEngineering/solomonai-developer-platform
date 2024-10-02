"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logo = Logo;
const components_1 = require("@react-email/components");
function Logo({ baseUrl }) {
    return (<components_1.Section className='mt-[32px]'>
      <components_1.Img src={`${baseUrl}/logo.png`} width='45' height='45' alt='Solomon AI' className='mx-auto my-0 block'/>
    </components_1.Section>);
}
