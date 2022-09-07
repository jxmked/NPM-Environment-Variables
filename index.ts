#!/usr/bin/env node

/**
* Set a value for global ENVIRONMENT_VARIABLES
* */

declare global {
	var __ENVIRONMENT_VARIABLES__:Map<any, any>;
}

global.__ENVIRONMENT_VARIABLES__ = global.__ENVIRONMENT_VARIABLES__ || new Map();

const ENV:Map<any, any> = global.__ENVIRONMENT_VARIABLES__;

(module).exports = ENV;
export default ENV;

export {
    ENV,
    ENV as ENVIRONMENT,
    ENV as envRes
}


//delete require.cache[__filename];

/**
* Written by Jovan De Guia
* 
* https://github.com/jxmked/NPM-Environment-Variables
* */
