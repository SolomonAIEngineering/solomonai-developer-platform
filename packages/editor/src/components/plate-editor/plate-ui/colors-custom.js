'use client';
import React from 'react';
import { useColorsCustom, useColorsCustomState } from '@udecode/plate-font';
import { buttonVariants } from '@/components/plate-editor/plate-ui/button';
import { DropdownMenuItem } from '@/components/plate-editor/plate-ui/dropdown-menu';
import { ColorDropdownMenuItems } from './color-dropdown-menu-items';
import { ColorInput } from './color-input';
export function ColorsCustom({ color, colors, customColors, updateColor, updateCustomColor, }) {
    const state = useColorsCustomState({
        color,
        colors,
        customColors,
        updateCustomColor,
    });
    const { inputProps, menuItemProps } = useColorsCustom(state);
    return (<div className='flex flex-col gap-4'>
      <ColorInput {...inputProps}>
        <DropdownMenuItem className={buttonVariants({
            variant: 'outline',
            isMenu: true,
        })} {...menuItemProps}>
          CUSTOM
        </DropdownMenuItem>
      </ColorInput>

      <ColorDropdownMenuItems color={color} colors={state.computedColors} updateColor={updateColor}/>
    </div>);
}
