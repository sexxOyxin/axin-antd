# 初始化
创建react应用
npm create vite@latest axin-antd

连接远程仓库
git init
git remote add orign https://github.com/xxx/xxx.git
git config user.name
git config user.email

精简 src 目录内容

启动项目
npm run dev
打开 http://localhost:5173/

--host 可以让项目在局域网中暴露
需要在package.json中配置dev： "dev": "vite --host 192.168.xx.xx"
mac:ifconfig 查看en0中的inet 或者 wlan0下的inet
在vite.config.ts中加上host: '0.0.0.0'，局域网+本地都运行

# reduxSum
npm i redux react-redux @reduxjs/toolkit
