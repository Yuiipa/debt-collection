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
    </div>
    <div>
      <v-row class="mx-10 mb-2 mt-6">
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
import { generateExcel } from '@/prints/register/excel/ReportAppeal'
import { generatePDF } from '@/prints/register/Appeal'

const headers = [
  {
    title: 'ลำดับที่',
    key: 'index',
    align: 'center',
    sortable: true,
    width: '100px',
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

const items = ref([
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
