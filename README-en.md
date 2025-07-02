# Nextjs Nextra Documentation Project

A documentation site project built with Next.js + Nextra + TypeScript + TailwindCSS.

## Technology Stack

- ⚡️ Next.js + TypeScript
- 📚 Nextra v4 documentation framework
- 🎨 Tailwind CSS v4
- 🧩 Shadcn UI component library

## Environment Requirements

- Node.js >= 20.x
- Pnpm 9.x
- VS Code + ESLint plugin (v3.0.5 or higher)

## Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Start Development Server

```bash
pnpm dev
```

After starting, visit http://localhost:8000 to view the documentation site.

## Project Structure

```
src/
├── content/        # Documentation content directory
│   ├── zh/        # Chinese documentation
│   └── en/        # English documentation
├── components/     # React components
├── styles/        # Style files
└── theme.config.js # Nextra theme configuration
```

## Writing Documentation

1. Create a `.mdx` file in the `src/content` directory
2. Write content using Markdown syntax
3. Supports using React components within Markdown

## Building and Deployment

```bash
# Build static files
pnpm build

# Preview build results
pnpm start
```

## License

[MIT](./LICENSE) License | Copyright © 2020-PRESENT [Wisdom](https://github.com/pdsuwwz)
