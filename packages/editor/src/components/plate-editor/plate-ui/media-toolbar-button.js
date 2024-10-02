import React from 'react';
import { withRef } from '@udecode/cn';
import { useMediaToolbarButton, } from '@udecode/plate-media';
import { Icons } from '../icons';
import { ToolbarButton } from './toolbar';
export const MediaToolbarButton = withRef(({ nodeType, ...rest }, ref) => {
    const { props } = useMediaToolbarButton({ nodeType });
    return (<ToolbarButton ref={ref} {...props} {...rest}>
      <Icons.image />
    </ToolbarButton>);
});
