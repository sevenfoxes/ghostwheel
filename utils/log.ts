// import Roarr from 'roarr';
// const globalThis = require('globalthis')();

// const ROARR = globalThis.ROARR = globalThis.ROARR || {};

// const assert = require('assert');
// const getGlobal = Function('return this');
// const shimmedGlobal = require('globalthis').shim();

// assert.strictEqual(globalThis, getGlobal());
// assert.strictEqual(shimmedGlobal, globalThis);
// assert.strictEqual(shimmedGlobal, getGlobal());

// ROARR.write = (message) => {
//   console.log(JSON.parse(message))
// };

export const log = console.log;
