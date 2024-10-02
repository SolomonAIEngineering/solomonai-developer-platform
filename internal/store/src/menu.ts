import { create } from 'zustand'

/**
 * Represents the state of the menu.
 */
interface MenuState {
  /** Indicates whether the menu is in customization mode. */
  isCustomizing: boolean
  /** Function to set the customization mode. */
  setCustomizing: (isCustomizing: boolean) => void
  /** Function to toggle the customization mode. */
  toggleCustomizing: () => void
}

/**
 * Creates a store for managing the menu state.
 *
 * @example
 * const { isCustomizing, setCustomizing, toggleCustomizing } = useMenuStore();
 *
 * // Enter customization mode
 * setCustomizing(true);
 *
 * // Toggle customization mode
 * toggleCustomizing();
 */
export const useMenuStore = create<MenuState>()((set) => ({
  isCustomizing: false,
  setCustomizing: (isCustomizing) => set({ isCustomizing }),
  toggleCustomizing: () =>
    set((state) => ({ isCustomizing: !state.isCustomizing })),
}))
