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
  const totalAmount = item.reduce((sum, row) => sum + (row.amount || 0), 0)
  return [
    {
      text: 'รายงานจำนวนผู้ประกอบธุรกิจทวงถามหนี้ในแต่ละจังหวัด',
      alignment: 'center',
      bold: true,
      margin: [0, 0, 0, 0],
      fontSize: 18,
      bold: true,
    },
    {
      text: 'กรมการปกครอง กระทรวงมหาดไทย',
      alignment: 'center',
      bold: true,
      margin: [0, 0, 0, 0],
      fontSize: 18,
      bold: true,
    },
    {
      table: {
        headerRows: 1,
        widths: ['15%', '*', '20%'],
        body: [
          [
            {
              text: 'ลำดับ',
              fontSize: 16,
              bold: true,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'จังหวัด',
              fontSize: 16,
              bold: true,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'จำนวน',
              fontSize: 16,
              bold: true,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
          ],
          ...item.map((row, index) => [
            {
              text: ThaiNumbers(index + 1),
              alignment: 'center',
            }, // ลำดับ
            {
              text: row.province || '-',
              alignment: 'left',
            }, // จังหวัด
            {
              text: ThaiNumbers(row.amount.toLocaleString() || 0),
              alignment: 'center',
            }, // จำนวน
          ]),
          [
            {
              text: 'รวมทั้งหมด',
              colSpan: 2,
              fontSize: 16,
              bold: true,
              fillColor: '#bdbdbd',
              alignment: 'center',
            },
            {},
            {
              text: ThaiNumbers(totalAmount.toLocaleString()),
              fontSize: 16,
              bold: true,
              fillColor: '#bdbdbd',
              alignment: 'center',
            },
          ],
        ],
      },
    },
  ]
}
