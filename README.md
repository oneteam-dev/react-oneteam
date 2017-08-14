# react-oneteam

[![CircleCI](https://circleci.com/gh/oneteam-dev/react-oneteam.svg?style=svg&circle-token=7f3c581456263665cf3410297e9b9915a46f6635)](https://circleci.com/gh/oneteam-dev/react-oneteam)
[![Codecov](https://codecov.io/gh/oneteam-dev/react-oneteam/branch/master/graph/badge.svg)](https://codecov.io/gh/oneteam-dev/react-oneteam)
[![npm](https://img.shields.io/npm/v/react-oneteam.svg)](https://www.npmjs.org/package/react-oneteam)

Oneteam specific React components

```bash
yarn add react-oneteam

# or

npm i react-oneteam
```

## Usage

```js
// webpack.config.js

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
  ...
};

// app.js

import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-oneteam/lib/react-oneteam.css';
import React from 'react';
import { render } from 'react-dom';
import { Avatar, Mention } from 'react-oneteam';

render(
  <div>
    <Avatar user={user} />
    <Mention>Shingo Sato</Mention>
  </div>,
  document.getElementById('root')
);
```

## License

[MIT](https://github.com/oneteam-dev/react-oneteam/blob/master/LICENSE)

Designed by [Carlos Liu](https://github.com/morita7453)
