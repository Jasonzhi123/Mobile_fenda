export function formatDate (date, fmt) {
  let time = Math.floor((new Date().getTime() - date.getTime()) / 1000)
  if (time < 60) {
    return time < 10 ? ('0' + time) : time + '秒前'
  }
  if (time < 60 * 60) {
    return time < 10 * 60 ? ('0' + Math.floor(time / 60)) : Math.floor(time / 60) + '分钟前'
  }
  if (time < 24 * 60 * 60) {
    return time < 10 * 60 * 60 ? ('0' + Math.floor(time / 360)) : Math.floor(time / 360) + '小时前'
  }
  if (time < 7 * 24 * 60 * 60) {
    return Math.floor(time / (24 * 60 * 60)) + '天前'
  }
  if (date.getFullYear() === new Date().getFullYear()) {
    let monthTime = date.getMonth() + 1
    let dayTime = date.getDate()
    let reStr = (monthTime < 10 ? ('0' + monthTime) : monthTime) + '-' + (dayTime < 10 ? ('0' + dayTime) : dayTime)
    return reStr
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}
function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}
