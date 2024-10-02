'use client';
import React from 'react';
import { cn, withRef } from '@udecode/cn';
import { useDraggable, useDraggableState, } from '@udecode/plate-dnd';
import { Icons } from '../icons';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';
const dragHandle = (<Tooltip>
    <TooltipTrigger>
      <Icons.dragHandle className='size-4 text-muted-foreground'/>
    </TooltipTrigger>
    <TooltipContent>Drag to move</TooltipContent>
  </Tooltip>);
export const Draggable = withRef(({ className, classNames = {}, onDropHandler, ...props }, ref) => {
    const { children, element } = props;
    const state = useDraggableState({ element, onDropHandler });
    const { dropLine, isDragging, isHovered } = state;
    const { groupProps, droplineProps, gutterLeftProps, previewRef, handleRef, } = useDraggable(state);
    return (<div ref={ref} className={cn('relative', isDragging && 'opacity-50', 'group', className)} {...groupProps}>
        <div className={cn('pointer-events-none absolute top-0 flex h-full -translate-x-full cursor-text opacity-0 group-hover:opacity-100', classNames.gutterLeft)} {...gutterLeftProps}>
          <div className={cn('flex h-[1.5em]', classNames.blockToolbarWrapper)}>
            <div className={cn('pointer-events-auto mr-1 flex items-center', classNames.blockToolbar)}>
              <div ref={handleRef} className='size-4'>
                {isHovered && dragHandle}
              </div>
            </div>
          </div>
        </div>

        <div className={classNames.blockWrapper} ref={previewRef}>
          {children}

          {!!dropLine && (<div className={cn('absolute inset-x-0 h-0.5 opacity-100', 'bg-ring', dropLine === 'top' && '-top-px', dropLine === 'bottom' && '-bottom-px', classNames.dropLine)} {...droplineProps}/>)}
        </div>
      </div>);
});
