<template>
  <v-card class="ma-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h4 font-weight-bold"
      style="color: #1a237e"
    >
      <span>ผู้ทวงถามหนี้ประเภทอื่น</span>
    </v-card-title>
    <v-row class="ma-1 my-2">
      <v-col md="4" cols="12">
        <div class="mb-2 font-weight-bold">ค้นหา</div>
        <v-text-field
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
        :headers="headers"
        :items="searchregister"
        :search="search"
        :items-per-page="10"
        :footer-props="{
          'items-per-page-options': [5, 10, 15],
        }"
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
            @click="openDetails(item)"
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

const search = ref('')

const headers = ref([
  { align: 'center', key: 'num', sortable: false, title: 'ลำดับที่' },
  { align: 'center', key: 'pid', title: 'เลขประจำตัวประชาชน' },
  { align: 'center', key: 'name', title: 'ชื่อ-นามสกุล' },
  { align: 'center', key: 'age', title: 'อายุ' },
  { align: 'center', key: 'nationality', title: 'สัญชาติ' },
  { align: 'center', key: 'info', sortable: false, title: 'รายละเอียด' },
])

const searchregister = [
  {
    pid: '1-1111-11111-11-1',
    name: 'นายadf adf',
    age: '39',
    nationality: 'ไทย',
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
</style>
