<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h4 font-weight-bold"
      style="color: #1a237e"
    >
      <span>
        รายงานคำขอดำเนินการเกี่ยวกับทะเบียนผู้ประกอบธุรกิจทวงถามหนี้
      </span>
    </v-card-title>
    <div>
      <v-row class="ma-1 mx-8 my-2">
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
        <v-col md="3" cols="12" class="d-flex align-end mb-1">
          <v-btn
            prepend-icon="mdi-magnify"
            style="background-color: #1a237e; color: white"
            >ค้นหา</v-btn
          >
        </v-col>
        <v-col md="3" cols="12" class="d-flex align-end mb-1">
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
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="px-10">
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
  <v-card class="pt-2 mx-14 my-12 px-2 elevation-3">
    <v-row>
      <v-col
        cols="12"
        class="d-flex justify-center"
        style="background-color: white; height: 400px"
      >
        <AreaChart :data="graph" /></v-col
    ></v-row>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import AreaChart from '@/components/charts/AreaChart.vue'
import { generateExcel } from '@/prints/register/excel/ReportCountRequest'

const graph = [
  { usage_count: 385, usage_name: 'กรุงเทพมหานคร' },
  { usage_count: 251, usage_name: 'เชียงใหม่' },
  { usage_count: 89, usage_name: 'ภูเก็ต' },
  { usage_count: 159, usage_name: 'ชลบุรี' },
  { usage_count: 359, usage_name: 'ขอนแก่น' },
  { usage_count: 421, usage_name: 'สงขลา' },
  { usage_count: 275, usage_name: 'นครราชสีมา' },
  { usage_count: 310, usage_name: 'สุราษฎร์ธานี' },
  { usage_count: 195, usage_name: 'ระยอง' },
  { usage_count: 320, usage_name: 'อยุธยา' },
]

const headers = [
  { title: 'ลำดับที่', key: 'index', align: 'center', sortable: true },
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

const items = ref([
  {
    pid: 1,
    agency: 'จังหวัดสมุทรปราการ',
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
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

function editItem(item) {
  console.log('แก้ไข:', item)
}

function deleteItem(item) {
  console.log('ลบ:', item)
}

const exportExcel = () => {
  generateExcel(items.value)
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
