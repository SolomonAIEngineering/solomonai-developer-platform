import { useState } from 'react';
export const useAIState = () => {
    const [isAiLoading, setIsAiLoading] = useState(false);
    const [aiError, setAiError] = useState(null);
    return {
        isAiLoading,
        aiError,
        setIsAiLoading,
        setAiError,
    };
};
