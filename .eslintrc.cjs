module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier/skip-formatting',
		'./auto-imports.d.ts',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		// off 或 0：关闭对该规则的校验；
		// warn 或 1：启用规则，不满足时抛出警告，且不会退出编译进程；
		// error 或 2：启用规则，不满足时抛出错误，且会退出编译进程；
		'no-undef': 'error',
		'no-var': 'error',
		'no-unused-vars': 'error',
		'no-multiple-empty-lines': [
			'warn',
			{
				max: 1,
			},
		],
		// 'never' 表示禁止分号
		semi: ['error', 'never'],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// 禁止空余的多行
		'no-unexpected-multiline': 'error',
		// 禁止不必要的转义字符
		'no-useless-escape': 'off',
		// 要求组件名称始终为 “-” 链接的单词
		'vue/multi-word-component-names': 'off',
		'no-trailing-spaces': 1, //一行结束后面不要有空格
		// 禁止嵌套的三元表达式
		'no-nested-ternary': 'error',
		// 禁止使用多行表达式
		'multiline-ternary': ['error', 'never'],
		// 是否允许自闭合的 HTML 标签在 Vue 中使用
		'vue/html-self-closing': [
			'error',
			{
				html: {
					void: 'always', // 对于空元素，总是自闭合
					normal: 'never', // 对于非空元素，从不自闭合
					component: 'always', // 对于组件，总是自闭合
				},
			},
		],
	},
}
