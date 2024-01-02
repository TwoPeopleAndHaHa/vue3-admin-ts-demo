import { get, post, postJson } from '@/api/index'
import { Login } from '@/api/interface/index'
/**
 * @name 登录
 */
export const login = (params: Login.ReqLoginForm) => {
	return post('/login', params)
}
// 获取菜单权限列表
export const getAuthMenuList = () => {
	return get('/menu/list')
}
// 获取按钮权限列表
export const getAuthButtonList = () => {
	return get('/auth/buttons')
}
