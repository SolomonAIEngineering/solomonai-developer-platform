export async function step(req) {
    const res = await fetch(req.url, {
        method: req.method,
        headers: req.headers,
        body: JSON.stringify(req.body),
    });
    const body = await res.text();
    try {
        return {
            status: res.status,
            headers: headersToRecord(res.headers),
            body: JSON.parse(body),
        };
    }
    catch {
        console.error(`${req.url} didn't return json, received: ${body}`);
        return {};
    }
}
export async function fetchRoute(app, req) {
    const eCtx = {
        waitUntil: (promise) => {
            promise.catch(() => { });
        },
        passThroughOnException: () => { },
        abort: (_reason) => { },
    };
    const res = await app.request(req.url, {
        method: req.method,
        headers: req.headers,
        body: JSON.stringify(req.body),
    }, {}, // Env
    eCtx);
    return {
        status: res.status,
        headers: headersToRecord(res.headers),
        body: (await res.json().catch((err) => {
            console.error(`${req.url} didn't return json`, err);
            return {};
        })),
    };
}
export function headersToRecord(headers) {
    const rec = {};
    headers.forEach((v, k) => {
        rec[k] = v;
    });
    return rec;
}
