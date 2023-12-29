import { createRouter, createWebHashHistory } from 'vue-router'
const HOME_URL = '/layout'
const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			redirect: HOME_URL,
		},
		{
			path: '/layout',
			name: 'layout',
			component: () => import('@/layouts/index.vue'),
		},
		{
			path: '/home',
			name: 'home',
			component: () => import('@/views/home/index.vue'),
		},
		// {
		// 	path: '/login',
		// 	name: 'login',
		// 	component: () => import('@/views/login/index.vue'),
		// },
	],
})
router.beforeEach((to, from, next) => {
	next()
})

export default router
