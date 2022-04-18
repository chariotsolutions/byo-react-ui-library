<p align="center">
  <a href="https://chariotsolutions.com">
    <img alt="Medusa" src="https://chariotsolutions.com/wp-content/uploads/2018/12/chariot-logo-full-text-1.png" width="300" style="margin: 2rem 0;"/>
  </a>
</p>
<h1 align="center">
  BYO Component Library
</h1>

<h4 align="center">
  <a href="https://2022.phillyemergingtech.com">Watch the ETE 2022 Talk (coming soon!)</a>
  <!-- <a href="https://docs.themontessoriwoodshop.com">Components</a> -->
</h4>

<p align="center">
This repository is an example of how to create a simple, scalable, and light-weight React component library. Hopefully it will make you think twice before installing a 3rd party component library and release you from the shackles of big-box npm packages.
</p>

<hr />

## Overview

**It's not that difficult to create a component library.**

This repo is designed to be a guide in providing a few best practices on the library creation side as well as the component development side to give you the most efficient and flexible means to writing and scaling your component library _your_ way instead of another entity's.

If you'd like, instead of reading all of the documentation below, you can [watch the presentation that Drew did at ETE 2022 (Link coming soon!)]()

## Assumptions

- Monorepo
- Yarn Berry
- React
- ESBuild
- Linaria
- Typescript
- ...

## Repository Setup

### Monorepo

I've found that the best way to go about developing a component library while still embracing a lot of fundamentals of isolated component development is via a mono-repo. This will insure you can package

In essence, you put all of your JS apps and libraries inside of a directory called `/packages` at the root of the repository. Then you let the package manager (in this case Yarn Berry) take over and do the rest.

This can be done inside of a monolith where your services, backend, etc... are all developed... the only thing that you need to remember is that all of the JS packages need to go into the `/packages` directory. You can configure it, but the industry standard is just to keep it at packages.

#### Yarn Berry Plugins

https://yarnpkg.com/features/plugins#official-plugins

```bash
yarn plugin import typescript
yarn plugin import interactive-tools
```

#### Yarn Berry SDKs

TL;DR, if you're using VSCode, you should install the Yarn Berry SDKs as well.
https://yarnpkg.com/getting-started/editor-sdks

#### Zero Installs

[See what to add to your `.gitignore`](https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored)

## Component Library Setup

### Update your `package.json`

#### Component Library Name

`@internal` if private or `@scope` if public

#### Library targets

```json
{
  "main": "dist/index.cjs",
  "module": "dist/index.js",
  "types": "dist/index.d.ts"
}
```

```json
{
  "type": "module",
  "sideEffects": false
}
```

## Component Development

### Install your components package

```bash
yarn workspace app add @internal/components
```

This will install your components package as below.

```json
// package.json
{
  "dependencies": {
    "@internal/components": "workspace:^"
  }
}
```

This is a `yarn berry` convention where you don't have to worry version number and makes a hard link to the workspace functionality. [Read more on this convention here.]()

Ultimately, it just enables you to absolutely import your component library for use.

```tsx
import { Button } from "@internal/components";

// rest of the component
```

If you decide to build for distribution, then you can use the `yarn pack` command which converts all of your dependencies into proper NPM recognized version patch, fix and major SEMVER notation.

## Building for Production
