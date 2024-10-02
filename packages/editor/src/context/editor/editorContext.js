import { createContext } from 'react';
export const EditorContext = createContext({
    isAiLoading: false,
    aiError: null,
    setIsAiLoading: () => { },
    setAiError: () => { },
});
