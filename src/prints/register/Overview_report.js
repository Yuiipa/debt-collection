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
  return [
    {
      text: 'ภาพรวมจำนวนการรายงานผล',
      alignment: 'center',
      bold: true,
      margin: [0, 0, 0, 0],
      fontSize: 18,
      bold: true,
    },
    {
      text: 'ไตรมาสที่ : ๔',
      alignment: 'center',
      bold: true,
      margin: [0, 0, 0, 0],
      fontSize: 18,
      bold: true,
    },
    {
      text: ThaiNumbers(`ระหว่างวันที่ 1 มกราคม 2566 ถึง 30 มีนาคม 2567`),
      alignment: 'center',
      bold: true,
      margin: [0, 0, 0, 0],
      fontSize: 18,
      bold: true,
    },
    {
      table: {
        headerRows: 1,
        widths: ['8%', '*', '15%', '15%', '15%', '15%', '15%'],
        body: [
          [
            {
              text: 'ลำดับ',
              fontSize: 16,
              bold: true,
              margin: [0, 31],
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'สังกัด/หน่วยงาน',
              fontSize: 16,
              bold: true,
              margin: [0, 31],
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'การประชุมคณะ กรรมการกำกับการ ทวงถามหนี้ ประจำจังหวัด',
              fontSize: 16,
              bold: true,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'การประเมินผลการ ปฏิบัติงานตาม พ.ร.บ. การทวงถามหนี้ พ.ศ.๒๕๕๘',
              fontSize: 16,
              bold: true,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'ผลการดำเนินงาน ตรวจติดตามผู้ประกอบ ธุรกิจทวงถามหนี้',
              fontSize: 16,
              bold: true,
              margin: [0, 10],
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'อื่น ๆ',
              fontSize: 16,
              bold: true,
              margin: [0, 31],
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'รวม',
              fontSize: 16,
              bold: true,
              margin: [0, 31],
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
              text: row.agency || '-',
              alignment: 'left',
            }, // สังกัด/หน่วยงาน
            {
              text: ThaiNumbers(row.meetting.toLocaleString() || 0),
              alignment: 'center',
            }, // ประชุม
            {
              text: ThaiNumbers(row.estimate.toLocaleString() || 0),
              alignment: 'center',
            }, // ประเมิน
            {
              text: ThaiNumbers(row.result.toLocaleString() || 0),
              alignment: 'center',
            }, // ผล
            {
              text: ThaiNumbers(row.other.toLocaleString() || 0),
              alignment: 'center',
            }, // อื่นๆ
            {
              text: ThaiNumbers(
                (
                  row.meetting +
                  row.estimate +
                  row.result +
                  row.other
                ).toLocaleString() || 0
              ),
              alignment: 'center',
            }, // รวม
          ]),
        ],
      },
    },
  ]
}
