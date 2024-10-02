export const activeItemClass = 'bg-primary/10 hover:bg-primary/10 focus:bg-primary/10';
export const DropdownMenuItemClass = 'flex flex-row items-center justify-between gap-4';
let isMac;
function getPlatform() {
    const nav = navigator;
    if (nav.userAgentData) {
        if (nav.userAgentData.platform) {
            return nav.userAgentData.platform;
        }
        nav.userAgentData
            .getHighEntropyValues(['platform'])
            .then((highEntropyValues) => {
            if (highEntropyValues.platform) {
                return highEntropyValues.platform;
            }
        });
    }
    if (typeof navigator.platform === 'string') {
        return navigator.platform;
    }
    return '';
}
export function isMacOS() {
    if (isMac === undefined) {
        isMac = getPlatform().toLowerCase().includes('mac');
    }
    return isMac;
}
export function getShortcutKey(key) {
    if (key.toLowerCase() === 'mod') {
        return isMacOS() ? '⌘' : 'Ctrl';
    }
    else if (key.toLowerCase() === 'alt') {
        return isMacOS() ? '⌥' : 'Alt';
    }
    else if (key.toLowerCase() === 'shift') {
        return isMacOS() ? '⇧' : 'Shift';
    }
    else {
        return key;
    }
}
export function getShortcutKeys(keys) {
    return keys.map((key) => getShortcutKey(key)).join('');
}
export function getOutput(editor, format) {
    if (format === 'json') {
        return JSON.stringify(editor.getJSON());
    }
    if (format === 'html') {
        return editor.getText() ? editor.getHTML() : '';
    }
    return editor.getText();
}
