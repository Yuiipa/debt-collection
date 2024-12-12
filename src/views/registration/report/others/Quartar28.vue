<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h5 text-md-h4 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span> รายงานสรุปรายงานตามมาตรา ๒๘ </span>
    </v-card-title>
    <div class="mx-4">
      <v-row >
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">ปี</div>
          <v-text-field
            v-model="formSearch.years"
            variant="outlined"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">ไตรมาส</div>
          <v-text-field
            v-model="formSearch.quarter"
            variant="outlined"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">สังกัด/หน่วยงาน</div>
          <v-text-field
            v-model="formSearch.agency"
            variant="outlined"
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

const formSearch = reactive({
  years: null,
  quarter: null,
  agency: null,
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
    process: 1756,
    finish_process: 1,
    sum: 20,
    percentage: 88,
  },
  {
    agency: 'กรุงเทพมหานคร',
    process: 1756,
    finish_process: 1,
    sum: 20,
    percentage: 88,
  },
])
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
</style>