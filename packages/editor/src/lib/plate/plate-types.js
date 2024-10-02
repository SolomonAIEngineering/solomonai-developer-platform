import { createPlateEditor, createPluginFactory, createPlugins, createTEditor, getTEditor, useEditorRef, useEditorState, } from '@udecode/plate-common';
/**
 * Plate store, Slate context
 */
export const getMyEditor = (editor) => getTEditor(editor);
export const useMyEditorRef = () => useEditorRef();
export const useMyEditorState = () => useEditorState();
/**
 * Utils
 */
export const createMyEditor = () => createTEditor();
export const createMyPlateEditor = (options = {}) => createPlateEditor(options);
export const createMyPluginFactory = (defaultPlugin) => createPluginFactory(defaultPlugin);
export const createMyPlugins = (plugins, options) => createPlugins(plugins, options);
