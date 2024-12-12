<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <div
      class="d-flex justify-center ma-2 mt-6 text-md-h4 text-h5 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span> รายงานการรายงานผลอื่นๆ </span>
    </div>
    <div class="mx-4 mt-4">
    <v-row >
      <v-col cols="12" class="d-flex justify-end">
        <v-btn
          variant="outlined"
          append-icon="mdi-filter"
          :style="
            showFilter
              ? 'background-color: #1a237e; color: white; border: none'
              : 'background-color: white; color: #1a237e; border: 1px solid #1a237e'
          "
          size="large"
          class="rounded-lg px-2 px-sm-5"
          id="print"
          @click="toggleFilter()"
        >
          ตัวกรอง
        </v-btn>
      </v-col>
    </v-row>
    <v-expand-transition>
      <v-row v-if="showFilter" class="my-0">
        <v-col md="12" cols="12">
          <div class="mb-2 font-weight-bold">สังกัดหน่วยงาน</div>
          <v-text-field
            v-model="formSearch.agency"
            class="v-col-md-3 pa-0 pr-5"
            variant="outlined"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">ไตรมาสที่</div>
          <v-text-field
            v-model="formSearch.quarter"
            variant="outlined"
            placeholder="ไตรมาสที่"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">ตั้งแต่เดือน</div>
          <DatePicker
            v-model="formSearch.startDate"
            variant="outlined"
            hide-details
            persistent-placeholder
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">ถึงเดือน</div>
          <DatePicker
            v-model="formSearch.endDate"
            variant="outlined"
            hide-details
            persistent-placeholder
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">ปี</div>
          <v-text-field
            v-model="formSearch.years"
            variant="outlined"
            placeholder="ทั้งหมด"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="12" cols="12" class="d-flex justify-end align-end mb-1">
          <v-btn
            prepend-icon="mdi-magnify"
            style="background-color: #1a237e; color: white"
            >ค้นหา</v-btn
          >
        </v-col>
      </v-row>
    </v-expand-transition>

    <v-row>
      <v-col>
        <div class="rounded-lg pb-2">
          <v-data-table
            :headers="headers"
            :items="items"
            class="elevation-1 rounded-table"
          >
            <template v-slot:[`item.dowload`]="{ item }">
              <v-btn
                variant="outlined"
                color="blue-lighten-2"
                class="rounded-pill"
                prepend-icon="mdi-tray-arrow-down"
                @click="downloadItem(item)"
              >
                ดาวน์โหลด
              </v-btn>
            </template>

            <template v-slot:[`item.process`]="{ item }">
              <v-btn
                variant="text"
                size="small"
                style="background-color: #e3f2fd; color: #1565c0"
                @click="deleteItem(item)"
              >
                <v-icon left size="26">mdi-delete-outline</v-icon>
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
import { ref, reactive } from 'vue'

const showFilter = ref(false)

const toggleFilter = () => {
  showFilter.value = !showFilter.value
}
const formSearch = reactive({
  agency: null,
  quarter: null,
  startDate: null,
  endDate: null,
  years: null,
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

const items = reactive([
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

function deleteItem(item) {
  console.log('ลบ:', item)
}
</script>
                  
<style scoped>
.rounded-table {
  border-top-left-radius: 12px !important;
  border-top-right-radius: 12px !important;
  overflow: hidden;
}

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