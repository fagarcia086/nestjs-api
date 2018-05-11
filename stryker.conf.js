module.exports = function(config) {
    config.set({
        files: [
            'app/**/*.ts',
            'app/**/*.graphql',
            // 'node_modules/ts-jest/**/*.js'
        ],
        testRunner: 'jest',
        mutator: 'typescript',
        transpilers: [],
        reporter: ['html', 'clear-text', 'progress'],
        coverageAnalysis: 'off',
        tsconfigFile: 'tsconfig.json',
        mutate: [
            'app/**/cat.controller.ts',
        ],
        timeoutMs: 10 * 1000,
        // timeoutFactor: 2,
        htmlReporter: {
            baseDir: '.testresults/mutation'
        },
        // logLevel: 'trace'
    });
};
