# Nuxt 3 Template

✨✨✨✨ 一个使用 nuxt3 完成的官网模板，（由于 nuxt3 的首屏 ssr，可以使官网内容更好的 seo

自带国际化 i18n 内容，仅作参考
由于 nuxt3 自带的 i18n 使用报错，所以用的原始的方法。

图片来源于 https://zhuanlan.zhihu.com/p/370672866

## Setup

安装依赖并运行项目

```
# npm
npm install

npm run dev

Start the development server on `http://localhost:3000`:
```

这里有页面展示
![Image text](https://github.com/Seven7v/Nuxt3-vue3-project/blob/main/assets/img/34420fe1f5d7b5f3f4cc1ada062b961.png)

![Image text](https://github.com/Seven7v/Nuxt3-vue3-project/blob/main/assets/img/3c5d33460eff8d4586d2f9ed57a3a1e.png)

![Image text](https://github.com/Seven7v/Nuxt3-vue3-project/blob/main/assets/img/4faee223e501eefc2f2f88e328bb41e.png)

![Image text](https://github.com/Seven7v/Nuxt3-vue3-project/blob/main/assets/img/b011a3226a598819635dcb76deb62c7.png)

## build

有关于 nuxt3 部署 一定需要部署在 node 环境下运行。

```
npm run build

// 最后会提示
✔ You can preview this build using node .output/server/index.mjs
```

可以找到`.output/server/index.mjs` 直接 运行

```
node .output/server/index.mjs
```

这样就会默认在本地生成一个 3000 端口的服务器包含了项目全部内容
