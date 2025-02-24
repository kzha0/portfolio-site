# Frontend

## Remix templates/spa

This template leverages [Remix SPA Mode](https://remix.run/docs/en/main/guides/spa-mode) to build your app as a Single-Page Application using [Client Data](https://remix.run/docs/en/main/guides/client-data) for all of your data loads and mutations.

## Development

You can develop your SPA app just like you would a normal Remix app, via:

```shellscript
pnpm run dev
```

## Production

When you are ready to build a production version of your app, `npm run build` will generate your assets and an `index.html` for the SPA.

```shellscript
pnpm run build
```

### Preview

You can preview the build locally with [vite preview](https://vitejs.dev/guide/cli#vite-preview) to serve all routes via the single `index.html` file:

```shellscript
pnpm run preview
```

> [!IMPORTANT]
>
> `vite preview` is not designed for use as a production server

### Deployment

You can then serve your app from any HTTP server of your choosing. The server should be configured to serve multiple paths from a single root `/index.html` file (commonly called "SPA fallback"). Other steps may be required if the server doesn't directly support this functionality.

For a simple example, you could use [sirv-cli](https://www.npmjs.com/package/sirv-cli):

```shellscript
npx sirv-cli build/client/ --single
```

### A Visual IDE for React Projects

Codux is an all-in-one visual development environment. Whether you’re starting a new app, creating components, or editing an existing project, every visual change you make reflects instantly in the code and vice versa. To learn more about Codux, visit our website - [https://www.codux.com/](https://www.codux.com/)

This project was bootstrapped with [`Remix`](https://remix.run/).

It includes a single React component to start your project with, a sample [`codux.config.json`](codux.config.json) with preconfigured keys, a `package.json` file to describe the project's packages and dependencies, and a folder and component structure to put everything neatly in its place.

- Edit, render and compose apps that make use of **`React`**-based components.
- Create components with **`TypeScript`**, **`SCSS`** and **`CSS Modules`** support.
- Visually edit in real-time and in an isolated environment.
