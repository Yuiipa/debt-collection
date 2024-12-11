<template>
  <v-card class="ma-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h4 font-weight-bold"
      style="color: #1a237e"
    >
      <span>ผู้ประกอบธุรกิจทวงถามหนี้</span>
    </v-card-title>
    <v-row class="ma-1 my-2">
      <v-col md="4" cols="12">
        <v-text-field
          v-model="search"
          variant="outlined"
          placeholder="ค้นหา"
          persistent-placeholder
          hide-details
          density="compact"
        />
      </v-col>
      <v-col md="4" cols="12" class="d-flex align-end mb-1">
        <v-btn
          prepend-icon="mdi-magnify"
          style="background-color: #1a237e; color: white"
          >ค้นหา</v-btn
        >
      </v-col>
    </v-row>
    <v-card variant="flat" class="mx-4">
      <v-data-table
        :headers="$vuetify.display.mdAndUp ? headers : headers2"
        :items="searchregister"
        :search="search"
      >
        <template v-slot:[`item.num`]="{ index }">
          {{ calculateIndex(index) }}
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <v-switch v-model="item.status" color="#39ab4e" hide-details inset />
        </template>
        <template v-slot:[`item.info`]="{ item }">
          <v-btn
            append-icon="mdi-chevron-right"
            variant="plain"
            style="font-size: 14px"
            @click="$router.push({ name: 'debt-search-appeal-register-details', query: { item: JSON.stringify(item) } })"
          >
          <div class="text-decoration-underline">เรียกดู</div>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const search = ref('')

const headers = ref([
  { align: 'center', key: 'num', sortable: false, title: 'ลำดับที่' },
  { align: 'center', key: 'licid', title: 'เลขที่ทะเบียน' },
  { align: 'center', key: 'name', title: 'ชื่อธุรกิจ' },
  { align: 'center', key: 'type', title: 'ประเภทการประกอบธุรกิจ' },
  { align: 'center', key: 'locate', title: 'ที่ตั้งสถานประกอบธุรกิจ' },
  { align: 'center', key: 'status', sortable: false, title: 'สถานะ' },
  { align: 'center', key: 'info', sortable: false, title: 'รายละเอียด' },
])

const headers2 = ref([
  { align: 'center', key: 'num', sortable: false, title: 'ลำดับที่' },
  { align: 'center', key: 'licid', title: 'เลขที่ทะเบียน' },
  { align: 'center', key: 'info', sortable: false, title: 'รายละเอียด' },
])

const searchregister = [
  {
    licid: '11590001',
    datetime: '10/01/2567',
    name: 'บริษัท พรอพเพอตี้ ออนเนสตี้ แมนเนจเมนท์ จำกัด',
    complainname: 'นายadf adf',
    type: 'บริษัทจำกัด',
    locate: 'จังหวัดสมุทรปราการ',
    status: true,
    crimeScene: 'เขารูปช้าง',
    complaintPlace: 'กรุงเทพมหานคร',
    identity: '0'
  },
]

const pagination = ref({
  page: 1,
  itemsPerPage: 10,
})

const calculateIndex = (index) => {
  return (pagination.value.page - 1) * pagination.value.itemsPerPage + index + 1
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

.v-data-table tbody tr {
  border-bottom: 1px solid #ddd;
}

.v-data-table tbody tr:nth-child(odd) {
  background-color: #f9f9f9;
}

.v-data-table tbody tr:nth-child(even) {
  background-color: #ffffff;
}

.primary--text {
  color: #1a237e !important;
}
</style>
