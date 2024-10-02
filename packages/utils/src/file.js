/**
 * Removes special characters from a string, keeping only alphanumeric characters,
 * hyphens, spaces, dots, and parentheses.
 *
 * @param inputString - The string to be processed.
 * @returns The input string with special characters removed.
 */
export function stripSpecialCharacters(inputString) {
    return inputString?.replace(/[^a-zA-Z0-9\s.()-]/g, "") ?? "";
}
/**
 * Shuffles an array using the Fisher-Yates algorithm.
 *
 * @template T - The type of elements in the array.
 * @param array - The array to be shuffled.
 * @returns A new shuffled array.
 */
export function shuffle(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Use non-null assertion and type assertion to satisfy TypeScript
        [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
        ];
    }
    return shuffledArray;
}
/**
 * Represents MIME types for different file formats.
 */
export const FileType = {
    PDF: "application/pdf",
    HEIC: "image/heic",
};
/**
 * Checks if a given file type is supported for preview.
 *
 * @param type - The MIME type of the file.
 * @returns True if the file type is supported for preview, false otherwise.
 */
export function isSupportedFilePreview(type) {
    if (!type) {
        return false;
    }
    if (type === FileType.HEIC) {
        return false;
    }
    if (type.startsWith("image")) {
        return true;
    }
    return type === FileType.PDF;
}
