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
    pageMargins: [42, 25, 30, 40],

    content: [...Content(item)],
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

function Content(item) {
  const total = item.reduce((sum, row) => sum + (row.amount || 0), 0)
  return [
    {
      text: 'รายงานสถิติข้อหาหรือฐานความผิดตามพระราชบัญญัติการทวงถามหนี้ พ.ศ. ๒๕๕๘',
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
      text: ThaiNumbers(`วันที่ 1/11/2567 ถึง วันที่ 30/11/2567`),
      alignment: 'center',
      bold: true,
      margin: [0, 0, 0, 0],
      fontSize: 18,
      bold: true,
    },
    {
      table: {
        headerRows: 1,
        widths: ['10%', '75%', '15%'],
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
              text: 'ข้อหา',
              fontSize: 16,
              bold: true,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'จำนวนเรื่องร้องเรียน',
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
              text: row.plaint || '-',
              alignment: 'left',
            }, // ข้อหา
            {
              text: ThaiNumbers(row.amount.toLocaleString() || 0),
              alignment: 'center',
            }, // จำนวน
          ]),
          [
            {
              text: ThaiNumbers(`จากจำนวนเรื่องร้องเรียนทั้งหมด ${item.length} เรื่อง`),
              colSpan: 2,
              fontSize: 16,
              bold: true,
              fillColor: '#bdbdbd',
              alignment: 'center',
            },
            {},
            {
              text: ThaiNumbers(total.toLocaleString()),
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
