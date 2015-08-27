# fis3-parser-html-uri

*html*文件增加类似js文件中的*__uri*资源自动定位功能函数

## 安装

```bash
$ npm install [-g] fis3-parser-html-uri
```

## 基本使用

```js
fis.match('*.html', {
  parser: fis.plugin('html-uri')
});
```

## 自定义函数名

```js
fis.match('*.html', {
  parser: fis.plugin('html-uri', {
    name : '__my_uri'
  })
});
```