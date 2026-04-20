# CLAUDE.md

欢迎来到 SpringBlade 开源前端版 Saber（master 分支）。本文档汇总了工程结构、Avue CRUD 约定、动态路由与权限、Axios 拦截链、Vuex 状态与多租户/国际化等常见约定，帮助 Claude Code 快速上手，产出与项目风格一致的代码。

作为 AI 助手参与本项目开发时，你必须：

- 动手前先看一看目标模块（`src/views/{module}/` + `src/api/{module}/`）的现有实现，模仿它的结构与风格通常是最快的路径
- 需要外部知识时，优先查阅 Vue 3、Element Plus、Avue、Vite、Vuex、vue-i18n 的官方文档，而不是凭记忆作答
- 需求不够清晰时，先复述已知信息、抛出关键澄清问题，再动手
- 面对跨模块改动（动态路由、权限按钮、状态持久化等），拆成可验证的小步骤逐步推进比一气呵成更稳妥

> 所有开发内容必须建立在深度思考过的基础之上，禁止机械生成与错误填充。
> 如果你已了解所有规范，请在用户第一次对话时说明："我已充分了解 SpringBlade 开源前端版开发规范。"

---

## 1. 项目概览

**Saber** 是 SpringBlade 开源微服务平台的官方前端工程，基于 Vue 3 生态构建的企业级后台管理系统，与后端 SpringBlade（Boot/Cloud）配套使用。

### 1.1 技术栈

| 技术               | 用途               |
| ------------------ | ------------------ |
| Vue 3              | 核心框架           |
| Element Plus       | UI 组件库          |
| @smallwei/avue     | 增强型 CRUD 组件库 |
| Vue Router         | 路由管理           |
| Vuex               | 状态管理           |
| Axios              | HTTP 客户端        |
| Vite               | 构建工具           |
| vue-i18n           | 国际化（中/英/日） |
| Sass               | CSS 预处理器       |
| crypto-js / sm-crypto | 加密（AES / SM2） |
| NProgress          | 顶部进度条         |
| js-cookie          | Token Cookie 存储  |

---

## 2. 项目架构

```
Saber/
├── src/
│   ├── main.js                  # 应用入口（全局组件注册、插件挂载）
│   ├── App.vue                  # 根组件
│   ├── permission.js            # 路由守卫（鉴权、标签页、锁屏）
│   ├── axios.js                 # HTTP 拦截器（Token 注入、错误统一处理、401 登出）
│   ├── error.js                 # 全局错误处理
│   ├── mockProdServer.js        # Mock 服务（生产构建可选）
│   ├── api/                     # API 接口层（按业务模块组织）
│   │   ├── system/              # 系统管理（菜单/字典/部门/角色/租户等）
│   │   ├── desk/                # 工作台（通知等）
│   │   ├── tool/                # 开发工具（代码生成/数据源）
│   │   ├── base/                # 基础数据（区域等）
│   │   ├── report/              # 报表
│   │   ├── user.js              # 认证与用户（登录/刷新/登出/验证码）
│   │   └── logs.js              # 日志上报
│   ├── views/                   # 业务页面（按模块目录组织）
│   │   ├── system/              # 用户/角色/菜单/字典/部门/租户/岗位/应用/参数/顶部菜单
│   │   ├── authority/           # 角色权限/数据权限/接口权限
│   │   ├── monitor/log/         # 通用日志/接口日志/错误日志
│   │   ├── desk/                # 通知公告
│   │   ├── tool/                # 代码生成/数据源
│   │   ├── base/                # 区域维护
│   │   ├── report/              # 报表列表
│   │   ├── user/                # 个人中心
│   │   ├── util/                # 工具 Demo（表格/表单/权限/store/tags 等）
│   │   └── wel/                 # 首页/控制台
│   ├── option/                  # Avue 表格/表单配置（可选抽离）
│   │   └── crud/                # 配合 mixins/crud.js 动态加载
│   ├── config/                  # 全局配置
│   │   ├── website.js           # 核心配置（认证、菜单、OAuth2、租户、授权地址）
│   │   ├── env.js               # 接口基础地址（来自 Vite 环境变量）
│   │   └── iconList.js          # 图标元数据
│   ├── store/                   # Vuex 状态管理
│   │   ├── index.js             # Store 入口
│   │   ├── getters.js           # 全局 getter
│   │   └── modules/             # user / common / tags / logs
│   ├── router/                  # 路由系统
│   │   ├── index.js             # Router 入口
│   │   ├── avue-router.js       # 动态路由核心（菜单→路由、iframe 转换、Token 透传）
│   │   ├── page/                # 页面级路由（登录、锁屏、错误页）
│   │   └── views/               # 视图路由（首页、控制台、util Demo）
│   ├── components/              # 全局公共组件（basic-container/basic-block/iframe 等）
│   ├── mixins/                  # 混入（crud.js 按路径自动装配 option 与 api）
│   ├── utils/                   # 工具函数（auth/crypto/sm2/validate/store/util/func）
│   ├── lang/                    # 国际化（zh / en / ja）
│   ├── styles/                  # 全局样式 & 多主题（theme/ 下多套配色）
│   ├── mac/                     # macOS 风格主题外壳（index/login/lock）
│   └── page/                    # 页面布局框架（主布局、登录、锁屏）
├── vite/                        # Vite 插件配置（auto-import / compression / setup-extend）
├── vite.config.mjs              # Vite 主配置（端口 2888、别名、代理）
├── .env.development             # 开发环境变量
├── .env.production              # 生产环境变量
├── .prettierrc.json             # Prettier 配置
└── package.json
```

