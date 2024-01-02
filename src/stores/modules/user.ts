import { defineStore } from 'pinia'
import { UserState } from '@/stores/interface'
export const useUserStore = defineStore('userStore', {
	state: () => ({
		token: '',
		userInfo: { name: 'BaLiang' },
	}),
	actions: {
		// Set Token
		setToken(token: string) {
			this.token = token
		},
		// Set setUserInfo
		setUserInfo(userInfo: UserState['userInfo']) {
			this.userInfo = userInfo
		},
	},
	persist: true,
})
