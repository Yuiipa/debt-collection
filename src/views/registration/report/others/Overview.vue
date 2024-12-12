<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h5 text-md-h4 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span> รายงานภาพรวมจำนวนการรายงานผล </span>
    </v-card-title>
    <div class="mx-4">
    <v-row >
      <v-col md="3" cols="12">
        <div class="mb-2 font-weight-bold">ไตรมาส</div>
        <v-select
          :items="[1, 2, 3, 4]"
          v-model="formSearch.quarter"
          variant="outlined"
          persistent-placeholder
          hide-details
          density="compact"
        />
      </v-col>
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
      <v-col
        md="3"
        cols="12"
        class="d-flex align-end mb-1 justify-space-between"
      >
        <v-btn
          prepend-icon="mdi-magnify"
          style="background-color: #1a237e; color: white"
          @click="handleSearch()"
        >
          ค้นหา
        </v-btn>
        <ExportMenu :exportPdf="exportPdf" />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="isSearch">
        <div class="rounded-lg pb-2">
          <div
            class="pb-4 text-h6 d-flex flex-column align-center"
            style="color: #1a237e"
          >
            <div>
              <v-icon class="mr-2">mdi-chart-box-multiple-outline</v-icon>
              รายงานภาพรวมจำนวนการรายงานผล
            </div>
            <div>ไตรมาสที่ : {{ formSearch.quarter || '' }}</div>
            <div>
              ระหว่างวันที่ {{ splitDate(formSearch.startDate) || '' }} ถึง
              {{ splitDate(formSearch.endDate) || '' }}
            </div>
          </div>
          <v-data-table
            :headers="headers"
            :items="items"
            class="elevation-1 "
          >
            <template v-slot:[`item.sum`]="{ item }">
              <span>
                {{ item.meetting + item.estimate + item.result + item.other }}
              </span>
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
import { splitDate } from '@/components/helpers/utils'
import { generatePDF } from '@/prints/register/Overview_report'
import ExportMenu from '@/components/widget/ExportMenu.vue'
import Swal from 'sweetalert2'

const formSearch = reactive({
  quarter: null,
  startDate: null,
  endDate: null,
})

const isSearch = ref(false)

const handleSearch = () => {
  const missingFields = []

  if (!formSearch.quarter) missingFields.push('ไตรมาส')
  if (!formSearch.startDate) missingFields.push('วันที่เริ่มต้น')
  if (!formSearch.endDate) missingFields.push('วันที่สิ้นสุด')

  if (missingFields.length > 0) {
    Swal.fire({
      title: 'คำเตือน!',
      text: `กรุณาเลือก ${missingFields.join(', ')}`,
      icon: 'warning',
    })
    isSearch.value = false
    return
  }
  if (new Date(formSearch.endDate) < new Date(formSearch.startDate)) {
    Swal.fire({
      title: 'คำเตือน!',
      text: 'วันที่สิ้นสุดต้องไม่ก่อนวันที่เริ่มต้น',
      icon: 'error',
    })
    isSearch.value = false
    return
  }
  isSearch.value = true
}


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
    title: 'สังกัด/หน่วยงาน',
    key: 'agency',
    align: 'start',
    sortable: true,
  },
  {
    title: 'เรื่องร้องเรียน',
    key: 'plaint',
    align: 'start',
    sortable: true,
  },
  {
    title: 'การประชุมคณะกรรมการกำกับการทวงถามหนี้ประจำจังหวัด',
    key: 'meetting',
    align: 'start',
    sortable: true,
  },
  {
    title: 'การประเมินผลการปฏิบัติงานตาม พ.ร.บ. การทวงถามหนี้ พ.ศ.๒๕๕๘',
    key: 'estimate',
    align: 'start',
    sortable: true,
  },
  {
    title: 'ผลการดำเนินงานตรวจติดตามผู้ประกอบธุรกิจทวงถามหนี้',
    key: 'result',
    align: 'start',
    sortable: true,
  },
  {
    title: 'อื่นๆ',
    key: 'other',
    align: 'start',
    sortable: true,
  },
  {
    title: 'รวม',
    key: 'sum',
    align: 'start',
    sortable: true,
  },
]

const items = reactive([
  {
    agency: 'สภาทนายความ',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
  {
    agency: 'กองบัญชาการตำรวจนครบาล',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
  {
    agency: 'จังหวัดเชียงราย',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
  {
    agency: 'จังหวัดพะเยา',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
  {
    agency: 'จังหวัดน่าน',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
  {
    agency: 'จังหวัดแพร่',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
  {
    agency: 'จังหวัดอุตรดิตถ์',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
  {
    agency: 'จังหวัดลำพูน',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
  {
    agency: 'จังหวัดเชียงใหม่',
    plaint: 0,
    meetting: 0,
    estimate: 2,
    result: 0,
    other: 0,
  },
  {
    agency: 'จังหวัดแม่ฮ่องสอน',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
  {
    agency: 'จังหวัดนครสวรรค์',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
  {
    agency: 'จังหวัดเพชรบูรณ์',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
  {
    agency: 'จังหวัดพิจิตร',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
  {
    agency: 'จังหวัดพิษณุโลก',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
  {
    agency: 'จังหวัดสุโขทัย',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
  {
    agency: 'จังหวัดตาก',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 1,
  },
  {
    agency: 'จังหวัดอุทัยธานี',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
  {
    agency: 'จังหวัดลำปาง',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
  {
    agency: 'จังหวัดกำแพงเพชร',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
  {
    agency: 'จังหวัดสระบุรี',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
  {
    agency: 'จังหวัดปทุมธานี',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
  {
    agency: 'จังหวัดนนทบุรี',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
  {
    agency: 'จังหวัดลพบุรี',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
  {
    agency: 'จังหวัดชัยนาท',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
  {
    agency: 'จังหวัดสิงห์บุรี',
    plaint: 0,
    meetting: 0,
    estimate: 0,
    result: 0,
    other: 0,
  },
])

const exportPdf = () => {
  generatePDF(items)
}
</script>

<style scoped>
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
