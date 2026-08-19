# 🌟 Sky 个人 IP 与作品集网站

欢迎来到 **Sky 个人 IP 与作品集网站**！这是一个基于 **React 19 + TypeScript + Vite + Tailwind CSS** 精心打造的现代化、极简主义个人主页与开源作品展示平台。

无论你是刚接触前端开发的新手，还是想要快速搭建个人技术博客与作品集的开发者，通过这份保姆级说明，你可以完全看懂每一个文件的作用、学会如何定制修改，并一键部署上线。

---

## 📂 项目文件结构与详细介绍

项目的所有文件都位于根目录下。以下是每个核心文件与文件夹的通俗解释：

```text
├── .github/
│   └── workflows/
│       └── deploy.yml       # [GitHub Actions] 自动部署流水线，推送代码时自动构建并发布到 GitHub Pages
├── public/
│   └── favicon.png          # 网站头像与浏览器标签页图标（支持自定义更换）
├── src/
│   ├── components/
│   │   ├── About.tsx        # 「关于我」组件：展示个人履历、技能熟练度进度条
│   │   ├── Articles.tsx     # 「技术文章」组件：渲染深度思考与技术分享列表及文章阅读模态框
│   │   ├── Contact.tsx      # 「联系合作」组件：表单交互与社交主页快捷复制
│   │   ├── Footer.tsx       # 页面底部：版权声明与社交媒体图标
│   │   ├── Hero.tsx         # 首页首屏（Hero）：主标题、Terminal 交互卡片与核心统计
│   │   ├── Navbar.tsx       # 顶部导航栏：响应式菜单、亮暗色主题切换及导航锚点跳转
│   │   ├── Playground.tsx   # 「AI 实验室」组件：交互式 AI 架构灵感生成器
│   │   ├── ProjectModal.tsx # 项目详情弹窗组件：展示项目的长文介绍与技术栈细节
│   │   └── Projects.tsx     # 「精选作品」组件：多分类标签筛选、GitHub Stars 与跳转链接
│   ├── data/
│   │   └── mockData.ts      # 🌟【最重要】核心数据文件：修改你的名字、简介、项目列表、文章都在这里！
│   ├── App.tsx              # 根组件：管理全局主题状态（亮色/暗色）与页面整体布局组合
│   ├── index.css            # 全局样式文件（引入 Tailwind CSS）
│   ├── main.tsx             # JavaScript/TypeScript 入口文件：将 React 应用挂载到网页 DOM
│   └── types.ts             # TypeScript 类型定义文件（规范项目中的数据结构）
├── .env.example             # 环境变量示例文件
├── .gitignore               # Git 忽略提交配置文件（如 node_modules）
├── index.html               # HTML 网页主入口：定义网页标题、SEO 描述与图标引用
├── metadata.json            # 平台元数据与应用配置
├── package.json             # 项目配置文件：管理依赖包（如 lucide-react 图标库）与启动脚本
├── tsconfig.json            # TypeScript 编译器配置文件
└── vite.config.ts           # Vite 构建工具配置文件（包含 base: './' 相对路径适配）
```

---

## 🛠️ 如何修改你的个人资料与作品？

新手想要改成你自己的个人网站，只需要修改 **1 个核心文件**：`/src/data/mockData.ts`。

1. **修改个人基本信息**：
   打开 `/src/data/mockData.ts`，找到 `PERSONAL_INFO` 对象，修改你的名字、邮箱、GitHub 主页等：
   ```ts
   export const PERSONAL_INFO = {
     name: "你的名字",
     title: "全栈工程师 & AI 创造者",
     email: "your_email@gmail.com",
     github: "https://github.com/yourname",
     ...
   };
   ```
2. **修改头像**：
   将你的头像图片命名为 `favicon.png` 并替换 `/public/favicon.png` 即可。
3. **修改作品与文章**：
   在同文件的 `PROJECTS` 数组中添加或修改你的开源项目、在线演示链接（`liveUrl`）和 GitHub 地址。

---

## 💻 本地开发指南（小白上手）

如果你想在本地电脑运行和调试：

1. **安装 Node.js**（建议 v18 或更高版本）。
2. 在项目根目录下打开终端，安装依赖：
   ```bash
   npm install
   ```
3. 启动本地开发服务器：
   ```bash
   npm run dev
   ```
4. 打开浏览器访问终端中显示的地址（通常是 `http://localhost:3000`）。

---

## 🚀 如何部署上线（免费发布到 GitHub Pages）

本项目已内置自动化部署功能，完全免费：

1. 在 GitHub 上创建一个新的公开仓库（例如 `my-portfolio`）。
2. 将代码推送到你的 GitHub 仓库的 `main` 分支：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/你的仓库名.git
   git push -u origin main
   ```
3. 进入你的 GitHub 仓库页面 -> **Settings** -> **Pages**：
   - **Build and deployment** 的 **Source** 选择 **GitHub Actions**。
4. 推送后，GitHub Actions 会自动运行 `.github/workflows/deploy.yml` 脚本，自动打包并发布。几分钟后即可通过生成的 GitHub Pages 链接访问你的专属个人主页！
