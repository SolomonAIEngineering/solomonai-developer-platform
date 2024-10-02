import React from 'react';
import { KEY_EMOJI, useEmojiComboboxState, } from '@udecode/plate-emoji';
import { Combobox } from './combobox';
export function EmojiComboboxItem({ item }) {
    const { data: { id, emoji }, } = item;
    return (<div>
      {emoji} :{id}:
    </div>);
}
export function EmojiCombobox({ pluginKey = KEY_EMOJI, id = pluginKey, ...props }) {
    const { trigger, onSelectItem } = useEmojiComboboxState({ pluginKey });
    return (<Combobox id={id} trigger={trigger} controlled onSelectItem={onSelectItem} onRenderItem={EmojiComboboxItem} {...props}/>);
}
