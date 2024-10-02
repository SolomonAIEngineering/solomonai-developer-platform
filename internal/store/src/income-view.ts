import { startOfMonth, subMonths } from 'date-fns'
import { create } from 'zustand'

/**
 * Represents the state of the income view.
 */
interface IncomeViewState {
  /** Indicates whether the income view is open or closed. */
  isOpen: boolean
  /** The date range for filtering income. */
  dateRange: {
    /** The start date of the range. */
    from: string
    /** The end date of the range. */
    to: string
  }
  /** The period for grouping income. */
  period: 'monthly' | 'quarterly' | 'yearly'
  /** Function to set the open state of the income view. */
  setOpen: (isOpen: boolean) => void
  /** Function to set the date range for filtering income. */
  setDateRange: (from: string, to: string) => void
  /** Function to set the period for grouping income. */
  setPeriod: (period: 'monthly' | 'quarterly' | 'yearly') => void
}

/** The default date range for the income view. */
const defaultDateRange = {
  from: subMonths(startOfMonth(new Date()), 12).toISOString(),
  to: new Date().toISOString(),
}

/**
 * Creates a store for managing the income view state.
 *
 * @example
 * const { isOpen, dateRange, period, setOpen, setDateRange, setPeriod } = useIncomeViewStore();
 *
 * // Open the income view
 * setOpen(true);
 *
 * // Set a custom date range
 * setDateRange("2023-01-01", "2023-12-31");
 *
 * // Change the grouping period
 * setPeriod("yearly");
 */
export const useIncomeViewStore = create<IncomeViewState>()((set) => ({
  isOpen: false,
  dateRange: defaultDateRange,
  period: 'monthly',
  setOpen: (isOpen) => set({ isOpen }),
  setDateRange: (from, to) => set({ dateRange: { from, to } }),
  setPeriod: (period) => set({ period }),
}))
