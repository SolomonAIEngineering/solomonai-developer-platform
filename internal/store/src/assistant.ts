import { create } from 'zustand'

/**
 * Represents the state of the assistant feature.
 */
interface AssistantState {
  /** Indicates whether the assistant is open or closed. */
  isOpen: boolean
  /** The current message displayed by the assistant. */
  message: string | undefined
  /** Function to toggle the assistant's open state and set a message. */
  setOpen: (message?: string) => void
}

/**
 * Creates a store for managing the assistant's state.
 *
 * @example
 * const { isOpen, message, setOpen } = useAssistantStore();
 *
 * // Toggle the assistant and set a message
 * setOpen("Hello, how can I help you?");
 */
export const useAssistantStore = create<AssistantState>()((set) => ({
  isOpen: false,
  message: undefined,
  setOpen: (message) => set((state) => ({ isOpen: !state.isOpen, message })),
}))
