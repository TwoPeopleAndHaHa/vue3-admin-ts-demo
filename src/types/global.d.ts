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

declare type FormEl = import('element-plus').FormInstance | undefined
/* Menu */
declare namespace Menu {
	interface MenuOptions {
		path: string
		name: string
		component?: string | (() => Promise<unknown>)
		redirect?: string
		meta: MetaProps
		children?: MenuOptions[]
	}
	interface MetaProps {
		icon: string
		title: string
		activeMenu?: string
		isLink?: string
		isHide: boolean
		isFull: boolean
		isAffix: boolean
		isKeepAlive: boolean
	}
}
declare interface TableData {
	itemID: string
	ID: string
	outTime: string
	MaterialName: string
	Material: string
	specificationType: string
	unit: string
	storeSurPlusNum: string
	storePosition: string
	remark: string
}
