// frontend/lib/hooks.ts
import { useEffect, useState, useRef } from "react";

// 1. Debounce: Delays execution until the user stops typing for a set time.
export function useDebounce<T>(value: T, delay: number): T {
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

// 2. Throttle: Ensures a function runs at most once every X milliseconds.
export function useThrottle<T>(value: T, interval: number): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastExecuted = useRef<number>(Date.now());

  useEffect(() => {
    if (Date.now() >= lastExecuted.current + interval) {
      lastExecuted.current = Date.now();
      setThrottledValue(value);
    } else {
      const timerId = setTimeout(() => {
        lastExecuted.current = Date.now();
        setThrottledValue(value);
      }, interval);

      return () => clearTimeout(timerId);
    }
  }, [value, interval]);

  return throttledValue;
}

// 3. Autosave: Automatically saves data after a period of inactivity.
export function useAutosave(data: any, onSave: (data: any) => void, delay: number = 2000) {
  useEffect(() => {
    // Don't autosave on the very first render
    const timer = setTimeout(() => {
      onSave(data);
    }, delay);

    return () => clearTimeout(timer);
  }, [data, onSave, delay]);
}