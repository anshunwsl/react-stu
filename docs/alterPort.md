# 修改Create-react-app 默认端口

1. 安装 `npm install cross-env -g`

2. 修改package.json 文件的 start 命令.

`"start": "cross-env PORT=8094 react-scripts start",`


//
3.修改 create-react-app,可解释src之外的文件夹中的内容

(1) `yarn eject` 
(2) 修改其中的webpack 配置信息. 