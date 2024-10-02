import { useMemo } from 'react';
import * as Y from 'yjs';
import { BlockEditor } from './blockeditor';
export const NoteEditor = ({ callback, note, aiAppId, aiBaseUrl, aiToken, }) => {
    const ydoc = useMemo(() => new Y.Doc(), []);
    let initialContent = undefined;
    if (note) {
        initialContent = note.content;
    }
    return (<>
      <BlockEditor hasCollab={true} ydoc={ydoc} 
    // enableMenubar
    label={note ? 'Update' : 'Submit'} onContentChange={callback} content={initialContent} aiToken={aiToken} aiAppId={aiAppId} aiBaseUrl={aiBaseUrl}/>
    </>);
};
