export function getTimes (str) {
  let now = new Date()
  let oldTime = new Date(str)
  let difference = now - oldTime
  let result = ''
  let minute = 1000 * 60
  let hour = minute * 60
  let day = hour * 24
  let _day = difference / day

  let Year = oldTime.getFullYear()
  let Month = oldTime.getMonth() + 1
  let Day = oldTime.getDate() < 10 ? '0' + oldTime.getDate() : '' + oldTime.getDate()
  if (_day <= 1) {
    result = '今天'
  } else if (_day <= 2) {
    result = '昨天'
  } else result = Year + '-' + Month + '-' + Day
  return result
}
