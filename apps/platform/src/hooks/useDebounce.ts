import { useEffect, useState } from "react";

/**
 * A custom hook that debounces a value.
 *
 * @template T The type of the value to be debounced
 * @param {T} value The value to debounce
 * @param {number} delay The delay in milliseconds
 * @returns {T} The debounced value
 *
 * @example
 * const debouncedSearchTerm = useDebounce(searchTerm, 300);
 */
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
