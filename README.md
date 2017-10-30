![Logo](src/assets/images/logo.png)

# CSS 发现之旅（CSS Discovery）

CSS 发现之旅，体验不同架构CSS技术与架构

## 安装 / 快速入门

使用git下载平台代码，命令：

```shell
  git clone https://github.com/snowgrus/css-discovery.git
```

或直接下载zip文件

下载后，直接使用浏览器打开，src 下的 index.html 文件

## 开发

### 构建工具

Gulp, Sass

### 先决条件

确保已经安装 node.js

### 开发环境搭建

#### npm

> 在国内推荐安装 npm 淘宝镜像

```shell
npm config set registry https://registry.npm.taobao.org
npm install
```

> 由于我们使用 gulp，接下来安装 gulp-cli

```shell
npm install gulp-cli -g
```

> 在开发目录文件夹下安装依赖

```shell
npm install
```

#### Yarn

> 安装 Yarn

```shell
npm install yarn -g
```

> 在国内推荐使用 npm 淘宝镜像

```shell
yarn config set registry  https://registry.npm.taobao.org
```

> 由于我们使用 gulp，接下来安装 gulp-cli

```shell
yarn global add gulp-cli
```

> 在开发目录文件夹下安装依赖

```shell
yarn
```

### 构建

打开命令行，跳转到代码文件夹，运行gulp

```shell
cd css-discovery

gulp
```

在浏览器中输入 ```http://localhost:5200/```

## 版本

查看![版本修改记录](CHANGELOG.md)

## Licensing

MIT

