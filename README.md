# colorwebsite

> AlloyTeam website

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


├── build                      // 构建相关  
├── config                     // 配置相关
├── exampleImgs                // 项目示例图片
├── outdb                      // 导入数据库的初始化数据
├── server                     // node服务端
│   ├── api.js                    // 封装的接口请求
│   ├── db.js                     // db数据模型定义
│   ├── index.js                  // express服务器
│   ├── mutils.js                 // 服务端工具类
├── src                        // 源代码
│   ├── assets                 // 图片等静态资源
│   ├── components             // 全局公用组件
│   ├── config                 // 接口请求配置
│   ├── fonts                  // fontawesome字体库文件
│   ├── layout                 // 全局 组件
│   ├── page                   // 项目所有的视图
│   ├── register               // 第三方库注册
│   ├── router                 // 登录路由
│   ├── store                  // 项目vuex数据存储器
│   ├── style                  // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── vendor                 // 公用vendor
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口 加载组件 初始化
├── static                     // 第三方不打包资源
│   └── Tinymce                // 富文本
├── .babelrc                   // babel-loader 配置
├── .gitignore                 // git 忽略项
├── eslintrc.js                // eslint 配置项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
├── package.json               // 包依赖配置
└── README.md                  // 说明文件

作者：wdlhao
链接：https://juejin.im/post/5a3f223351882506e50cda5c
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。