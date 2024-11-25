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
      </v-row>
      <v-row>
        <v-col>
          <div class="px-10">
            <v-data-table
              :headers="headers"
              :items="items"
              class="elevation-1 rounded-table"
              :items-per-page="5"
              :footer-props="{
                'items-per-page-options': [5, 10, 15],
              }"
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
  <v-card class="pt-2 mx-12 my-12 elevation-3">
    <v-row>
      <v-col
        cols="12"
        class="d-flex justify-center rounded-lg elevation-3"
        style="background-color: white; height: 400px"
      >
        <AreaChart :data="graph" /></v-col
    ></v-row>
  </v-card>
</template>
        
        <script setup>
import { ref } from 'vue'

import AreaChart from '@/components/charts/AreaChart.vue'
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
    pid: 8466851084319,
    agency: 0,
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
  {
    pid: 8466851084319,
    agency: 0,
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
  {
    pid: 8466851084319,
    agency: 0,
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
  {
    pid: 8466851084319,
    agency: 0,
    registration: 0,
    changedata: 0,
    book: 0,
    quit: 0,
    sum: 0,
  },
])

function editItem(item) {
  console.log('แก้ไข:', item)
}

function deleteItem(item) {
  console.log('ลบ:', item)
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