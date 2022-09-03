#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GLOBAL_ENVIRONMENT = exports.GLOBAL_ENV = exports.ENV_VARIABLES = exports.ENVIRONMENT = exports.ENV = void 0;
/**
* Set a value for global ENVIRONMENT_VARIABLES
* */
global.ENVIRONMENT_VARIABLES = global.ENVIRONMENT_VARIABLES || new Map();
global.ENVIRONMENT_VARIABLES.prototype.remove = global.ENVIRONMENT_VARIABLES.prototype.delete;
const ENV = global.ENVIRONMENT_VARIABLES;
exports.ENV = ENV;
exports.ENVIRONMENT = ENV;
exports.ENV_VARIABLES = ENV;
exports.GLOBAL_ENV = ENV;
exports.GLOBAL_ENVIRONMENT = ENV;
// Choose what you want...
exports.default = ENV;
// @ts-ignore
delete require.cache[__filename];
/**
* Written by Jovan De Guia
*
* https://github.com/jxmked/NPM-Environment-Variables
* */ 
