<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-md-h4 text-h5 font-weight-bold text-wrap"
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
          <DatePicker
            v-model="formSearch.startDate"
            variant="outlined"
            hide-details
            persistent-placeholder
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">ถึงวันที่</div>
          <DatePicker
          v-model="formSearch.endDate"
            variant="outlined"
            hide-details
            persistent-placeholder
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">จังหวัด</div>
          <v-autocomplete
          v-model="formSearch.province"
            variant="outlined"
            persistent-placeholder
            hide-details
            density="compact"
            :items="itemsProvince"
          ></v-autocomplete>
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
        <AreaChart :data="mappedGraphData" /></v-col
    ></v-row>
  </v-card>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { generatePDF } from '@/prints/register/CountBusiness'
import { generateExcel } from '@/prints/register/excel/ReportCountBusiness'
import AreaChart from '@/components/charts/AreaChart.vue'

const itemsProvince = ref(['ทั้งหมด', 'กรุงเทพ', 'นนทบุรี'])

const formSearch = reactive({
  startDate: null,
  endDate: null,
  province: 'ทั้งหมด',
})

const mappedGraphData = computed(() => {
  return items.map((item) => ({
    usage_count: item.amount,
    usage_name: item.province,
  }))
})

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
    title: 'จำนวน',
    key: 'amount',
    align: 'start',
    sortable: true,
    width: '160px',
  },
]

const items = reactive([
  {
    province: 'กรุงเทพมหานคร',
    amount: 1634,
  },
  {
    province: 'จังหวัดนนทบุรี',
    amount: 465,
  },
  {
    province: 'จังหวัดปทุมธานี',
    amount: 163,
  },
  {
    province: 'จังหวัดสมุทรปราการ',
    amount: 161,
  },
  {
    province: 'จังหวัดเชียงใหม่',
    amount: 158,
  },
  {
    province: 'จังหวัดนครราชสีมา',
    amount: 146,
  },
  {
    province: 'จังหวัดขอนแก่น',
    amount: 116,
  },
  {
    province: 'จังหวัดอุดรธานี',
    amount: 103,
  },
  {
    province: 'จังหวัดชลบุรี',
    amount: 102,
  },
  {
    province: 'จังหวัดสงขลา',
    amount: 95,
  },
  {
    province: 'จังหวัดสุราษฎร์ธานี',
    amount: 95,
  },
  {
    province: 'จังหวัดอุบลราชธานี',
    amount: 94,
  },
  {
    province: 'จังหวัดร้อยเอ็ด',
    amount: 92,
  },
  {
    province: 'จังหวัดนครสวรรค์',
    amount: 80,
  },
  {
    province: 'จังหวัดเชียงราย',
    amount: 66,
  },
  {
    province: 'จังหวัดนครศรีธรรมราช',
    amount: 65,
  },
  {
    province: 'จังหวัดสุโขทัย',
    amount: 65,
  },
  {
    province: 'จังหวัดอุตรดิตถ์',
    amount: 59,
  },
  {
    province: 'จังหวัดภูเก็ต',
    amount: 56,
  },
  {
    province: 'จังหวัดพิษณุโลก',
    amount: 55,
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
