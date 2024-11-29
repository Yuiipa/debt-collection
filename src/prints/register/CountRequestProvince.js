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
  const totalProcess = item.reduce((sum, row) => sum + (row.process || 0), 0)
  const totalSuccess = item.reduce((sum, row) => sum + (row.success || 0), 0)
  return [
    {
      text: 'รายงานประเภทคำขอดำเนินการเกี่ยวกับทะเบียนผู้ประกอบธุรกิจทวงถามหนี้',
      alignment: 'center',
      bold: true,
      margin: [0, 0, 0, 0],
      fontSize: 18,
      bold: true,
    },
    {
      text: `จังหวัด${item[0].province}`,
      alignment: 'center',
      bold: true,
      margin: [0, -5, 0, 0],
      fontSize: 18,
      bold: true,
    },
    {
      text: ThaiNumbers('วันที่ 1/11/2566 ถึง วันที่ 30/11/2567'),
      alignment: 'center',
      bold: true,
      margin: [0, -5, 0, 0],
      fontSize: 18,
      bold: true,
    },
    {
      table: {
        headerRows: 1,
        widths: ['10%', '*', '15%', '15%', '15%'],
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
              text: 'ประเภทคำขอ',
              fontSize: 16,
              bold: true,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'อยู่ระหว่างดำเนินการ',
              fontSize: 16,
              bold: true,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'ดำเนินการสำเร็จ',
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
          ],
          ...item.map((row, index) => [
            {
              text: ThaiNumbers(index + 1),
              alignment: 'center',
            }, // ลำดับ
            {
              text: row.type || '-',
              alignment: 'left',
            }, // จังหวัด
            {
              text: ThaiNumbers(row.process.toLocaleString() || 0),
              alignment: 'center',
            }, // ระหว่างดำเนินการ
            {
              text: ThaiNumbers(row.success.toLocaleString() || 0),
              alignment: 'center',
            }, // แล้วเสร็จ
            {
              text: ThaiNumbers(
                (row.process + row.success).toLocaleString() || 0
              ),
              alignment: 'center',
            }, // รวม
          ]),
          [
            {
              text: 'รวมตามประเภทคำขอ',
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
              fillColor: '#bdbdbd',
              alignment: 'center',
            },
            {
              text: ThaiNumbers(totalSuccess.toLocaleString()),
              fontSize: 16,
              fillColor: '#bdbdbd',
              alignment: 'center',
            },
            {
              text: ThaiNumbers((totalSuccess + totalProcess).toLocaleString()),
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
