import * as Popover from '@radix-ui/react-popover';
import { Icon } from '@/components/editor/editorAtom/icon';
import { Toolbar } from '@/components/editor/editorAtom/toolbar';
import { LinkEditorPanel } from '@/components/editor/panels';
export const EditLinkPopover = ({ onSetLink }) => {
    return (<Popover.Root>
      <Popover.Trigger asChild>
        <Toolbar.Button tooltip='Set Link'>
          <Icon name='Link'/>
        </Toolbar.Button>
      </Popover.Trigger>
      <Popover.Content>
        <LinkEditorPanel onSetLink={onSetLink}/>
      </Popover.Content>
    </Popover.Root>);
};
