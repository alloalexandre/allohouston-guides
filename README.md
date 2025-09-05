# AlloHouston Guides

This repository contains the documentation for AlloHouston projects, built with [VitePress](https://vitepress.dev/).

## Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/alloalexandre/allohouston-guides.git
cd allohouston-guides
```

2. Install dependencies:

```bash
npm install
```

## Development

To start the development server with hot-reload:

```bash
npm run docs:dev
```

The documentation site will be available at `http://localhost:5173`

## Build

To build the documentation site for production:

```bash
npm run docs:build
```

The built files will be available in the `.vitepress/dist` directory.

## Project Structure

```plaintext
allohouston-guides/
├── docs/                 # Documentation source files
│   ├── overview.md      # Main overview
│   ├── cliston-cli/     # CLI documentation
│   └── suprakit-ui/     # UI components documentation
├── .vitepress/          # VitePress configuration
└── package.json         # Project dependencies and scripts
```

## Contributing

1. Create a new branch for your changes
2. Make your changes
3. Submit a pull request

## License

This project is private and proprietary to AlloHouston.
