<template>
  <div class="d-flex justify-start align-end mt-4 px-10">
    <span>
      <span class="text-blue-darken-4" style="font-size: 40px"> หน้าหลัก </span>

      <v-icon class="ml-4 mr-1" size="24">mdi-book-open</v-icon>
      <span>หนังสืออ่านบัตร</span>

      <v-icon class="ml-4 mr-1" size="24">mdi-credit-card</v-icon>
      <span>เครื่องอ่านบัตร</span>

      <v-icon class="ml-4 mr-1" size="24">mdi-link-variant</v-icon>
      <span>Linkage</span>
    </span>
  </div>

  <div class="pt-2 px-10">
    <v-row>
      <v-col>
        <div
          class="py-6 px-6 rounded-t-lg elevation-3"
          style="background-color: white"
        >
          <v-row class="d-flex align-center justify-space-between">
            <!-- Span ที่มีข้อความ -->
            <span color="#1A237E" class="text-h5 text-blue-darken-4">
              ข้อมูลการร้องเรียนตามพระราชบัญญัติการทวงถามหนี้ พ.ศ.๒๕๕๘
            </span>

            <!-- ปุ่ม 3 ปุ่ม -->
            <div class="d-flex" style="gap: 8px">
              <v-btn color="primary">
                Excel
                <v-icon class="pl-2" right>mdi-file-excel</v-icon>
              </v-btn>

              <v-btn color="secondary ">
                พิมพ์
                <v-icon class="pl-2" right>mdi-printer</v-icon>
              </v-btn>

              <v-btn color="success">
                ตัวกรอง
                <v-icon class="pl-2" right>mdi-filter</v-icon>
              </v-btn>
            </div>
          </v-row>
        </div>
        <v-data-table
          :headers="headers"
          :items="items"
          class="elevation-1 rounded-table"
          :items-per-page="5"
          :footer-props="{
            'items-per-page-options': [5, 10, 15],
          }"
        >
          <template v-slot:[`item.index`]="{ index }">
            <span>{{ index + 1 }}</span>
          </template>
          <template v-slot:[`item.data`]="{ item }">
  <v-btn variant="plain" small @click="navigate(item)">ข้อมูล ></v-btn>
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
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
function navigate(routeName) {
  router.push({ name: 'debt-home-registration-detail_business' })
}
const headers = [
  { title: 'ลำดับที่', key: 'index', align: 'center', sortable: true },
  {
    title: 'เลขที่ทะเบียน',
    key: 'registerNumber',
    align: 'start',
    sortable: true,
    width: '150px',
  },
  { title: 'ชื่อธุรกิจ', key: 'businessName', align: 'start', sortable: true },
  {
    title: 'ประเภทการประกอบธุรกิจ',
    key: 'type',
    align: 'start',
    sortable: true,
  },
  {
    title: 'ที่ตั้งสถานประกอบการ',
    key: 'location',
    align: 'start',
    sortable: true,
  },
  { title: 'ข้อมูล', key: 'data', align: 'center', sortable: false },
  { title: 'สถานะ', key: 'status', align: 'center', sortable: false },
]

const items = ref([
  {
    registerNumber: '001/2566',
    businessName: 'สำนักงาน จันทร์จิรา ฟองแก้ว ทนายความ',
    type: 'ทนายความ',
    location: 'จังหวัดแม่ฮ่องสอน',
    status: true,
  },
  {
    registerNumber: '002/2566',
    businessName: 'Jelly bean',
    type: 'ทนายความ',
    location: 'จังหวัดแม่ฮ่องสอน',
    status: true,
  },
  {
    registerNumber: '003/2566',
    businessName: 'KitKat',
    type: 'ทนายความ',
    location: 'จังหวัดแม่ฮ่องสอน',
    status: true,
  },
  {
    registerNumber: '004/2566',
    businessName: 'Eclair',
    type: 'ทนายความ',
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
  border-bottom-left-radius: 12px !important;
  border-bottom-right-radius: 12px !important;
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
