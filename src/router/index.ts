import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/home',
			name: 'home',
			component: () => import('@/views/home/index.vue'),
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('@/views/login/index.vue'),
		},
	],
})
router.beforeEach((to, from, next) => {
	next()
})

export default router
