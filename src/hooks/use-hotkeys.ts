import { useEffect, useRef } from "react";

type IHotKeys = string | string[];

type IHotKeysOptions = {
  once?: boolean; // 是否只执行一次
  enabled?: boolean; // 是否开始监听
  interval?: number; // 单击和双击之间的时间间隔
  onClick?: () => void;
  onDouble?: () => void;
};

function matchHotkeys(key: IHotKeys, event: KeyboardEvent): boolean {
  // 在编辑的元素里过滤掉事件
  const target: any = event.target || event.srcElement;
  const tagName = target?.tagName;

  if (
    target.isContentEditable ||
    tagName === "INPUT" ||
    tagName === "SELECT" ||
    tagName === "TEXTAREA"
  ) {
    return false;
  }

  function help(key: string) {
    if (!key) return false;

    const keys = key
      .split("+")
      .map((e) => e.trim())
      .filter(Boolean);

    const others = ["Alt", "Ctrl", "Meta", "Shift"];
    const target = keys.find((e) => !others.includes(e));

    // todo: 优化按键判断
    return (
      (target === event.key || target === event.code) &&
      keys.includes("Alt") === event.altKey &&
      keys.includes("Ctrl") === event.ctrlKey &&
      keys.includes("Meta") === event.metaKey &&
      keys.includes("Shift") === event.shiftKey
    );
  }

  if (!key || key.length === 0) return false;
  if (typeof key === "string") return help(key);
  return key.some(help);
}

export const useHotkeys = (key: IHotKeys, options: IHotKeysOptions) => {
  const { once = false, enabled: ready = true } = options;

  const fnRef = useRef(options);
  fnRef.current = options;

  useEffect(() => {
    if (!ready || !key || (Array.isArray(key) && key.length === 0)) return;
    if (!options.onClick && !options.onDouble) return;

    let handler: (e: KeyboardEvent) => void;

    const handleRemove = () => {
      document.removeEventListener("keydown", handler);
    };

    if (typeof options.onDouble === "function") {
      let timer: any;

      handler = (e: KeyboardEvent) => {
        if (!matchHotkeys(key, e)) return;

        const opt = fnRef.current;
        if (timer) {
          clearTimeout(timer);
          timer = null;
          opt.onDouble!();
        } else {
          timer = setTimeout(() => {
            timer = null;
            opt.onClick?.();
          }, opt.interval ?? 250);
        }
        e.preventDefault();
        e.stopPropagation();
        if (once) handleRemove();
      };
    } else {
      handler = (e: KeyboardEvent) => {
        if (!matchHotkeys(key, e)) return;
        fnRef.current.onClick?.();
        e.preventDefault();
        e.stopPropagation();
        if (once) handleRemove();
      };
    }

    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [key, once, ready]);
};
