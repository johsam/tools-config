module.exports = {
    env: {
        browser: true,
        es6: true,
        jquery: true,
    },

    globals: {
        Ext: true,
    },

    extends: ['eslint:recommended', 'plugin:flowtype/recommended', 'airbnb'],
    plugins: ['extjs', 'html', 'flowtype'],
    parserOptions: {
        sourceType: 'module',
    },
    rules: {
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'semi': ['error', 'always'],
        'no-var': 0,
        'vars-on-top': 0,
        'space-before-function-paren': 0,
        'object-shorthand': 0,
        'prefer-template': 0,
        'spaced-comment': 0,
        'prefer-rest-params': 0,
        'prefer-arrow-callback': 1,
        'no-mixed-operators': 0,
        'no-underscore-dangle': 0,
        'no-shadow-restricted-names': 0,
        'max-len': ['error', 170],
        'quotes': ['error', 'single', { avoidEscape: true }],
        'func-names': ['error', 'never'],
        'comma-dangle': ['error', 'never'],
        "no-unused-vars": [2, {"args": "all", "argsIgnorePattern": "^_"}],
    },

    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
    },
};
