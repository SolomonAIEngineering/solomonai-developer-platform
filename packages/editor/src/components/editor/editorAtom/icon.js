import { memo } from 'react';
import { icons } from 'lucide-react';
import { cn } from '@/lib/editor/utils';
export const Icon = memo(({ name, className, strokeWidth }) => {
    const IconComponent = icons[name];
    if (!IconComponent) {
        return null;
    }
    return (<IconComponent className={cn('h-4 w-4', className)} strokeWidth={strokeWidth || 2.5}/>);
});
Icon.displayName = 'Icon';
