import { create } from 'zustand'

/**
 * Represents the state for exporting data.
 */
interface ExportState {
  /** The ID of the current export process. */
  exportId: string | null
  /** Function to set the export ID. */
  setExportId: (exportId: string | null) => void
}

/**
 * Creates a store for managing the export state.
 *
 * @example
 * const { exportId, setExportId } = useExportStore();
 *
 * // Set the export ID when starting an export process
 * setExportId("export-123");
 *
 * // Clear the export ID when the process is complete
 * setExportId(undefined);
 */
export const useExportStore = create<ExportState>()((set) => ({
  exportId: null,
  setExportId: (exportId) => set({ exportId }),
}))
