<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h5 text-md-h4 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span>
        รายงานคำขอดำเนินการเกี่ยวกับทะเบียนผู้ประกอบธุรกิจทวงถามหนี้
      </span>
    </v-card-title>
    <div>
      <v-row class="mx-10 my-2">
        <div class="w-100 d-flex justify-end" style="gap: 10px">
          <v-btn
            variant="outlined"
            append-icon="mdi-file-excel"
            style="color: green"
            class="rounded-lg"
            size="large"
            id="excel"
            @click="exportExcel()"
          >
            Excel
          </v-btn>
          <v-btn
            variant="outlined"
            append-icon="mdi-printer"
            style="color: orange"
            class="rounded-lg"
            size="large"
            id="print"
            @click="exportPdf()"
          >
            พิมพ์
          </v-btn>
        </div>
      </v-row>
      <v-row class="mx-8 my-2">
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">ตั้งแต่วันที่</div>
          <v-text-field
            variant="outlined"
            placeholder="ตั้งแต่วันที่"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">ถึงวันที่</div>
          <v-text-field
            variant="outlined"
            placeholder="ถึงวันที่"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">จังหวัด</div>
          <v-text-field
            variant="outlined"
            placeholder="ทั้งหมด"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12" class="d-flex align-end mb-1">
          <v-btn
            prepend-icon="mdi-magnify"
            style="background-color: #1a237e; color: white"
            >ค้นหา</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="px-10 rounded-lg pb-2">
            <v-data-table
              :headers="headers"
              :items="items"
              class="elevation-1 rounded-table"
            >
              <!-- ลำดับที่ -->
              <template v-slot:[`item.index`]="{ index }">
                <span>{{ index + 1 }}</span>
              </template>
            </v-data-table>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { generateExcel } from '@/prints/register/excel/ReportBusiness'
import { generatePDF } from '@/prints/register/Business'

const headers = [
  {
    title: 'ลำดับที่',
    key: 'index',
    align: 'center',
    sortable: false,
    width: '100px',
  },
  {
    title: 'ชื่อสถานประกอบธุรกิจ',
    key: 'businessName',
    align: 'start',
    sortable: true,
  },
  {
    title: 'เลขทะเบียนที่',
    key: 'registrationNumber',
    align: 'start',
    sortable: true,
  },
  {
    title: 'ประเภทกิจการ',
    key: 'businessType',
    align: 'start',
    sortable: true,
  },
]

