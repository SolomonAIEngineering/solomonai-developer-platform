import { useState } from 'react';
/**
 * A custom React hook for managing the state of an AI component, including
 * loading and error states.
 *
 * @returns An object containing the AI state and functions to modify that
 *   state.
 */
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
