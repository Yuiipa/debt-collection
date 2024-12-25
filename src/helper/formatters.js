const pidFormat = (value) => {
    if (value) {
        let pid = value.toString()
        return `${pid.slice(0, 1)}-${pid.slice(1, 5)}-${pid.slice(5, 10)}-${pid.slice(10, 12)}-${pid.slice(12, 13)}`
    }
    return '-'
}

export default {
    pidFormat,
  }