'use client';
import React from 'react';
import { cn } from '@udecode/cn';
import { Icons } from '../icons';
import { buttonVariants } from './button';
import { DropdownMenuItem } from './dropdown-menu';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';
export function ColorDropdownMenuItem({ name, value, isBrightColor, isSelected, updateColor, className, ...props }) {
    const content = (<DropdownMenuItem className={cn(buttonVariants({
            variant: 'outline',
            isMenu: true,
        }), 'size-6 border border-solid border-muted p-0', !isBrightColor && 'border-transparent text-white', className)} style={{ backgroundColor: value }} onSelect={(e) => {
            e.preventDefault();
            updateColor(value);
        }} {...props}>
      {isSelected ? <Icons.check /> : null}
    </DropdownMenuItem>);
    return name ? (<Tooltip>
      <TooltipTrigger>{content}</TooltipTrigger>
      <TooltipContent>{name}</TooltipContent>
    </Tooltip>) : (content);
}
export function ColorDropdownMenuItems({ color, colors, updateColor, className, ...props }) {
    return (<div className={cn('grid grid-cols-[repeat(10,1fr)] gap-1', className)} {...props}>
      {colors.map(({ name, value, isBrightColor }) => (<ColorDropdownMenuItem key={name ?? value} name={name} value={value} isBrightColor={isBrightColor} isSelected={color === value} updateColor={updateColor}/>))}
    </div>);
}
