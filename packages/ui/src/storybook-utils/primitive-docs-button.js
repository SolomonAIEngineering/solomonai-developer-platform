"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadixPrimitiveDocsButton = RadixPrimitiveDocsButton;
exports.PrimitiveDocsButton = PrimitiveDocsButton;
const react_icons_1 = require("@radix-ui/react-icons");
const button_1 = require("../components/button");
/**
 * This component is used inside storybook mdx files to render a button that links to the Radix docs of the primitive.
 * @param props The props for the component.
 * @param props.name The name of the primitive.
 * @returns The rendered component.
 */
function RadixPrimitiveDocsButton({ name }) {
    return (<div className="dark !mb-6 flex gap-4">
      <button_1.Button variant="outline" size="sm" asChild>
        <a href={`https://www.radix-ui.com/docs/primitives/components/${name}`} className="!text-sm !text-gray-11">
          <react_icons_1.ExternalLinkIcon className="mr-2 size-3"/>
          Docs
        </a>
      </button_1.Button>
      <button_1.Button variant="outline" size="sm" asChild>
        <a href={`https://www.radix-ui.com/docs/primitives/components/${name}#api-reference`} className="!text-sm !text-gray-11">
          <react_icons_1.ExternalLinkIcon className="mr-2 size-3"/>
          API Reference
        </a>
      </button_1.Button>
    </div>);
}
/**
 * This component is used inside storybook mdx files to render a button that links to the docs of the underlying primitive.
 * @param props The props for the component.
 * @param props.docsUrl The URL to the docs of the primitive.
 * @param props.apiReferenceUrl The URL to the API reference of the primitive.
 * @returns The rendered component.
 */
function PrimitiveDocsButton({ docsUrl, apiReferenceUrl, }) {
    return (<div className="dark !mb-6 flex gap-4">
      <button_1.Button variant="outline" size="sm" asChild>
        <a href={docsUrl} className="!text-sm !text-gray-11">
          <react_icons_1.ExternalLinkIcon className="mr-2 size-3"/>
          Docs
        </a>
      </button_1.Button>
      {apiReferenceUrl && (<button_1.Button variant="outline" size="sm" asChild>
          <a href={apiReferenceUrl} className="!text-sm !text-gray-11">
            <react_icons_1.ExternalLinkIcon className="mr-2 size-3"/>
            API Reference
          </a>
        </button_1.Button>)}
    </div>);
}
