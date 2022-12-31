---
title: Frontend
parent: Architecture
nav_order: 1
---

# Overview

This is a basic CRA application. I'm trying to maintain it as simples as possible and, since one of the main objective of this project is so I can improve my web development skills I'm not using any component and/or animation libraries.

In the future, I intend to replace CRA for Vite, the tooling seems much better and faster.

# Main Packages

For a complete list, check the project's `packages.json` file.

- TypeScript
- Webpack
- Prettier
- ESLint
- React
- Styled Components
- React Router
- React Query
- React Testing Library

# File structure

The structure is based of CRA and, as far as I know, it is pretty standard. Most of the folders have self describing names, and this should be a pattern to be followed.
The root folder contains config files, e.g. `.gitignore`, `tsconfig.json`, and the folders bellow:

- `public`: contains the base HTML which will be served. Here, we can change the page title, for example.
- `src`: contains all the code of the application. There can be new folders inside it. All folder should be named in lower case and should have a meaningful name.
- `src/components`: contains all the custom components. These components are responsible for only one thing in the application, and may be reused (you may call them single function components). Each component is stored inside a new folder. The folder name will be the component's name in pascal case, and inside it will have an `index.tsx` file with the `jsx` code and another file, `styles.ts`, with the styled components.
- `src/hooks`: contains all custom hooks. Each hook is a single file, and as every hook in React, it should start with "use". Hooks names are camel case.
- `src/pages`: contains the components composed by single function components. These components normally corresponds to an entire feature, e.g. budget management.
- `src/tests`: contains the tests for all the components created in `src/components`.
