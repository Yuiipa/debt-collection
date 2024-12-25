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
        <div class="rounded-lg pb-2">
          <v-data-table
            :headers="headers"
            :items="items"
            class="elevation-1"
          >
            <template v-slot:[`item.total`]="{ item }">
              <span>{{ item.process + item.success }}</span>
            </template>
          </v-data-table>
        </div>
      </v-col>
    </v-row>
    </div>
  </v-card>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { generateExcel } from '@/prints/register/excel/ReportCountRequestProvince'
import { generatePDF } from '@/prints/register/CountRequestProvince'
import ExportMenu from '@/components/widget/ExportMenu.vue'

const itemsAgency = ref([
  'จังหวัดสมุทรปราการ',
  'จังหวัดนนทบุรี',
  'จังหวัดปทุมธานี',
])

const formSearch = reactive({
  startDate: null,
  endDate: null,
  agency: '',
})
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
    title: 'ประเภทคำขอ',
    key: 'type',
    align: 'start',
    sortable: true,
  },
  {
    title: 'อยู่ระหว่างดำเนินการ',
    key: 'process',
    align: 'center',
    sortable: true,
  },
  {
    title: 'ดำเนินการแล้วเสร็จ',
    key: 'success',
    align: 'center',
    sortable: true,
  },

  {
    title: 'รวมทั้งหมด',
    key: 'total',
    align: 'center',
    sortable: true,
  },
]

const items = reactive([
  {
    province: 'จังหวัดสมุทรปราการ',
    type: 'คำขอจดทะเบียน',
    process: 0,
    success: 7,
  },
  {
    province: 'จังหวัดสมุทรปราการ',
    type: 'คำขอเปลี่ยนแปลงข้อมูล',
    process: 4,
    success: 3,
  },
  {
    province: 'จังหวัดสมุทรปราการ',
    type: 'คำขอใบแทนหนังสือสำคัญ',
    process: 0,
    success: 0,
  },
  {
    province: 'จังหวัดสมุทรปราการ',
    type: 'คำขอเลิกประกอบธุรกิจ',
    process: 4,
    success: 10,
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


</style>
