export function parseZodErrorMessage(err) {
    try {
        const arr = JSON.parse(err.message);
        const { path, message } = arr[0];
        return `${path.join(".")}: ${message}`;
    }
    catch {
        return err.message;
    }
}
