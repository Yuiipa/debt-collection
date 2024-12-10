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
        <div>
          <v-btn
            variant="outlined"
            append-icon="mdi-book-open"
            size="large"
            color="#FFC107"
            class="rounded-lg px-2 px-sm-5 mr-2"
          >
            หนังสือสั่งการ
          </v-btn>
          <v-btn
            variant="outlined"
            append-icon="mdi-credit-card"
            size="large"
            color="#03A9F4"
            class="rounded-lg px-2 px-sm-5 mr-2"
          >
            เครื่องอ่านบัตร
          </v-btn>
          <v-btn
            variant="outlined"
            append-icon="mdi-link-variant"
            size="large"
            color="#FF5722"
            class="rounded-lg px-2 px-sm-5"
          >
            Linkage
          </v-btn>
        </div>

        <v-col
          md="4"
          cols="12"
          class="d-flex justify-end px-0 align-center mb-1"
          style="gap: 10px"
        >
          <ExportMenu
            :exportExcel="exportExcel"
            :exportPdf="exportPdf"
          />
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
        </v-col>
      </v-row>

      <!-- ตัวกรอง -->
      <v-expand-transition class="mt-6">
        <div v-if="showFilter">
          <v-row>
            <v-col cols="12" md="4" class="pa-0">
              <div class="v-col-12 py-0">เลขที่คำขอ</div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="pa-0">
              <div class="v-col-12 py-0">ทะเบียนเลขที่</div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="pa-0">
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
            <v-col cols="12" md="4" class="pa-0">
              <div class="v-col-12 py-0">เลขประจำตัวประชาชนผู้ประกอบธุรกิจ</div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="pa-0">
              <div class="v-col-12 py-0">ทะเบียนเลขที่</div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="pa-0">
              <div class="v-col-12 py-0">ชื่อ-นามสกุล ผู้ขอจดทะเบียน</div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="12" cols="12" class="d-flex justify-end mb-1">
              <v-btn
                prepend-icon="mdi-magnify"
                style="background-color: #1a237e; color: white"
                >ค้นหา</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </v-expand-transition>

      <v-row class="rounded-lg mt-8 mb-6">
        <v-data-table :headers="headers" :items="items" class="elevation-1">
          <template v-slot:[`item.data`]="{ item }">
            <v-btn
              variant="plain"
              append-icon="mdi-chevron-right"
              small
              @click="navigate(item)"
            >
              <div class="text-decoration-underline">ข้อมูล</div>
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
import { generatePDF as generateCollectPDF } from '@/prints/register/HomeData'
import { generateExcel } from '@/prints/register/excel/Home_Debt.js'
import ExportMenu from '../../components/widget/ExportMenu.vue';

const showFilter = ref(false)

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
  {
    title: 'ลำดับที่',
    key: 'index',
    align: 'center',
    sortable: true,
    width: '100px',
    value: (item) => {
      const index = items.value.indexOf(item)
      return index + 1
    },
  },
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

  { title: 'สถานะ', key: 'status', align: 'center', sortable: false },
  { title: 'ข้อมูล', key: 'data', align: 'center', sortable: false },
]

const items = ref([
  {
    registerNumber: '1/2559',
    businessName: 'สำนักงานคชเสนาทนายความและธุรกิจ',
    type: 'ทนายความ',
    location:
      'เลขที่ 44/11 ซอย นิมิตใหม่ 12 ถนน นิมิตใหม่ ตำบลทรายกองดิน อำเภอคลองสามวา จังหวัดกรุงเทพมหานคร',
    registrationDate: '27 พฤษภาคม 2559',
    status: true,
  },
  {
    registerNumber: '7/2559',
    businessName: 'สำนักงานทนายความนัฐพงษ์ พลศรีเมือง ',
    type: 'ทนายความ',
    location:
      'เลขที่ 98/13 หมู่ 6 ตำบลขามใหญ่ อำเภอเมืองอุบลราชธานี จังหวัดอุบลราชธาน',
    registrationDate: '27 พฤษภาคม 2559',
    status: true,
  },
  {
    registerNumber: '8/2559',
    businessName: 'สำนักงานทนายความทวีศักดิ์โสมณี',
    type: 'ทนายความ',
    location:
      'เลขที่ 1/2 ถนน เทศบาล 2 ตำบลวารินชำราบ อำเภอวารินชำราบ จังหวัดอุบลราชธาน',
    registrationDate: '27 พฤษภาคม 2559',
    status: true,
  },
  {
    registerNumber: '9/2559',
    businessName: 'สำนักงานทนายความณัฐพรโสมณี',
    type: 'ทนายความ',
    location:
      'เลขที่ 206-2 ถนน เกษมสุข ตำบลวารินชำราบ อำเภอวารินชำราบ จังหวัดอุบลราชธานี',
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
    location:
      'เลขที่ 1 หมู่ 4 ถนน เทศบาล 14 ตำบลจักราช อำเภอจักราช จังหวัดนครราชสีมา',
    registrationDate: '27 พฤษภาคม 2559',
    status: true,
  },
])
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
