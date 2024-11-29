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
import { ref } from 'vue'
import { generateExcel } from '@/prints/register/excel/ReportCountRequestProvince'
import { generatePDF } from '@/prints/register/CountRequestProvince';

const headers = [
  {
    title: 'ลำดับที่',
    key: 'index',
    align: 'center',
    sortable: true,
    width: '100px',
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

const items = ref([
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
