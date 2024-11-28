import ExcelJS from 'exceljs'

export async function generateExcel(item) {
  const workbook = new ExcelJS.Workbook()
  const worksheet = workbook.addWorksheet('Sheet1')

  worksheet.getCell('A1').value =
    'รายงานจำนวนผู้ประกอบธุรกิจทวงถามหนี้ในแต่ละจังหวัด'
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

  worksheet.getRow(1).height = 30
  worksheet.getRow(2).height = 30

  const headerValues = ['ลำดับ', 'จังหวัด', 'จำนวน']
  worksheet.addRow(headerValues)
  worksheet.getRow(3).height = 30
  const headerRow = worksheet.getRow(3)
  headerRow.font = { bold: false }
  headerRow.alignment = { horizontal: 'center', vertical: 'middle' }
  headerRow.eachCell((cell) => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'AAAB92' },
    }
  })

  worksheet.columns = [
    { key: 'num', width: 15 },
    { key: 'province', width: 60 },
    { key: 'amount', width: 15 },
  ]

  let totalCount = 0

  item.forEach((data, index) => {
    const row = worksheet.addRow([
      index + 1, //ลำดับ
      data.province, //จังหวัด
      data.amount.toLocaleString(), //จำนวน
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
      if (colNumber === 3 && data.amount) {
        totalCount += data.amount
      }
    })
  })

  const Footer = worksheet.addRow([
    'รวมทั้งหมด',
    '',
    totalCount.toLocaleString() || 0,
  ])
  Footer.height = 30
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
