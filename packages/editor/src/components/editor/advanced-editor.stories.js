// BankAccountCardHeader.stories.tsx
import { AdvancedEditor } from './advanced-editor';
const meta = {
    component: AdvancedEditor,
    decorators: [(Story) => <Story />],
};
export default meta;
export const Default = {};
export const WithButton = {
    args: {
        label: 'save',
        callback: (content) => {
            console.log(content);
        },
    },
};
