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
        <div>
          <v-btn
            variant="outlined"
            append-icon="mdi-file-excel"
            style="color: green"
            class="mr-4 rounded-lg"
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
            @click="exportPDF()"
          >
            พิมพ์
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-card variant="flat" class="mx-4">
      <v-data-table
        :headers="$vuetify.display.mdAndUp ? headers : headers2"
        :items="homeappeal"
        :search="search"
        :items-per-page="10"
        :footer-props="{
          'items-per-page-options': [5, 10, 15],
        }"
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

const homeappeal = [
  {
    id: '10001/2567',
    writtingAt: 'กรมการปกครอง',
    datetime: '10/01/2567',
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
    defendantNationality: '',
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
    status: '0',
    process: '',
  },
  {
    id: '10002/2567',
    writtingAt: 'กรมการปกครอง',
    datetime: '10/01/2567',
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
    defendantNationality: '',
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
    status: '1',
    process: '',
  },
  {
    id: '10003/2567',
    writtingAt: 'กรมการปกครอง',
    datetime: '01/01/2567',
    complainname: 'นายทดสอบ ทดสอบ',
    complainPID: '1-11111-1111-11-1',
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
    defendantNationality: '',
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
    complaintPlace: 'สมุทรปราการ',
    status: '0',
    process: '',
  },
]

const pagination = ref({
  page: 1,
  itemsPerPage: 10,
})

const calculateIndex = (index) => {
  return (pagination.value.page - 1) * pagination.value.itemsPerPage + index + 1
}

const exportPDF = () => {
  const item = homeappeal
  generatePDF(item)
}

const exportExcel = () => {
  generateExcel(homeappeal)
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

.v-btn#excel:hover,
.v-btn#comdoc {
  background-color: green !important;
  color: white !important;
}

.v-btn#excel,
.v-btn#comdoc:hover {
  color: green !important;
  background-color: white !important;
}

.v-btn#print:hover,
.v-btn#missdoc {
  background-color: orange !important;
  color: white !important;
}

.v-btn#print,
.v-btn#missdoc:hover {
  color: orange !important;
  background-color: white !important;
}
</style>
