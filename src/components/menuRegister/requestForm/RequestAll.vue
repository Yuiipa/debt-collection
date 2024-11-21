<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h4 font-weight-bold"
      style="color: #1a237e"
    >
      <span> คำขอทำรายการทั้งหมด </span>
    </v-card-title>
    <div>
      <v-row class="ma-1 mx-8 my-2">
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">เลขที่คำขอ</div>
          <v-text-field
            variant="outlined"
            placeholder="ตั้งแต่วันที่"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">ประเภทคำขอ</div>
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

              <!-- ปุ่มดำเนินการ: แก้ไขและลบ -->
              <template v-slot:[`item.process`]="{ item }">
                <v-btn
                  size="small"
                  color="green"
                  class="mr-1"
                  @click="editItem(item)"
                >
                  <v-icon left size="18">mdi-pencil</v-icon> แก้ไข
                </v-btn>
                <v-btn size="small" color="red" @click="deleteItem(item)">
                  <v-icon left size="18">mdi-delete</v-icon> ลบ
                </v-btn>
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

const headers = [
  { title: 'ลำดับที่', key: 'index', align: 'center', sortable: true },
  {
    title: 'เลขประจำตัวประชาชน',
    key: 'pid',
    align: 'start',
    sortable: true,
    width: '190px',
  },
  { title: 'คำนำหน้านาม', key: 'title', align: 'start', sortable: true },
  { title: 'ชื่อ', key: 'firstName', align: 'start', sortable: true },
  { title: 'นามสกุล', key: 'lastName', align: 'start', sortable: true },
  {
    title: 'ตำแหน่งผู้ปฎิบัติงาน',
    key: 'position',
    align: 'start',
    sortable: true,
  },
  { title: 'เอกสารแนบ', key: 'document', align: 'start', sortable: false },
  { title: 'ดำเนินการ', key: 'process', align: 'center', sortable: false },
]

const items = ref([
  {
    pid: 8466851084319,
    title: 'นาย',
    firstName: 'สมหมาย',
    lastName: 'บุญยงค์',
    position: 'เจ้าหน้าที่ปฏิบัติการ',
    document: '',
  },
  {
    pid: 8466851084319,
    title: 'นาย',
    firstName: 'สมคิด',
    lastName: 'เพชรพันธ์',
    position: 'ทนาย',
    document: '',
  },
  {
    pid: 8466851084319,
    title: 'น.ส.',
    firstName: 'สมทรง',
    lastName: 'เพชรพันธ์',
    position: 'เจ้าหน้าที่ปฏิบัติการ',
    document: '',
  },
  {
    pid: 8466851084319,
    title: 'นาย',
    firstName: 'สมทรง',
    lastName: 'เพชรพันธ์',
    position: 'นิติกรชำนาญการ',
    document: '',
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