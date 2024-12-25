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
    <div class="mx-4 my-2">
      <v-row>
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
        <v-col
          md="6"
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
          <div class="rounded-lg pb-2">
            <v-data-table :headers="headers" :items="items" class="elevation-1">
            </v-data-table>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script setup>
import { reactive } from 'vue'
import { generateExcel } from '@/prints/register/excel/ReportCountRequest'
import { generatePDF } from '@/prints/register/CountRequest'
import ExportMenu from '@/components/widget/ExportMenu.vue'

const formSearch = reactive({
  startDate: null,
  endDate: null,
})
const headers = [
  {
    title: 'ลำดับที่',
    key: 'index',
    align: 'center',
    sortable: true,
    value: (item) => {
      const index = items.indexOf(item)
      return index + 1
    },
  },
  {
    title: 'หน่วยงาน',
    key: 'agency',
    align: 'start',
    sortable: true,
    width: '190px',
  },
  {
    title: 'คำขอจดทะเบียน	',
    key: 'registration',
    align: 'start',
    sortable: true,
  },
  {
    title: 'คำขอเปลี่ยนแปลงข้อมูล	',
    key: 'changedata',
    align: 'start',
    sortable: true,
  },
  {
    title: 'คำขอใบแทนหนังสือสำคัญ	',
    key: 'book',
    align: 'start',
    sortable: true,
  },
  {
    title: 'คำขอเลิกประกอบธุรกิจ	',
    key: 'quit',
    align: 'center',
    sortable: true,
  },
  { title: 'รวม', key: 'sum', align: 'start', sortable: true },
]

const items = reactive([
  {
    pid: 1,
    agency: 'จังหวัดสมุทรปราการ',
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
    value: (item) => {
      const index = items.indexOf(item)
      return index + 1
    },
  },
  {
    pid: 2,
    agency: 'จังหวัดนนทบุรี',
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
  {
    pid: 3,
    agency: 'จังหวัดปทุมธานี',
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
  {
    pid: 4,
    agency: 'จังหวัดพระนครศรีอยุธยา',
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
  {
    pid: 5,
    agency: 'จังหวัดอ่างทอง',
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
  {
    pid: 6,
    agency: 'จังหวัดลพบุรี',
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
  {
    pid: 7,
    agency: 'จังหวัดสิงห์บุรี',
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
  {
    pid: 8,
    agency: 'จังหวัดชัยนาท',
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
  {
    pid: 9,
    agency: 'จังหวัดสระบุรี',
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
  {
    pid: 10,
    agency: 'จังหวัดชลบุรี',
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
  {
    pid: 11,
    agency: 'จังหวัดระยอง',
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
  {
    pid: 12,
    agency: 'จังหวัดจันทบุรี',
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
  {
    pid: 13,
    agency: 'จังหวัดตราด',
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
  {
    pid: 14,
    agency: 'จังหวัดฉะเชิงเทรา',
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
  {
    pid: 15,
    agency: 'จังหวัดปราจีนบุรี',
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
  {
    pid: 16,
    agency: 'จังหวัดนครนายก',
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
  {
    pid: 17,
    agency: 'จังหวัดสระแก้ว',
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
  {
    pid: 18,
    agency: 'จังหวัดนครราชสีมา',
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
  {
    pid: 19,
    agency: 'จังหวัดบุรีรัมย์',
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
  {
    pid: 20,
    agency: 'จังหวัดสุรินทร์',
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
  {
    pid: 25,
    agency: 'จังหวัดอำนาจเจริญ',
    registration: 0,
    changedata: 1,
    book: 0,
    quit: 0,
    sum: 1,
  },
  {
    pid: 44,
    agency: 'จังหวัดเชียงราย',
    registration: 0,
    changedata: 10,
    book: 0,
    quit: 0,
    sum: 10,
  },
  {
    pid: 51,
    agency: 'จังหวัดพิษณุโลก',
    registration: 1,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 1,
  },
])

const exportExcel = () => {
  generateExcel(items.value)
}

const exportPdf = () => {
  generatePDF(items.value)
}
</script>
