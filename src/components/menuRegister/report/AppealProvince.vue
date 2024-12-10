<template>
  <v-card class="ma-4" variant="flat" style="background-color: #fafafa">
    <div
      class="d-flex justify-center ma-2 mt-4 text-h5 text-md-h5 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span>
        รายงานผลการดำเนินการพิจารณาเรื่องร้องเรียนตามพระราชบัญญัติการทวงถามหนี้พ.ศ.
        ๒๕๕๘
      </span>
    </div>

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
import { generateExcel } from '@/prints/register/excel/ReportAppeal_Province'
import { generatePDF } from '@/prints/register/AppealProvince'
import ExportMenu from '@/components/widget/ExportMenu.vue'

const formSearch = reactive({
  startDate: null,
  endDate: null,
  agency: 'ทั้งหมด',
})
const headers = [
  {
    title: 'ลำดับที่',
    key: 'index',
    align: 'center',
    sortable: true,
    width: '100px',
  },
  {
    title: 'เรื่องร้องเรียนที่',
    key: 'id',
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
    id: 22222,
    process: 1756,
    finish_process: 1,
    sum: 20,
    percentage: 88,
  },
  {
    agency: 'กรุงเทพมหานคร',
    id: 33333,
    process: 1756,
    finish_process: 1,
    sum: 20,
    percentage: 88,
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

.rounded-table {
  border-top-left-radius: 12px !important;
  border-top-right-radius: 12px !important;
  overflow: hidden;
}
</style>
