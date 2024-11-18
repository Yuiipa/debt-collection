import pdf from "@/plugins/pdf";

async function generatePDF(dataInfo) {
  const docDefinition = {
    pageSize: "A4",
    pageOrientation: "portrait",
    pageMargins: [35, 25, 30, 0],

    content: [
      ...page1Content(dataInfo),
      { text: "", pageBreak: "after" },
    ],
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
  };
  window.pdfMake.createPdf(docDefinition).open();
}


function page1Content(dataInfo) {
  return [
    {
      text: "ข้อมูลแสดงการจดทะเบียนการประกอบธุรกิจทวงถามหนี้",
      alignment: "center",
      style: "header",
      lineHeight: 1,
    },
    {
      text: "สำนักงาน จันทร์จิรา ฟองแก้ว ทนายความ",
      alignment: "center",
      style: "header",
      margin: [0, 0, 0, 35],
    },
    createRow("เลขที่คำขอ", "003/2566"),
    createRow("ทะเบียนเลขที่", "001/2566"),
    createRow("เลขประจำตัวประชาชนผู้ประกอบธุรกิจ", "1589900006632"),
    createRow("ชื่อ-นามสกุล ผูขอจดทะเบียน", "น.ส.จันทร์จิรา ฟองแก้ว"),
    createRow("สัญชาติผู้ขอจดทะเบียน", "ไทย"),
    createRow("ชื่อธุรกิจ", "สำนักงาน จันทร์จิรา ฟองแก้ว ทนายความ"),
    createRow("ประเภทกิจการ", "ทนายความ"),
    createRow("ที่อยูอาคาร", "105/2"),
    createRow("ถนน", "ถนนขุนลุมประพาส"),
    createRow("ตำบล", "ตำบลจองคำ"),
    createRow("อำเภอ", "อำเภอเมืองแม่ฮ่องสอน"),
    createRow("จังหวัด", "จังหวัดแม่ฮ่องสอน"),
    createRow("โทรสาร", "062-459697"),
    createRow("วัน/เดือน/ปี ที่ได้จดทะเบียน", "26/01/2566"),
    createRow("สำนักงานทะเบียนที่รับจดทะเบียน", "สภาทนายความ"),
    createRow("ชื่อผู้บันทึกข้อมูล", ""),
  ];
}

function createRow(label, value) {
  return {
    columns: [
      {
        text: label,
        width: 252,
        alignment: "right",
        margin: [0, 0, 0, 0], // ขยับไปทางซ้ายเล็กน้อย
      },
      {
        text: "     ", // ช่องว่างกลาง
        width: 24,
        alignment: "center",
        margin: [0, 0, 10, 0],
      },
      {
        text: value,
        width: 252,
        alignment: "left",
        margin: [0, 0, 10, 0], // ขยับไปทางขวาเล็กน้อย
      },
    ],
    margin: [0, 0, 0, 12], // ระยะห่างระหว่างแถว
  };
}
// {
//   text: 'กรุงเทพ',
//   style: 'body',
//   alignment: "right",
//   relativePosition: { x: -90, y: -22 }
// },

function splitDate(dateStr) {
  const [day, month, year] = dateStr.split("/"); // แยกวัน เดือน ปี ด้วยเครื่องหมาย "/"
  return {
    day: parseInt(day, 10),
    month: parseInt(month, 10),
    year: parseInt(year, 10),
  };
}

function getThaiMonth(monthNumber) {
  const thaiMonths = [
    "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
    "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
  ];

  return thaiMonths[monthNumber - 1];
}

async function convertImageToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file); // อ่านไฟล์แล้วแปลงเป็น Base64
  });
}

export { generatePDF }




