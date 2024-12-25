<template>
  <v-card class="ma-4" variant="flat" style="background-color: #fafafa">
    <div
      class="d-flex justify-center ma-2 mt-4 text-h5 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span>
        รายงานผลการดำเนินการพิจารณาเรื่องร้องเรียนตามพระราชบัญญัติการทวงถามหนี้
        พ.ศ. ๒๕๕๘ ในแต่ละจังหวัด
      </span>
    </div >
    <div class="mx-4 my-2">
    <v-row >
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
        <div class="mb-2 font-weight-bold">หน่วยงาน</div>
        <v-autocomplete
          v-model="formSearch.agency"
          variant="outlined"
          persistent-placeholder
          hide-details
          density="compact"
          :items="itemsAgency"
        />
      </v-col>
      <v-col md="3" cols="12" class="d-flex align-end mb-1 justify-space-between">
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
          <v-data-table
            :headers="headers"
            :items="items"
            class="elevation-1"
          >
          </v-data-table>
        </div>
      </v-col>
    </v-row>
    </div>
  </v-card>
</template>

<script setup>
import { reactive } from 'vue'
import { generateExcel } from '@/prints/register/excel/ReportAppeal'
import { generatePDF } from '@/prints/register/Appeal'
import ExportMenu from '@/components/widget/ExportMenu.vue'

const formSearch = reactive({
  startDate: null,
  endDate: null,
  agency: 'ทั้งหมด',
})

const itemsAgency = [
  'ทั้งหมด','หน่วยงาน_1','หน่วยงาน_2'
]

const headers = [
  {
    title: 'ลำดับที่',
    key: 'index',
    align: 'center',
    sortable: true,
    width: '100px',
    value: (item) => {
      const index = items.indexOf(item)
      return index + 1
    },
  },
  {
    title: 'สังกัด/หน่วยงาน',
    key: 'agency',
    align: 'start',
    sortable: true,
  },
  {
    title: 'ระหว่างดำเนินการ',
    key: 'process',
    align: 'start',
    sortable: true,
  },
  {
    title: 'ดำเนินการแล้วเสร็จ',
    key: 'finish_process',
    align: 'start',
    sortable: true,
  },
  {
    title: 'รวมทั้งหมด',
    key: 'sum',
    align: 'start',
    sortable: true,
  },
  {
    title: 'ยุติร้อยละ',
    key: 'percentage',
    align: 'start',
    sortable: true,
  },
]

const items = reactive([
  {
    agency: 'กรุงเทพมหานคร',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดสมุทรปราการ',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดนนทบุรี',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดปทุมธานี',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดพระนครศรีอยุธยา',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดอ่างทอง',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดลพบุรี',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดสิงห์บุรี',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดชัยนาท',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดสระบุรี',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดชลบุรี',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดระยอง',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดจันทบุรี',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดตราด',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดฉะเชิงเทรา',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดปราจีนบุรี',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดนครนายก',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดสระแก้ว',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดนครราชสีมา',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดบุรีรัมย์',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดสุรินทร์',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดศรีสะเกษ',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดอุบลราชธานี',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดยโสธร',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
  {
    agency: 'จังหวัดชัยภูมิ',
    process: 0,
    finish_process: 0,
    sum: 0,
    percentage: 0,
  },
])

const exportExcel = () => {
  generateExcel(items)
}

const exportPdf = () => {
  generatePDF(items)
}
</script>


