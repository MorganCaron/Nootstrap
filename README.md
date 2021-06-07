# Nootstrap
[![Nootstrap](src/docs/img/assets/nootnoot.gif)](https://morgancaron.github.io/Nootstrap/)

## *Not Bootstrap: Sass Front-End Web Framework*
You probably know **Bootstrap**, the framework that provides a collection of tools useful for creating website and web application design.\
Although it is excellent, **too many people use it without customizing the default theme**. All sites end up looking alike, **without having a real design** of their own.

**Nootstrap is a SASS framework** that offers the same tools as Bootstrap (with a few more) **without proposing any default style, leaving the developers to create their own**.

![Github Stars](https://img.shields.io/github/stars/MorganCaron/Nootstrap?style=for-the-badge)
![Github Forks](https://img.shields.io/github/forks/MorganCaron/Nootstrap?style=for-the-badge)
[![Discord](https://img.shields.io/discord/268838260153909249?label=Chat&logo=Discord&style=for-the-badge)](https://discord.gg/mxZvun4)
[![Contribute](https://img.shields.io/badge/-Contribute-blue?style=for-the-badge)](CONTRIBUTING.md)

### Project Health
[![Codacy](https://img.shields.io/codacy/grade/c6b8bceeb4884d39b657e8a3fa460376?logo=Codacy&style=for-the-badge)](https://www.codacy.com/manual/MorganCaron/Nootstrap)
[![Github Actions](https://img.shields.io/github/workflow/status/MorganCaron/Nootstrap/NodeJS%20Deployment?logo=Github&style=for-the-badge)](https://github.com/MorganCaron/Nootstrap/actions?query=workflow%3A%22NodeJS+Deployment%22)

---

## Prerequisites

You need [NodeJS](https://nodejs.org/en/download/) installed on your computer.
You also need a Sass compiler. Personally I use [Webpack](https://webpack.js.org), with a home-made configuration generator: [webpack-config-generator](https://github.com/MorganCaron/webpack-config-generator).
If you're looking for a simpler, more minimalist tool just for compiling Sass, the [Compass.app](https://compass.kkbox.com) tool does the job.

## Installation

Nootstrap is available on the NPM package manager. It can be installed with the following command:

```console
npm install nootstrap-ui
```

## Include in your project

Different ways to import the Javascript file from Nootstrap:

### HTML
```html
<script defer src="~nootstrap-ui/build/Nootstrap.min.js"></script>
```
OR
### Javascript
```js
import "nootstrap-ui";
```
OR
### Typescript
```ts
import "nootstrap-ui"
```

And a way to import the Sass file:

### Sass
```sass
@import nootstrap-ui
```


## Documentation

For full demo & documentation, visit [https://morgancaron.github.io/Nootstrap/](https://morgancaron.github.io/Nootstrap/)

---

## Additional Informations
![Top Language](https://img.shields.io/github/languages/top/MorganCaron/Nootstrap?style=for-the-badge)
[![License](https://img.shields.io/github/license/MorganCaron/Nootstrap?style=for-the-badge)](https://github.com/MorganCaron/Nootstrap/blob/master/LICENSE)
