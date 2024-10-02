import { useContext, useEffect, useMemo, useState } from 'react';
import { WebSocketStatus } from '@hocuspocus/provider';
import Ai from '@tiptap-pro/extension-ai';
import Collaboration from '@tiptap/extension-collaboration';
import CollaborationCursor from '@tiptap/extension-collaboration-cursor';
import { useEditor } from '@tiptap/react';
import { EditorContext } from '@/context/editor/editorContext';
import { ExtensionKit } from '@/extensions/extension-kit';
import { userColors, userNames } from '@/lib/editor/constants';
import { randomElement } from '@/lib/editor/utils';
import { useSidebar } from './useSidebar';
export const useBlockEditor = ({ aiToken, ydoc, provider, aiAppId, aiBaseUrl = 'https://api.tiptap.dev/v1/ai', content, }) => {
    const leftSidebar = useSidebar();
    const [collabState, setCollabState] = useState(WebSocketStatus.Connected);
    const { setIsAiLoading, setAiError } = useContext(EditorContext);
    const extensions = useMemo(() => {
        const basicExtensions = [
            ...ExtensionKit({
                provider,
            }),
            Collaboration.configure({
                document: ydoc,
            }),
            Ai.configure({
                appId: aiAppId,
                token: aiToken,
                baseUrl: aiBaseUrl,
                autocompletion: true,
                onLoading: () => {
                    setIsAiLoading(true);
                    setAiError(null);
                },
                onSuccess: () => {
                    setIsAiLoading(false);
                    setAiError(null);
                },
                onError: (error) => {
                    setIsAiLoading(false);
                    setAiError(error.message);
                },
            }),
        ];
        if (provider) {
            basicExtensions.push(CollaborationCursor.configure({
                provider,
                user: {
                    name: randomElement(userNames),
                    color: randomElement(userColors),
                },
            }));
        }
        return basicExtensions;
    }, [ydoc, provider, aiToken]);
    const editor = useEditor({
        autofocus: true,
        onCreate: ({ editor }) => {
            if (provider) {
                provider.on('synced', () => {
                    if (editor.isEmpty && content) {
                        editor.commands.setContent(content);
                    }
                });
            }
        },
        extensions,
        editorProps: {
            attributes: {
                autocomplete: 'off',
                autocorrect: 'off',
                autocapitalize: 'off',
                class: 'min-h-full',
            },
        },
        content: content || '',
    }, [extensions]);
    const users = useMemo(() => {
        if (!editor?.storage.collaborationCursor?.users) {
            return [];
        }
        return editor.storage.collaborationCursor?.users.map((user) => {
            const names = user.name?.split(' ');
            const firstName = names?.[0];
            const lastName = names?.[names.length - 1];
            const initials = `${firstName?.[0] || '?'}${lastName?.[0] || '?'}`;
            return { ...user, initials: initials.length ? initials : '?' };
        });
    }, [editor?.storage.collaborationCursor?.users]);
    const characterCount = editor?.storage.characterCount || {
        characters: () => 0,
        words: () => 0,
    };
    useEffect(() => {
        provider?.on('status', (event) => {
            setCollabState(event.status);
        });
    }, [provider]);
    window.editor = editor;
    return { editor, users, characterCount, collabState, leftSidebar };
};
