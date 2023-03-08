# Vue + Storybook starter kit
This is a clean boilerplate for a new Vue/Storybook setup.

## Installation
- download and install `yarn` (package manager)
- make sure to have node 16.x
  - use [nvm](https://github.com/nvm-sh/nvm) for node version management
- clone and install this repo:

```bash
$ git clone https://github.com/automagisch/vue-storybook-starter
$ cd vue-storybook-starter
$ yarn install
```

## Usage
```bash
$ yarn dev # start dev server (hot reload)
$ yarn build # create a distribution from the app (this is what you'll serve)
$ yarn preview # run preview version of build
$ yarn storybook # start storybook GUI (hot reload)
$ yarn build-storybook # produces a static storybook build
```

## Libraries and resources
- [Vite](https://vitejs.dev/) (bunder)
- [Vue3](https://vuejs.org/) (component library)
- [Sass](https://sass-lang.com/) (CSS preprocessor)
- [Storybook.js](storybook.js) (component development tool & documentation)

## Tips
- use the `@` selector for imports from the `src` module. in each file `@` will
resolve to the `src` directory
