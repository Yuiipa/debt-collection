<template>
  <v-card class="ma-4 mt-8">
    <v-card-title
      class="d-flex justify-space-between ma-2 text-h5"
      style="color: #1a237e"
    >
      <span>ข้อมูลการร้องเรียนตามพระราชบัญญัติการทวงถามหนี้ พ.ศ.๒๕๕๘</span>
      <div>
        <v-btn
          variant="outlined"
          append-icon="mdi-file-excel"
          style="color: green"
          class="mr-4 rounded-lg"
          size="large"
        >
          Excel
        </v-btn>
        <v-btn
          variant="outlined"
          append-icon="mdi-printer-outline"
          style="color: orange"
          class="rounded-lg"
          size="large"
        >
          พิมพ์
        </v-btn>
      </div>
    </v-card-title>
    <v-row class="ma-1 mx-4 my-2">
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
    </v-row>
    <v-data-table
      :headers="headers"
      :items="processappeal"
      :search="search"
      :items-per-page="10"
      v-model:options="pagination"
      hide-default-header
    >
      <template v-slot:thead>
        <thead>
          <tr>
            <th
              v-for="header in headers"
              :key="header.key"
              :align="header.align || 'start'"
              class="text-white"
              style="background-color: #1a237e; text-align: center"
              id
            >
              {{ header.title }}
            </th>
          </tr>
        </thead>
      </template>
      <template v-slot:[`item.num`]="{ index }">
        {{ calculateIndex(index) }}
      </template>
      <template v-slot:[`item.status`]="{ item }">
        <v-btn
          v-if="item.status === '0'"
          variant="outlined"
          style="font-size: 14px; color: orange"
          class="rounded-pill"
        >
          ขาดเอกสารสำคัญ
        </v-btn>
        <v-btn
          v-if="item.status === '1'"
          variant="outlined"
          style="font-size: 14px; color: green"
          class="rounded-pill"
        >
          เอกสารครบถ้วน
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const search = ref('')

const headers = ref([
  { align: 'center', key: 'num', sortable: false, title: 'ลำดับที่' },
  { align: 'center', key: 'id', title: 'เลขที่เรื่องร้องเรียน' },
  { key: 'complainname', title: 'ชื่อผู้ร้อง' },
  { align: 'center', key: 'defendantName', title: 'ชื่อผู้ถูกร้อง' },
  { align: 'center', key: 'complaintPlace', title: 'สถานที่ร้องเรียน' },
  { align: 'center', key: 'datetime', title: 'วันที่ร้องเรียน' },
  { align: 'center', key: 'status', title: 'สถานะ' },
])

const processappeal = [
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
    status: '1',
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
</script>
