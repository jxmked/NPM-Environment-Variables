#!/usr/bin/env node
/**
* Set a value for global ENVIRONMENT_VARIABLES
* */
declare global {
    var ENVIRONMENT_VARIABLES: Map<any, any>;
}
declare const ENV: Map<any, any>;
export default ENV;
export { ENV, ENV as ENVIRONMENT, ENV as ENV_VARIABLES, ENV as GLOBAL_ENV, ENV as GLOBAL_ENVIRONMENT };
/**
* Written by Jovan De Guia
*
* https://github.com/jxmked/NPM-Environment-Variables
* */
