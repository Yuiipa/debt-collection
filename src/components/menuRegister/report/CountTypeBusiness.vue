<template>
  <v-card class="ma-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h4 font-weight-bold"
      style="color: #1a237e"
    >
      <span>
        รายงานคำขอดำเนินการเกี่ยวกับทะเบียนผู้ประกอบธุรกิจทวงถามหนี้
      </span>
    </v-card-title>
    <div>
      <v-row class="mx-10 my-2">
        <div class="w-100 d-flex justify-end" style="gap: 10px">
          <v-btn
            variant="outlined"
            append-icon="mdi-file-excel"
            style="color: green"
            class="rounded-lg"
            size="large"
            id="excel"
            @click="exportExcel()"
          >
            Excel
          </v-btn>
          <v-btn
            variant="outlined"
            append-icon="mdi-printer"
            style="color: orange"
            class="rounded-lg"
            size="large"
            id="print"
            @click="exportPdf()"
          >
            พิมพ์
          </v-btn>
        </div>
      </v-row>
      <v-row class="mx-8 my-2">
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
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">จังหวัด</div>
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
          <div class="px-10">
            <v-data-table
              :headers="headers"
              :items="items"
              class="elevation-1 rounded-table"
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
  <v-card class="pt-2 mx-14 my-12 px-2 elevation-3">
    <v-row>
      <v-col
        cols="12"
        class="d-flex justify-center"
        style="background-color: white; height: 400px"
      >
        <BarChart :data="graph" /></v-col
    ></v-row>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import BarChart from '@/components/charts/barChart.vue'
import { generateExcel } from '@/prints/register/excel/ReportCountTypeBusiness'
import {generatePDF} from '@/prints/register/CountTypeBusiness'

const graph = [
  {
    usage_name: 'กรุงเทพมหานคร',
    dataset1_count: 10,
    dataset2_count: 15,
    dataset3_count: 20,
  },
  {
    usage_name: 'ปทุมธานี',
    dataset1_count: 5,
    dataset2_count: 10,
    dataset3_count: 15,
  },
  {
    usage_name: 'จังหวัดนครราชสีมา',
    dataset1_count: 20,
    dataset2_count: 25,
    dataset3_count: 30,
  },
]
const headers = [
  {
    title: 'ลำดับที่',
    key: 'index',
    align: 'center',
    sortable: true,
    width: '100px',
  },
  {
    title: 'จังหวัด',
    key: 'province',
    align: 'start',
    sortable: true,
  },
  {
    title: 'บุคคลธรรมดา',
    key: 'individual',
    align: 'start',
    sortable: true,
  },
  {
    title: 'ห้างหุ้นส่วนสามัญไม่จดทะเบียน',
    key: 'unregisteredPartnership',
    align: 'start',
    sortable: true,
  },

  {
    title: 'ห้างหุ้นส่วนสามัญจดทะเบียน',
    key: 'registeredPartnership',
    align: 'start',
    sortable: true,
  },
  {
    title: 'ห้างหุ้นส่วนจำกัด',
    key: 'limitedPartnership',
    align: 'start',
    sortable: true,
  },
  {
    title: 'บริษัทจำกัด',
    key: 'limitedCompany',
    align: 'start',
    sortable: true,
    width: '160px',
  },
]

