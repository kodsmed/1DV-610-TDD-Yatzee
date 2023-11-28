import { TextEncoder, TextDecoder } from "util";
export default {
  globals: {
    "ts-jest": {
       tsConfigFile: "tsconfig.json"
     },
     TextEncoder: TextEncoder,
     TextDecoder: TextDecoder
  },
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'mjs'],
  testMatch: ['**/test/**/*.test.js'],
  //verbose: true,
  collectCoverage: true,
  verbose: false,
  resolver: null,
  transform: {},
};
