import { createRouter, createWebHashHistory } from 'vue-router'
import { staticRouter, errorRouter } from '@/router/modules/staticRouter'
import { initDynamicRouter } from '@/router/modules/dynamicRouter'
import NProgress from '@/utils/nprogress'
import { useUserStore } from '@/stores/modules/user'
import { useAuthStore } from '@/stores/modules/auth'
import { ROUTER_WHITE_LIST } from '@/config'
const router = createRouter({
	history: createWebHashHistory(),
	routes: [...staticRouter, ...errorRouter],
	strict: false,
	scrollBehavior: () => ({ left: 0, top: 0 }),
})
router.beforeEach(async (to, from, next) => {
	const userStore = useUserStore()
	const authStore = useAuthStore()
	NProgress.start()
	// 动态标题
	const title = import.meta.env.VITE_GLOBAL_TITLE
	document.title = to.meta.title ? `${to.meta.title} - ${title}` : title
	// 判断是否访问 login 页 , 有 token 就在当前页面 , 没 token 重制路由到登录页
	if (to.path.toLocaleLowerCase() === '/login') {
		if (userStore.token) return next(from.fullPath)
		resetRouter()
		return next()
	}
	// 路由白名单
	if (ROUTER_WHITE_LIST.includes(to.path)) return next()
	// 是否有 token
	if (!userStore.token) return next({ path: '/login', replace: true })
	// 检查菜单列表
	if (!authStore.authMenuListGet.length) {
		await initDynamicRouter()
		return next({ ...to, replace: true })
	}
	// 存储 routerName 做按钮权限筛选
	authStore.setRouteName(to.name as string)
	next()
})
/**
 * @description 重置路由
 * */
export const resetRouter = () => {
	const authStore = useAuthStore()
	authStore.flatMenuListGet.forEach(route => {
		const { name } = route
		if (name && router.hasRoute(name)) router.removeRoute(name)
	})
}

/**
 * @description 路由跳转错误
 * */
router.onError(error => {
	NProgress.done()
	console.log(' err ::>', error)
	console.warn('路由错误', error.message)
})

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
	NProgress.done()
})
export default router
