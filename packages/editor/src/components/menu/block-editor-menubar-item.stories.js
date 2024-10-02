import { Heading1 } from 'lucide-react';
import { BlockMenubarMenuItem, } from './block-editor-menubar-item';
const meta = {
    component: BlockMenubarMenuItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    // Customize the controls for the properties of your component as needed
    // Example:
    // backgroundColor: { control: 'color' },
    },
    decorators: [(Story) => <Story />],
};
export default meta;
export const RegularBlockMenubarMenuItem = {
    args: {
        icon: <Heading1 className='h-6 w-6 text-black'/>,
        title: 'Heading 1',
        action: () => { },
        isActive: () => true,
    },
};
