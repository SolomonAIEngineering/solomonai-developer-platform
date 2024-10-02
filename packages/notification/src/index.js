import { Novu } from '@novu/node';
import { nanoid } from 'nanoid';
const novu = new Novu(process.env['NOVU_API_KEY']);
const API_ENDPOINT = 'https://api.novu.co/v1';
export var TriggerEvents;
(function (TriggerEvents) {
    TriggerEvents["TransactionNewInApp"] = "transaction_new_in_app";
    TriggerEvents["TransactionsNewInApp"] = "transactions_new_in_app";
    TriggerEvents["TransactionNewEmail"] = "transaction_new_email";
    TriggerEvents["InboxNewInApp"] = "inbox_new_in_app";
    TriggerEvents["MatchNewInApp"] = "match_in_app";
})(TriggerEvents || (TriggerEvents = {}));
export var NotificationTypes;
(function (NotificationTypes) {
    NotificationTypes["Transaction"] = "transaction";
    NotificationTypes["Transactions"] = "transactions";
    NotificationTypes["Inbox"] = "inbox";
    NotificationTypes["Match"] = "match";
})(NotificationTypes || (NotificationTypes = {}));
/**
 * Triggers a single notification event.
 *
 * @param data - The payload containing event and user information
 * @returns A promise that resolves when the notification is triggered
 */
export async function trigger(data) {
    try {
        await novu.trigger(data.name, {
            to: {
                ...data.user,
                //   Prefix subscriber id with team id
                subscriberId: `${data.user.teamId}_${data.user.subscriberId}`,
            },
            payload: data.payload,
            tenant: data.tenant,
            overrides: {
                email: {
                    replyTo: data.replyTo,
                    headers: {
                        'X-Entity-Ref-ID': nanoid(),
                    },
                },
            },
        });
    }
    catch (error) {
        console.log(error);
    }
}
/**
 * Triggers multiple notification events in bulk.
 *
 * @param events - An array of TriggerPayload objects
 * @returns A promise that resolves when all notifications are triggered
 */
export async function triggerBulk(events) {
    try {
        await novu.bulkTrigger(events.map((data) => ({
            name: data.name,
            to: {
                ...data.user,
                //   Prefix subscriber id with team id
                subscriberId: `${data.user.teamId}_${data.user.subscriberId}`,
            },
            payload: data.payload,
            tenant: data.tenant,
            overrides: {
                email: {
                    replyTo: data.replyTo || undefined,
                    headers: {
                        'X-Entity-Ref-ID': nanoid(),
                    },
                },
            },
        })));
    }
    catch (error) {
        console.log(error);
    }
}
/**
 * Retrieves the preferences for a specific subscriber.
 *
 * @param params - Object containing teamId and subscriberId
 * @returns A promise that resolves to the subscriber's preferences
 */
export async function getSubscriberPreferences({ subscriberId, teamId, }) {
    const response = await fetch(`${API_ENDPOINT}/subscribers/${teamId}_${subscriberId}/preferences`, {
        method: 'GET',
        headers: {
            Authorization: `ApiKey ${process.env.NOVU_API_KEY}`,
        },
    });
    return response.json();
}
/**
 * Updates a specific preference for a subscriber.
 *
 * @param params - Object containing subscriber and preference information
 * @returns A promise that resolves to the updated preference data
 */
export async function updateSubscriberPreference({ subscriberId, teamId, templateId, type, enabled, }) {
    const response = await fetch(`${API_ENDPOINT}/subscribers/${teamId}_${subscriberId}/preferences/${templateId}`, {
        method: 'PATCH',
        headers: {
            Authorization: `ApiKey ${process.env.NOVU_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            channel: {
                type,
                enabled,
            },
        }),
    });
    return response.json();
}
