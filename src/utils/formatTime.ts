/**
 *
 * @param {*} time Wed Jan 17 2024 09:37:21 GMT+0800 (中国标准时间)
 * @param pattern  默认 yyyy-MM-dd hh:mm:ss  (a表示周几)
 * @example parseTime(new Date(), 'yyyy-MM-dd hh:mm:ss a') = '2024-01-17 08:40:52 周三'
 */
export function parseTime(time: string | number, pattern?: string) {
	if (arguments.length === 0 || !time) {
		return null
	}
	const format = pattern || 'yyyy-MM-dd hh:mm:ss'
	let date
	if (typeof time === 'object') {
		date = time
	} else {
		if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
			time = parseInt(time)
		} else if (typeof time === 'string') {
			time = time
				.replace(new RegExp(/-/gm), '/')
				.replace('T', ' ')
				.replace(new RegExp(/\.[\d]{3}/gm), '')
		}
		if (typeof time === 'number' && time.toString().length === 10) {
			time = time * 1000
		}
		date = new Date(time)
	}
	const formatObj: Record<string, string> = {
		yyyy: String(date.getFullYear()),
		MM: String(date.getMonth() + 1),
		dd: String(date.getDate()),
		hh: String(date.getHours()),
		mm: String(date.getMinutes()),
		ss: String(date.getSeconds()),
		a: String(date.getDay()),
	}
	const timeStr = format.replace(/(yyyy|MM|dd|hh|mm|ss|a)/g, (result, key) => {
		let value = formatObj[key]
		// Note: getDay() returns 0 on Sunday
		if (key === 'a') {
			return '周' + ['日', '一', '二', '三', '四', '五', '六'][Number(value)]
		}
		if (result.length > 0 && value !== undefined && Number(value) < 10) {
			value = '0' + value
		}
		return value !== undefined ? value.toString() : '0'
	})
	return timeStr
}
