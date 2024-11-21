<template>
  <div class="d-flex justify-start align-end mt-4 px-10">
    <span>
      <span class="text-blue-darken-4 text-h4">
        ประวัติการกระทำความผิดของผู้ประกอบธุรกิจทวงถามหนี้
      </span>
    </span>
  </div>
  <div>
    <v-row class="px-16 py-4">
      <v-col cols="12" sm="9" class="pa-0 d-flex align-center">
        <v-text-field
          label="ค้นหาด้วยชื่อ-นามสกุล,อีเมล,ชื่อหน่วยงาน หรือ ตำแหน่ง"
          variant="outlined"
          density="compact"
          hide-details
          append-inner-icon="mdi-magnify"
          class="full-width-input"
        ></v-text-field>
      </v-col>
      <v-col cols="6" sm="1" class="align-center justify-start d-flex">
        <v-btn left class="px-6" style="background-color: #1a237e; color: white"
          >ค้นหา</v-btn
        >
      </v-col>
      <v-col cols="6" sm="2" class="align-center justify-end d-flex">
        <v-btn color="green">
          <v-icon class="mr-1" left size="18" @click="openEditDialog()"
            >mdi-plus-circle-outline</v-icon
          >
          กำหนดโทษ
        </v-btn>
      </v-col>
    </v-row>
  </div>

  <div class="pt-2 px-10">
    <v-row>
      <v-col>
        <div
          class="pt-6 px-6 rounded-lg elevation-3"
          style="background-color: white"
        >
          <v-row class="d-flex align-center justify-space-between">
            <span color="#1A237E" class="text-h5 text-blue-darken-4">
              ชื่อธุรกิจ สินเชื่อมหานชัย
            </span>
          </v-row>

          <!-- ตัวกรอง -->
          <v-expand-transition>
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
              class="rounded-table pt-6"
              :items-per-page="5"
              :footer-props="{
                'items-per-page-options': [5, 10, 15],
              }"
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
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const showFilter = ref(false)
import { generatePDF as generateCollectPDF } from '@/prints/register/HomeData'

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
  border-radius: 12px !important;
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
