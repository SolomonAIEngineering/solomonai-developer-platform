import React from 'react';
import { getPluginOptions, useEditorRef } from '@udecode/plate-common';
import { ELEMENT_MENTION, getMentionOnSelectItem, } from '@udecode/plate-mention';
import { Combobox } from './combobox';
export function MentionCombobox({ pluginKey = ELEMENT_MENTION, id = pluginKey, ...props }) {
    const editor = useEditorRef();
    const { trigger } = getPluginOptions(editor, pluginKey);
    return (<div onMouseDown={(e) => e.preventDefault()}>
      <Combobox id={id} trigger={trigger} controlled onSelectItem={getMentionOnSelectItem({
            key: pluginKey,
        })} {...props}/>
    </div>);
}
