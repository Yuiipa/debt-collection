<template>
  <div class="pt-12 px-10">
    <v-row>
      <v-col>
        <div
          class="pt-6 px-6 rounded-lg elevation-3"
          style="background-color: white"
        >
          <v-row class="d-flex align-center justify-space-between pb-2">
            <!-- Span ที่มีข้อความ -->
            <span color="#1A237E" class="text-h5 text-blue-darken-4">
              ประวัติการถูกร้องเรียนของสถานประกอบธุรกิจ
            </span>
          </v-row>
          <v-row>
            <v-data-table
              :headers="headers"
              :items="items"
              class="rounded-table"
            >
              <template v-slot:[`item.index`]="{ index }">
                <span>{{ index + 1 }}</span>
              </template>

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
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const headers = [
  { title: 'ลำดับที่', key: 'index', align: 'center', sortable: true },
  {
    title: 'เลขที่ร้องเรียน',
    key: 'registerNumber',
    align: 'start',
    sortable: true,
    width: '150px',
  },
  {
    title: 'รายละเอียดเรื่องร้องเรียน',
    key: 'detail',
    align: 'start',
    sortable: true,
  },
  {
    title: 'ที่เกิดเหตุ',
    key: 'location',
    align: 'start',
    sortable: true,
  },
  {
    title: 'โทษที่ได้รับ',
    key: 'punishment',
    align: 'start',
    sortable: true,
  },
  { title: 'สถานะ', key: 'status', align: 'center', sortable: false },
]

const items = ref([
  {
    registerNumber: '001/2566',
    detail: 'ทนายความ',
    location: 'จังหวัดแม่ฮ่องสอน',
    status: true,
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

.rounded-table {
  border-radius: 12px !important;
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
