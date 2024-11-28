import ExcelJS from 'exceljs'
import { ThaiNumbers } from '@/components/helpers/utils.js'

export async function generateExcel(item) {
  const workbook = new ExcelJS.Workbook()
  const worksheet = workbook.addWorksheet('Sheet1')

  worksheet.getCell('A1').value =
    'รายงานคำขอดำเนินการเกี่ยวกับทะเบียนผู้ประกอบธุรกิจทวงถามหนี้'
  worksheet.mergeCells('A1:G1')
  worksheet.getCell('A1').style = {
    font: { size: 12, bold: false },
    alignment: { horizontal: 'center', vertical: 'middle' },
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: '66CCFF' } },
  }

  worksheet.getCell('A2').value = 'กรมการปกครอง กระทรวงมหาดไทย'
  worksheet.mergeCells('A2:G2')
  worksheet.getCell('A2').style = {
    font: { size: 12, bold: false },
    alignment: { horizontal: 'center', vertical: 'middle' },
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: '66CCFF' } },
  }

  worksheet.getCell('A3').value = ThaiNumbers(
    'วันที่ 10/10/2567 ถึงวันที่ 10/10/2568'
  )
  worksheet.mergeCells('A3:G3')
  worksheet.getCell('A3').style = {
    font: { size: 12, bold: false },
    alignment: { horizontal: 'center', vertical: 'middle' },
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: '66CCFF' } },
  }

  worksheet.getRow(1).height = 30
  worksheet.getRow(2).height = 30
  worksheet.getRow(3).height = 30

  const headerValues = [
    'ลำดับ',
    'หน่วยงาน',
    'คำขอจดทะเบียน',
    'คำขอเปลี่ยนแปลงข้อมูล',
    'คำขอใบแทนหนังสือสำคัญ',
    'คำขอเลิกประกอบธุรกิจ',
    'รวม',
  ]
  worksheet.addRow(headerValues)
  worksheet.getRow(4).height = 60
  worksheet.getRow(4).alignment = {
    horizontal: 'center',
    vertical: 'middle',
    wrapText: true,
  }
  worksheet.getRow(4).eachCell((cell) => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'AAAB92' },
    }
  })

  worksheet.columns = [
    { key: 'num', width: 15 },
    { key: 'agency', width: 30 },
    { key: 'registration', width: 20 },
    { key: 'changedata', width: 20 },
    { key: 'book', width: 20 },
    { key: 'quit', width: 20 },
    { key: 'sum', width: 20 },
  ]

  let sumRegis = 0
  let sumChange = 0
  let sumBook = 0
  let sumQuit = 0

  item.forEach((data, index) => {
    const row = worksheet.addRow([
      ThaiNumbers(index + 1), //ลำดับ
      data.agency, //หน่วยงาน
      ThaiNumbers(data.registration), //คำขอจดทะเบียน
      ThaiNumbers(data.changedata), //ขอปปข้อมูล
      ThaiNumbers(data.book), //ใบแทน
      ThaiNumbers(data.quit), //เลิก
      ThaiNumbers(
        data.registration + data.changedata + data.book + data.quit || 0
      ),
    ])
    row.height = 30
    row.eachCell((cell, colNumber) => {
      if ([2].includes(colNumber)) {
        cell.alignment = {
          horizontal: 'left',
          vertical: 'middle',
          wrapText: true,
        }
      } else {
        cell.alignment = {
          horizontal: 'center',
          vertical: 'middle',
          wrapText: true,
        }
      }
      if ([7].includes(colNumber)) {
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'C4C598' },
        }
      }
      if (colNumber === 3 && data.registration) {
        sumRegis += data.registration
      }
      if (colNumber === 4 && data.changedata) {
        sumChange += data.changedata
      }
      if (colNumber === 5 && data.book) {
        sumBook += data.book
      }
      if (colNumber === 6 && data.quit) {
        sumQuit += data.quit
      }
    })
  })

  const footer = worksheet.addRow([
    'รวมตามประเภทคำขอ',
    '',
    ThaiNumbers(sumRegis),
    ThaiNumbers(sumChange),
    ThaiNumbers(sumBook),
    ThaiNumbers(sumQuit),
    ThaiNumbers(sumRegis + sumChange + sumBook + sumQuit || 0),
  ])
  footer.height = 30
  worksheet.mergeCells(
    `A${worksheet.lastRow.number}:B${worksheet.lastRow.number}`
  )
  worksheet.getRow(worksheet.lastRow.number).alignment = {
    horizontal: 'center',
    vertical: 'middle',
    wrapText: true,
  }
  worksheet.getRow(worksheet.lastRow.number).eachCell((cell) => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'D9D9D9' },
    }
  })

  worksheet.eachRow((row) => {
    row.eachCell((cell) => {
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' },
      }
    })
  })

  const buffer = await workbook.xlsx.writeBuffer()
  const blob = new Blob([buffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  })

  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download =
    'รายงานคำขอดำเนินการเกี่ยวกับทะเบียนผู้ประกอบธุรกิจทวงถามหนี้.xlsx'
  link.click()
}
