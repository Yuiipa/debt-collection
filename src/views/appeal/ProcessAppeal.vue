<template>
  <v-card class="ma-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h4 font-weight-bold"
      style="color: #1a237e"
    >
      <span>การดำเนินการเรื่องร้องเรียน</span>
    </v-card-title>
    <v-row class="d-flex justify-end ma-4 mt-0">
      <v-btn
        variant="outlined"
        append-icon="mdi-filter"
        :style="
          filter
            ? 'background-color: #1a237e; color: white; border: none'
            : 'background-color: white; color: #1a237e; border: 1px solid #1a237e'
        "
        size="large"
        class="rounded-lg px-2 px-sm-5"
        id="print"
        @click="filter = !filter"
      >
        ตัวกรอง
      </v-btn>
    </v-row>
    <v-expand-transition class="mt-6">
    <v-row class="ma-1 my-2 d-flex justify-end" v-if="filter">
      <v-col md="3" cols="12">
        <div class="mb-2 font-weight-bold">เลขที่เรื่องร้องเรียน</div>
        <v-text-field
          variant="outlined"
          placeholder="เลขที่เรื่องร้องเรียน"
          persistent-placeholder
          hide-details
          density="compact"
        />
      </v-col>
      <v-col md="3" cols="12">
        <div class="mb-2 font-weight-bold">สถานะ</div>
        <v-text-field
          variant="outlined"
          placeholder="สถานะ"
          persistent-placeholder
          hide-details
          density="compact"
        />
      </v-col>
      <v-col md="3" cols="12">
        <div class="mb-2 font-weight-bold">ตั้งแต่วันที่</div>
        <DatePicker
          variant="outlined"
          placeholder="ตั้งแต่วันที่"
          persistent-placeholder
          hide-details
          density="compact"
        />
      </v-col>
      <v-col md="3" cols="12">
        <div class="mb-2 font-weight-bold">ถึงวันที่</div>
        <DatePicker
          variant="outlined"
          placeholder="ถึงวันที่"
          persistent-placeholder
          hide-details
          density="compact"
        />
      </v-col>
      <v-col class="d-flex justify-end" cols="2">
        <v-btn
          style="height: 47px; background-color: #1a237e; color: white"
          prepend-icon="mdi-magnify"
        >
          <div class="text-h6">ค้นหา</div>
        </v-btn>
      </v-col>
    </v-row>
  </v-expand-transition>
    <v-card class="ma-4 rounded-lg">
      <v-data-table
        :headers="$vuetify.display.mdAndUp ? headers : headers2"
        :items="processappeal"
        :search="search"
        :items-per-page="10"
        v-model:options="pagination"
      >
        <template v-slot:[`item.num`]="{ index }">
          {{ calculateIndex(index) }}
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <v-btn
            v-if="item.status === '0'"
            variant="outlined"
            style="font-size: 14px; color: orange"
            class="rounded-pill"
            id="missdoc"
            @click="$router.push({ name: 'debt-form-appeal', query: { step: 2 } })"
          >
            ขาดเอกสารสำคัญ
          </v-btn>
          <v-btn
            v-if="item.status === '1'"
            variant="outlined"
            style="font-size: 14px; color: green"
            class="rounded-pill"
            id="comdoc"
          >
            เอกสารครบถ้วน
          </v-btn>
        </template>
        <template v-slot:[`item.info`]="{ item }">
          <v-btn
            append-icon="mdi-chevron-right"
            variant="plain"
            style="font-size: 14px"
            @click="openDetails(item)"
          >
          <div class="text-decoration-underline">เรียกดู</div>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-card>

  <v-dialog v-model="dialog">
    <v-card class="pa-0">
      <ProcessAppealDetails v-model="selectItem" />
      <v-divider class="mt-4" :thickness="5" color="#1a237e" />
      <v-card-actions class="justify-center pb-4">
        <v-btn
          style="
            width: 167px;
            height: 47px;
            background-color: #1a237e;
            color: white;
          "
          @click="dialog = false"
        >
          <div class="text-h6">ปิด</div>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'
import ProcessAppealDetails from '@/components/menuAppeal/processAppeal/ProcessAppealDetails.vue'

const dialog = ref(false)
const selectItem = ref({})
const search = ref('')
const filter = ref(false)

const headers = ref([
  { align: 'center', key: 'num', sortable: false, title: 'ลำดับที่' },
  { align: 'center', key: 'id', title: 'เลขที่เรื่องร้องเรียน' },
  { key: 'complainname', title: 'ชื่อผู้ร้องเรียน' },
  { align: 'center', key: 'defendantName', title: 'ชื่อผู้ถูกร้องเรียน' },
  { align: 'center', key: 'complaintPlace', title: 'สถานที่ร้องเรียน' },
  { align: 'center', key: 'status', title: 'สถานะ' },
  { align: 'center', key: 'process', title: 'ดำเนินการ' },
  {
    align: 'center',
    key: 'info',
    sortable: false,
    title: 'รายละเอียด',
  },
])

const headers2 = ref([
  { align: 'center', key: 'num', sortable: false, title: 'ลำดับที่' },
  { align: 'center', key: 'id', title: 'เลขที่เรื่องร้องเรียน' },
  {
    align: 'center',
    key: 'info',
    sortable: false,
    title: 'รายละเอียด',
  },
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

function openDetails(item) {
  selectItem.value = item
  dialog.value = true
}

const pagination = ref({
  page: 1,
  itemsPerPage: 10,
})

const calculateIndex = (index) => {
  return (pagination.value.page - 1) * pagination.value.itemsPerPage + index + 1
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

.primary--text {
  color: #1a237e !important;
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
</style>