const items = ref([
  {
    province: 'กรุงเทพมหานคร',
    individual: 41,
    unregisteredPartnership: 0,
    registeredPartnership: 2,
    limitedPartnership: 13,
    limitedCompany: 564,
    publiclimitedCompany: 16,
    Lawyer: 36,
    LawyersCouncil: 962,
  },
  {
    province: 'จังหวัดปทุมธานี',
    individual: 29,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 7,
    limitedCompany: 36,
    publiclimitedCompany: 16,
    Lawyer: 0,
    LawyersCouncil: 11,
  },
  {
    province: 'จังหวัดนครราชสีมา',
    individual: 23,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 33,
    limitedCompany: 26,
    publiclimitedCompany: 16,
    Lawyer: 2,
    LawyersCouncil: 14,
  },
  {
    province: 'จังหวัดสมุทรปราการ',
    individual: 23,
    unregisteredPartnership: 0,
    registeredPartnership: 1,
    limitedPartnership: 5,
    limitedCompany: 52,
    publiclimitedCompany: 16,
    Lawyer: 5,
    LawyersCouncil: 55,
  },
  {
    province: 'จังหวัดปราจีนบุรี',
    individual: 16,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 0,
    limitedCompany: 1,
    publiclimitedCompany: 16,
    Lawyer: 0,
    LawyersCouncil: 9,
  },
  {
    province: 'จังหวัดเชียงใหม่',
    individual: 13,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 25,
    limitedCompany: 23,
    publiclimitedCompany: 16,
    Lawyer: 0,
    LawyersCouncil: 8,
  },
  {
    province: 'จังหวัดอุบลราชธานี',
    individual: 10,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 20,
    limitedCompany: 22,
    publiclimitedCompany: 16,
    Lawyer: 1,
    LawyersCouncil: 12,
  },
  {
    province: 'จังหวัดขอนแก่น',
    individual: 10,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 29,
    limitedCompany: 23,
    publiclimitedCompany: 16,
    Lawyer: 0,
    LawyersCouncil: 32,
  },
  {
    province: 'จังหวัดจันทบุรี',
    individual: 10,
    unregisteredPartnership: 0,
    registeredPartnership: 1,
    limitedPartnership: 2,
    limitedCompany: 8,
    publiclimitedCompany: 16,
    Lawyer: 0,
    LawyersCouncil: 34,
  },
  {
    province: 'จังหวัดอุดรธานี',
    individual: 9,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 36,
    limitedCompany: 11,
    publiclimitedCompany: 16,
    Lawyer: 1,
    LawyersCouncil: 15,
  },
  {
    province: 'จังหวัดสงขลา',
    individual: 8,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 16,
    limitedCompany: 27,
    publiclimitedCompany: 16,
    Lawyer: 28,
    LawyersCouncil: 36,
  },
  {
    province: 'จังหวัดลพบุรี',
    individual: 7,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 2,
    limitedCompany: 3,
    publiclimitedCompany: 16,
    Lawyer: 20,
    LawyersCouncil: 36,
  },
  {
    province: 'จังหวัดนครศรีธรรมราช',
    individual: 7,
    unregisteredPartnership: 0,
    registeredPartnership: 1,
    limitedPartnership: 12,
    limitedCompany: 18,
    publiclimitedCompany: 16,
    Lawyer: 1,
    LawyersCouncil: 7,
  },
  {
    province: 'จังหวัดสกลนคร',
    individual: 6,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 1,
    limitedCompany: 2,
    publiclimitedCompany: 16,
    Lawyer: 1,
    LawyersCouncil: 38,
  },
  {
    province: 'จังหวัดชุมพร',
    individual: 6,
    unregisteredPartnership: 0,
    registeredPartnership: 1,
    limitedPartnership: 3,
    limitedCompany: 6,
    publiclimitedCompany: 16,
    Lawyer: 9,
    LawyersCouncil: 88,
  },
  {
    province: 'จังหวัดนนทบุรี',
    individual: 6,
    unregisteredPartnership: 0,
    registeredPartnership: 1,
    limitedPartnership: 6,
    limitedCompany: 229,
    publiclimitedCompany: 16,
    Lawyer: 3,
    LawyersCouncil: 26,
  },
  {
    province: 'จังหวัดชัยภูมิ',
    individual: 5,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 1,
    limitedCompany: 0,
    publiclimitedCompany: 16,
    Lawyer: 3,
    LawyersCouncil: 26,
  },
  {
    province: 'จังหวัดนครปฐม',
    individual: 5,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 3,
    limitedCompany: 6,
    publiclimitedCompany: 16,
    Lawyer: 1,
    LawyersCouncil: 0,
  },
  {
    province: 'จังหวัดสุราษฎร์ธานี',
    individual: 5,
    unregisteredPartnership: 0,
    registeredPartnership: 4,
    limitedPartnership: 16,
    limitedCompany: 19,
    publiclimitedCompany: 16,
    Lawyer: 1,
    LawyersCouncil: 4,
  },
  {
    province: 'จังหวัดชลบุรี',
    individual: 5,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 8,
    limitedCompany: 19,
    publiclimitedCompany: 16,
    Lawyer: 4,
    LawyersCouncil: 218,
  },
])

function editItem(item) {
  console.log('แก้ไข:', item)
}

function deleteItem(item) {
  console.log('ลบ:', item)
}

const exportExcel = () => {
  generateExcel(items.value)
}

const exportPdf = () => {
  generatePDF(items.value)
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
