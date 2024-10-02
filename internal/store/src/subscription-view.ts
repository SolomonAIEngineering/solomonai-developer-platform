import { startOfMonth, subMonths } from 'date-fns'
import { create } from 'zustand'

/**
 * Represents the state of the subscription view.
 */
interface SubscriptionViewState {
  /** Indicates whether the subscription view is open or closed. */
  isOpen: boolean
  /** The date range for filtering subscriptions. */
  dateRange: {
    /** The start date of the range. */
    from: string
    /** The end date of the range. */
    to: string
  }
  /** The period for grouping subscriptions. */
  period: 'monthly' | 'quarterly' | 'yearly'
  /** Function to set the open state of the subscription view. */
  setOpen: (isOpen: boolean) => void
  /** Function to set the date range for filtering subscriptions. */
  setDateRange: (from: string, to: string) => void
  /** Function to set the period for grouping subscriptions. */
  setPeriod: (period: 'monthly' | 'quarterly' | 'yearly') => void
}

/** The default date range for the subscription view. */
const defaultDateRange = {
  from: subMonths(startOfMonth(new Date()), 12).toISOString(),
  to: new Date().toISOString(),
}

/**
 * Creates a store for managing the subscription view state.
 *
 * @example
 * const { isOpen, dateRange, period, setOpen, setDateRange, setPeriod } = useSubscriptionViewStore();
 *
 * // Open the subscription view
 * setOpen(true);
 *
 * // Set a custom date range
 * setDateRange("2023-01-01", "2023-12-31");
 *
 * // Change the grouping period
 * setPeriod("yearly");
 */
export const useSubscriptionViewStore = create<SubscriptionViewState>()(
  (set) => ({
    isOpen: false,
    dateRange: defaultDateRange,
    period: 'monthly',
    setOpen: (isOpen) => set({ isOpen }),
    setDateRange: (from, to) => set({ dateRange: { from, to } }),
    setPeriod: (period) => set({ period }),
  }),
)
