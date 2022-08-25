import { useEffect } from "react";

export const useHotkey = (key: string, callback: () => void) => {
  useEffect(() => {
    const handle = (e: any) => {
      if (e.key === key) {
        callback();
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
      if (e.composedPath().length > 4) return;
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
    };

    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);
};
