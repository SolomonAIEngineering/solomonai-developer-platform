import { cn } from '@/lib/editor/utils';
import { getShortcutKeys } from '../utils';
const ShortcutKey = ({ className, keys, withBg, ...props }) => {
    return (<span className={cn('text-xs tracking-widest opacity-60', className)} {...props}>
      <span className={cn('ml-4', {
            'self-end rounded bg-accent p-1 leading-3': withBg,
        })}>
        {getShortcutKeys(keys)}
      </span>
    </span>);
};
ShortcutKey.displayName = 'ShortcutKey';
export { ShortcutKey };
