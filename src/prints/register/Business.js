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
  const totalIndividual = item.filter(
    (row) => row.businessType === 'บุคคลธรรมดา'
  ).length
  const totalUnregistered = item.filter(
    (row) => row.businessType === 'ห้างหุ้นส่วนสามัญ (ไม่จดทะเบียน)'
  ).length
  const totalRegistered = item.filter(
    (row) => row.businessType === 'ห้างหุ้นส่วนสามัญ (จดทะเบียน)'
  ).length
  const totalLimitedPartnership = item.filter(
    (row) => row.businessType === 'ห้างหุ้นส่วนจำกัด'
  ).length
  const totalCompany = item.filter(
    (row) => row.businessType === 'บริษัทจำกัด'
  ).length
  const totalPublicCompany = item.filter(
    (row) => row.businessType === 'บริษัทมหาชนจำกัด'
  ).length
  const totalLawyer = item.filter(
    (row) => row.businessType === 'ทนายความ'
  ).length
  const totalLawyerCouncil = item.filter(
    (row) => row.businessType === 'สำนักงานทนายความ'
  ).length
  return [
    {
      text: 'รายงานข้อมูลสถานประกอบธุรกิจทวงถามหนี้',
      alignment: 'center',
      bold: true,
      margin: [0, 0, 0, 0],
      fontSize: 18,
      lineHeight: 1.4,
    },
    {
      text: `จังหวัด${item[0].location.split('จังหวัด')[1]}`,
      alignment: 'center',
      bold: true,
      margin: [0, -5, 0, 0],
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
        widths: ['10%', '*', '15%', '15%', '15%', '15%', '15%'],
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
              text: 'ชื่อสถานประกอบธุรกิจ',
              bold: true,
              fontSize: 16,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'ทะเบียนเลขที่',
              bold: true,
              fontSize: 16,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'ประเภทกิจการ',
              bold: true,
              fontSize: 16,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'สถานที่ตั้ง',
              bold: true,
              fontSize: 16,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'วันที่จดทะเบียน',
              bold: true,
              fontSize: 16,
              fillColor: '#AAAB92',
              alignment: 'center',
            },
            {
              text: 'เบอร์โทรศัพท์',
              bold: true,
              fontSize: 16,
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
            { text: row.businessName }, //ชื่อ
            {
              text: ThaiNumbers(row.registrationNumber.toLocaleString()),
              alignment: 'center',
            }, // ทะเบียนเลขที่
            {
              text: row.businessType,
              alignment: 'center',
            }, // ประเภท
            {
              text: row.location,
            }, // ทีตั้ง
            {
              text: ThaiNumbers(row.registrationDate),
              alignment: 'center',
            }, // วันที่
            {
              text: row.phoneNumber,
              alignment: 'center',
            }, // เบอร์โทรศัพท์
          ]),
          [
            {
              text: 'แยกราย ประเภท',
              alignment: 'center',
              bold: true,
              fontSize: 16,
              fillColor: '#AAAB92',
            },
            {
              text: 'บุคคลธรรมดา',
              alignment: 'center',
              bold: true,
              fontSize: 16,
              fillColor: '#AAAB92',
            },
            {
              text: 'ห้างหุ้นส่วนสามัญ (ไม่จดทะเบียน)',
              alignment: 'center',
              bold: true,
              fontSize: 16,
              fillColor: '#AAAB92',
            },
            {
              text: 'ห้างหุ้นส่วนสามัญ (จดทะเบียน)',
              alignment: 'center',
              bold: true,
              fontSize: 16,
              fillColor: '#AAAB92',
            },
            {
              text: 'ห้างหุ้นส่วนจำกัด',
              alignment: 'center',
              bold: true,
              fontSize: 16,
              fillColor: '#AAAB92',
            },
            {
              text: 'บริษัทจำกัด',
              alignment: 'center',
              bold: true,
              fontSize: 16,
              fillColor: '#AAAB92',
            },
            {
              text: 'บริษัทมหาชนจำกัด',
              alignment: 'center',
              bold: true,
              fontSize: 16,
              fillColor: '#AAAB92',
            },
          ],
          [
            {
              text: '#',
              alignment: 'center',
              fontSize: 16,
            },
            {
              text: ThaiNumbers(totalIndividual), //ผลรวมจำนวนบุคคลธรรมดา
              alignment: 'center',
              fontSize: 16,
            },
            {
              text: ThaiNumbers(totalUnregistered), //ห้างหุ้นส่วนสามัญไม่จดทะเบียน
              alignment: 'center',
              fontSize: 16,
            },
            {
              text: ThaiNumbers(totalRegistered), //ห้างหุ้นส่วนสามัญจดทะเบียน
              alignment: 'center',
              fontSize: 16,
            },
            {
              text: ThaiNumbers(totalLimitedPartnership), //ห้างหุ้นส่วนจำกัด
              alignment: 'center',
              fontSize: 16,
            },
            {
              text: ThaiNumbers(totalCompany), //บริษัทจำกัด
              alignment: 'center',
              fontSize: 16,
            },
            {
              text: ThaiNumbers(totalPublicCompany), //บริษัทมหาชนจำกัด
              alignment: 'center',
              fontSize: 16,
            },
          ],
          [
            {
              text: '#',
              alignment: 'center',
              fontSize: 16,
            },
            {
              text: 'ทนายความ',
              alignment: 'center',
              colSpan: 2,
              bold: true,
              fontSize: 16,
              fillColor: '#AAAB92',
            },
            {},
            {
              text: ThaiNumbers(totalLawyer), //ทนายความ
              alignment: 'center',
              fontSize: 16,
            },
            {
              text: 'สภาทนายความ',
              alignment: 'center',
              colSpan: 2,
              bold: true,
              fontSize: 16,
              fillColor: '#AAAB92',
            },
            {},
            {
              text: ThaiNumbers(totalLawyerCouncil), //สภาทนายความ
              alignment: 'center',
              fontSize: 16,
            },
          ],
          [
            {
              text: '#',
              alignment: 'center',
              fontSize: 16,
            },
            {
              text: 'ผู้ประกอบธุรกิจที่เป็นบุคคลธรรมดา',
              alignment: 'center',
              colSpan: 2,
              bold: true,
              fontSize: 16,
              fillColor: '#C4C598',
            },
            {},
            {
              text: ThaiNumbers(
                (totalLawyer + totalIndividual).toLocaleString()
              ),
              alignment: 'center',
              fontSize: 16,
            },
            {
              text: 'ผู้ประกอบธุรกิจที่เป็นนิติบุคคล',
              alignment: 'center',
              colSpan: 2,
              bold: true,
              fontSize: 16,
              fillColor: '#C4C598',
            },
            {},
            {
              text: ThaiNumbers(
                (
                  totalUnregistered +
                  totalRegistered +
                  totalLimitedPartnership +
                  totalCompany +
                  totalPublicCompany +
                  totalLawyerCouncil
                ).toLocaleString()
              ),
              alignment: 'center',
              fontSize: 16,
            },
          ],
          [
            {
              text: 'รวม',
              alignment: 'center',
              colSpan: 2,
              bold: true,
              fontSize: 16,
              fillColor: '#D9D9D9',
            },
            {},
            {
              text: ThaiNumbers(
                (
                  totalLawyer +
                  totalIndividual +
                  totalUnregistered +
                  totalRegistered +
                  totalLimitedPartnership +
                  totalCompany +
                  totalPublicCompany +
                  totalLawyerCouncil
                ).toLocaleString()
              ),
              alignment: 'center',
              colSpan: 5,
              bold: true,
              fontSize: 16,
              fillColor: '#D9D9D9',
            },
            {},
            {},
            {},
            {},
          ],
        ],
      },
    },
  ]
}