### 2.1 路径别名

`@` → `./src`、`~` → `./`、`components` → `./src/components`、`styles` → `./src/styles`、`utils` → `./src/utils`

---

## 3. 核心机制

### 3.1 Avue 组件代码生成（Skill 调用）

当涉及 `avue-crud`、`avue-form`、`avue-tree` 等 Avue 组件的代码生成或配置时，**优先调用 `avue-design` Skill**。该 Skill 覆盖 Avue 全部组件类型。

**触发场景**：用户要求创建 CRUD 表格、Avue 表单、树组件、数据展示页面，或提到 avue、crud 表格、动态表单、JSON 配置表单等关键词。

### 3.2 Avue Option 配置

本工程中 Avue 配置有两种常见做法，按需选择：

- **内联 option**（主流）：直接写在 `.vue` 文件的 `data()` 里，`src/views/system/` 下大多如此，便于单文件阅读与独立维护
- **抽离到 `src/option/`**：用于配合 `mixins/crud.js` 的自动装配（按路径映射同名 `src/option/*.js` 与 `src/api/*.js`），适合重复性高、模板化的模块

两种做法可共存，同一模块选定一种后保持一致。

### 3.3 API 接口规范

- 所有 API 通过 `src/axios.js` 封装的 Axios 实例发起，按业务模块组织于 `src/api/`
- 命名约定：列表 `getList(current, size, params)`、详情 `getDetail(id)` / `getXxx(id)`、新增 `add(row)`、更新 `update(row)`、删除 `remove(ids)`、树形 `getXxxTree()`
- `add` 与 `update` 通常指向同一后端接口（如 `/blade-system/{module}/submit`），由后端根据 `id` 是否存在区分，这是 BladeX 的固定写法，保持一致即可
- 后端微服务前缀：`/blade-auth/`、`/blade-system/`、`/blade-desk/`、`/blade-develop/`、`/blade-log/`、`/blade-report/`
- `/user/` 开头的接口走前端 Mock 或聚合层，用于少量登录态辅助接口（如 `/user/getUserInfo`、`/user/send-logs`）

### 3.4 认证机制

- **OAuth2**：请求头 `Authorization: Basic <Base64(clientId:clientSecret)>`，客户端标识来自 `website.clientId` / `website.clientSecret`
- **Token**：请求头 `Blade-Auth: bearer <token>`，`config.cryptoToken === true` 时切换为 `crypto <AES(token)>` 加密模式（见 `utils/crypto.js`）
- **Token 存储**：通过 `js-cookie` 管理，Key 分别为 `saber3-access-token`、`saber3-refresh-token`（`utils/auth.js`，注意这是 Cookie 的固定 Key，请勿随意修改避免与已存在会话冲突）
- **密码加密**：登录密码使用 SM2 国密加密（`utils/sm2.js`），公钥在 `website.auth.publicKey`，需与后端 `Sm2KeyGenerator` 生成的密钥对保持一致
- **401 处理**：响应拦截器检测到 `status === 401` 时派发 `FedLogOut` 并跳转 `/login`
- **验证码**：`website.captchaMode` 开启时，登录请求头带 `Captcha-Key` / `Captcha-Code`，`grantType` 为 `captcha`

