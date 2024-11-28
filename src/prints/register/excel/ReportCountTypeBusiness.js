import ExcelJS from 'exceljs'
import { ThaiNumbers } from '@/components/helpers/utils.js'

export async function generateExcel(item) {
  const workbook = new ExcelJS.Workbook()
  const worksheet = workbook.addWorksheet('Sheet1')

  worksheet.getCell('A1').value =
    'รายงานจำนวนประเภทผู้ประกอบธุรกิจทวงถามหนี้ในแต่ละจังหวัด'
  worksheet.mergeCells('A1:K1')
  worksheet.getCell('A1').style = {
    font: { size: 12, bold: false },
    alignment: { horizontal: 'center', vertical: 'middle' },
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: '66CCFF' } },
  }

  worksheet.getCell('A2').value = 'กรมการปกครอง กระทรวงมหาดไทย'
  worksheet.mergeCells('A2:K2')
  worksheet.getCell('A2').style = {
    font: { size: 12, bold: false },
    alignment: { horizontal: 'center', vertical: 'middle' },
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: '66CCFF' } },
  }

  worksheet.getRow(1).height = 30
  worksheet.getRow(2).height = 30

  const headerValues = [
    'ลำดับ',
    'จังหวัด',
    'บุคคลธรรมดา',
    'ห้างหุ้นส่วนสามัญ (ไม่จดทะเบียน)',
    'ห้างหุ้นส่วนสามัญ (จดทะเบียน)',
    'ห้างหุ้นส่วนจำกัด',
    'บริษัทจำกัด',
    'บริษัทมหาชน',
    'ทนายความ',
    'สำนักงานทนายความ',
    'รวมทั้งหมด',
  ]
  worksheet.addRow(headerValues)
  worksheet.getRow(3).height = 60
  worksheet.getRow(3).alignment = {
    horizontal: 'center',
    vertical: 'middle',
    wrapText: true,
  }
  worksheet.getRow(3).eachCell((cell) => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'AAAB92' },
    }
  })

  worksheet.columns = [
    { key: 'num', width: 10 },
    { key: 'province', width: 30 },
    { key: 'individual', width: 15 },
    { key: 'unregisteredPartnership', width: 15 },
    { key: 'registeredPartnership', width: 15 },
    { key: 'limitedPartnership', width: 15 },
    { key: 'limitedCompany', width: 15 },
    { key: 'PubliclimitedCompany', width: 15 },
    { key: 'Lawyer', width: 15 },
    { key: 'LawyerCouncil', width: 15 },
    { key: 'sum', width: 15 },
  ]

  let sumIndividual = 0 //บุคคลธรรมดา
  let sumUnregis = 0 //ไม่จดทะเบียน
  let sumRegis = 0 //จดทะเบียน
  let sumLimitPartner = 0 //ห้างหุ้นส่วน
  let sumLimitCompany = 0 //บริษัทจำกัด
  let sumPubLimitCompany = 0 //บริษัทมหาชน
  let sumLawyer = 0 //ทนาย
  let sumLawyerCouncil = 0 //สำนักทนาย

  item.forEach((data, index) => {
    const row = worksheet.addRow([
      ThaiNumbers(index + 1), //ลำดับ
      data.province, //หน่วยงาน
      ThaiNumbers(data.individual || 0),
      ThaiNumbers(data.unregisteredPartnership || 0),
      ThaiNumbers(data.registeredPartnership || 0),
      ThaiNumbers(data.limitedPartnership || 0),
      ThaiNumbers(data.limitedCompany || 0),
      ThaiNumbers(data.publiclimitedCompany || 0),
      ThaiNumbers(data.Lawyer || 0),
      ThaiNumbers(data.LawyersCouncil || 0),
      ThaiNumbers(
        data.individual +
          data.unregisteredPartnership +
          data.registeredPartnership +
          data.limitedPartnership +
          data.limitedCompany +
          data.publiclimitedCompany +
          data.Lawyer +
          data.LawyersCouncil
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
      if ([11].includes(colNumber)) {
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'C4C598' },
        }
      }
      if (colNumber === 3 && data.individual) {
        sumIndividual += data.individual //บุคคลธรรมดา
      }
      if (colNumber === 4 && data.unregisteredPartnership) {
        sumUnregis += data.unregisteredPartnership //ไม่จดทะเบียน
      }
      if (colNumber === 5 && data.registeredPartnership) {
        sumRegis += data.registeredPartnership //จดทะเบียน
      }
      if (colNumber === 6 && data.limitedPartnership) {
        sumLimitPartner += data.limitedPartnership //ห้างหุ้นส่วน
      }
      if (colNumber === 7 && data.limitedCompany) {
        sumLimitCompany += data.limitedCompany //บริษัทจำกัด
      }
      if (colNumber === 8 && data.publiclimitedCompany) {
        sumPubLimitCompany += data.publiclimitedCompany //บริษัทมหาชน
      }
      if (colNumber === 9 && data.Lawyer) {
        sumLawyer += data.Lawyer //ทนายความ
      }
      if (colNumber === 10 && data.LawyersCouncil) {
        sumLawyerCouncil += data.LawyersCouncil //สำนักทนาย
      }
    })
  })

  const footer = worksheet.addRow([
    'รวมตามประเภท',
    '',
    ThaiNumbers(sumIndividual),
    ThaiNumbers(sumUnregis),
    ThaiNumbers(sumRegis),
    ThaiNumbers(sumLimitPartner),
    ThaiNumbers(sumLimitCompany),
    ThaiNumbers(sumPubLimitCompany),
    ThaiNumbers(sumLawyer),
    ThaiNumbers(sumLawyerCouncil),
    ThaiNumbers(
      sumIndividual +
        sumUnregis +
        sumRegis +
        sumLimitPartner +
        sumLimitCompany +
        sumPubLimitCompany +
        sumLawyer +
        sumLawyerCouncil || 0
    ),
  ])
  footer.height = 30

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

  const footer2 = worksheet.addRow([
    '',
    '',
    'บุคคลธรรมดา',
    '',
    ThaiNumbers(sumIndividual + sumLawyer),
    '',
    'นิติบุคคล',
    '',
    ThaiNumbers(
      sumUnregis +
        sumRegis +
        sumLimitPartner +
        sumLimitCompany +
        sumPubLimitCompany +
        sumLawyerCouncil
    ),
    '',
    '',
  ])
  footer2.height = 30
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
  worksheet.mergeCells(
    `A${worksheet.lastRow.number - 1}:B${worksheet.lastRow.number}`
  )
  worksheet.mergeCells(
    `C${worksheet.lastRow.number}:D${worksheet.lastRow.number}`
  )
  worksheet.mergeCells(
    `E${worksheet.lastRow.number}:F${worksheet.lastRow.number}`
  )
  worksheet.mergeCells(
    `G${worksheet.lastRow.number}:H${worksheet.lastRow.number}`
  )
  worksheet.mergeCells(
    `I${worksheet.lastRow.number}:K${worksheet.lastRow.number}`
  )

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
