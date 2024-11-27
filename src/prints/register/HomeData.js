import pdf from '@/plugins/pdf'
import * as icon from '@/static/icon.json'

async function generatePDF(dataInfo) {
  const docDefinition = {
    background: {
      image: icon.logo,
      width: 450,
      height: 450,
      opacity: 0.1,
      alignment: 'center',
      margin: [0, 80, 0, 0],
    },
    pageSize: 'A4',
    pageOrientation: 'landscape', // เปลี่ยนเป็น landscape
    pageMargins: [42, 25, 30, 60],

    content: [
      ...page1Content(dataInfo),
      { text: '', pageBreak: 'after' },
      ...page2Content(),
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
      subheader: {
        fontSize: 14,
        bold: true,
      },
      small: {
        fontSize: 15,
        bold: false,
      },
    },
    defaultStyle: {
      fontSize: 15,
      lineHeight: 1.2,
    },
  }
  window.pdfMake.createPdf(docDefinition).open()
}

function page1Content(dataInfo) {
  const tablePages = createTableWithPagination(dataInfo)

  // เพิ่มส่วนหัวไว้ในทุกหน้า
  const headerContent = [
    {
      text: 'รายงานข้อมูลผู้จดทะเบียนการประกอบธุรกิจทวงถามหนี้ตามพระราชบัญญัติการทวงถามหนี้ พ.ศ. ๒๕๕๘',
      alignment: 'center',
      style: 'header',
      lineHeight: 1,
      margin: [0, 0, 0, 5],
    },
    {
      text: 'กรมการปกครอง กระทรวงมหาดไทย',
      alignment: 'center',
      style: 'header',
      margin: [0, 0, 0, 15],
    },
  ]

  return tablePages.map((pageContent, index) => ({
    stack: [
      ...headerContent, // เพิ่มส่วนหัว
      {
        table: {
          headerRows: 1,
          widths: [40, '*', 80, 100, 150, 80, 80],
          body: pageContent,
        },
        layout: {
          fillColor: function (rowIndex, node, columnIndex) {
            return rowIndex === 0 ? '#AAAB92' : null // ใส่สีพื้นหลัง Header
          },
          hLineWidth: function (i, node) {
            return 0.5 // ความหนาเส้นแนวนอน
          },
          vLineWidth: function (i, node) {
            return 0.5 // ความหนาเส้นแนวตั้ง
          },
          hLineColor: function (i, node) {
            return 'black' // สีเส้นแนวนอน
          },
          vLineColor: function (i, node) {
            return 'black' // สีเส้นแนวตั้ง
          },
        },
      },
    ],
    ...(index < tablePages.length - 1), // เพิ่ม pageBreak ยกเว้นหน้าสุดท้าย
  }))
}

