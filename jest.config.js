/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    roots: ["<rootDir>/src/"],
    transform: {
        '^.+\\.ts?$': 'ts-jest'
    },
    moduleNameMapper: {
        "^src/(.*)": "<rootDir>/src/$1"
    }
};

module.exports = config;