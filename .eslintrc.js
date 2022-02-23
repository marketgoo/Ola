module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:storybook/recommended"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "react/react-in-jsx-scope": "off",
    "react/no-find-dom-node": "off",
    "react/prop-types": [2, {
      "skipUndeclared": true
    }],
    "react/no-string-refs": "off",
    "no-case-declarations": "off",
    "no-console": 1,
    "no-unreachable": "off"
  },
  "globals": {
    "global": true,
    "require": true,
    "module": true,
    "__dirname": true,
    "process": true,
    "expect": true,
    "describe": true,
    "it": true,
    "xit": true,
    "beforeEach": true,
    "afterEach": true,
    "should": true
  }
};