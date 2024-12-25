<template>
  <v-card class="ma-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h5 text-md-h4 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span>
        รายงานคำขอดำเนินการเกี่ยวกับทะเบียนผู้ประกอบธุรกิจทวงถามหนี้
      </span>
    </v-card-title>
    <div class="mx-4 my-2">
    <v-row >
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
      <v-col
        md="3"
        cols="12"
        class="d-flex align-end mb-1 justify-space-between"
      >
        <v-btn
          prepend-icon="mdi-magnify"
          style="background-color: #1a237e; color: white"
          >ค้นหา</v-btn
        >
        <ExportMenu :exportExcel="exportExcel" :exportPdf="exportPdf" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="rounded-lg pb-2">
          <v-data-table
            :headers="headers"
            :items="items"
            class="elevation-1 rounded-table"
          >
          </v-data-table>
        </div>
      </v-col>
    </v-row>
    </div>
  </v-card>
  <v-card class="mx-8 my-6 pa-2 elevation-3 rounded-lg">
    <v-row>
      <v-col
        cols="12"
        class="d-flex justify-center"
        style="background-color: white; height: 400px"
      >
        <BarChart :data="processedItems"/></v-col
    ></v-row>
  </v-card>
</template>

<script setup>
import { ref , reactive , computed } from 'vue'
import BarChart from '@/components/charts/barChart.vue'
import { generateExcel } from '@/prints/register/excel/ReportCountTypeBusiness'
import { generatePDF } from '@/prints/register/CountTypeBusiness'
import ExportMenu from '@/components/widget/ExportMenu.vue'

