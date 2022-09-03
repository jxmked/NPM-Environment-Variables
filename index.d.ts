#!/usr/bin/env node
declare global {
    const global: any;
}
declare const ENV: ReturnType<typeof global.ENVIRONMENT_VARIABLES>;
export default ENV;
export { ENV, ENV as ENVIRONMENT, ENV as ENV_VARIABLES, ENV as GLOBAL_ENV, ENV as GLOBAL_ENVIRONMENT };
/**
* Written by Jovan De Guia
*
* https://github.com/jxmked/NPM-Environment-Variables
* */ 
