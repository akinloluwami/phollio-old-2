import { useRef, useEffect } from "react";

function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const savedCallback = useRef<T>({ current: callback });

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current.current = callback;
  }, [callback]);

  // Set up the debounced function.
  useEffect(() => {
    function debouncedFunction(...args: any[]) {
      if (savedCallback.current.current) {
        savedCallback.current.current(...args);
      }
    }

    const id = setTimeout(debouncedFunction, delay);

    return () => {
      clearTimeout(id);
    };
  }, [delay]);

  return savedCallback.current.current as T;
}

export default useDebounce;
