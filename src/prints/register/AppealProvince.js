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
  const totalProcess = item.reduce((sum, row) => sum + (row.process || 0), 0)
  const totalSuccess = item.reduce(
    (sum, row) => sum + (row.finish_process || 0),
    0
  )
  const totalSum = item.reduce((sum, row) => sum + (row.sum || 0), 0)
  const totalPercentage = item.reduce(
    (sum, row) => sum + (row.percentage || 0),
    0
  )
  return [
    {
      text: 'รายงานผลการดำเนินการพิจารณาเรื่องร้องเรียนตามพระราชบัญญัติการทวงถามหนี้ พ.ศ. ๒๕๕๘',
      alignment: 'center',
      bold: true,
      margin: [0, 0, 0, 0],
      fontSize: 18,
      bold: true,
    },
    {
      text: 'จังหวัดสมุทรปราการ',
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
        widths: ['10%', '*', '15%', '15%', '15%', '15%'],
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
              text: 'เรื่องร้องเรียนที่',
              fontSize: 16,
              bold: true,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'ระหว่างดำเนินการ',
              fontSize: 16,
              bold: true,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'ดำเนินการแล้วเสร็จ',
              fontSize: 16,
              bold: true,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'รวมทั้งหมด',
              fontSize: 16,
              bold: true,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'ยุติร้อยละ',
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
              text: row.id || '-',
              alignment: 'left',
            }, // สังกัด/หน่วยงาน
            {
              text: ThaiNumbers(row.process.toLocaleString() || 0),
              alignment: 'center',
            }, // ดำเนินการ
            {
              text: ThaiNumbers(row.finish_process.toLocaleString() || 0),
              alignment: 'center',
            }, // แล้วเสร็จ
            {
              text: ThaiNumbers(row.sum.toLocaleString() || 0),
              alignment: 'center',
              fillColor: '#C4C598',
            }, // รวม
            {
              text: ThaiNumbers(row.percentage.toLocaleString() || 0),
              alignment: 'center',
              fillColor: '#C4C598',
            }, // ยุติร้อยละ
          ]),
          [
            {
              text: 'รวมตามสถานะ',
              colSpan: 2,
              fontSize: 16,
              bold: true,
              fillColor: '#bdbdbd',
              alignment: 'center',
            },
            {},
            {
              text: ThaiNumbers(totalProcess.toLocaleString()),
              fontSize: 16,
              bold: true,
              fillColor: '#bdbdbd',
              alignment: 'center',
            },
            {
              text: ThaiNumbers(totalSuccess.toLocaleString()),
              fontSize: 16,
              bold: true,
              fillColor: '#bdbdbd',
              alignment: 'center',
            },
            {
              text: ThaiNumbers(totalSum.toLocaleString()),
              fontSize: 16,
              bold: true,
              fillColor: '#C4C598',
              alignment: 'center',
            },
            {
              text: ThaiNumbers(totalPercentage.toFixed(2).toLocaleString()),
              fontSize: 16,
              bold: true,
              fillColor: '#C4C598',
              alignment: 'center',
            },
          ],
        ],
      },
    },
  ]
}
