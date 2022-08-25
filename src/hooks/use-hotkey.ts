import { useEffect } from "react";

export const useHotkey = (key: string, callback: () => void) => {
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === key) {
        callback();
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener("keydown", handle);
    return () => {
      document.removeEventListener("keydown", handle);
    };
  }, [key]);
};

export const useMixedHotkey = (
  key: string,
  onOnce: () => void,
  onDouble: () => void
) => {
  useEffect(() => {
    let timer: any;

    const handler = (e: KeyboardEvent) => {
      if (e.key !== key) return;

      if (timer) {
        clearTimeout(timer);
        timer = null;
        onDouble();
      } else {
        timer = setTimeout(() => {
          timer = null;
          onOnce();
        }, 250);
      }

      e.preventDefault();
      e.stopPropagation();
    };

    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);
};
