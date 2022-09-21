#!/usr/bin/env node

/**
* Set a value for global ENVIRONMENT_VARIABLES
* */

declare global {
	var __ENVIRONMENT_VARIABLES__:Map<any, any>;
	interface Window { __ENVIRONMENT_VARIABLES__:Map<any, any> }
}
/*
const isWindow:boolean = (function(){
	const check:Function = ():boolean => {
		try {
			return typeof window !== void 0 && typeof window.document !== void 0;
		} catch(err:any) {
			return false;
		}
	}

	return check();
}());
*/

type R = /*typeof window | */ typeof global;

const e:R = /*(isWindow) ? window :*/ global;

e.__ENVIRONMENT_VARIABLES__ = e.__ENVIRONMENT_VARIABLES__ || new Map();

(module).exports = e.__ENVIRONMENT_VARIABLES__;
export default e.__ENVIRONMENT_VARIABLES__;

/**
* Written by Jovan De Guia
* 
* https://github.com/jxmked/NPM-Environment-Variables
* */
