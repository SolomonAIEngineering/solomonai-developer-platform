// BankAccountCardHeader.stories.tsx
import { MarkdownPreview } from './markdown-preview';
const meta = {
    component: MarkdownPreview,
    decorators: [(Story) => <Story />],
};
export default meta;
export const Default = {};
export const WithButton = {
    args: {
        callback: (content) => {
            console.log(content);
        },
        aiAppId: '123',
        aiBaseUrl: 'https://example.com',
        aiToken: 'abc',
    },
};
export const WithContent = {
    args: {
        content: 'Hello World',
        aiAppId: '123',
        aiBaseUrl: 'https://example.com',
        aiToken: 'abc',
    },
};
