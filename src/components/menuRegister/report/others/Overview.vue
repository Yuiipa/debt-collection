<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h5 text-md-h4 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span> รายงานภาพรวมจำนวนการรายงานผล </span>
    </v-card-title>
    <div>
      <v-row class="mx-10">
        <div class="w-100 d-flex justify-end" style="gap: 10px">
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
          <div class="mb-2 font-weight-bold">ไตรมาส</div>
          <v-text-field
            variant="outlined"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">ตั้งแต่วันที่</div>
          <v-text-field
            variant="outlined"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">ถึงวันที่</div>
          <v-text-field
            variant="outlined"
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
              <template v-slot:[`item.sum`]="{ item }">
                <span>{{
                  item.meetting + item.estimate + item.result + item.other
                }}</span>
              </template>
            </v-data-table>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { generatePDF } from '@/prints/register/Overview_report'

const headers = [
  {
    title: 'ลำดับที่',
    key: 'index',
    align: 'center',
    sortable: true,
    width: '100px',
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

const items = ref([
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

function editItem(item) {
  console.log('แก้ไข:', item)
}

function deleteItem(item) {
  console.log('ลบ:', item)
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
