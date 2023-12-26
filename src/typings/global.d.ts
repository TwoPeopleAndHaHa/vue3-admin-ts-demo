/* Vite */
declare type Recordable<T = any> = Record<string, T>

declare interface ViteEnv {
	VITE_USER_NODE_ENV: 'development' | 'production' | 'test'
	VITE_GLOBAL_TITLE: string
	VITE_API_URL: string
	VITE_PROXY: string
}

interface ImportMetaEnv extends ViteEnv {
	__: unknown
}

import type { FormInstance } from 'element-plus'
type FormEl = FormInstance | undefined
