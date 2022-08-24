/// <reference types="vite/client" />

/**
 * alias of vite-plugin-monkey/dist/client
 */
declare module "$" {
  export * from "vite-plugin-monkey/dist/client";
}

interface IVideoItem {
  bvid: string;
  title: string;
  pic: string;
  uri: string;
  owner?: {
    mid: number;
    name: string;
  };
  stat?: {
    view: number;
    like: number;
    danmaku: number;
  };
  duration: number;
  is_followed: number;
  pubdate: number;
}
