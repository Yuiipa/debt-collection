import pdf from '@/plugins/pdf'

function page1Content(item) {
  return [
    {
      text: `${item.datetime}`,
    },
  ]
}

export async function generatePDF(item) {
  const docDefinition = {
    pageSize: 'A4',
    pageOrientation: 'landscape',
    pageMargins: [56, 120, 36, 0],
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
        text: `${item.writtingAt}`,
        alignment: 'center',
        bold: true,
        margin: [0, -5, 0, 0],
        fontSize: 18,
        lineHeight: 1.4,
      },
      {
        text: `วันที่ ${item.datetime}`,
        alignment: 'center',
        bold: true,
        margin: [0, -5, 0, 0],
        fontSize: 18,
        lineHeight: 1.4,
      },
    ],

    content: [...page1Content(item)],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
      subheader: {
        fontSize: 14,
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
