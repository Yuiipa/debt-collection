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
  const totalIndividual = item.reduce(
    (sum, row) => sum + (row.individual || 0),
    0
  )
  const totalUnregis = item.reduce(
    (sum, row) => sum + (row.unregisteredPartnership || 0),
    0
  )
  const totalRegis = item.reduce(
    (sum, row) => sum + (row.registeredPartnership || 0),
    0
  )
  const totalLimitPart = item.reduce(
    (sum, row) => sum + (row.limitedPartnership || 0),
    0
  )
  const totalLimitCom = item.reduce(
    (sum, row) => sum + (row.limitedCompany || 0),
    0
  )
  const totalPublic = item.reduce(
    (sum, row) => sum + (row.publiclimitedCompany || 0),
    0
  )
  const totalLawyer = item.reduce((sum, row) => sum + (row.Lawyer || 0), 0)
  const totalLawCoun = item.reduce(
    (sum, row) => sum + (row.LawyersCouncil || 0),
    0
  )
  return [
    {
      text: 'รายงานจำนวนประเภทผู้ประกอบธุรกิจทวงถามหนี้ในแต่ละจังหวัด',
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
      table: {
        headerRows: 1,
        widths: [
          '7%',
          '*',
          '9%',
          '9%',
          '9%',
          '9%',
          '9%',
          '9%',
          '9%',
          '9%',
          '9%',
        ],
        body: [
          [
            {
              text: 'ลำดับ',
              bold: true,
              fontSize: 18,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'จังหวัด',
              bold: true,
              fontSize: 18,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'บุคคล ธรรรมดา',
              bold: true,
              fontSize: 18,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'ห้างหุ้นส่วน สามัญ (ไม่จด ทะเบียน)',
              bold: true,
              fontSize: 18,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'ห้างหุ้น ส่วนสามัญ (จด ทะเบียน)',
              bold: true,
              fontSize: 18,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'ห้างหุ้นส่วน จำกัด',
              bold: true,
              fontSize: 18,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'บริษัทจำกัด',
              bold: true,
              fontSize: 18,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'บริษัท มหาชน',
              bold: true,
              fontSize: 18,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'ทนายความ',
              bold: true,
              fontSize: 18,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'สำนักงาน ทนายความ',
              bold: true,
              fontSize: 18,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'รวมทั้งหมด',
              bold: true,
              fontSize: 18,
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
            { text: row.province }, //จังหวัด
            {
              text: ThaiNumbers(row.individual.toLocaleString()),
              alignment: 'center',
            }, // บุคคลธรรมดา
            {
              text: ThaiNumbers(row.unregisteredPartnership.toLocaleString()),
              alignment: 'center',
            }, // ไม่จด
            {
              text: ThaiNumbers(row.registeredPartnership.toLocaleString()),
              alignment: 'center',
            }, // จด
            {
              text: ThaiNumbers(row.limitedPartnership.toLocaleString()),
              alignment: 'center',
            }, // ห้างหุ้นส่วนจำกัด
            {
              text: ThaiNumbers(row.limitedCompany.toLocaleString()),
              alignment: 'center',
            }, // บริษัทจำกัด
            {
              text: ThaiNumbers(row.publiclimitedCompany.toLocaleString()),
              alignment: 'center',
            }, // บริษัทมหาชน
            {
              text: ThaiNumbers(row.Lawyer.toLocaleString()),
              alignment: 'center',
            }, // ทนาย
            {
              text: ThaiNumbers(row.LawyersCouncil.toLocaleString()),
              alignment: 'center',
            }, // สำนักทนาย
            {
              text: ThaiNumbers(
                (
                  row.individual +
                  row.unregisteredPartnership +
                  row.registeredPartnership +
                  row.limitedPartnership +
                  row.limitedCompany +
                  row.publiclimitedCompany +
                  row.Lawyer +
                  row.LawyersCouncil
                ).toLocaleString()
              ),
              alignment: 'center',
              fillColor: '#C4C598',
            }, // รวม
          ]),
          [
            {
              text: 'รวมประเภท',
              colSpan: 2,
              rowSpan: 2,
              alignment: 'center',
              margin: [0, 12],
              bold: true,
              fontSize: 14,
              fillColor: '#D3D3D3',
            },
            {},
            {
              text: ThaiNumbers(totalIndividual.toLocaleString()),
              alignment: 'center',
              bold: true,
              fillColor: '#D3D3D3',
            },
            {
              text: ThaiNumbers(totalUnregis.toLocaleString()),
              alignment: 'center',
              bold: true,
              fillColor: '#D3D3D3',
            },
            {
              text: ThaiNumbers(totalRegis.toLocaleString()),
              alignment: 'center',
              bold: true,
              fillColor: '#D3D3D3',
            },
            {
              text: ThaiNumbers(totalLimitPart.toLocaleString()),
              alignment: 'center',
              bold: true,
              fillColor: '#D3D3D3',
            },
            {
              text: ThaiNumbers(totalLimitCom.toLocaleString()),
              alignment: 'center',
              bold: true,
              fillColor: '#D3D3D3',
            },
            {
              text: ThaiNumbers(totalPublic.toLocaleString()),
              alignment: 'center',
              bold: true,
              fillColor: '#D3D3D3',
            },
            {
              text: ThaiNumbers(totalLawyer.toLocaleString()),
              alignment: 'center',
              bold: true,
              fillColor: '#D3D3D3',
            },
            {
              text: ThaiNumbers(totalLawCoun.toLocaleString()),
              alignment: 'center',
              bold: true,
              fillColor: '#D3D3D3',
            },
            {
              text: ThaiNumbers(
                (
                  totalLawyer +
                  totalIndividual +
                  totalRegis +
                  totalUnregis +
                  totalPublic +
                  totalLimitPart +
                  totalLimitCom +
                  totalLawCoun
                ).toLocaleString()
              ),
              alignment: 'center',
              bold: true,
              fontSize: 14,
              fillColor: '#D3D3D3',
            },
          ],
          [
            {},
            {},
            {
              text: 'บุคคลธรรมดา',
              colSpan: 2,
              alignment: 'center',
              bold: true,
              fontSize: 14,
              fillColor: '#D3D3D3',
            },
            {},
            {
              text: ThaiNumbers(
                (totalIndividual + totalLawyer).toLocaleString()
              ),
              colSpan: 2,
              alignment: 'center',
              bold: true,
              fontSize: 14,
              fillColor: '#D3D3D3',
            },
            {},
            {
              text: 'นิติบุคคล',
              colSpan: 2,
              alignment: 'center',
              bold: true,
              fontSize: 14,
              fillColor: '#D3D3D3',
            },
            {},
            {
              text: ThaiNumbers(
                (
                  totalRegis +
                  totalUnregis +
                  totalPublic +
                  totalLimitPart +
                  totalLimitCom +
                  totalLawCoun
                ).toLocaleString()
              ),
              colSpan: 3,
              alignment: 'center',
              bold: true,
              fontSize: 14,
              fillColor: '#D3D3D3',
            },
            {},
            {},
          ],
        ],
      },
    },
  ]
}
