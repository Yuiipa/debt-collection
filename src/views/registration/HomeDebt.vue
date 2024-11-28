<template>
  <v-card class="ma-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h4 font-weight-bold"
      style="color: #1a237e"
    >
      <span> ข้อมูลการร้องเรียนตามพระราชบัญญัติการทวงถามหนี้ พ.ศ.๒๕๕๘</span>
    </v-card-title>
    <div class="px-10 pt-2">
      <v-row>
        <v-col>
          <div>
            <v-row class="d-flex align-center justify-space-between">
              <div class="d-flex" style="gap: 10px">
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
                <v-btn
                  variant="outlined"
                  append-icon="mdi-filter"
                  :style="
                    showFilter
                      ? 'background-color: #1a237e; color: white; border: none'
                      : 'background-color: white; color: #1a237e; border: 1px solid #1a237e'
                  "
                  size="large"
                  class="rounded-lg"
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
                    <div class="v-col-12 py-0">
                      เลขประจำตัวประชาชนผู้ประกอบธุรกิจ
                    </div>
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

            <v-row>
              <v-data-table
                :headers="headers"
                :items="items"
                class="rounded-table mt-6 mb-6"

              >
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
                    color="primary"
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
        </v-col>
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

async function exportPdf() {
  const generateExampleData = (count) => {
    const exampleData = []
    for (let i = 1; i <= count; i++) {
      exampleData.push({
        businessName: `นายชัยวัฒน์ สุขนิยม ${i}`,
        registrationNumber: `55/${2555 + i}`,
        businessType: 'บุคคลธรรมดา',
        location: `บ้านเลขที่ ${
          55 + i
        } หมู่ที่ 4 ต.สุขพุก อ.กำเนิดแก้ว จ.ร้อยเอ็ด`,
        registrationDate: `3 พฤษภาคม ${2558 + i}`,
        phoneNumber: '',
      })
    }
    return exampleData
  }
  await generateCollectPDF(generateExampleData(25))
}

const exportExcel = () => {
  const generateExampleData = (count) => {
    const exampleData = []
    for (let i = 1; i <= count; i++) {
      exampleData.push({
        businessName: `นายชัยวัฒน์ สุขนิยม ${i}`,
        registrationNumber: `55/${2555 + i}`,
        businessType: 'บุคคลธรรมดา',
        location: `บ้านเลขที่ ${
          55 + i
        } หมู่ที่ 4 ต.สุขพุก อ.กำเนิดแก้ว จ.ร้อยเอ็ด`,
        registrationDate: `3 พฤษภาคม ${2558 + i}`,
        phoneNumber: '',
      })
    }
    return exampleData
  }
  generateExcel(generateExampleData(25))
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
    registerNumber: '001/2566',
    businessName: 'สำนักงาน จันทร์จิรา ฟองแก้ว ทนายความ',
    type: 'ทนายความ',
    location: 'จังหวัดแม่ฮ่องสอน',
    status: true,
  },
  {
    registerNumber: '002/2566',
    businessName: 'Jelly bean',
    type: 'ทนายความ',
    location: 'จังหวัดแม่ฮ่องสอน',
    status: true,
  },
  {
    registerNumber: '003/2566',
    businessName: 'KitKat',
    type: 'ทนายความ',
    location: 'จังหวัดแม่ฮ่องสอน',
    status: true,
  },
  {
    registerNumber: '004/2566',
    businessName: 'Eclair',
    type: 'ทนายความ',
    location: 'จังหวัดแม่ฮ่องสอน',
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

.rounded-table {
  border-top-left-radius: 12px !important; /* โค้งเฉพาะมุมซ้ายบน */
  border-top-right-radius: 12px !important; /* โค้งเฉพาะมุมขวาบน */
  overflow: hidden; /* ซ่อนส่วนเกิน */
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
