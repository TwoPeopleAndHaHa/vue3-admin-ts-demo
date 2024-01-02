import axios from 'axios'
import { checkStatus } from '@/api/config'
const service = axios.create({
	baseURL: '',
	timeout: 5000,
})

// 添加请求拦截器
service.interceptors.request.use(
	config => {
		// 在发送请求之前做些什么
		return config
	},
	error => {
		// 对请求错误做些什么
		return Promise.reject(error)
	},
)
// 添加响应拦截器
service.interceptors.response.use(
	response => {
		// 2xx 范围内的状态码都会触发该函数。
		// 对响应数据做点什么
		return response.data
	},
	error => {
		const { response } = error
		// 超出 2xx 范围的状态码都会触发该函数。对响应错误做点什么
		// 根据服务器响应的错误状态码，做不同的处理
		if (response) checkStatus(response.status)
		return Promise.reject(error)
	},
)
export const get = (url: string, params?: object) => {
	return service.get(url, { params })
}
export const post = (url: string, params?: object) => {
	return service.post(url, params)
}
export const postJson = (url: string, params?: object) => {
	return service.post(url, params, {
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
