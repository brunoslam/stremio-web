module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "YT": "readonly",
        "FB": "readonly"
    },
    "ignorePatterns": ["src/routes/Settings/**", "src/routes/Player/**", "src/video/**"],
    "rules": {
        "arrow-parens": "error",
        "arrow-spacing": "error",
        "block-spacing": "error",
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "eol-last": [
            "error",
            "always"
        ],
        "eqeqeq": [
            "error",
            "always"
        ],
        "func-call-spacing": [
            "error",
            "never"
        ],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "no-console": [
            "error",
            {
                allow: ["error"]
            }
        ],
        "no-extra-semi": "error",
        "no-eq-null": "error",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2
            }
        ],
        "no-template-curly-in-string": "error",
        "no-trailing-spaces": "error",
        "no-useless-concat": "error",
        "no-unreachable": "error",
        "no-unused-vars": "error",
        "prefer-const": "error",
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "semi-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "space-before-blocks": "error",
        "valid-typeof": "error",
        "react/no-unescaped-entities": 0
    },
    "env": {
        "node": true,
        "browser": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 9,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        }
    },
    "overrides": [
        {
            "files": [
                "src/common/Button/Button.js",
                "src/common/Checkbox/Checkbox.js",
                "src/common/ColorInput/ColorInput.js",
                "src/common/Image/Image.js",
                "src/common/MetaItem/MetaItem.js",
                "src/common/Multiselect/Multiselect.js",
                "src/common/TextInput/TextInput.js",
                "src/routes/Intro/CredentialsTextInput/CredentialsTextInput.js",
                "src/routes/Intro/ConsentCheckbox/ConsentCheckbox.js",
                "src/common/PaginationInput/PaginationInput.js"
            ],
            "rules": {
                "react/prop-types": 0,
            }
        },
        {
            "files": [
                "src/routes/Intro/Intro.js",
                "src/routes/Addons/useAddons.js",
                "src/routes/Board/useItemOptions.js",
                "src/common/NavBar/NavMenu/NavMenu.js",
                "src/routes/Library/useItemOptions.js",
                "src/common/Multiselect/Multiselect.js",
                "src/common/NavBar/NotificationsMenu/NotificationsMenu.js"
            ],
            "rules": {
                "no-unused-vars": "off"
            }
        },
        {
            "files": [
                "src/common/NavBar/NavMenu/NavMenu.js"
            ],
            "rules": {
                "quotes": "off"
            }
        },
        {
            "files": [
                "src/services/Shell/Shell.js",
                "src/services/Core/Core.js"
            ],
            "rules": {
                "prefer-const": "off"
            }
        }
    ]
}
