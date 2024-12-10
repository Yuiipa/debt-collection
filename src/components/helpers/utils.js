function ThaiNumbers(arabicNumber) {
  const arabicToThai = {
    0: '๐',
    1: '๑',
    2: '๒',
    3: '๓',
    4: '๔',
    5: '๕',
    6: '๖',
    7: '๗',
    8: '๘',
    9: '๙',
  }
  return String(arabicNumber)
    .split('')
    .map((char) =>
      arabicToThai[char] !== undefined ? arabicToThai[char] : char
    )
    .join('')
}

const months = [
  'มกราคม',
  'กุมภาพันธ์',
  'มีนาคม',
  'เมษายน',
  'พฤษภาคม',
  'มิถุนายน',
  'กรกฎาคม',
  'สิงหาคม',
  'กันยายน',
  'ตุลาคม',
  'พฤศจิกายน',
  'ธันวาคม',
]

function splitDate(date) {
  const [day, month, year] = date ? date.split('/') : ['', '', '']
  return day && month && year
    ? `${day} ${months[parseInt(month) - 1]} ${year}`
    : ''
}

export { ThaiNumbers, splitDate }
