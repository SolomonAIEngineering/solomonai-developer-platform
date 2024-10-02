import type {
  BusinessAccount,
  MelodyFinancialContext,
  UserAccount,
} from 'client-typescript-sdk'

import { FinancialUserProfile } from 'client-typescript-sdk'
import { createStore } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

/**
 * Represents the properties of the user state.
 */
export interface UserStateProps {
  /** Indicates whether the user is authenticated. */
  authenticated: boolean
  /** The unique identifier of the user. */
  userId: string
  /** The user's account information. */
  userAccount: UserAccount | BusinessAccount
  /** The user's financial profile. */
  userFinancialProfile: FinancialUserProfile
  /** The user's financial context. */
  userFinancialContext: MelodyFinancialContext
  /** The authentication token for the user. */
  token: string
}

/**
 * Represents the full user state, including actions to modify the state.
 */
export interface UserState extends UserStateProps {
  /** Sets the authenticated state of the user. */
  setAuthenticated: (authenticated: boolean) => void
  /** Sets the user ID. */
  setUserId: (userId: string) => void
  /** Sets the user's account information. */
  setUserAccount: (userAccount: UserAccount | BusinessAccount) => void
  /** Sets the user's financial profile. */
  setUserFinancialProfile: (userFinancialProfile: FinancialUserProfile) => void
  /** Sets the user's financial context. */
  setUserFinancialContext: (
    userFinancialContext: MelodyFinancialContext,
  ) => void
  /** Sets the authentication token. */
  setToken: (token: string) => void
  /** Resets the user state to its initial values. */
  reset: () => void
  /** Sets multiple user state properties at once. */
  setData: (data: Partial<UserStateProps>) => void
}

/** The initial state for the user store. */
const initialState: UserStateProps = {
  authenticated: false,
  userId: '',
  userAccount: {},
  userFinancialProfile: {},
  userFinancialContext: {},
  token: '',
}

/** The key used for persisting the user store in storage. */
export const USER_STORE_KEY = 'userStore'

/**
 * Creates a store for managing the user state.
 *
 * @param initProps - Optional initial properties to override the default state.
 * @returns A function to access and modify the user state.
 *
 * @example
 * const userStore = useUserStore();
 * const { authenticated, setAuthenticated } = userStore();
 *
 * // Set the user as authenticated
 * setAuthenticated(true);
 */
export const useUserStore = (initProps?: Partial<UserStateProps>) => {
  const DEFAULT_PROPS: UserStateProps = {
    ...initialState,
  }
  return createStore<UserState>()(
    persist(
      (set) => ({
        ...DEFAULT_PROPS,
        ...initProps,
        setAuthenticated: (authenticated: boolean) => {
          set({ authenticated })
        },
        setUserId: (userId: string) => {
          set({ userId })
        },
        setUserAccount: (userAccount: UserAccount | BusinessAccount) => {
          set({ userAccount })
        },
        setUserFinancialProfile: (
          userFinancialProfile: FinancialUserProfile,
        ) => {
          set({ userFinancialProfile })
        },
        setUserFinancialContext: (
          userFinancialContext: MelodyFinancialContext,
        ) => {
          set({ userFinancialContext })
        },
        setToken: (token: string) => {
          set({ token })
        },
        setData: (data: Partial<UserStateProps>) => {
          set({ ...data })
        },
        reset: () => {
          set({ ...initialState })
        },
      }),
      {
        name: USER_STORE_KEY,
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  )
}
