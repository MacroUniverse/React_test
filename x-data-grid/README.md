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
最后一个命令会自动打开浏览器，打开 `server.js` 指定的本地端口。
