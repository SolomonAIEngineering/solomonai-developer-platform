import React from 'react';
import { cn, withRef } from '@udecode/cn';
import { PlateElement, useElement } from '@udecode/plate-common';
import { useLink } from '@udecode/plate-link';
export const LinkElement = withRef(({ className, children, ...props }, ref) => {
    const element = useElement();
    const { props: linkProps } = useLink({ element });
    return (<PlateElement ref={ref} asChild className={cn('font-medium text-primary underline decoration-primary underline-offset-4', className)} {...linkProps} {...props}>
        <a>{children}</a>
      </PlateElement>);
});
