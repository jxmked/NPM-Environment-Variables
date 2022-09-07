# NPM-Environment-Variables
Use `Map` and `process` to set and get value from different file during runtime.
 
> Using `Map` object to easily access global variables from different files


## Installation

`npm i --save env-res`

## Usage

__JavaScript__

```js
// index.js
const env = require('env-res');
const global_config = require("./global-config.js");

console.log(env.get("foo")); // bar

```

```js
// global-config.js
const env = require('env-res');

env.set("foo", "bar");
```

__TypeScript__

```TypeScript
// index.ts
import env from 'env-res';
import global_config from './global-config.ts';

console.log(env.get("foo")); // bar
```

```TypeScript
// global-config.ts
import env from 'env-res';

env.set("foo", "bar");
```

----

#### Written by Jovan De Guia

## Socials

- [Github](https://github.com/jxmked)
- [Facebook](https://www.facebook.com/deguia25)
