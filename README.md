# Bilibili Boring

[点击安装脚本](https://github.com/zzzgydi/bilibili-boring/raw/main/dist/bilibili-boring.user.js) 需要先在浏览器中安装油猴插件。

一个用于无聊刷 b 站视频的油猴脚本。该脚本主要为了解决本人在面对 b 站首页琳琅满目花里胡哨的视频列表，选择困难症犯难导致不知道看哪个视频的问题。在吃饭时、写代码时，只是想要有个会动有声音的视频在旁边放着就行。

## 功能说明

通过 bilibili 的首页视频推荐接口获取视频列表存在本地，自动连播视频列表中的视频。

- 在 b 站页面，单击`Backspace`，弹出一个页面，可以点击“刷新”，更新本地视频列表。（当本地视频数量较少时，会自动更新）
- 在 b 站页面，双击`Backspace`，开启自动连播视频。
- 在视频播放页，单击`Delete`或者`Ctrl+Backspace`或者`Cmd+Backspace`，可以跳过当前视频，自动播放下一个。

获取视频列表支持**自定义过滤规则**，支持白名单和黑名单的方式。
写法形如`[key] [operator] [value]`，一行一条规则。

支持的key如下：

- `bvid` | `id`: 视频的id
- `title`: 视频标题
- `up` | `name`: up主的名称
- `upid` | `mid`: up主的id
- `view`: 视频播放量
- `like`: 视频点赞量
- `danmaku`: 视频弹幕量
- `duration`: 视频时长 单位秒
- `pubdate`: 视频发布日期 单位秒
- `followed` | `follow` | `is_followed`: 是否关注（值为false或0表示假，其余值为真）

支持的操作符(operator)如下：

- `=  ==`: 判断相等
- `!=`: 判断不相等
- `> < >= <=`: 不等式
- `has`: 判断字符串是否包含子串

黑名单过滤规则举例如下，将会过滤up名称是xxx的视频，up名称包含“赛博顶真”的视频以及视频标题包含“同学”的视频。

```txt
up == xxx
up has 赛博顶真
title has 同学
```

## 功能展示

单击`Backspace`弹出页面。

![视频列表页](docs/demo-1.png)

## Acknowledgement

- [lisonge/vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey): vite plugin for Tampermonkey and Violentmonkey and Greasemonkey.
