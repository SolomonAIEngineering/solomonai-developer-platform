'use client';
import React from 'react';
import { cn, withRef } from '@udecode/cn';
import { PortalBody, useComposedRef } from '@udecode/plate-common';
import { flip, offset, useFloatingToolbar, useFloatingToolbarState, } from '@udecode/plate-floating';
import { Toolbar } from './toolbar';
export const FloatingToolbar = withRef(({ state, portalElement, children, ...props }, componentRef) => {
    const floatingToolbarState = useFloatingToolbarState({
        ...state,
        floatingOptions: {
            placement: 'top',
            middleware: [
                offset(12),
                flip({
                    padding: 12,
                    fallbackPlacements: [
                        'top-start',
                        'top-end',
                        'bottom-start',
                        'bottom-end',
                    ],
                }),
            ],
            ...state?.floatingOptions,
        },
    });
    const { ref: floatingRef, props: rootProps, hidden, } = useFloatingToolbar(floatingToolbarState);
    const ref = useComposedRef(componentRef, floatingRef);
    if (hidden)
        return null;
    return (<PortalBody element={portalElement}>
      <Toolbar ref={ref} className={cn('absolute z-50 whitespace-nowrap border bg-popover px-1 opacity-100 shadow-md print:hidden')} {...rootProps} {...props}>
        {children}
      </Toolbar>
    </PortalBody>);
});
