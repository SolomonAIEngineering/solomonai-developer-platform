import { TiptapCollabProvider } from '@hocuspocus/provider';
import 'iframe-resizer/js/iframeResizer.contentWindow';
import { useCallback, useEffect, useLayoutEffect, useMemo, useState, } from 'react';
import * as Y from 'yjs';
import { BlockEditor } from '@/components';
import '@/styles/index.css';
const useDarkmode = () => {
    const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => setIsDarkMode(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);
    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);
    const toggleDarkMode = useCallback(() => setIsDarkMode((isDark) => !isDark), []);
    const lightMode = useCallback(() => setIsDarkMode(false), []);
    const darkMode = useCallback(() => setIsDarkMode(true), []);
    return {
        isDarkMode,
        toggleDarkMode,
        lightMode,
        darkMode,
    };
};
export const AdvancedEditor = ({ className, callback, label, aiAppId, aiBaseUrl, collabAppId, collabDocPrefix, collabAppEnabled, content, }) => {
    const [provider, setProvider] = useState(null);
    const [collabToken, setCollabToken] = useState(null);
    const [aiToken, setAiToken] = useState('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDc2NjI0OTksIm5iZiI6MTcwNzY2MjQ5OSwiZXhwIjoxNzA3NzQ4ODk5LCJpc3MiOiJodHRwczovL2Nsb3VkLnRpcHRhcC5kZXYiLCJhdWQiOiI3NjRlYzNmZC0zZjM2LTRjMWEtYWQ3Yi01ZTRlMjRkMWJhOGMifQ.iGOHtYyvlsjOPSvOx2TpgU-K64jhEOWESBhAnp6VE3w');
    const tiptapCollabEnabled = collabAppEnabled ?? false;
    const ydoc = useMemo(() => new Y.Doc(), []);
    useLayoutEffect(() => {
        if (collabToken) {
            setProvider(new TiptapCollabProvider({
                name: collabDocPrefix ?? 'solomon_ai_doc',
                appId: collabAppId ?? '',
                token: collabToken,
                document: ydoc,
            }));
        }
    }, [setProvider, collabToken, ydoc]);
    return (<div className={className}>
      <BlockEditor aiToken={aiToken} hasCollab={tiptapCollabEnabled} ydoc={ydoc} provider={provider} onContentChange={callback} aiAppId={aiAppId} aiBaseUrl={aiBaseUrl} content={content}/>
    </div>);
};
