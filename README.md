# Webpack mjml-loader

_The version of this package tries to follow the version of mjml used._

```
npm install --save @dathuis/mjml-loader
```

You can use any of the [available options](https://mjml.io/documentation/#inside-node-js) via the options object. By default, the `filePath` is set to the directory of the mjml file currently loaded to allow relative paths.

## Usage

```js
module: {
  rules: [
    {
      test: /\.mjml$/,
      use: {
        loader: '@dathuis/mjml-loader',
        options: {
          minify: true
        }
      },
    },
  ],
},
```
