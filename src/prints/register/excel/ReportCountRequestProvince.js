import ExcelJS from 'exceljs'
import { ThaiNumbers } from '@/components/helpers/utils.js'

export async function generateExcel(item) {
  const workbook = new ExcelJS.Workbook()
  const worksheet = workbook.addWorksheet('Sheet1')

  worksheet.getCell('A1').value =
    'รายงานประเภทคำขอดำเนินการเกี่ยวกับทะเบียนผู้ประกอบธุรกิจทวงถามหนี้'
  worksheet.mergeCells('A1:E1')
  worksheet.getCell('A1').style = {
    font: { size: 12, bold: false },
    alignment: { horizontal: 'center', vertical: 'middle' },
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: '66CCFF' } },
  }

  worksheet.getCell('A2').value = item[0].province
  worksheet.mergeCells('A2:E2')
  worksheet.getCell('A2').style = {
    font: { size: 12, bold: false },
    alignment: { horizontal: 'center', vertical: 'middle' },
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: '66CCFF' } },
  }

  worksheet.getCell('A3').value = 'วันที่ ๑/๑๑/๒๕๖๗ ถึง วันที่ ๓๐/๑๑/๒๕๖๗'
  worksheet.mergeCells('A3:E3')
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
    'ประเภทคำขอ',
    'อยู่ระหว่างดำเนินการ',
    'ดำเนินการแล้วเสร็จ',
    'รวมทั้งหมด',
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
    { key: 'type', width: 30 },
    { key: 'process', width: 20 },
    { key: 'success', width: 20 },
    { key: 'total', width: 20 },
  ]

  let sumProcess = 0
  let sumFinish = 0

  item.forEach((data, index) => {
    const row = worksheet.addRow([
      ThaiNumbers(index + 1), //ลำดับ
      data.type, //ประเภท
      ThaiNumbers(data.process || 0), //ระหว่างดำเนินการ
      ThaiNumbers(data.success || 0), //ดำเนินการแล้วเสร็จ
      ThaiNumbers(data.process + data.success || 0), //รวมทั้งหมด
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
      if ([5].includes(colNumber)) {
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'C4C598' },
        }
      }
      if (colNumber === 3 && data.process) {
        sumProcess += data.process //ดำเนินการ
      }
      if (colNumber === 4 && data.success) {
        sumFinish += data.success //แล้วเสร็จ
      }
    })
  })

  const footer = worksheet.addRow([
    'รวมตามประเภทคำขอ',
    '',
    ThaiNumbers(sumProcess),
    ThaiNumbers(sumFinish),
    ThaiNumbers(sumProcess + sumFinish),
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
  worksheet.getCell(`E${worksheet.lastRow.number}`).alignment = {
    horizontal: 'center',
    vertical: 'middle',
    wrapText: true,
  }
  worksheet.getCell(`E${worksheet.lastRow.number}`).style = {
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
  link.download = 'รายงานจำนวนผู้ประกอบธุรกิจทวงถามหนี้ในแต่ละจังหวัด.xlsx'
  link.click()
}
