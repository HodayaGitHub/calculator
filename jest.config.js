module.exports = {
  "verbose": true,
  "testEnvironment": "node",
  "preset": "ts-jest",
  "globals": {
    "ts-jest": {
      "tsconfig": "<rootDir>/tsconfig.json",
      "isolatedModules": true
    }
  },
  "cacheDirectory": "./.jest-cache",
  "testURL": "http://localstorage:4040",
  "testMatch": [
    "<rootDir>/tests/*.spec.ts"
  ],
  "testPathIgnorePatterns": [
    "/node_modules/",
  ],
  "coverageReporters": [
    "json",
    "lcov"
  ],
  "coverageDirectory": "coverage"
};