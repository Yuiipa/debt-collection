import pdf from '@/plugins/pdf'
import { ThaiNumbers } from '@/components/helpers/utils.js'
import * as icon from '@/static/icon.json'

const check = icon.correct

function Content(item) {
  return [
    {
      table: {
        headerRows: 1,
        widths: ['10%', '*', '15%', '15%', '15%', '15%'],
        body: [
          [
            {
              text: 'ลำดับ',
              style: 'tableheader',
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'เรื่องร้องเรียนที่',
              style: 'tableheader',
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'ระหว่างดำเนินการ',
              style: 'tableheader',
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'ดำเนินการแล้วเสร็จ',
              style: 'tableheader',
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'รวมทั้งหมด',
              style: 'tableheader',
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'ยุติร้อยละ',
              style: 'tableheader',
              fillColor: '#AAAB92',
              alignment: 'center',
            },
          ],
          ...item.map((row, index) => [
            {
              text: ThaiNumbers(index + 1),
              style: 'default',
              alignment: 'center',
            }, // ลำดับ
            { text: ThaiNumbers(row.id) || '-', style: 'default' }, // เรื่องร้องเรียนที่
            row.status === '1'
              ? {
                  image: check,
                  width: 13,
                  alignment: 'center',
                  margin: [0, 2, 0, 0],
                }
              : { text: '', style: 'default', alignment: 'center' },
            row.status === '0'
              ? {
                  image: check,
                  width: 13,
                  alignment: 'center',
                  margin: [0, 2, 0, 0],
                }
              : { text: '', style: 'default', alignment: 'center' },
            {
              text: row.total || '',
              style: 'default',
              alignment: 'center',
            }, //รวมทั้งหมด
            {
              text: row.cancle || '',
              style: 'default',
              alignment: 'center',
            }, //ยุติร้อยละ
          ]),
          [
            {
              text: 'รวมตามสถานะ',
              colSpan: 2,
              style: 'tableheader',
              fillColor: '#bdbdbd',
              alignment: 'center',
            },
            {},
            {
              text: `${ThaiNumbers(
                item.filter((row) => row.status === '1').length
              )}`,
              fillColor: '#bdbdbd',
              alignment: 'center',
            },
            {
              text: `${ThaiNumbers(
                item.filter((row) => row.status === '0').length
              )}`,
              fillColor: '#bdbdbd',
              alignment: 'center',
            },
            {
              text: `${ThaiNumbers(item.length)}`,
              fillColor: '#bdbdbd',
              alignment: 'center',
            },
            {
              text: ThaiNumbers('0.00'),
              fillColor: '#bdbdbd',
              alignment: 'center',
            },
          ],
        ],
      },
    },
  ]
}

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
    pageMargins: [46, 120, 26, 50],
    header: [
      {
        text: 'รายงานผลการดำเนินการพิจารณาเรื่องร้องเรียนตามพระราชบัญญัติการทวงถามหนี้ พ.ศ. ๒๕๕๘',
        alignment: 'center',
        bold: true,
        margin: [0, 37, 0, 0],
        fontSize: 18,
        lineHeight: 1.4,
      },
      {
        text: `${item[0].writtingAt}`,
        alignment: 'center',
        bold: true,
        margin: [0, -5, 0, 0],
        fontSize: 18,
        lineHeight: 1.4,
      },
      {
        text: `วันที่ ${ThaiNumbers(item[0].datetime)} ถึง วันที่ ${ThaiNumbers(
          item[0].datetime
        )}`,
        alignment: 'center',
        bold: true,
        margin: [0, -5, 0, 0],
        fontSize: 18,
        lineHeight: 1.4,
      },
    ],

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
      tableheader: {
        fontSize: 16,
        bold: true,
      },
    },
    defaultStyle: {
      fontSize: 15,
      lineHeight: 1.2,
    },
  }
  window.pdfMake.createPdf(docDefinition).open()
}
