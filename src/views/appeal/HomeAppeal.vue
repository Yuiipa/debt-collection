<template>
  <v-card class="ma-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h4 font-weight-bold"
      style="color: #1a237e"
    >
      <span>ข้อมูลการร้องเรียนตามพระราชบัญญัติการทวงถามหนี้ พ.ศ.๒๕๕๘</span>
    </v-card-title>
    <v-row class="ma-1 my-2">
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
      <v-col md="3" cols="12" class="d-flex align-end mb-1">
        <v-btn
          prepend-icon="mdi-magnify"
          style="background-color: #1a237e; color: white"
          >ค้นหา</v-btn
        >
      </v-col>
      <v-col md="3" cols="12" class="d-flex justify-end align-end mb-1">
        <v-menu offset-y>
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              variant="outlined"
              prepend-icon="mdi-tray-arrow-down"
              :style="exportBtn ?'color: white;background-color: #1a237e': 'background-color: white;color: #1a237e'"
              class="rounded-lg"
              size="large"
              id="export"
              @click="exportBtn = !exportBtn"
            >
              Export
            </v-btn>
          </template>
          <v-list>
            <v-list-item class="d-flex justify-start" @click="exportExcel()">
              <v-list-item-icon>
                <v-icon class="text-green">mdi-file-excel</v-icon>
              </v-list-item-icon>
              <span class="mx-2">Excel</span>
            </v-list-item>
            <v-list-item @click="exportPDF()">
              <v-list-item-icon>
                <v-icon class="text-orange">mdi-file-pdf-box</v-icon>
              </v-list-item-icon>
              <span class="mx-2">PDF</span>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
    <v-card class="ma-4 rounded-lg">
      <v-data-table
        :headers="$vuetify.display.mdAndUp ? headers : headers2"
        :items="homeappeal"
        :search="search"
      >
        <template v-slot:[`item.num`]="{ index }">
          {{ calculateIndex(index) }}
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <v-btn
            v-if="item.status === '0'"
            variant="outlined"
            style="font-size: 14px"
            class="rounded-pill"
            id="missdoc"
          >
            ขาดเอกสารสำคัญ
          </v-btn>
          <v-btn
            v-if="item.status === '1'"
            variant="outlined"
            style="font-size: 14px"
            class="rounded-pill"
            id="comdoc"
          >
            เอกสารครบถ้วน
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { generatePDF } from '@/prints/appeal/HomeAppeal.js'
import { generateExcel } from '@/prints/appeal/ExcelHomeAppeal.js'

const exportBtn = ref(false)
const search = ref('')

const headers = ref([
  { align: 'center', key: 'num', sortable: false, title: 'ลำดับที่' },
  { align: 'center', key: 'id', title: 'เลขที่เรื่องร้องเรียน' },
  { key: 'complainname', title: 'ชื่อผู้ร้อง' },
  { align: 'center', key: 'defendantName', title: 'ชื่อผู้ถูกร้อง' },
  { align: 'center', key: 'complaintPlace', title: 'สถานที่ร้องเรียน' },
  { align: 'center', key: 'datetime', title: 'วันที่ร้องเรียน' },
  { align: 'center', key: 'status', sortable: false, title: 'สถานะ' },
])

const headers2 = ref([
  { align: 'center', key: 'num', sortable: false, title: 'ลำดับที่' },
  { align: 'center', key: 'id', title: 'เลขที่เรื่องร้องเรียน' },
  { align: 'center', key: 'status', sortable: false, title: 'สถานะ' },
])

const homeappeal = []

for (let i = 0; i < 100; i++) {
  const id = `1000${i + 1}/2567`
  const datetime = `10/0${i + 1}/2567`
  const status = Math.floor(Math.random() * 2)
  homeappeal.push({
    id: id,
    datetime: datetime,
    status: String(status),
    writtingAt: 'กรมการปกครอง',
    complainname: 'นายadf adf',
    complainPID: '3-6302-00288-06-6',
    complainAge: '22',
    complainHno: '2001',
    complainMoo: 'เขารู',
    complainSoi: 'เขารูปช้าง',
    complainDistrict: 'ตำบลคลองสิบ',
    complainTown: 'อำเภอหนองจอก',
    complainProvince: 'กรุงเทพมหานคร',
    complainTel: '2444678911',
    defendant: 'บริษัท พรอพเพอตี้ ออนเนสตี้ แมนเนจเมนท์ จำกัด',
    defendantPID: '3110401055021',
    defendantName: 'นางนปภา ถิรายุวัฒน์',
    defendantAge: '0',
    defendantHno: '',
    defendantMoo: 'เขารู',
    defendantSoi: '',
    defendantRoad: 'เขารูปช้าง',
    defendantDistrict: 'ตำบลคลองสิบ',
    defendantTown: 'อำเภอหนองจอก',
    defendantProvince: 'กรุงเทพมหานคร',
    defendantTel: '2444678911',
    defendantFax: '',
    defendantMail: '',
    topic:
      '- (๕ วรรคหนึ่ง) ประกอบธุรกิจทวงถามหนี้ โดยไม่จดทะเบียนการประกอบธุรกิจทวงถามหนี้ต่อนายทะเบียน',
    details: 'เขารูปช้าง',
    crimeScene: 'เขารูปช้าง',
    other: '',
    complaintPlace: 'กรุงเทพมหานคร',
    process: '',
  })
}

const pagination = ref({
  page: 1,
  itemsPerPage: 10,
})

const calculateIndex = (index) => {
  return (pagination.value.page - 1) * pagination.value.itemsPerPage + index + 1
}

const exportPDF = () => {
  generatePDF(homeappeal)
  exportBtn.value = false
}

const exportExcel = () => {
  generateExcel(homeappeal)
  exportBtn.value = false
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

.v-data-table tbody tr {
  border-bottom: 1px solid #ddd;
}

.v-data-table tbody tr:nth-child(odd) {
  background-color: #f9f9f9;
}

.v-data-table tbody tr:nth-child(even) {
  background-color: #ffffff;
}

.v-btn#comdoc:hover {
  background-color: green !important;
  color: white !important;
}

.v-btn#comdoc {
  color: green !important;
  background-color: transparent !important;
}

.v-btn#missdoc:hover {
  background-color: orange !important;
  color: white !important;
}

.v-btn#missdoc {
  color: orange !important;
  background-color: transparent !important;
}

.v-btn#export:hover {
  color: white !important;
  background-color: #1a237e !important;
}
</style>