const itemsProvince = ref(['ทั้งหมด', 'กรุงเทพ', 'นนทบุรี'])
const formSearch = reactive({
  startDate: null,
  endDate: null,
  province: 'ทั้งหมด',
})
const processedItems = computed(() => {
  return items.map((item) => ({
    usage_name: item.province,
    dataset1: item.individual,
    dataset2: item.unregisteredPartnership,
    dataset3: item.registeredPartnership,
    dataset4: item.limitedPartnership,
    dataset5: item.limitedCompany,
    dataset6: item.publiclimitedCompany,
    dataset7: item.lawyer,
    dataset8: item.lawyersCouncil,
  }))
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

  {
    title: 'บริษัทจำกัดมหาชน',
    key: 'publiclimitedCompany',
    align: 'start',
    sortable: true,
    width: '160px',
  },
  {
    title: 'ทนายความ',
    key: 'lawyer',
    align: 'start',
    sortable: true,
    width: '160px',
  },
  {
    title: 'สำนักงานทนายความ',
    key: 'lawyersCouncil',
    align: 'start',
    sortable: true,
    width: '160px',
  },
]

const items = reactive([
  {
    province: 'กรุงเทพมหานคร',
    individual: 41,
    unregisteredPartnership: 0,
    registeredPartnership: 2,
    limitedPartnership: 13,
    limitedCompany: 564,
    publiclimitedCompany: 16,
    lawyer: 36,
    lawyersCouncil: 962,
  },
  {
    province: 'จังหวัดปทุมธานี',
    individual: 29,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 7,
    limitedCompany: 36,
    publiclimitedCompany: 16,
    lawyer: 0,
    lawyersCouncil: 11,
  },
  {
    province: 'จังหวัดนครราชสีมา',
    individual: 23,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 33,
    limitedCompany: 26,
    publiclimitedCompany: 16,
    lawyer: 2,
    lawyersCouncil: 14,
  },
  {
    province: 'จังหวัดสมุทรปราการ',
    individual: 23,
    unregisteredPartnership: 0,
    registeredPartnership: 1,
    limitedPartnership: 5,
    limitedCompany: 52,
    publiclimitedCompany: 16,
    lawyer: 5,
    lawyersCouncil: 55,
  },
  {
    province: 'จังหวัดปราจีนบุรี',
    individual: 16,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 0,
    limitedCompany: 1,
    publiclimitedCompany: 16,
    lawyer: 0,
    lawyersCouncil: 9,
  },
  {
    province: 'จังหวัดเชียงใหม่',
    individual: 13,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 25,
    limitedCompany: 23,
    publiclimitedCompany: 16,
    lawyer: 0,
    lawyersCouncil: 8,
  },
  {
    province: 'จังหวัดอุบลราชธานี',
    individual: 10,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 20,
    limitedCompany: 22,
    publiclimitedCompany: 16,
    lawyer: 1,
    lawyersCouncil: 12,
  },
  {
    province: 'จังหวัดขอนแก่น',
    individual: 10,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 29,
    limitedCompany: 23,
    publiclimitedCompany: 16,
    lawyer: 0,
    lawyersCouncil: 32,
  },
  {
    province: 'จังหวัดจันทบุรี',
    individual: 10,
    unregisteredPartnership: 0,
    registeredPartnership: 1,
    limitedPartnership: 2,
    limitedCompany: 8,
    publiclimitedCompany: 16,
    lawyer: 0,
    lawyersCouncil: 34,
  },
  {
    province: 'จังหวัดอุดรธานี',
    individual: 9,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 36,
    limitedCompany: 11,
    publiclimitedCompany: 16,
    lawyer: 1,
    lawyersCouncil: 15,
  },
  {
    province: 'จังหวัดสงขลา',
    individual: 8,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 16,
    limitedCompany: 27,
    publiclimitedCompany: 16,
    lawyer: 28,
    lawyersCouncil: 36,
  },
  {
    province: 'จังหวัดลพบุรี',
    individual: 7,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 2,
    limitedCompany: 3,
    publiclimitedCompany: 16,
    lawyer: 20,
    lawyersCouncil: 36,
  },
  {
    province: 'จังหวัดนครศรีธรรมราช',
    individual: 7,
    unregisteredPartnership: 0,
    registeredPartnership: 1,
    limitedPartnership: 12,
    limitedCompany: 18,
    publiclimitedCompany: 16,
    lawyer: 1,
    lawyersCouncil: 7,
  },
  {
    province: 'จังหวัดสกลนคร',
    individual: 6,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 1,
    limitedCompany: 2,
    publiclimitedCompany: 16,
    lawyer: 1,
    lawyersCouncil: 38,
  },
  {
    province: 'จังหวัดชุมพร',
    individual: 6,
    unregisteredPartnership: 0,
    registeredPartnership: 1,
    limitedPartnership: 3,
    limitedCompany: 6,
    publiclimitedCompany: 16,
    lawyer: 9,
    lawyersCouncil: 88,
  },
  {
    province: 'จังหวัดนนทบุรี',
    individual: 6,
    unregisteredPartnership: 0,
    registeredPartnership: 1,
    limitedPartnership: 6,
    limitedCompany: 229,
    publiclimitedCompany: 16,
    lawyer: 3,
    lawyersCouncil: 26,
  },
  {
    province: 'จังหวัดชัยภูมิ',
    individual: 5,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 1,
    limitedCompany: 0,
    publiclimitedCompany: 16,
    lawyer: 3,
    lawyersCouncil: 26,
  },
  {
    province: 'จังหวัดนครปฐม',
    individual: 5,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 3,
    limitedCompany: 6,
    publiclimitedCompany: 16,
    lawyer: 1,
    lawyersCouncil: 0,
  },
  {
    province: 'จังหวัดสุราษฎร์ธานี',
    individual: 5,
    unregisteredPartnership: 0,
    registeredPartnership: 4,
    limitedPartnership: 16,
    limitedCompany: 19,
    publiclimitedCompany: 16,
    lawyer: 1,
    lawyersCouncil: 4,
  },
  {
    province: 'จังหวัดชลบุรี',
    individual: 5,
    unregisteredPartnership: 0,
    registeredPartnership: 0,
    limitedPartnership: 8,
    limitedCompany: 19,
    publiclimitedCompany: 16,
    lawyer: 4,
    lawyersCouncil: 218,
  },
])

const exportExcel = () => {
  generateExcel(items)
}

const exportPdf = () => {
  generatePDF(items)
}
</script>


