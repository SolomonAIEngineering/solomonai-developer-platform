'use client';
import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { TooltipProvider } from '@/components/plate-editor/plate-ui/tooltip';
/**
 * PlateEditorTooltipProvider component.
 *
 * This component wraps its children with both NextThemesProvider and TooltipProvider,
 * providing theme support and customizable tooltips for the Plate editor.
 *
 * @param props - The component props
 * @param props.children - The child components to be wrapped
 * @param props.customDelayDuration - Optional custom delay duration for tooltips
 * @param props.disableHoverableContent - Whether to disable hoverable content in tooltips
 * @param props.skipDelayDuration - Duration to skip delay when quickly moving between tooltips
 *
 * @example
 * ```tsx
 * <PlateEditorTooltipProvider>
 *   <YourEditorComponent />
 * </PlateEditorTooltipProvider>
 * ```
 */
export function PlateEditorTooltipProvider({ children, customDelayDuration, disableHoverableContent = true, skipDelayDuration = 0, ...props }) {
    // Use custom delay duration if provided, otherwise fallback to default
    const delayDuration = customDelayDuration ?? 500;
    return (<NextThemesProvider {...props}>
      <TooltipProvider disableHoverableContent={disableHoverableContent} delayDuration={delayDuration} skipDelayDuration={skipDelayDuration}>
        {children}
      </TooltipProvider>
    </NextThemesProvider>);
}
/**
 * A hook to access the PlateEditorTooltipProvider context.
 * This is a placeholder and should be implemented if needed.
 *
 * @returns The context value of PlateEditorTooltipProvider
 * @throws Error if used outside of PlateEditorTooltipProvider
 */
export function usePlateEditorTooltipContext() {
    // Implementation would go here
    throw new Error('usePlateEditorTooltipContext must be used within a PlateEditorTooltipProvider');
}
