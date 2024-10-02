// BankAccountCardHeader.stories.tsx
import { NoteEditor } from './note-editor';
const meta = {
    component: NoteEditor,
    decorators: [(Story) => <Story />],
};
export default meta;
export const Default = {};
const smartNote = {
    id: '1',
    content: 'content',
    createdAt: new Date(),
    updatedAt: new Date(),
};
export const WithSmartNote = {
    args: {
        note: smartNote,
        callback: (content) => {
            console.log(content);
        },
        aiAppId: '123',
        aiBaseUrl: 'https://example.com',
        aiToken: 'abc',
    },
};
