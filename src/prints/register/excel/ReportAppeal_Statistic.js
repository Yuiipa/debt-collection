import ExcelJS from 'exceljs'
import { ThaiNumbers } from '@/components/helpers/utils.js'

export async function generateExcel(item) {
  const workbook = new ExcelJS.Workbook()
  const worksheet = workbook.addWorksheet('Sheet1')

  worksheet.getCell('A1').value =
    'รายงานสถิติข้อหาหรือฐานความผิดตามพระราชบัญญัติการทวงถามหนี้ พ.ศ. ๒๕๕๘'
  worksheet.mergeCells('A1:C1')
  worksheet.getCell('A1').style = {
    font: { size: 12, bold: false },
    alignment: { horizontal: 'center', vertical: 'middle' },
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: '66CCFF' } },
  }

  worksheet.getCell('A2').value = 'กรมการปกครอง กระทรวงมหาดไทย'
  worksheet.mergeCells('A2:C2')
  worksheet.getCell('A2').style = {
    font: { size: 12, bold: false },
    alignment: { horizontal: 'center', vertical: 'middle' },
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: '66CCFF' } },
  }

  worksheet.getCell('A3').value = 'วันที่ ๑/๑๑/๒๕๖๗ ถึง วันที่ ๓๐/๑๑/๒๕๖๗'
  worksheet.mergeCells('A3:C3')
  worksheet.getCell('A3').style = {
    font: { size: 12, bold: false },
    alignment: { horizontal: 'center', vertical: 'middle' },
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: '66CCFF' } },
  }

  worksheet.getRow(1).height = 30
  worksheet.getRow(2).height = 30
  worksheet.getRow(3).height = 30

  const headerValues = ['ลำดับ', 'ข้อหา', 'จำนวนเรื่องร้องเรียน']
  worksheet.addRow(headerValues)
  worksheet.getRow(4).height = 50
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
    { key: 'num', width: 10 },
    { key: 'plaint', width: 100 },
    { key: 'amount', width: 30 },
  ]

  let sumAmount = 0

  item.forEach((data, index) => {
    const row = worksheet.addRow([
      ThaiNumbers(index + 1), //ลำดับ
      data.plaint, //ข้อหา
      ThaiNumbers(data.amount.toLocaleString() || 0), //จำนวน
    ])
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
      if (colNumber === 3 && data.amount) {
        sumAmount += data.amount //รวม
      }
    })
  })

  const footer = worksheet.addRow([
    `จากเรื่องร้องเรียนทั้งหมด ${ThaiNumbers(item.length.toLocaleString())} เรื่อง`,
    '',
    ThaiNumbers(sumAmount.toLocaleString()),
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
  link.download = 'รายงานจำนวนผู้ประกอบธุรกิจทวงถามหนี้ในแต่ละจังหวัด.xlsx'
  link.click()
}
