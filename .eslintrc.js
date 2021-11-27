module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["airbnb-base", "plugin:import/typescript", "prettier"],
	"settings": {
		"import/extensions": [".js", ".ts"],
	},
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "no-shadow": "off",
		"no-unused-vars": "off",
		"comma-dangle": "off",
		"no-console": "off",
		"no-await-in-loop": "off",
		"radix": "off",
		"no-use-before-define": "off",
		"import/prefer-default-export": "off",
		"no-restricted-syntax": "off",
		"no-continue": "off",
		"global-require": "off",
		"no-throw-literal": "off",
		"class-methods-use-this": "off",
		"consistent-return": "off",
		"no-param-reassign": "off",
		"no-underscore-dangle": "off",
        "import/extensions": [
			"error",
			"always",
			{
				"js": "never",
				"ts": "never",
			},
		],
    }
};