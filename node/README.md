# big 文件
参考链接：https://juejin.cn/post/7324140839780433932#heading-2

大文件分片上传 - 客户端将文件分片，每个分片单独发送请求到服务器端

> 在每次上传前先询问服务器某文件的上传状态，返回该文件是否上传过分片
断点续传 - 有需要上传的分片
秒传 - 文件已上传过

整体前端流程：
用户上传文件
文件分片 + 文件hash值生成
询问服务端是否上传过？
  上传过 - 秒传
  文件存在不完整 - 断点续传，上传未上传过的分片
  未上传过 - 上传分片
通知服务端进行merge合并操作
## 后端-服务器
cd node
npm init
npm install express multer cors body-parser

node浏览器调试命令：
node --inspect server.js

判断运行环境：
node：process
浏览器/browser：window
## 前端