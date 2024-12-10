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
    <v-row class="mx-8 my-2">
      <v-col md="3" cols="12">
        <div class="mb-2 font-weight-bold">ตั้งแต่วันที่</div>
        <DatePicker
          v-model="formSearch.startDate"
          variant="outlined"
          hide-details
          persistent-placeholder
          density="compact"
        />
      </v-col>
      <v-col md="3" cols="12">
        <div class="mb-2 font-weight-bold">ถึงวันที่</div>
        <DatePicker
          v-model="formSearch.endDate"
          variant="outlined"
          hide-details
          persistent-placeholder
          density="compact"
        />
      </v-col>
      <v-col md="3" cols="12">
        <div class="mb-2 font-weight-bold">จังหวัด</div>
        <v-autocomplete
          v-model="formSearch.province"
          variant="outlined"
          persistent-placeholder
          hide-details
          density="compact"
          :items="itemsProvince"
        ></v-autocomplete>
      </v-col>
      <v-col
        md="3"
        cols="12"
        class="d-flex align-end mb-1 justify-space-between"
      >
        <v-btn
          prepend-icon="mdi-magnify"
          style="background-color: #1a237e; color: white"
          >ค้นหา</v-btn
        >
        <ExportMenu :exportExcel="exportExcel" :exportPdf="exportPdf" />
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
  </v-card>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { generateExcel } from '@/prints/register/excel/ReportBusiness'
import { generatePDF } from '@/prints/register/Business'
import ExportMenu from '@/components/widget/ExportMenu.vue'

const formSearch = reactive({
  startDate: null,
  endDate: null,
  province: 'ทั้งหมด',
})

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
  {
    title: 'สถานที่ตั้ง',
    key: 'location',
    align: 'start',
    sortable: true,
  },
  {
    title: 'วันที่จดทะเบียน',
    key: 'registrationDate',
    align: 'start',
    sortable: true,
  },
  {
    title: 'เบอร์โทรศัพท์',
    key: 'phoneNumber',
    align: 'start',
    sortable: true,
  },
]

const items = reactive([
  {
    businessName: 'บริษัท กฎหมายรวินทร์ จำกัด',
    registrationNumber: '98/2558',
    businessType: 'สำนักงานทนายความ',
    location:
      'เลขที่ 248/1 หมู่ที่ 5 ซอย ถนนเทพารักษ์ ตำบลแพรกษา อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ',
    registrationDate: '22 เมษายน 2559',
    phoneNumber: '0840167110',
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

const exportExcel = () => {
  generateExcel(items)
}

const exportPdf = () => {
  generatePDF(items)
}
</script>

<style scoped>
.rounded-table {
  border-top-left-radius: 12px !important;
  border-top-right-radius: 12px !important;
  overflow: hidden;
}

.v-table :deep(th) {
  background-color: #1a237e;
  color: white; /* เพิ่มสีขาวสำหรับตัวอักษรใน header */
  cursor: pointer;
  font-weight: bold;
}

.v-table :deep(table > thead) {
  background-color: #ffffff;
  cursor: pointer;
  font-weight: bold;
}

.v-table :deep(tr:nth-child(even)) {
  background-color: #f1f1f1e5;
}
</style>
