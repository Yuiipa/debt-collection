<template>
  <v-row class="px-13">
    <v-col>
      <v-row class="d-flex align-center justify-space-between pb-2">
        <span color="#1A237E" class="text-h5 text-blue-darken-4">
          รายการคำขอ
        </span>
      </v-row>
      <v-row>
        <div class="rounded-lg elevation-1 w-100">
          <v-data-table :headers="headers" :items="items">
            <template v-slot:[`item.status`]="{ item }">
              <v-switch
                v-model="item.status"
                color="primary"
                inset
                dense
                hide-details
                :false-value="false"
                :true-value="true"
              ></v-switch>
            </template>
          </v-data-table>
        </div>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'

const headers = [
  {
    title: 'ลำดับที่',
    key: 'index',
    align: 'center',
    sortable: true,
    value: (item) => {
      const index = items.value.indexOf(item)
      return index + 1
    },
    width: '100px',
  },
  {
    title: 'วันที่',
    key: 'date',
    align: 'start',
    sortable: true,
    width: '150px',
  },
  { title: 'หน่วยงาน', key: 'agency', align: 'start', sortable: true },
  {
    title: 'เลขที่คำขอ',
    key: 'registerNumber',
    align: 'start',
    sortable: true,
  },
  {
    title: 'ประเภทคำขอ',
    key: 'type',
    align: 'start',
    sortable: true,
  },
  { title: 'ไฟล์เอกสาร', key: 'document', align: 'center', sortable: false },
]

const items = ref([
  {
    date: '001/2566',
    registerNumber: 'ทนายความ',
    type: 'จังหวัดแม่ฮ่องสอน',
    document: true,
  },
  {
    date: '001/2566',
    registerNumber: 'ทนายความ',
    type: 'จังหวัดแม่ฮ่องสอน',
    document: true,
  },
  {
    date: '001/2566',
    registerNumber: 'ทนายความ',
    type: 'จังหวัดแม่ฮ่องสอน',
    document: true,
  },
])
</script>

<style scoped>
.v-table :deep(th) {
  background-color: #1a237e;
  color: white;
  cursor: pointer;
  font-weight: bold;
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
