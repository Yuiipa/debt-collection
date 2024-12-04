<template>
  <v-card class="ma-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h5 text-md-h4 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span> ข้อมูลการร้องเรียนตามพระราชบัญญัติการทวงถามหนี้ พ.ศ.๒๕๕๘</span>
    </v-card-title>
    <div class="px-12 pt-2">
      <v-row class="d-flex align-center justify-space-between">
        <div class="d-flex" style="gap: 10px">
          <v-btn
            variant="outlined"
            append-icon="mdi-file-excel"
            style="color: green"
            class="rounded-lg px-2 px-sm-5"
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
            class="rounded-lg px-2 px-sm-5"
            size="large"
            id="print"
            @click="exportPdf()"
          >
            พิมพ์
          </v-btn>
          <v-btn
            variant="outlined"
            append-icon="mdi-filter"
            :style="
              showFilter
                ? 'background-color: #1a237e; color: white; border: none'
                : 'background-color: white; color: #1a237e; border: 1px solid #1a237e'
            "
            size="large"
            class="rounded-lg px-2 px-sm-5"
            id="print"
            @click="toggleFilter()"
          >
            ตัวกรอง
          </v-btn>
        </div>
        <v-menu transition="open-on-focus">
          <template v-slot:activator="{ props }">
            <v-avatar size="46" v-bind="props">
              <v-icon size="38">mdi-dots-horizontal</v-icon>
            </v-avatar>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in listService"
              :key="index"
              @click="$router.push({ name: item.name })"
            >
              <v-list-item-content class="d-flex align-center">
                <v-list-item-icon class="mr-2">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>

      <!-- ตัวกรอง -->
      <v-expand-transition class="mt-6">
        <div v-if="showFilter">
          <v-row>
            <v-col cols="12" md="4" class="pl-2 py-0">
              <div class="v-col-12 py-0">เลขที่คำขอ</div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="pl-2 py-0">
              <div class="v-col-12 py-0">ทะเบียนเลขที่</div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="pl-2 py-0">
              <div class="v-col-12 py-0">ทะเบียนเลขที่</div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4" class="pl-2 py-0">
              <div class="v-col-12 py-0">เลขประจำตัวประชาชนผู้ประกอบธุรกิจ</div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="pl-2 py-0">
              <div class="v-col-12 py-0">ทะเบียนเลขที่</div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="pl-2 py-0">
              <div class="v-col-12 py-0">ชื่อ-นามสกุล ผู้ขอจดทะเบียน</div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
      </v-expand-transition>

      <v-row class="rounded-lg mt-8 mb-6">
        <v-data-table :headers="headers" :items="items" class="elevation-1">
          <template v-slot:[`item.index`]="{ index }">
            <span>{{ index + 1 }}</span>
          </template>
          <template v-slot:[`item.data`]="{ item }">
            <v-btn variant="plain" small @click="navigate(item)">
              ข้อมูล >
            </v-btn>
          </template>
          <template v-slot:[`item.status`]="{ item }">
            <v-switch
              v-model="item.status"
              color="#39ab4e"
              inset
              dense
              hide-details
              :false-value="false"
              :true-value="true"
            ></v-switch>
          </template>
        </v-data-table>
      </v-row>
    </div>
  </v-card>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const showFilter = ref(false)
import { generatePDF as generateCollectPDF } from '@/prints/register/HomeData'
import { generateExcel } from '@/prints/register/excel/Home_Debt.js'

const listService = [
  {
    title: 'หนังสืออ่านบัตร',
    name: 'debt-change-password',
    icon: 'mdi-book-open',
  },
  { title: 'เครื่องอ่านบัตร', name: 'debt-menu-page', icon: 'mdi-credit-card' },
  { title: 'Linkage', name: 'debt-home', icon: 'mdi-link-variant' },
]

const exportPdf = () => {
  generateCollectPDF(items.value)
}

const exportExcel = () => {
  generateExcel(items.value)
}

const toggleFilter = () => {
  showFilter.value = !showFilter.value
}
const router = useRouter()
function navigate() {
  router.push({ name: 'debt-home-registration-detail_business' })
}
const headers = [
  { title: 'ลำดับที่', key: 'index', align: 'center', sortable: true },
  {
    title: 'เลขที่ทะเบียน',
    key: 'registerNumber',
    align: 'start',
    sortable: true,
    width: '150px',
  },
  { title: 'ชื่อธุรกิจ', key: 'businessName', align: 'start', sortable: true },
  {
    title: 'ประเภทการประกอบธุรกิจ',
    key: 'type',
    align: 'start',
    sortable: true,
  },
  {
    title: 'ที่ตั้งสถานประกอบการ',
    key: 'location',
    align: 'start',
    sortable: true,
  },
  { title: 'ข้อมูล', key: 'data', align: 'center', sortable: false },
  { title: 'สถานะ', key: 'status', align: 'center', sortable: false },
]

const items = ref([
  {
    registerNumber: '1/2559',
    businessName: 'สำนักงานคชเสนาทนายความและธุรกิจ',
    type: 'ทนายความ',
    location: 'เลขที่ 44/11 ซอย นิมิตใหม่ 12 ถนน นิมิตใหม่ ตำบลทรายกองดิน อำเภอคลองสามวา จังหวัดกรุงเทพมหานคร',
    registrationDate: '27 พฤษภาคม 2559',
    status: true,
  },
  {
    registerNumber: '7/2559',
    businessName: 'สำนักงานทนายความนัฐพงษ์ พลศรีเมือง ',
    type: 'ทนายความ',
    location: 'เลขที่ 98/13 หมู่ 6 ตำบลขามใหญ่ อำเภอเมืองอุบลราชธานี จังหวัดอุบลราชธาน',
    registrationDate: '27 พฤษภาคม 2559',
    status: true,
  },
  {
    registerNumber: '8/2559',
    businessName: 'สำนักงานทนายความทวีศักดิ์โสมณี',
    type: 'ทนายความ',
    location: 'เลขที่ 1/2 ถนน เทศบาล 2 ตำบลวารินชำราบ อำเภอวารินชำราบ จังหวัดอุบลราชธาน',
    registrationDate: '27 พฤษภาคม 2559',
    status: true,
  },
  {
    registerNumber: '9/2559',
    businessName: 'สำนักงานทนายความณัฐพรโสมณี',
    type: 'ทนายความ',
    location: 'เลขที่ 206-2 ถนน เกษมสุข ตำบลวารินชำราบ อำเภอวารินชำราบ จังหวัดอุบลราชธานี',
    registrationDate: '27 พฤษภาคม 2559',
    status: true,
  },
  {
    registerNumber: '10/2559',
    businessName: 'สำนักงานสุนทรทนายความและบุตร',
    type: 'ทนายความ',
    location: 'เลขที่ 207 หมู่ 11 ตำบลทับกุง อำเภอหนองแสง จังหวัดอุดรธานี',
    registrationDate: '27 พฤษภาคม 2559',
    status: true,
  },
  {
    registerNumber: '14/2559',
    businessName: 'สำนักงานณัฐพล แก้วขุนทดทนายความ',
    type: 'ทนายความ',
    location: 'เลขที่ 1 หมู่ 4 ถนน เทศบาล 14 ตำบลจักราช อำเภอจักราช จังหวัดนครราชสีมา',
    registrationDate: '27 พฤษภาคม 2559',
    status: true,
  },
])
</script>

<style scoped>
.v-table :deep(th) {
  background-color: #1a237e;
  color: white;
  cursor: pointer;
  font-weight: bold;
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
