import React from 'react';
import { withRef } from '@udecode/cn';
import { useOutdentButton } from '@udecode/plate-indent';
import { Icons } from '../icons';
import { ToolbarButton } from './toolbar';
export const OutdentToolbarButton = withRef((rest, ref) => {
    const { props } = useOutdentButton();
    return (<ToolbarButton ref={ref} tooltip='Outdent' {...props} {...rest}>
        <Icons.outdent />
      </ToolbarButton>);
});
