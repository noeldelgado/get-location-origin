# get-location-origin
> Get the window.location.origin string - even if not supported by the browser

- This is not a polyfill
- Does not modify the `window.location` object

## Install
```sh
npm install --save get-location-origin
```

## Usage
```js
var origin = require('get-location-origin');

console.log(origin);
// => "http://localhost:3000"
```