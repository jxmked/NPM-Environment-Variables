#!/usr/bin/env node

declare global {
    const global: any;
}

/**
* Set a value for global ENVIRONMENT_VARIABLES
* */

global.ENVIRONMENT_VARIABLES = global.ENVIRONMENT_VARIABLES || new Map();

global.ENVIRONMENT_VARIABLES.prototype.remove = global.ENVIRONMENT_VARIABLES.prototype.delete;

const ENV:ReturnType<typeof global.ENVIRONMENT_VARIABLES> = global.ENVIRONMENT_VARIABLES;

// Choose what you want...
export default ENV;
export {
    ENV,
    ENV as ENVIRONMENT,
    ENV as ENV_VARIABLES,
    ENV as GLOBAL_ENV,
    ENV as GLOBAL_ENVIRONMENT
}

// @ts-ignore
delete require.cache[__filename];

/**
* Written by Jovan De Guia
* 
* https://github.com/jxmked/NPM-Environment-Variables
* */