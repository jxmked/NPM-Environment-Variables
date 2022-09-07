#!/usr/bin/env node

/**
* Set a value for global ENVIRONMENT_VARIABLES
* */

declare global {
	var __ENVIRONMENT_VARIABLES__:Map<any, any>;
}

global.__ENVIRONMENT_VARIABLES__ = global.__ENVIRONMENT_VARIABLES__ || new Map();

(module).exports = global.__ENVIRONMENT_VARIABLES__;
export default global.__ENVIRONMENT_VARIABLES__;

/**
* Written by Jovan De Guia
* 
* https://github.com/jxmked/NPM-Environment-Variables
* */
