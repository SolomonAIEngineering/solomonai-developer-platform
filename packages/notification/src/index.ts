import { Novu } from '@novu/node'
import { nanoid } from 'nanoid'

const novu = new Novu(process.env['NOVU_API_KEY']!)

const API_ENDPOINT = 'https://api.novu.co/v1'

export enum TriggerEvents {
  TransactionNewInApp = 'transaction_new_in_app',
  TransactionsNewInApp = 'transactions_new_in_app',
  TransactionNewEmail = 'transaction_new_email',
  InboxNewInApp = 'inbox_new_in_app',
  MatchNewInApp = 'match_in_app',
}

export enum NotificationTypes {
  Transaction = 'transaction',
  Transactions = 'transactions',
  Inbox = 'inbox',
  Match = 'match',
}

/**
 * Represents a user for triggering notifications.
 */
interface TriggerUser {
  /** Unique identifier for the subscriber */
  subscriberId: string
  /** Email address of the user */
  email: string
  /** Full name of the user */
  fullName: string
  /** Optional URL for the user's avatar */
  avatarUrl?: string
  /** Identifier for the team the user belongs to */
  teamId: string
}

/**
 * Payload for triggering a notification.
 */
interface TriggerPayload {
  /** The event name to trigger */
  name: TriggerEvents
  /** Additional data to be sent with the notification */
  payload: any
  /** User information for the notification recipient */
  user: TriggerUser
  /** Optional email address to set as reply-to */
  replyTo?: string
  /** Optional tenant identifier */
  tenant?: string // NOTE: Currently no way to listen for messages with tenant, we use team_id + user_id for unique
}

/**
 * Triggers a single notification event.
 *
 * @param data - The payload containing event and user information
 * @returns A promise that resolves when the notification is triggered
 */
export async function trigger(data: TriggerPayload): Promise<void> {
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
    })
  } catch (error) {
    console.log(error)
  }
}

/**
 * Triggers multiple notification events in bulk.
 *
 * @param events - An array of TriggerPayload objects
 * @returns A promise that resolves when all notifications are triggered
 */
export async function triggerBulk(events: TriggerPayload[]): Promise<void> {
  try {
    await novu.bulkTrigger(
      events.map((data) => ({
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
      })),
    )
  } catch (error) {
    console.log(error)
  }
}

/**
 * Parameters for getting subscriber preferences.
 */
interface GetSubscriberPreferencesParams {
  /** The team identifier */
  teamId: string
  /** The subscriber identifier */
  subscriberId: string
}

/**
 * Retrieves the preferences for a specific subscriber.
 *
 * @param params - Object containing teamId and subscriberId
 * @returns A promise that resolves to the subscriber's preferences
 */
export async function getSubscriberPreferences({
  subscriberId,
  teamId,
}: GetSubscriberPreferencesParams): Promise<any> {
  const response = await fetch(
    `${API_ENDPOINT}/subscribers/${teamId}_${subscriberId}/preferences`,
    {
      method: 'GET',
      headers: {
        Authorization: `ApiKey ${process.env.NOVU_API_KEY!}`,
      },
    },
  )

  return response.json()
}

/**
 * Parameters for updating a subscriber's preference.
 */
interface UpdateSubscriberPreferenceParams {
  /** The subscriber identifier */
  subscriberId: string
  /** The team identifier */
  teamId: string
  /** The template identifier for the preference */
  templateId: string
  /** The type of notification channel */
  type: string
  /** Whether the notification type is enabled or disabled */
  enabled: boolean
}

/**
 * Updates a specific preference for a subscriber.
 *
 * @param params - Object containing subscriber and preference information
 * @returns A promise that resolves to the updated preference data
 */
export async function updateSubscriberPreference({
  subscriberId,
  teamId,
  templateId,
  type,
  enabled,
}: UpdateSubscriberPreferenceParams): Promise<any> {
  const response = await fetch(
    `${API_ENDPOINT}/subscribers/${teamId}_${subscriberId}/preferences/${templateId}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `ApiKey ${process.env.NOVU_API_KEY!}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        channel: {
          type,
          enabled,
        },
      }),
    },
  )

  return response.json()
}
