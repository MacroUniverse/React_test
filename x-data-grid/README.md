一个例子：使用 react 的 mui 的 data-grid-complete， 展示后端数据库中的一个表。

前后端分离，前端发起 http get 的 api 请求， 后端读取数据库，返回一个 json 文件。

在 `x-data-grid` 文件夹中创建 React 应用（`fe` 文件夹）
```bash
# 相关的包安装在 x-data-grid/fe/node_modules
npx create-react-app fe
# 前端需要的额外包（不要进入 fe，安装在 x-data-grid/node_modules)
npm install @mui/material @emotion/react @emotion/styled @mui/x-data-grid axios
# 后端需要的包（安装在 x-data-grid/node_modules)
npm install express sqlite3 cors
```

编辑 `fe/src/App.js` 和 `fe/src/DataGridComponent.js`。
创建后端文件夹 `be` (backend) 文件夹，进入，创建 `server.js`。

现在就可以启动了
```bash
cd be
node server.js
# 另外开一个 terminal
cd fe
npm start
```
最后一个命令会自动打开浏览器，打开 `server.js` 指定的本地端口。
