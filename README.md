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

- tsconfig配置

  - global.d.ts 的 type ,在 build/\*\*/ 下无法被检测到
  - 后来排查详细查看 https://juejin.cn/post/7224051399256096829

- 动态路由等路由刷新页面404

  - 原因是因为页面刷新时候动态添加的路由并不会留存,再次刷新时需要重新调用一次addRoute
  - 解决思路 : 在 router.beforeEach 进行逻辑判断使其调用两遍路由守卫 , 最简单的做法就是不要把 store 的路由数据进行缓存,每次刷新就重新去调用接口获取异步路由

- mock.js 与 el-upload 冲突
  - 因为 mock 会把 XMLHttpRequest 代理到 window.XMLHttpRequest, 导致 el-upload 无法正常使用, 解决方法最好是将 mock 移除 (https://github.com/nuysoft/Mock/issues/244)
