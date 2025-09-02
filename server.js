/*
 * @Author: BaoR baorong@airia.cn
 * @Date: 2025-08-08 14:28:50
 * @LastEditors: BaoR baorong@airia.cn
 * @LastEditTime: 2025-08-08 14:39:22
 * @FilePath: \my-node-app\server.js
 * @Description:
 * Copyright (c) 2025 by maicro, All Rights Reserved.
 */
const express = require("express");
const app = express();
const port = 3000;

// 设置静态文件目录
app.use(express.static("public"));

// 中间件
app.use(express.json());

// 处理 GET 请求
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// 带参数的路由
app.get("/user/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

// POST请求示例
app.post("/data", (req, res) => {
  console.log(req.body);
  res.json({ received: true });
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running at http://192.168.1.62:${port}`);
});