### 3.5 路由系统

- **静态路由**：`router/page/`（登录、锁屏、错误页）+ `router/views/`（首页、控制台、util Demo）
- **动态路由**：`avue-router.js` 将后端菜单数据（来自 `/blade-system/menu/routes`）转换为 Vue Router 路由，经 `formatPath` 处理后通过 `router.addRoute` 注入
- **组件自动装配**：动态路由的 `component` 字段按 `views/{path}.vue` 约定通过 `import.meta.glob` 解析
- **外链自动转 iframe**：`href` 匹配 `http(s)://` 时自动挂载 `components/iframe/main.vue`，同时将 `${token}` 占位符替换为当前 Token 实现透传
- **macOS 皮肤**：`isMacOs` 为真时使用 `page/index/layout.vue` 之外的 `mac/` 布局

### 3.6 权限控制

- **路由守卫**：`permission.js` 控制登录态校验、锁屏跳转、标签页写入
- **按钮权限**：`store.getters.permission`，结构为 `{ dict_add: true, dict_delete: true, ... }`，命名约定 `{module}_{action}`，模板中 `v-if="permission.dict_delete"`
- **管理员判断**：`userInfo.authority.includes('admin')`，用于展示超管专属操作
- **权限树**：`getButtons` 拉取 `/blade-system/menu/buttons` 的按钮码集合，扁平化后写入 store

### 3.7 多租户与国际化

- **多租户**：`website.tenantMode` 控制开关，管理组租户编号 `000000`，登录时带 `tenantId`，后续请求由后端根据 Token 自动识别
- **i18n**：默认支持 `zh-cn` / `en` / `ja` 三种语言，Element Plus 与 Avue 的 locale 同步切换（见 `lang/index.js`）
- 新增页面文案时，若菜单 `meta.i18n` 指向语言 Key，务必在 `lang/{zh,en,ja}.js` 的 `route.*` 下补齐对应条目

---

## 4. 开发规范

### 4.1 统一使用 Options API

本工程目前**全量使用 Options API**，暂未引入 `<script setup>` / Composition API。新增或修改页面请保持 Options API 风格，与现有代码保持一致。若确有必要引入 Composition API，请先与用户确认并评估风险（混用会降低可维护性，与 `mixins/crud.js` 的机制也存在冲突）。

### 4.2 命名规范

| 类型                       | 命名方式                   | 示例                       |
| -------------------------- | -------------------------- | -------------------------- |
| 页面文件                   | kebab-case                 | `notice.vue`、`api-scope.vue` |
| 组件文件                   | kebab-case 目录 + main.vue | `basic-container/main.vue` |
| API / Option / 工具文件    | camelCase                  | `dict.js`、`datasource.js` |
| 变量 / 函数                | camelCase                  | `dictValue`、`handleDelete` |
| Vuex mutations             | UPPER_SNAKE                | `SET_TOKEN`、`ADD_TAG`     |
| Vuex actions               | PascalCase                 | `FedLogOut`、`RefreshToken` |
| 权限编码                   | `{module}_{action}`        | `dict_add`、`user_delete`  |

### 4.3 代码格式（Prettier）

`printWidth: 100` / `tabWidth: 2` / `semi: true` / `singleQuote: true` / `arrowParens: "avoid"` / `bracketSpacing: true`

### 4.4 样式规范

- 全局 SCSS 变量通过 `styles/variables.scss` 定义，`styles/mixin.scss` 提供常用 mixin
- 多主题位于 `styles/theme/`（beautiful / cool / dark / white / star / vip 等），切换由 `store.common.themeName` 控制
- 编写样式优先使用已有变量和 mixin，而非硬编码色值；新增主题时沿用 `theme/index.scss` 的 import 结构

### 4.5 全局注册的组件 / 属性

