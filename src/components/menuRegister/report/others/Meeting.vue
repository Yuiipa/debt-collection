<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <div
      class="d-flex justify-center ma-2 mt-6 text-md-h4 text-h5 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span> รายงานการประชุมคณะกรรมการกำกับการทวงถามหนี้ประจำท้องที่ </span>
    </div>
    <div>
      <v-row class="mx-8 my-2">
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">สังกัดหน่วยงาน</div>
          <v-text-field
            variant="outlined"
            placeholder="ตั้งแต่วันที่"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">ไตรมาสที่</div>
          <v-text-field
            variant="outlined"
            placeholder="ถึงวันที่"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">ตั้งแต่เดือน</div>
          <v-text-field
            variant="outlined"
            placeholder="ทั้งหมด"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">ถึงเดือน</div>
          <v-text-field
            variant="outlined"
            placeholder="ทั้งหมด"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">ปี</div>
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
              <template v-slot:[`item.dowload`]="{ item }">
                <v-btn
                  variant="outlined"
                  color="blue-lighten-2"
                  class="rounded-pill"
                  prepend-icon="mdi-cloud-download"
                  @click="downloadItem(item)"
                >
                  ดาวน์โหลด
                </v-btn>
              </template>

              <!-- ปุ่มดำเนินการ -->
              <template v-slot:[`item.process`]="{ item }">
                <v-btn
                  size="small"
                  class="rounded-pill"
                  color="red"
                  @click="deleteItem(item)"
                >
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
  {
    title: 'ลำดับที่',
    key: 'index',
    align: 'center',
    sortable: true,
    width: '100px',
  },
  {
    title: 'สังกัดหน่วยงาน',
    key: 'agency',
    align: 'start',
    sortable: true,
  },
  {
    title: 'วันที่',
    key: 'date',
    align: 'start',
    sortable: true,
  },
  {
    title: 'ชื่อเอกสาร',
    key: 'document',
    align: 'start',
    sortable: true,
  },
  {
    title: 'ดาวน์โหลดเอกสาร',
    key: 'dowload',
    align: 'start',
    sortable: true,
    width: '160px',
  },
  {
    title: 'ดำเนินการ',
    key: 'process',
    align: 'start',
    sortable: true,
    width: '120px',
  },
]

const items = ref([
  {
    agency: 'จังหวัดกาฬสินธุ์',
    date: '06/11/2567',
    document: 'สรุปการรายงานผลการปฏิบัติงานตา',
  },
  {
    agency: 'จังหวัดกาฬสินธุ์',
    date: '06/11/2567',
    document: 'สรุปการรายงานผลการปฏิบัติงานตา',
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