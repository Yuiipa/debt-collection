<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h5 text-md-h4 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span> {{ title_route }}</span>
    </v-card-title>
    <div>
      <v-row class="px-10 pl-13">
        <v-col cols="12" sm="8" class="pa-0 d-flex align-center">
          <v-text-field
            label="ค้นหา"
            variant="outlined"
            density="compact"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="6" sm="4" class="align-center justify-start d-flex">
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
              class="elevation-1"
            >
              <!-- ลำดับที่ -->
              <template v-slot:[`item.index`]="{ index }">
                <span span class="pr-12">{{ index + 1 }}</span>
              </template>
              <template v-slot:[`item.select`]="{ item }">
                <v-btn
                  variant="plain"
                  append-icon="mdi-chevron-right"
                  small
                  @click="navigate(item)"
                >
                  <div class="text-decoration-underline">เลือก</div>
                </v-btn>
              </template>
            </v-data-table>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>
    
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const name_route = ref('debt-changeBusiness-form')
const title_route = ref('')

const headers = [
  { title: 'ลำดับที่', key: 'index', align: 'center', sortable: true },
  {
    title: 'เลขที่ทะเบียน',
    key: 'refLicId',
    align: 'start',
    sortable: true,
    width: '190px',
  },
  { title: 'ชื่อธุรกิจ', key: 'name', align: 'start', sortable: true },
  {
    title: 'ประเภทการประกอบธุรกิจ',
    key: 'type',
    align: 'start',
    sortable: true,
  },
  {
    title: 'ที่ตั้งสถานประกอบธุรกิจ',
    key: 'location',
    align: 'start',
    sortable: true,
  },
  { title: 'เลือก', key: 'select', align: 'center', sortable: true },
]

const items = ref([
  {
    refLicId: 8466851084319,
    name: 'นาย',
    type: 'สมหมาย',
    location: 'บุญยงค์',
  },
  {
    refLicId: 8466851084319,
    name: 'นาย',
    type: 'สมคิด',
    location: 'เพชรพันธ์',
  },
  {
    refLicId: 8466851084319,
    name: 'น.ส.',
    type: 'สมทรง',
    location: 'เพชรพันธ์',
  },
  {
    refLicId: 8466851084319,
    name: 'นาย',
    type: 'สมทรง',
    location: 'เพชรพันธ์',
  },
])

onMounted(() => {
  const currentPath = route.path // ใช้ useRoute เพื่อดึง path ปัจจุบัน

  // ตัวอย่างเงื่อนไขการเปลี่ยนเส้นทาง
  if (currentPath === '/debt/ChangeBusiness') {
    name_route.value = 'debt-ChangeBusiness-form'
    title_route.value =
      'คำขอเปลี่ยนแปลงรายการจดทะเบียนผู้ประกอบธุรกิจทวงถามหนี้'
  } else if (currentPath === '/debt/Substitute') {
    name_route.value = 'debt-Substitute-form'
    title_route.value =
      'คำขอรับใบแทนหนังสือสำคัญแสดงการจดทะเบียนการประกอบธุรกิจทวงถามหนี้'
  } else if (currentPath === '/debt/ChangeRoster') {
    name_route.value = 'debt-ChangeRoster-form'
    title_route.value = 'บัญชีรายชื่อพนักงานของผู้ประกอบธุรกิจทวงถามหนี้'
  } else if (currentPath === '/debt/Quit_Business') {
    name_route.value = 'debt-QuitBusiness-form'
    title_route.value = 'คำขอเลิกประกอบธุรกิจทวงถามหนี้'
  } else if (currentPath === '/debt/Renew_request') {
    name_route.value = 'debt-Renewrequest-form'
    title_route.value = 'ขอต่ออายุประกอบธุรกิจทวงถามหนี้'
  } else if (currentPath === '/debt/Blame_Business') {
    name_route.value = 'debt-BlameBusiness-form'
    title_route.value = 'ประวัติการกระทำความผิดของผู้ประกอบธุรกิจทวงถามหนี้'
  }
})

function navigate() {
  router.push({ name: name_route.value })
}
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
    