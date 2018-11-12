# WebExtension `browser` API Polyfill... for Webpack! [![Build Status](https://travis-ci.com/NaughtyMC/webextension-polyfill-for-webpack.svg?branch=master)](https://travis-ci.com/NaughtyMC/webextension-polyfill-for-webpack) [![npm version](https://badge.fury.io/js/webextension-polyfill-for-webpack.svg)](https://www.npmjs.com/package/webextension-polyfill-for-webpack)

This library is forked from [webextension-polyfill](https://github.com/mozilla/webextension-polyfill) and modified to be used on Webpack builds for Chrome using ProvidePlugin.

## Installation

NPM:

```sh
npm install webextension-polyfill-for-webpack
```

Yarn:

```sh
yarn add webextension-polyfill-for-webpack
```

## Usage

This polyfill is designed to be used with ProvidePlugin and exclusively when building for Chrome.

**webpack.config.js**
```js
const config = { /* Your base webpack configuration here */ }

module.exports = (env, argv) => {
  if (argv.browser === 'chrome') { // assumes you run "webpack --browser chrome"
    config.plugins.push(
      new webpack.ProvidePlugin({
        browser: 'webextension-polyfill-for-webpack',
      }),
    );
  }
}
```