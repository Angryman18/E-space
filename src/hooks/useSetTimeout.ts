import { useCallback } from "react";

export default function useSetTimeout() {
  const timeoutCall = useCallback((func: () => void, time: number = 500) => {
    let timer = setTimeout(() => {
      func();
      clearTimeout(timer);
    }, time);
  }, []);
  return timeoutCall;
}
