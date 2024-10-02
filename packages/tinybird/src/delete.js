import { getTinybirdClient } from "./client.ts";
import fetch from "node-fetch";
async function deleteFromDatasource(datasource, deleteCondition) {
    const client = getTinybirdClient();
    const url = new URL(`/v0/datasources/${datasource}/delete`, client.baseUrl);
    const res = await fetch(url, {
        method: "POST",
        body: `delete_condition=(${deleteCondition})`,
        headers: {
            Authorization: `Bearer ${client.token}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
    if (!res.ok) {
        throw new Error(`Unable to delete for datasource ${datasource}: [${res.status}] ${await res.text()}`);
    }
    return await res.json();
}
export async function deleteEmailEvents(options) {
    return await deleteFromDatasource("email_events", `userId='${options.userId}'`);
}