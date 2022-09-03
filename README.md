# NPM-Environment-Variables
Set and get variables during runtime all around under Map object
 
> Using `Map` object to easily access global variables


## Installation

`npm i --save environment-variables`

## Usage

```
// index.js
const env = require('Environment-Variables');
const global_config = require("./global-config.js");

console.log(env.get("foo")); // bar

```

```
// global-config.js
const env = require('Environment-Variables');

env.set("foo", "bar");
```

----

#### Written by Jovan De Guia

## Socials

- [Github](https://github.com/jxmked)
- [Facebook](https://www.facebook.com/deguia25)
