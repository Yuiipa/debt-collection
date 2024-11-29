import pdf from '@/plugins/pdf'
import { ThaiNumbers } from '@/components/helpers/utils.js'
import * as icon from '@/static/icon.json'

export async function generatePDF(item) {
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
    pageOrientation: 'landscape',
    pageMargins: [46, 35, 26, 60],

    content: [...Content(item)],
    defaultStyle: {
      fontSize: 15,
      lineHeight: 1.2,
    },
  }
  window.pdfMake.createPdf(docDefinition).open()
}

function Content(item) {
  const totalRegis = item.reduce((sum, row) => sum + (row.registration || 0), 0)
  const totalChange = item.reduce((sum, row) => sum + (row.changedata || 0), 0)
  const totalBook = item.reduce((sum, row) => sum + (row.book || 0), 0)
  const totalQuit = item.reduce((sum, row) => sum + (row.quit || 0), 0)
  return [
    {
      text: 'รายงานคำขอดำเนินการเกี่ยวกับทะเบียนผู้ประกอบธุรกิจทวงถามหนี้',
      alignment: 'center',
      bold: true,
      margin: [0, 0, 0, 0],
      fontSize: 18,
      lineHeight: 1.4,
    },
    {
      text: 'กรมการปกครอง กระทรวงมหาดไทย',
      alignment: 'center',
      bold: true,
      margin: [0, -5, 0, 0],
      fontSize: 18,
      lineHeight: 1.4,
    },
    {
      text: ThaiNumbers('วันที่ 1/11/2567 ถึง วันที่ 30/11/2567'),
      alignment: 'center',
      bold: true,
      margin: [0, -5, 0, 0],
      fontSize: 18,
      lineHeight: 1.4,
    },
    {
      table: {
        headerRows: 1,
        widths: ['10%', '*', '10%', '10%', '10%', '10%', '15%'],
        body: [
          [
            {
              text: 'ลำดับ',
              bold: true,
              fontSize: 16,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'หน่วยงาน',
              bold: true,
              fontSize: 16,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'คำขอ จดทะเบียน',
              bold: true,
              fontSize: 16,
              Wraptext: true,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'คำขอเปลี่ยน แปลงข้อมูล',
              bold: true,
              fontSize: 16,
              Wraptext: true,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'คำขอใบแทน หนังสือสำคัญ',
              bold: true,
              fontSize: 16,
              Wraptext: true,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'คำขอเลิก ประกอบธุรกิจ',
              bold: true,
              fontSize: 16,
              Wraptext: true,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'รวม',
              bold: true,
              fontSize: 16,
              Wraptext: true,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
          ],
          ...item.map((row, index) => [
            {
              text: ThaiNumbers(index + 1),
              alignment: 'center',
            }, // ลำดับ
            { text: row.agency || '-' }, // หน่วยงาน
            { text: ThaiNumbers(row.registration || 0), alignment: 'center' }, // คำขอจดทะเบียน
            { text: ThaiNumbers(row.changedata || 0), alignment: 'center' }, // ปป
            { text: ThaiNumbers(row.book || 0), alignment: 'center' }, // ใบแทน
            { text: ThaiNumbers(row.quit || 0), alignment: 'center' }, // เลิก
            {
              text: ThaiNumbers(row.sum || 0),
              alignment: 'center',
              fillColor: '#C4C598',
            }, // รวม
          ]),
          [
            {
              text: 'รวมตามประเภทคำขอ',
              colSpan: 2,
              bold: true,
              fontSize: 16,
              fillColor: '#bdbdbd',
              alignment: 'center',
            },
            {},
            {
              text: ThaiNumbers(totalRegis.toLocaleString()),
              bold: true,
              fontSize: 16,
              fillColor: '#bdbdbd',
              alignment: 'center',
            },
            {
              text: ThaiNumbers(totalChange.toLocaleString()),
              bold: true,
              fontSize: 16,
              fillColor: '#bdbdbd',
              alignment: 'center',
            },
            {
              text: ThaiNumbers(totalBook.toLocaleString()),
              bold: true,
              fontSize: 16,
              fillColor: '#bdbdbd',
              alignment: 'center',
            },
            {
              text: ThaiNumbers(totalQuit.toLocaleString()),
              bold: true,
              fontSize: 16,
              fillColor: '#bdbdbd',
              alignment: 'center',
            },
            {
              text: ThaiNumbers(
                (
                  totalRegis +
                  totalChange +
                  totalBook +
                  totalQuit
                ).toLocaleString()
              ),
              bold: true,
              fontSize: 16,
              fillColor: '#bdbdbd',
              alignment: 'center',
            },
          ],
        ],
      },
    },
  ]
}
