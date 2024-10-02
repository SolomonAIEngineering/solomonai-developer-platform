// PlateEditorTooltipProvider.stories.tsx
import React from 'react';
import { PlateEditorTooltipProvider, } from '@/provider/plate-editor-tooltip-provider';
import PlateEditor from './plate-editor';
export default {
    title: 'Components/PlateEditorTooltipProvider',
    component: PlateEditorTooltipProvider,
    argTypes: {
        customDelayDuration: {
            control: { type: 'number', min: 0, max: 2000, step: 100 },
        },
        disableHoverableContent: {
            control: 'boolean',
        },
        skipDelayDuration: {
            control: { type: 'number', min: 0, max: 1000, step: 50 },
        },
        theme: {
            control: { type: 'select', options: ['light', 'dark', 'system'] },
        },
    },
    decorators: [
        (Story) => (<div className='w-full'>
        <PlateEditorTooltipProvider>
          <Story />
        </PlateEditorTooltipProvider>
      </div>),
    ],
};
const Template = (args) => <PlateEditor />;
export const Default = Template.bind({});
Default.args = {};
