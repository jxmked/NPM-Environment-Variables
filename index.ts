#!/usr/bin/env node

/**
* Set a value for global ENVIRONMENT_VARIABLES
* */

declare global {
	var ENVIRONMENT_VARIABLES:Map<any, any>;
}

global.ENVIRONMENT_VARIABLES = global.ENVIRONMENT_VARIABLES || new Map();

//global.ENVIRONMENT_VARIABLES.prototype.remove = global.ENVIRONMENT_VARIABLES.prototype.delete;

const ENV:Map<any, any> = global.ENVIRONMENT_VARIABLES;

// Choose what you want...
export default ENV;
export {
    ENV,
    ENV as ENVIRONMENT,
    ENV as ENV_VARIABLES,
    ENV as GLOBAL_ENV,
    ENV as GLOBAL_ENVIRONMENT
}


delete require.cache[__filename];

/**
* Written by Jovan De Guia
* 
* https://github.com/jxmked/NPM-Environment-Variables
* */
