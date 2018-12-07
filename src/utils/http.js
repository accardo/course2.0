import axios from 'axios'
// import { delay } from '@/utils/util'
// 废弃 保留
// axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/sys' : '/newfib.php'
// axios.defaults.baseURL = '/member'
// axios.defaults.timeout = process.env.TIMEOUT || 10000 // 响应时间
axios.defaults.baseURL = process.env.VUE_APP_URL;
axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'

const instance = axios.create({
	// withCredentials: true, // 允许跨域 cookie
	validateStatus (status) {
		return (status >= 200 && status < 300) || (status > 400 && status < 500) // 获取服务端异常
	}
})

instance.requestCount = 0

instance.interceptors.request.use((config) => {
	instance.requestCount++;
	console.log(config, 'config')
	return config
}, (error) => {
	return new Promise.reject(error)
})

instance.interceptors.response.use((response) => {
	console.log(response, 'response');
	if (response.data.code == '0') {
		console.log('请求参数错误')
	} else if (response.data.code == '2') {
		console.log('参数错误')
	}

	instance.requestCount--
	if (instance.requestCount === 0) {
		//  window.loading.close()
	}
	return response.data
}, (error) => {
	console.log('网络异常')
	// window.loading.close()
	return Promise.reject(error)
})

export default instance
// get
export const _get = (req) => {
	if (typeof req === 'string') {
		return instance.get(req)
	}
	console.log(req, 'URL')
	return instance.get(req.url, { params: req.data })
}

// post
export const _post = (req) => {
	return instance.post(req.url,data, req.config || {} )
}

// delete
export const _delete = req => instance.delete(req.url, req.config || {})

