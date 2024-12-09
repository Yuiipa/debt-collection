<template>
  <v-card class="ma-4" variant="flat" style="background-color: #fafafa">
    <div
      class="d-flex justify-center ma-2 my-4 text-h5 text-md-h4 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span>
        รายงานสถิติข้อหาหรือฐานความผิดตามพระราชบัญญัติการทวงถามหนี้ พ.ศ. ๒๕๕๘
      </span>
    </div>
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
</template>

<script setup>
import { ref ,reactive} from 'vue'
import { generateExcel } from '@/prints/register/excel/ReportAppeal_Statistic'
import { generatePDF } from '@/prints/register/AppealStatistic'

const formSearch = reactive({
  startDate: null,
  endDate: null,
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
    title: 'ข้อหา',
    key: 'plaint',
    align: 'start',
    sortable: true,
  },
  {
    title: 'จำนวนเรื่องร้องเรียน',
    key: 'amount',
    align: 'start',
    sortable: true,
  },
]

const items = ref([
  {
    plaint:
      '๕ วรรคหนึ่ง ประกอบธุรกิจทวงถามหนี้ โดยไม่จดทะเบียนการประกอบธุรกิจทวงถามหนี้ต่อนายทะเบียน',
    amount: 0,
  },
  {
    plaint:
      '๕ วรรคสอง จดทะเบียนการประกอบธุรกิจทวงถามหนี้แล้วไม่ประกอบธุรกิจทวงถามหนี้ตามหลักเกณฑ์ที่ คณะกรรมการประกาศกำหนด',
    amount: 0,
  },
  {
    plaint:
      '๘ วรรคสอง (๑) ผู้ทวงถามหนี้ติดต่อกับบุคคลอื่นซึ่งมิใช่ลูกหนี้ หรือบุคคลซึ่งลูกหนี้ได้ระบุไว้เพื่อการทวงถามหนี้ เพื่อสอบถามหรือยืนยันข้อมูลเกี่ยวกับสถานที่ติดต่อลูกหนี้หรือบุคคลซึ่งลูกหนี้ได้ระบุไว้เพื่อการทวงถามหนี้ โดยไม่แจ้งให้ทราบชื่อตัว สกุล และแสดงเจตนาว่าต้องการสอบถามข้อมูลเกี่ยวกับสถานที่ติดต่อลูกหนี้',
    amount: 1756,
  },
  {
    plaint:
      '๘ วรรคสอง (๔) ผู้ทวงถามหนี้ติดต่อกับบุคคลอื่นซึ่งมิใช่ลูกหนี้ หรือบุคคลซึ่งลูกหนี้ได้ระบุไว้เพื่อการทวงถามหนี้เพื่อสอบถามหรือยืนยันข้อมูลเกี่ยวกับสถานที่ติดต่อลูกหนี้หรือบุคคลซึ่งลูกหนี้ได้ระบุไว้เพื่อการทวงถามหนี้โดยติดต่อหรือแสดงตนที่ทำให้เข้าใจผิดเพื่อให้ได้ข้อมูลเกี่ยวกับสถานที่ติดต่อลูกหนี้หรือบุคคลซึ่งลูกหนี้ได้ระบุไว้เพื่อการทวงถามหนี้',
    amount: 0,
  },
  {
    plaint:
      '๖ วรรคหนึ่ง ทนายความหรือสำนักงานทนายความประกอบธุรกิจทวงถามหนี้ โดยไม่จดทะเบียนการประกอบธุรกิจทวงถามหนี้ต่อคณะกรรมการสภาทนายความตามกฎหมายว่าด้วยทนายความ',
    amount: 0,
  },
  {
    plaint:
      '๑๑ (๒) ผู้ทวงถามหนี้ทวงถามหนี้โดยการใช้วาจาหรือภาษาที่เป็นการดูหมิ่นลูกหนี้หรือผู้อื่น',
    amount: 0,
  },
  {
    plaint:
      '๑๑ (๓) ผู้ทวงถามหนี้ทวงถามหนี้โดยการแจ้งหรือเปิดเผยเกี่ยวกับความเป็นหนี้ของลูกหนี้ให้แก่ผู้อื่นที่ไม่เกี่ยวข้องกับการทวงถามหนี้ (เว้นแต่ในกรณีที่บุคคลอื่นนั้นเป็นสามี ภริยา บุพการีหรือผู้สืบสันดานของลูกหนี้ และบุคคลอื่นดังกล่าวได้สอบถามผู้ทวงถามหนี้ถึงสาเหตุของการติดต่อ)',
    amount: 0,
  },
  {
    plaint:
      '๘ วรรคหนึ่ง ผู้ทวงถามหนี้ติดต่อกับบุคคลอื่นซึ่งมิใช่ลูกหนี้เพื่อการทวงถามหนี้ โดยบุคคลนั้นมิใช่บุคคลซึ่งลูกหนี้ได้ระบุไว้เพื่อการทวงถามหนี้',
    amount: 0,
  },
  {
    plaint:
      '๘ วรรคสอง (๒) ผู้ทวงถามหนี้ติดต่อกับบุคคลอื่น ซึ่งมิใช่ลูกหนี้หรือบุคคลซึ่งลูกหนี้ได้ระบุไว้เพื่อการทวงถามหนี้ เพื่อสอบถามหรือยืนยันข้อมูลเกี่ยวกับสถานที่ติดต่อลูกหนี้หรือบุคคลซึ่งลูกหนี้ได้ระบุไว้เพื่อการทวงถามหนี้ โดยแจ้งถึงความเป็นหนี้ของลูกหนี้ (เว้นแต่ในกรณีที่บุคคลอื่นนั้นเป็นสามี ภริยา บุพการีหรือผู้สืบสันดานของลูกหนี้ แลบุคคลอื่นดังกล่าวได้สอบถามผู้ทวงถามหนี้ถึงสาเหตุของการติดต่อ)',
    amount: 0,
  },
  {
    plaint:
      '๘ วรรคสอง (๓) ผู้ทวงถามหนี้ติดต่อกับบุคคลอื่นซึ่งมิใช่ลูกหนี้หรือบุคคลซึ่งลูกหนี้ได้ระบุไว้เพื่อการทวงถามหนี้เพื่อสอบถามหรือยืนยันข้อมูลเกี่ยวกับสถานที่ติดต่อลูกหนี้หรือบุคคลซึ่งลูกหนี้ได้ระบุไว้เพื่อการทวงถามหนี้ โดยใช้ข้อความ เครื่องหมาย สัญลักษณ์ หรือชื่อทางธุรกิจของผู้ทวงถามหนี้บนซองจดหมายในหนังสือ หรือในสื่ออื่นใดที่ใช้ในการติดต่อสอบถาม ซึ่งทำให้เข้าใจได้ว่าเป็นการติดต่อเพื่อทวงถามหนี้ของลูกหนี้',
    amount: 0,
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
