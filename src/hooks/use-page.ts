import { useState } from "react";

export const usePage = <T = any>(list: T[], pageSize: number) => {
  const [index, setIndex] = useState(0);

  pageSize = Math.floor(Math.max(1, pageSize));

  const slice = (() => {
    if (list.length <= pageSize) return list;

    const temp = list.slice(index, index + pageSize);
    const rest = list.slice(0, pageSize - temp.length);
    return temp.concat(rest);
  })();

  const onPrev = (step = 1) =>
    setIndex((i) => (i + list.length - step) % list.length);
  const onNext = (step = 1) => setIndex((i) => (i + step) % list.length);

  return {
    slice,
    onPrev,
    onNext,
  };
};
