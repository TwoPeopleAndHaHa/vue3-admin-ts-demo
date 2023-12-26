## 创建项目

- vue [官方模板](https://cn.vuejs.org/guide/quick-start.html) npm create vue@latest

![image-20231223094217530](/../MDimg/image-20231223094217530.png)

- 清空默认配置后打开vite官网进行vite配置
  - 开发服务器配置 [server](https://cn.vitejs.dev/config/server-options.html#server-host)
  - 其中最主要的就是 Proxy 的代理 (如果服务器配置是 nginx 部署,这是最常规的方法)
- 在 vite.config.ts 文件直接访问 import.meta.env 是获取不到 env 环境文件的,需要做一层转换,可参考 [配置环境中使用环境变量](https://cn.vitejs.dev/config/#using-environment-variables-in-config)

- eslint 和 prettier 配置 , 默认采用 prettier 保存的时候去格式化 , eslint 做提示使用 , 当 eslint 与 prettier 冲突的时候以 pettier 为准 , eslint 主要做校验
  - 'process' is not defined.
    - 指派 eslint 环境
    ```
      env:{
    "node": true,
    "browser": true
    },
    ```
