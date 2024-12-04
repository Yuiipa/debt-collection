import ExcelJS from 'exceljs'
import { ThaiNumbers } from '@/components/helpers/utils.js'

export async function generateExcel(item) {
  const workbook = new ExcelJS.Workbook()
  const worksheet = workbook.addWorksheet('Sheet1')

  worksheet.getCell('A1').value =
    'รายงานผลการดำเนินการพิจารณาเรื่องร้องเรียนตามพระราชบัญญัติการทวงถามหนี้ พ.ศ. ๒๕๕๘'
  worksheet.mergeCells('A1:F1')
  worksheet.getCell('A1').style = {
    font: { size: 12, bold: false },
    alignment: { horizontal: 'center', vertical: 'middle' },
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: '66CCFF' } },
  }

  worksheet.getCell('A2').value = item[0].agency
  worksheet.mergeCells('A2:F2')
  worksheet.getCell('A2').style = {
    font: { size: 12, bold: false },
    alignment: { horizontal: 'center', vertical: 'middle' },
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: '66CCFF' } },
  }

  worksheet.getCell('A3').value = 'วันที่ ๑/๑๑/๒๕๖๗ ถึง วันที่ ๓๐/๑๑/๒๕๖๗'
  worksheet.mergeCells('A3:F3')
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
    'เรื่องร้องเรียนที่',
    'อยู่ระหว่างดำเนินการ',
    'ดำเนินการแล้วเสร็จ',
    'รวมทั้งหมด',
    'ยุติร้อยละ',
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
    { key: 'num', width: 10 },
    { key: 'id', width: 30 },
    { key: 'process', width: 20 },
    { key: 'finish_process', width: 20 },
    { key: 'sum', width: 20 },
    { key: 'percentage', width: 20 },
  ]

  let sumProcess = 0
  let sumFinish = 0
  let sumSum = 0
  let sumPercent = 0

  item.forEach((data, index) => {
    const row = worksheet.addRow([
      ThaiNumbers(index + 1), //ลำดับ
      data.id, //เรื่องร้องเรียนที่
      ThaiNumbers(data.process.toLocaleString() || 0), //ระหว่างดำเนินการ
      ThaiNumbers(data.finish_process.toLocaleString() || 0), //ดำเนินการแล้วเสร็จ
      ThaiNumbers(data.sum.toLocaleString() || 0), //รวมทั้งหมด
      ThaiNumbers(data.percentage.toLocaleString() || 0), //ยุติร้อยละ
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
      if ([6].includes(colNumber)) {
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'C4C598' },
        }
      }
      if (colNumber === 3 && data.process) {
        sumProcess += data.process //ดำเนินการ
      }
      if (colNumber === 4 && data.finish_process) {
        sumFinish += data.finish_process //แล้วเสร็จ
      }
      if (colNumber === 5 && data.sum) {
        sumSum += data.sum //รวม
      }
      if (colNumber === 6 && data.percentage) {
        sumPercent += data.percentage //รวม
      }
    })
  })

  const footer = worksheet.addRow([
    'รวม',
    '',
    ThaiNumbers(sumProcess.toLocaleString()),
    ThaiNumbers(sumFinish.toLocaleString()),
    ThaiNumbers(sumSum.toLocaleString()),
    ThaiNumbers(sumPercent.toLocaleString()),
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
  worksheet.getCell(`F${worksheet.lastRow.number}`).alignment = {
    horizontal: 'center',
    vertical: 'middle',
    wrapText: true,
  }
  worksheet.getCell(`F${worksheet.lastRow.number}`).style = {
    alignment: {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    },
    fill: {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'C4C598' },
    },
  }

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
    'รายงานผลการดำเนินการพิจารณาเรื่องร้องเรียนตามพระราชบัญญัติการทวงถามหนี้ พ.ศ. ๒๕๕๘.xlsx'
  link.click()
}
