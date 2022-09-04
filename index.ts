#!/usr/bin/env node

/**
* Set a value for global ENVIRONMENT_VARIABLES
* */

declare global {
	var ENVIRONMENT_VARIABLES:Map<any, any>;
}

global.ENVIRONMENT_VARIABLES = global.ENVIRONMENT_VARIABLES || new Map();

const ENV:Map<any, any> = global.ENVIRONMENT_VARIABLES;

(module).exports = ENV;
export default ENV;

export {
    ENV,
    ENV as ENVIRONMENT,
    ENV as envRes
}


delete require.cache[__filename];

/**
* Written by Jovan De Guia
* 
* https://github.com/jxmked/NPM-Environment-Variables
* */
