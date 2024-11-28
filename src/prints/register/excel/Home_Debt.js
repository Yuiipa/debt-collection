import ExcelJS from 'exceljs'

export async function generateExcel(item) {
  const workbook = new ExcelJS.Workbook()
  const worksheet = workbook.addWorksheet('Sheet1')

  worksheet.getCell('A1').value =
    'รายงานข้อมูลผู้จดทะเบียนการประกอบธุรกิจทวงถามหนี้ตามพระราชบัญญัติการทวงถามหนี้ พ.ศ. ๒๕๕๘'
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

  worksheet.getRow(1).height = 30
  worksheet.getRow(2).height = 30

  const headerValues = [
    'ลำดับ',
    'ชื่อสถานประกอบธุรกิจ',
    'เลขทะเบียนที่',
    'ประเภทกิจการ',
    'สถานที่ตั้ง',
    'วันที่จดทะเบียน',
    'เบอร์โทรศัพท์',
  ]
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
    { key: 'num', width: 10 },
    { key: 'businessName', width: 30 },
    { key: 'registrationNumber', width: 18 },
    { key: 'businessType', width: 20 },
    { key: 'location', width: 30 },
    { key: 'registrationDate', width: 20 },
    { key: 'phoneNumber', width: 20 },
  ]

  let NaturalCount = 0 //บุคคลธรรมดา
  let OrdinaryUnregisCount = 0 //ไม่จดทะเบียน
  let OrdinaryRegisCount = 0 //จดทะเบียน
  let LimitPartnerCount = 0 //ห้างหุ้นส่วนจำกัด
  let LimitCompanyCount = 0 //บริษัทจำกัด
  let PublicComCount = 0 //บริษัทมหาชนจำกัด
  let LawyerCount = 0 //ทนายความ
  let LawyerCouncilCount = 0 //สภาทนายความ
  let BOnaturalCount = 0 //ผู้ประกอบธุรกิจที่เป็นบุคคลธรรมดา
  let BOjuristicCount = 0 //ผู้ประกอบธุรกิจที่เป็นนิติบุคคล

  item.forEach((data, index) => {
    const row = worksheet.addRow([
      index + 1, // ลำดับ
      data.businessName, // ชื่อสถานประกอบธุรกิจ
      data.registrationNumber, // เลขทะเบียนที่
      data.businessType, // ประเภทกิจการ
      data.location, // สถานที่ตั้ง
      data.registrationDate, // วันที่จดทะเบียน
      data.phoneNumber, // เบอร์โทรศัพท์
    ])
    row.height = 100
    row.eachCell((cell, colNumber) => {
      if ([2, 5].includes(colNumber)) {
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
      if (colNumber === 4) {
        switch (data.businessType) {
          case 'บุคคลธรรมดา':
            NaturalCount++
            break
          case 'ห้างหุ้นส่วนสามัญ (ไม่จดทะเบียน)':
            OrdinaryUnregisCount++
            break
          case 'ห้างหุ้นส่วนสามัญ (จดทะเบียน)':
            OrdinaryRegisCount++
            break
          case 'ห้างหุ้นส่วนจำกัด':
            LimitPartnerCount++
            break
          case 'บริษัทจำกัด':
            LimitCompanyCount++
            break
          case 'บริษัทมหาชนจำกัด':
            PublicComCount++
            break
          case 'ทนายความ':
            LawyerCount++
            break
          case 'สภาทนายความ':
            LawyerCouncilCount++
            break
          case 'ผู้ประกอบธุรกิจที่เป็นบุคคลธรรมดา':
            BOnaturalCount++
            break
          case 'ผู้ประกอบธุรกิจที่เป็นนิติบุคคล':
            BOjuristicCount++
            break
        }
      }
    })
  })

  const HeaderFooter = worksheet.addRow([
    'แยกรายประเภท',
    'บุคคลธรรมดา',
    'ห้างหุ้นส่วนสามัญ (ไม่จดทะเบียน)',
    'ห้างหุ้นส่วนสามัญ (จดทะเบียน)',
    'ห้างหุ้นส่วนจำกัด',
    'บริษัทจำกัด',
    'บริษัทมหาชนจำกัด',
  ])
  HeaderFooter.height = 50
  const HeaderFooterRow = worksheet.getRow(worksheet.lastRow.number)
  HeaderFooterRow.alignment = {
    horizontal: 'center',
    vertical: 'middle',
    wrapText: true,
  }
  HeaderFooterRow.eachCell((cell) => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'AAAB92' },
    }
  })

  const totalRow = worksheet.addRow([
    '#',
    NaturalCount || 0,
    OrdinaryUnregisCount || 0,
    OrdinaryRegisCount || 0,
    LimitPartnerCount || 0,
    LimitCompanyCount || 0,
    PublicComCount || 0,
  ])
  totalRow.height = 30
  totalRow.alignment = { horizontal: 'center', vertical: 'middle' }

  const totalRow2 = worksheet.addRow([
    '#',
    'ทนายความ',
    '',
    LawyerCount || 0,
    'สภาทนายความ',
    '',
    LawyerCouncilCount || 0,
  ])
  worksheet.mergeCells(
    `B${worksheet.lastRow.number}:C${worksheet.lastRow.number}`
  )
  worksheet.mergeCells(
    `E${worksheet.lastRow.number}:F${worksheet.lastRow.number}`
  )
  totalRow2.height = 30
  worksheet.getCell(`B${worksheet.lastRow.number}`).style = {
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'AAAB92' } },
  }
  worksheet.getCell(`E${worksheet.lastRow.number}`).style = {
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'AAAB92' } },
  }
  totalRow2.alignment = { horizontal: 'center', vertical: 'middle' }

  const totalRow3 = worksheet.addRow([
    '#',
    'ผู้ประกอบธุรกิจที่เป็นบุคคลธรรมดา',
    '',
    BOnaturalCount || 0,
    'ผู้ประกอบธุรกิจที่เป็นนิติบุคคล',
    '',
    BOjuristicCount || 0,
  ])
  worksheet.mergeCells(
    `B${worksheet.lastRow.number}:C${worksheet.lastRow.number}`
  )
  worksheet.mergeCells(
    `E${worksheet.lastRow.number}:F${worksheet.lastRow.number}`
  )
  totalRow3.height = 30
  worksheet.getCell(`B${worksheet.lastRow.number}`).style = {
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'AAAB92' } },
  }
  worksheet.getCell(`E${worksheet.lastRow.number}`).style = {
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'AAAB92' } },
  }
  totalRow3.alignment = { horizontal: 'center', vertical: 'middle' }

  const totalRow4 = worksheet.addRow([
    'รวม',
    '',
    NaturalCount +
      OrdinaryUnregisCount +
      OrdinaryRegisCount +
      LimitPartnerCount +
      LimitCompanyCount +
      PublicComCount +
      LawyerCount +
      LawyerCouncilCount +
      BOnaturalCount +
      BOjuristicCount || 0,
    '',
    '',
    '',
    '',
  ])
  totalRow4.height = 30
  worksheet.mergeCells(
    `A${worksheet.lastRow.number}:B${worksheet.lastRow.number}`
  )
  worksheet.mergeCells(
    `C${worksheet.lastRow.number}:G${worksheet.lastRow.number}`
  )
  worksheet.getRow(worksheet.lastRow.number).alignment = {
    horizontal: 'center',
    vertical: 'middle',
  }
  worksheet.getRow(worksheet.lastRow.number).eachCell((cell) => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'D9D9D9' },
    }
  })

  //เส้นขอบ
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
    'รายงานข้อมูลผู้จดทะเบียนการประกอบธุรกิจทวงถามหนี้ตามพระราชบัญญัติการทวงถามหนี้.xlsx'
  link.click()
}
