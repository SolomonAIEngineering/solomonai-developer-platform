import { useMemo } from 'react';
import * as Y from 'yjs';
import BlockEditor from './blockEditor';
export const MarkdownPreview = ({ callback, content, aiAppId, aiBaseUrl, aiToken, }) => {
    const ydoc = useMemo(() => new Y.Doc(), []);
    let initialContent = undefined;
    if (content) {
        initialContent = content;
    }
    return (<>
      <BlockEditor aiToken={aiToken} ydoc={ydoc} onContentChange={callback} aiAppId={aiAppId} aiBaseUrl={aiBaseUrl} content={content} label={content ? 'Update' : 'Submit'} hasCollab={false}/>
    </>);
};
