/*
 * @Author: BaoR baorong@airia.cn
 * @Date: 2025-08-08 16:12:55
 * @LastEditors: BaoR baorong@airia.cn
 * @LastEditTime: 2025-08-08 17:10:50
 * @FilePath: \my-node-app\src\app.js
 * @Description:
 * Copyright (c) 2025 by maicro, All Rights Reserved.
 */
// 1.载入MySQL数据库包
let mysql = require("mysql");

// 2.创建连接：
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: 12345678,
  database: "nodetest",
});

// 3.连接数据库：
connection.connect();

// 4.执行数据库操作(增删改查)：
connection.query("SELECT * FROM `users`", function (error, result, fields) {
  if (error) throw error;
  console.log("The solution is:", result[0].solution);
});

// 5.关闭数据库连接：
connection.end();
