<template>
  <v-card class="ma-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h4 font-weight-bold"
      style="color: #1a237e"
    >
      <span>{{ titletext }}</span>
    </v-card-title>
    <v-row class="ma-2" v-if="addReport">
      <v-col md="3" cols="12">
        <div class="mb-2 font-weight-bold">ไตรมาสที่</div>
        <v-text-field
          variant="outlined"
          placeholder="ไตรมาสที่"
          persistent-placeholder
          hide-details
          density="compact"
        />
      </v-col>
      <v-col md="3" cols="12">
        <div class="mb-2 font-weight-bold">เดือน</div>
        <v-text-field
          variant="outlined"
          placeholder="เดือน"
          persistent-placeholder
          hide-details
          density="compact"
        />
      </v-col>
      <v-col md="3" cols="12">
        <div class="mb-2 font-weight-bold">ถึงเดือน</div>
        <v-text-field
          variant="outlined"
          placeholder="ถึงเดือน"
          persistent-placeholder
          hide-details
          density="compact"
        />
      </v-col>
      <v-col md="3" cols="12">
        <div class="mb-2 font-weight-bold">ปี</div>
        <v-text-field
          variant="outlined"
          placeholder="ปี"
          persistent-placeholder
          hide-details
          density="compact"
        />
      </v-col>
      <v-col cols="12">
        <div class="mb-2 font-weight-bold">ชื่อไฟล์</div>
        <v-text-field
          variant="outlined"
          placeholder="ชื่อไฟล์"
          persistent-placeholder
          hide-details
          density="compact"
        />
      </v-col>
      <v-col cols="12">
        <div class="mb-2 font-weight-bold">อัปโหลด</div>
        <v-text-field
          variant="outlined"
          placeholder="อัปโหลด"
          persistent-placeholder
          hide-details
          density="compact"
        />
      </v-col>
    </v-row>
    <v-row class="ma-2">
      <v-col md="3" cols="12">
        <div class="mb-2 font-weight-bold">วันที่</div>
        <v-text-field
          variant="outlined"
          placeholder="วันที่"
          persistent-placeholder
          hide-details
          density="compact"
        />
      </v-col>
      <v-col md="3" cols="12" class="d-flex align-end mb-1">
        <v-btn
          prepend-icon="mdi-magnify"
          style="background-color: #1a237e; color: white"
        >
          ค้นหา
        </v-btn>
      </v-col>
      <v-col md="6" cols="12" class="d-flex justify-end align-end mb-1">
        <div>
          <v-btn
            variant="outlined"
            prepend-icon="mdi-plus"
            style="color: green"
            class="rounded-lg"
            size="large"
            id="add"
            @click="addReport = !addReport"
          >
            เพิ่มรายงาน
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-card variant="flat" class="mx-4">
      <v-data-table
        :headers="headers"
        :items="report"
        :items-per-page="10"
        :footer-props="{
          'items-per-page-options': [5, 10, 15],
        }"
      >
        <template v-slot:[`item.num`]="{ index }">
          {{ calculateIndex(index) }}
        </template>
        <template v-slot:[`item.info`]="{ item }">
          <v-btn
            append-icon="mdi-chevron-right"
            variant="plain"
            style="font-size: 14px"
            @click="downloadReport(item)"
          >
            เรียกดู
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const addReport = ref(false)

const props = defineProps({
  report: {
    type: Object,
  },
  titletext: {
    type: String,
    default: 'รายงาน',
  },
})

const headers = ref([
  { align: 'center', key: 'num', sortable: false, title: 'ลำดับที่' },
  { align: 'center', key: 'datetime', title: 'วันที่รายงาน' },
  { key: 'year', title: 'ปี' },
  { align: 'center', key: 'quarter', title: 'ไตรมาส' },
  { align: 'center', key: 'month', title: 'เดือน' },
  { align: 'center', key: 'file', title: 'ชื่อไฟล์' },
  { align: 'center', key: 'info', sortable: false, title: 'เรียกดู' },
])

const pagination = ref({
  page: 1,
  itemsPerPage: 10,
})

const calculateIndex = (index) => {
  return (pagination.value.page - 1) * pagination.value.itemsPerPage + index + 1
}

const downloadReport = async (item) => {
  const res = await api.getReport(item)
  if (res.status === 201) {
    const data = response.data
  }
}
</script>

<style scoped>
.v-table ::v-deep th {
  background-color: #1a237e;
  color: white;
  font-weight: bold;
}
.v-table ::v-deep tr:nth-child(even) {
  background-color: #f1f1f1e5;
}

.v-table :deep(table > thead) {
  background-color: #ffffff;
  cursor: pointer;
  font-weight: bold;
}
.v-btn#add:hover {
  background-color: green !important;
  color: white !important;
}
</style>
