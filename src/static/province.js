export const getListsCC = () => {
    let jsonCC = [
      { value: '10', description: 'กรุงเทพมหานคร' },
      { value: '11', description: 'สมุทรปราการ' },
      { value: '12', description: 'นนทบุรี' },
      { value: '13', description: 'ปทุมธานี' },
      { value: '14', description: 'พระนครศรีอยุธยา' },
      { value: '15', description: 'อ่างทอง' },
      { value: '16', description: 'ลพบุรี' },
      { value: '17', description: 'สิงห์บุรี' },
      { value: '18', description: 'ชัยนาท' },
      { value: '19', description: 'สระบุรี' },
      { value: '20', description: 'ชลบุรี' },
      { value: '21', description: 'ระยอง' },
      { value: '22', description: 'จันทบุรี' },
      { value: '23', description: 'ตราด' },
      { value: '24', description: 'ฉะเชิงเทรา' },
      { value: '25', description: 'ปราจีนบุรี' },
      { value: '26', description: 'นครนายก' },
      { value: '27', description: 'สระแก้ว' },
      { value: '30', description: 'นครราชสีมา' },
      { value: '31', description: 'บุรีรัมย์' },
      { value: '32', description: 'สุรินทร์' },
      { value: '33', description: 'ศรีสะเกษ' },
      { value: '34', description: 'อุบลราชธานี' },
      { value: '35', description: 'ยโสธร' },
      { value: '36', description: 'ชัยภูมิ' },
      { value: '37', description: 'อำนาจเจริญ' },
      { value: '38', description: 'บึงกาฬ' },
      { value: '39', description: 'หนองบัวลำภู' },
      { value: '40', description: 'ขอนแก่น' },
      { value: '41', description: 'อุดรธานี' },
      { value: '42', description: 'เลย' },
      { value: '43', description: 'หนองคาย' },
      { value: '44', description: 'มหาสารคาม' },
      { value: '45', description: 'ร้อยเอ็ด' },
      { value: '46', description: 'กาฬสินธุ์' },
      { value: '47', description: 'สกลนคร' },
      { value: '48', description: 'นครพนม' },
      { value: '49', description: 'มุกดาหาร' },
      { value: '50', description: 'เชียงใหม่' },
      { value: '51', description: 'ลำพูน' },
      { value: '52', description: 'ลำปาง' },
      { value: '53', description: 'อุตรดิตถ์' },
      { value: '54', description: 'แพร่' },
      { value: '55', description: 'น่าน' },
      { value: '56', description: 'พะเยา' },
      { value: '57', description: 'เชียงราย' },
      { value: '58', description: 'แม่ฮ่องสอน' },
      { value: '60', description: 'นครสวรรค์' },
      { value: '61', description: 'อุทัยธานี' },
      { value: '62', description: 'กำแพงเพชร' },
      { value: '63', description: 'ตาก' },
      { value: '64', description: 'สุโขทัย' },
      { value: '65', description: 'พิษณุโลก' },
      { value: '66', description: 'พิจิตร' },
      { value: '67', description: 'เพชรบูรณ์' },
      { value: '70', description: 'ราชบุรี' },
      { value: '71', description: 'กาญจนบุรี' },
      { value: '72', description: 'สุพรรณบุรี' },
      { value: '73', description: 'นครปฐม' },
      { value: '74', description: 'สมุทรสาคร' },
      { value: '75', description: 'สมุทรสงคราม' },
      { value: '76', description: 'เพชรบุรี' },
      { value: '77', description: 'ประจวบคีรีขันธ์' },
      { value: '80', description: 'นครศรีธรรมราช' },
      { value: '81', description: 'กระบี่' },
      { value: '82', description: 'พังงา' },
      { value: '83', description: 'ภูเก็ต' },
      { value: '84', description: 'สุราษฎร์ธานี' },
      { value: '85', description: 'ระนอง' },
      { value: '86', description: 'ชุมพร' },
      { value: '90', description: 'สงขลา' },
      { value: '91', description: 'สตูล' },
      { value: '92', description: 'ตรัง' },
      { value: '93', description: 'พัทลุง' },
      { value: '94', description: 'ปัตตานี' },
      { value: '95', description: 'ยะลา' },
      { value: '96', description: 'นราธิวาส' },
    ]
    const thaiSort = new Intl.Collator('th')
    jsonCC.sort((a,b) => thaiSort.compare(a.description, b.description))
    return jsonCC
  
  }