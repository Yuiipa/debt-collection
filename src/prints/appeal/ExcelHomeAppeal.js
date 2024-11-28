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

  worksheet.getCell('A2').value = 'กรมการปกครอง'
  worksheet.mergeCells('A2:F2')
  worksheet.getCell('A2').style = {
    font: { size: 12, bold: false },
    alignment: { horizontal: 'center', vertical: 'middle' },
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: '66CCFF' } },
  }

  worksheet.getCell('A3').value = `วันที่ ${ThaiNumbers(
    item[0].datetime
  )} ถึง วันที่ ${ThaiNumbers(item[0].datetime)}`
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
    'ดำเนินการสำเร็จ',
    'รวมทั้งหมด',
    'ยุติร้อยละ',
  ]
  worksheet.addRow(headerValues)

  worksheet.getRow(4).height = 60
  const headerRow = worksheet.getRow(4)
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
    { key: 'id', width: 30 },
    { key: 'process', width: 20 },
    { key: 'success', width: 20 },
    { key: 'total', width: 15 },
    { key: 'cancle', width: 15 },
  ]

  let processCount = 0
  let successCount = 0
  let totalCount = 0
  let cancelCount = 0

  item.forEach((data, index) => {
    const row = worksheet.addRow([
      ThaiNumbers(index + 1), // ลำดับ
      ThaiNumbers(data.id), // เรื่องร้องเรียนที่
      data.status === '0' ? '✓' : '', // อยู่ระหว่างดำเนินการ
      data.status === '1' ? '✓' : '', // ดำเนินการแล้วเสร็จ
      ThaiNumbers(data.total || '0'), // รวมทั้งหมด
      ThaiNumbers(data.cancle || '0'), // ยุติร้อยละ
    ])
    row.height = 25
    row.eachCell((cell, colNumber) => {
      if (colNumber === 2) {
        cell.alignment = { horizontal: 'left', vertical: 'middle' }
      } else {
        cell.alignment = { horizontal: 'center', vertical: 'middle' }
      }
      if (colNumber === 3 && cell.value === '✓') {
        processCount++
      }
      if (colNumber === 4 && cell.value === '✓') {
        successCount++
      }
      if (colNumber === 5) {
        const totalValue = parseFloat(data.total) || 0
        totalCount += totalValue
      }
      if (colNumber === 6) {
        const cancelValue = parseFloat(data.cancle) || 0
        cancelCount += cancelValue
      }
    })
  })

  // เพิ่มแถวรวม (รวมข้อมูลทั้งหมด)
  const totalRow = worksheet.addRow(['รวม', '', '', '', '', ''])

  worksheet.mergeCells(
    `A${worksheet.lastRow.number}:B${worksheet.lastRow.number}`
  )
  totalRow.height = 30
  worksheet.getCell(`A${worksheet.lastRow.number}`).style = {
    alignment: { horizontal: 'center', vertical: 'middle' },
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'D9D9D9' } },
  }

  worksheet.getCell(`C${worksheet.lastRow.number}`).value =
    ThaiNumbers(processCount) // อยู่ระหว่างดำเนินการ
  worksheet.getCell(`D${worksheet.lastRow.number}`).value =
    ThaiNumbers(successCount) // ดำเนินการแล้วเสร็จ
  worksheet.getCell(`E${worksheet.lastRow.number}`).value =
    ThaiNumbers(totalCount) // รวมทั้งหมด
  worksheet.getCell(`F${worksheet.lastRow.number}`).value = ThaiNumbers(
    cancelCount.toFixed(2)
  ) // ยุติร้อยละ
  ;[...['C', 'D', 'E', 'F']].forEach((col) => {
    worksheet.getCell(`${col}${worksheet.lastRow.number}`).style = {
      alignment: { horizontal: 'center', vertical: 'middle' },
      fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'D9D9D9' } },
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
    'รายงานผลการดำเนินการพิจารณาเรื่องร้องเรียนตามพระราชบัญญัติการทวงถามหนี้.xlsx'
  link.click()
}