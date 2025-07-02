# Nextjs Nextra 文档项目

一个基于 Next.js + Nextra + TypeScript + TailwindCSS 构建的文档站点项目。

## 技术栈

- ⚡️ Next.js + TypeScript
- 📚 Nextra v4 文档框架
- 🎨 Tailwind CSS v4
- 🧩 Shadcn UI 组件库

## 环境要求

- Node.js >= 20.x
- Pnpm 9.x
- VS Code + ESLint 插件 (v3.0.5 或更高)

## 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 启动开发服务器

```bash
pnpm dev
```

启动后访问 http://localhost:8000 即可查看文档站点。

## 项目结构

```
src/
├── content/        # 文档内容目录
│   ├── zh/        # 中文文档
│   └── en/        # 英文文档
├── components/     # React 组件
├── styles/        # 样式文件
└── theme.config.js # Nextra 主题配置
```

## 编写文档

1. 在 `src/content` 目录下创建 `.mdx` 文件
2. 使用 Markdown 语法编写内容
3. 支持在 Markdown 中使用 React 组件

## 构建部署

```bash
# 构建静态文件
pnpm build

# 预览构建结果
pnpm start
```

## 许可证

[MIT](./LICENSE) License | Copyright © 2020-PRESENT [Wisdom](https://github.com/pdsuwwz)