const items = ref([
  {
    businessName: 'บริษัท กฎหมายรวินทร์ จำกัด',
    registrationNumber: '98/2558',
    businessType: 'สำนักงานทนายความ',
    location:
      'เลขที่ 248/1 หมู่ที่ 5 ซอย ถนนเทพารักษ์ ตำบลแพรกษา อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ',
    registrationDate: '22 เมษายน 2559',
    phoneNumber: '',
  },
  {
    businessName: 'สำนักงานทนายความ ยุติธรรม',
    registrationNumber: '92/2559',
    businessType: 'สำนักงานทนายความ',
    location:
      'เลขที่ 85/22 หมู่ที่ 7 ซอย- ถนนวัดศรีวารีน้อย ตำบลบางโฉลง อำเภอบางพลี จังหวัดสมุทรปราการ',
    registrationDate: '24 มิถุนายน 2559',
    phoneNumber: '',
  },
  {
    businessName: 'บริษัท ลภัสรินทร์ บิสซิเนส แอนด์ ลอว์ จำกัด',
    registrationNumber: '90/2562',
    businessType: 'สำนักงานทนายความ',
    location:
      'เลขที่ 1589/ หมู่ที่ 10 ซอย- ถนน- ตำบลสำโรงเหนือ อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ',
    registrationDate: '1 เมษายน 2562',
    phoneNumber: '',
  },
  {
    businessName: 'บริษัท ใบหยก ลอว์ จำกัด',
    registrationNumber: '85/2561',
    businessType: 'สำนักงานทนายความ',
    location:
      'หมู่บ้านพฤกษาปูริ เลขที่ 222/1 หมู่ที่ 11 ซอยกิ่งแก้ว 37 ถนนกิ่งแก้ว ตำบลราชาเทวะ อำเภอบางพลี จังหวัดสมุทรปราการ',
    registrationDate: '2 เมษายน 2561',
    phoneNumber: '',
  },
  {
    businessName: 'บริษัท ฟิวชั่น เบรค จำกัด',
    registrationNumber: '84/2560',
    businessType: 'สำนักงานทนายความ',
    location:
      'เลขที่ 89/45 หมู่ที่ 8 ซอยประชาอุทิศ 129 ถนน- ตำบลบางครุ อำเภอพระประแดง จังหวัดสมุทรปราการ',
    registrationDate: '27 มกราคม 2560',
    phoneNumber: '',
  },
  {
    businessName: 'สำนักงานกฎหมาย ดิษยภัทร ทนายความ',
    registrationNumber: '84/2559',
    businessType: 'สำนักงานทนายความ',
    location:
      'เลขที่ 46/25 หมู่ที่ - ซอย8 ถนน- ตำบลปากน้ำ อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ',
    registrationDate: '24 มิถุนายน 2559',
    phoneNumber: '',
  },
  {
    businessName: 'บริษัท สเต็มไพรซ์ ลอว์ โซลูชั่น จำกัด',
    registrationNumber: '82/2562',
    businessType: 'สำนักงานทนายความ',
    location:
      'เลขที่ 59/18 หมู่ที่ 21 ซอย- ถนนกิ่งแก้ว ตำบลราชาเทวะ อำเภอบางพลี จังหวัดสมุทรปราการ',
    registrationDate: '4 มีนาคม 2562',
    phoneNumber: '',
  },
  {
    businessName: 'ปาริชาติ และเพื่อนทนายความ',
    registrationNumber: '76/2562',
    businessType: 'สำนักงานทนายความ',
    location:
      'เลขที่ 4075/ หมู่ที่ 3 ซอยวัดด่าน ถนนสุขุมวิท 113 ตำบลสำโรงเหนือ อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ',
    registrationDate: '4 มีนาคม 2562',
    phoneNumber: '',
  },
  {
    businessName: 'บริษัท ธนภูมิ ควอลิตี้ จำกัด',
    registrationNumber: '74/2558',
    businessType: 'สำนักงานทนายความ',
    location:
      'เลขที่ 417/4 หมู่ที่ 5 ซอย ถนน ตำบลสำโรงเหนือ อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ',
    registrationDate: '22 เมษายน 2559',
    phoneNumber: '',
  },
  {
    businessName: 'บริษัท สำนักกฎหมาย มินจอห์น ลีเกิ้ล จำกัด',
    registrationNumber: '72/2564',
    businessType: 'สำนักงานทนายความ',
    location:
      'เลขที่ 10/39 หมู่ที่ 8 ซอย- ถนน- ตำบลสำโรงเหนือ อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ',
    registrationDate: '23 เมษายน 2564',
    phoneNumber: '',
  },
])

function editItem(item) {
  console.log('แก้ไข:', item)
}

function deleteItem(item) {
  console.log('ลบ:', item)
}

const exportExcel = () => {
  generateExcel(items.value)
}

const exportPdf = () => {
  generatePDF(items.value)
}
</script>

<style scoped>
.v-table :deep(th) {
  background-color: #1a237e;
  color: white; /* เพิ่มสีขาวสำหรับตัวอักษรใน header */
  cursor: pointer;
  font-weight: bold;
}

.rounded-table {
  border-top-left-radius: 12px !important;
  border-top-right-radius: 12px !important;
  overflow: hidden;
}

.v-table :deep(table > thead) {
  background-color: #ffffff;
  cursor: pointer;
  font-weight: bold;
}

.v-table ::v-deep tr:nth-child(even) {
  background-color: #f1f1f1e5;
}
</style>
