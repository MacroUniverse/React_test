一个例子：使用 react 的 mui 的 data-grid-complete， 展示后端数据库中的一个表。

前后端分离，前端发起 http get 的 api 请求， 后端读取数据库，返回一个 json 文件。

在 `x-data-grid` 中创建 React 应用
```bash
# 前端文件夹 `fe`
npx create-react-app fe
cd fe
npm install @mui/material @emotion/react @emotion/styled @mui/x-data-grid axios
cd ../
```
编辑 `fe/src/App.js`，创建 `fe/src/DataGridComponent.js`。

```bash
# 后端文件夹 be
# 用于数据库 api（端口 5515）
mkdir be
cd be
npm install express sqlite3 cors
```
创建 `be/server.js`。

创建数据库 `data/database.db`

现在就可以启动了
```bash
cd be
node server.js
# 另外开一个 terminal
cd fe
npm start
```
最后一个命令会自动打开浏览器，以及 React 页面。

在 git 仓库中，可以 ignore 所有 `node_modules` 文件夹， 需要重新安装直接在 `package*.json` 所在的目录用 `npm install` 即可。

注意浏览器上打开的 url 是 `http://localhost:3000`， 也就是说我们有两个 web server， 一个 React App 的， 一个提供数据库 api 返回 json。

为什么后端需要用 CORS？因为 api 用了一个不同的端口，所以和 React 页面是不同源的。

# 生产环境
在生产环境，一般会把 React 整个 minify，打包生成到 `build` 文件夹：
```bash
cd fe
npm run build
```
然后修改 `be/server.js`，使其在支持 API 的同时还可以访问 build 文件夹中的静态文件，修改完后的文件见 `be/server-unified.js`
```bash
cd be
node server-unified.js
```
这时候无需在 `fe` 运行之前的 `npm start`，只需直接在浏览器打开 `http://localhost:5515` 即可。
由于现在只有一个端口了，也无需设置 CORS 了。
此时 `fe` 文件夹里面根本不需要安装任何东西，可以把所有东西都删掉只留下 `build` 文件夹。