在 `main.js` 中全局注册，可直接在模板中使用：

- `<basic-container>`、`<basic-block>`
- Element Plus 图标组件全量注册（`@element-plus/icons-vue`）

Options API 中通过 `this` 访问的全局属性：

- `this.website`（`config/website.js` 的全局配置）
- `this.$dayjs`（日期库）
- `this.getScreen`（屏幕尺寸工具）
- `this.axios`（`window.axios`，也可直接 `import request from '@/axios'`）

---

## 5. 新功能开发流程

### 5.1 新增标准 CRUD 页面

1. **调用 `avue-design` Skill** 生成标准 CRUD 页面代码（推荐），或参考 `src/views/system/dict.vue` 手动编写
2. 手动创建三件套：API 文件 `src/api/{module}/{name}.js` → 页面 `src/views/{module}/{name}.vue`（option 直接内联即可）；若想走自动装配再额外创建 `src/option/{module}/{name}.js`
3. 后端通过 `/blade-system/menu` 配置菜单项后，前端登录即可自动加载并出现在侧边栏

### 5.2 开发前必做

1. 先看同模块已有实现（如新增系统管理类页面，参考 `src/views/system/dict.vue`；新增权限类页面，参考 `src/views/authority/role.vue`），模仿其结构与风格
2. 优先使用 `src/components/`、`src/utils/`、`src/mixins/` 中的现有实现，禁止重复造轮子
3. 若需引入新 npm 包，先确认不与已有依赖冲突，以及是否真的必要（已有能力如 dayjs、crypto-js、sm-crypto、nprogress、js-base64 等请直接复用）

### 5.3 开发后验证

1. 若引入新依赖：`pnpm install` → `pnpm run build` → 确认构建通过
2. 构建通过后：`pnpm run dev` → 确认开发服务器在 `http://localhost:2888` 正常启动，目标页面可访问
3. 功能测试（鉴权/多租户/外链 iframe 等）交由用户执行，除非用户明确要求，不撰写示例代码或额外文档

---

## 6. 常用命令

```bash
pnpm run dev          # 启动开发服务器（端口 2888，带 --host）
pnpm run prod         # 启动开发服务器（加载 production 模式环境变量）
pnpm run build        # 构建（默认模式）
pnpm run build:prod   # 构建（production 模式，产出 dist/）
pnpm run serve        # 预览构建产物
```

接口代理：`vite.config.mjs` 将 `/api` 代理至 `http://localhost`（网关地址），`.env.*` 中 `VITE_APP_API` 决定前端实际请求前缀。

---

## 7. 自主学习与风格一致性

1. 风格不确定时，主动查阅当前模块现有代码并模仿，避免破坏一致性
2. 系统管理类参考：`src/views/system/dict.vue`、`src/views/system/user.vue`
3. 权限类参考：`src/views/authority/role.vue`、`src/views/authority/datascope.vue`
4. 工具类参考：`src/views/tool/code.vue`、`src/views/tool/datasource.vue`
5. 若现有模块已满足需求，禁止自写替代实现
6. 若确需新实现，须在 commit 信息中说明已检索过的相关组件、现有实现不足的原因、新实现的范围

---

## 8. Git 提交规范

当需要提交代码时，优先使用 **`/blade-commit`** skill，它会自动分析变更内容并生成符合项目规范的 Gitmoji 提交信息。

项目采用 **Gitmoji** 风格，中文描述：

| Emoji      | 代码         | 场景                   |
| ---------- | ------------ | ---------------------- |
| :sparkles: | `:sparkles:` | 新增功能、优化增强     |
| :bug:      | `:bug:`      | 修复 Bug               |
| :zap:      | `:zap:`      | 性能优化、问题修复     |
| :tada:     | `:tada:`     | 重大版本发布           |
| :lipstick: | `:lipstick:` | 样式调整               |
| :recycle:  | `:recycle:`  | 代码重构               |
| :wrench:   | `:wrench:`   | 配置修改               |
| :memo:     | `:memo:`     | 文档更新               |
| :fire:     | `:fire:`     | 删除代码 / 文件         |

---

## 9. 交流语言

与用户交互时全程使用中文。若需临时切换语言，须明确告知。
