/*
 * Description: 延迟
 * Author: yanlichen <lichen.yan@daydaycook.com.cn>
 * Date: 2018/12/5
 */
export function delay (time) {
	return new Promise((resolve) => {
		window.setTimeout(resolve, time * 1000)
	})
}
export default {
	delay
}