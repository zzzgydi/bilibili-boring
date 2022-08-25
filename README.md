# Bilibili Boring

[点击安装](https://github.com/zzzgydi/bilibili-boring/raw/main/dist/bilibili-boring.user.js)

一个用于无聊刷 b 站视频的油猴脚本。该脚本主要为了解决本人在面对 b 站首页琳琅满目花里胡哨的视频列表，选择困难症犯难导致不知道看哪个视频的问题。在吃饭时、写代码时，只是想要有个会动有声音的视频在旁边放着就行。

## 功能说明

通过 bilibili 的首页视频推荐接口获取视频列表存在本地，自动连播视频列表中的视频。

- 在 b 站页面，单击`Backspace`，弹出一个页面，可以点击“刷新”，更新本地视频列表。（当本地视频数量较少时，会自动更新）
- 在 b 站页面，双击`Backspace`，开启自动连播视频。

## 功能展示

单击`Backspace`弹出页面

![视频列表页](docs/demo-1.png)

## Todos

- [ ] 支持一些规则过滤不喜欢的视频
- [ ] 增加一些快捷键

## Acknowledgement

- [lisonge/vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey): vite plugin for Tampermonkey and Violentmonkey and Greasemonkey.
