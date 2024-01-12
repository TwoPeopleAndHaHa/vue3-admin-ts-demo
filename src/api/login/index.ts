import { get, post, postJson } from '@/api/index'
import { Login } from '@/api/interface/index'
import Mock from '@/mock/login'
/**
 * @name 登录
 */
export const login = (params: Login.ReqLoginForm) => {
	// return post('/login', params)
	return Mock.login
}
// 获取菜单权限列表
export const getAuthMenuList = () => {
	// return get('/menu/list')
	return Mock.menuList
}
// 获取按钮权限列表
export const getAuthButtonList = () => {
	// return get('/auth/buttons')
	return Mock.buttonsList
}