function page2Content() {
  return [
    {
      table: {
        headerRows: 1,
        widths: [40, '*', '*', '*', '*', '*', '*'], // กำหนดขนาดคอลัมน์ให้ใกล้เคียง
        body: [
          [
            {
              text: 'แยกราย\nประเภท',
              alignment: 'center',
              bold: true,
              fillColor: '#AAAB92',
            },
            {
              text: 'บุคคลธรรมดา',
              alignment: 'center',
              bold: true,
              fillColor: '#AAAB92',
              margin: [0, 10, 0, 10],
            },
            {
              text: 'ห้างหุ้นส่วนสามัญ\n(ไม่จดทะเบียน)',
              alignment: 'center',
              bold: true,
              fillColor: '#AAAB92',
            },
            {
              text: 'ห้างหุ้นส่วนสามัญ\n(จดทะเบียน)',
              alignment: 'center',
              bold: true,
              fillColor: '#AAAB92',
            },
            {
              text: 'ห้างหุ้นส่วนจำกัด',
              alignment: 'center',
              bold: true,
              fillColor: '#AAAB92',
              margin: [0, 10, 0, 10],
            },
            {
              text: 'บริษัทจำกัด',
              alignment: 'center',
              bold: true,
              fillColor: '#AAAB92',
              margin: [0, 10, 0, 10],
            },
            {
              text: 'บริษัทมหาชนจำกัด',
              alignment: 'center',
              bold: true,
              fillColor: '#AAAB92',
              margin: [0, 10, 0, 10],
            },
          ],

          [
            { text: '#', alignment: 'center' },
            { text: '2', alignment: 'center' },
            { text: '0', alignment: 'center' },
            { text: '0', alignment: 'center' },
            { text: '0', alignment: 'center' },
            { text: '0', alignment: 'center' },
            { text: '0', alignment: 'center' },
          ],
          [
            { text: '#', alignment: 'center' },
            {
              text: 'ทนายความ',
              colSpan: 2,
              alignment: 'center',
              bold: true,
              fillColor: '#AAAB92',
            },
            '',
            { text: '1', alignment: 'center' },
            {
              text: 'สภาทนายความ',
              colSpan: 2,
              alignment: 'center',
              bold: true,
              fillColor: '#AAAB92',
            },
            '',
            { text: '1', alignment: 'center' },
          ],
          [
            { text: '#', alignment: 'center' },
            {
              text: 'ผู้ประกอบธุรกิจที่เป็นบุคคลธรรมดา',
              colSpan: 2,
              alignment: 'center',
              bold: true,
              fillColor: '#d4d4b0',
            },
            '',
            { text: '1', alignment: 'center' },
            {
              text: 'ผู้ประกอบธุรกิจที่เป็นนิติบุคคล',
              colSpan: 2,
              alignment: 'center',
              bold: true,
              fillColor: '#d4d4b0',
            },
            '',
            { text: '1', alignment: 'center' },
          ],
          [
            {
              text: 'รวม',
              colSpan: 2,
              alignment: 'center',
              bold: true,
              fillColor: '#D9D9D9',
            },
            '',
            {
              text: '15',
              colSpan: 5,
              alignment: 'center',
              fillColor: '#D9D9D9',
            },
            '',
            '',
            '',
            '',
          ],
        ],
      },
      layout: {
        hLineWidth: function () {
          return 0.5 // ความหนาเส้นแนวนอน
        },
        vLineWidth: function () {
          return 0.5 // ความหนาเส้นแนวตั้ง
        },
        hLineColor: function () {
          return 'black' // สีเส้นแนวนอน
        },
        vLineColor: function () {
          return 'black' // สีเส้นแนวตั้ง
        },
      },
    },
  ]
}
function createTableWithPagination(dataInfo) {
  const rows = dataInfo.map((item, index) => [
    { text: index + 1, alignment: 'center' },
    { text: item.businessName, alignment: 'left' },
    { text: item.registrationNumber, alignment: 'center' },
    { text: item.businessType, alignment: 'left' },
    { text: item.location, alignment: 'left' },
    { text: item.registrationDate, alignment: 'center' },
    { text: item.phoneNumber || '-', alignment: 'center' },
  ])

  const header = [
    { text: 'ลำดับ', bold: true, alignment: 'center' },
    { text: 'ชื่อสถานประกอบธุรกิจ', bold: true, alignment: 'center' },
    { text: 'เลขทะเบียนที่', bold: true, alignment: 'center' },
    { text: 'ประเภทกิจการ', bold: true, alignment: 'center' },
    { text: 'สถานที่ตั้ง', bold: true, alignment: 'center' },
    { text: 'วันที่จดทะเบียน', bold: true, alignment: 'center' },
    { text: 'เบอร์โทรศัพท์', bold: true, alignment: 'center' },
  ]

  const pageHeight = 600 // กำหนดความสูงของหน้ากระดาษ (A4 landscape)
  let currentHeight = 0 // ความสูงสะสมของตาราง
  const tableChunks = [] // เก็บข้อมูลของแต่ละหน้า

  let currentPage = [header] // เริ่มต้นหน้าด้วย header

  rows.forEach((row, index) => {
    const rowHeight = 20 // กำหนดความสูงของแต่ละแถว (อาจปรับให้เหมาะสมกับเนื้อหา)

    // ถ้ารวมแถวแล้วเกินพื้นที่หน้ากระดาษ ให้เริ่มหน้าใหม่
    if (currentHeight + rowHeight > pageHeight) {
      tableChunks.push(currentPage) // เก็บหน้าปัจจุบัน
      currentPage = [header] // สร้างหน้าใหม่พร้อม header
      currentHeight = 0 // รีเซ็ตความสูงสะสม
    }

    currentPage.push(row) // เพิ่มแถวปัจจุบันลงในหน้า
    currentHeight += rowHeight // เพิ่มความสูงสะสม
  })

  // เก็บหน้าสุดท้ายที่เหลือ
  if (currentPage.length > 1) {
    tableChunks.push(currentPage)
  }

  return tableChunks
}

function createTableContent(dataInfo) {
  // หัวตาราง
  const header = [
    { text: 'ลำดับ', bold: true, alignment: 'center' },
    { text: 'ชื่อสถานประกอบธุรกิจ', bold: true, alignment: 'center' },
    { text: 'เลขทะเบียนที่', bold: true, alignment: 'center' },
    { text: 'ประเภทกิจการ', bold: true, alignment: 'center' },
    { text: 'สถานที่ตั้ง', bold: true, alignment: 'center' },
    { text: 'วันที่จดทะเบียน', bold: true, alignment: 'center' },
    { text: 'เบอร์โทรศัพท์', bold: true, alignment: 'center' },
  ]

  // เนื้อหาตาราง
  const rows = dataInfo.map((item, index) => [
    { text: index + 1, alignment: 'center' },
    { text: item.businessName, alignment: 'left' },
    { text: item.registrationNumber, alignment: 'center' },
    { text: item.businessType, alignment: 'left' },
    { text: item.location, alignment: 'left' },
    { text: item.registrationDate, alignment: 'center' },
    { text: item.phoneNumber || '-', alignment: 'center' },
  ])

  return [header, ...rows]
}

export { generatePDF }
