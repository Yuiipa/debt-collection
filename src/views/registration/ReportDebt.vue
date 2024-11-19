<template>
  <div class="d-flex justify-start mt-4 px-10">
    <span
      class="d-flex align-center justify-center text-blue-darken-4"
      style="font-size: 40px"
    >
      จัดการข้อมูลผู้ใช้งาน
    </span>
  </div>
  <div>
    <v-row class="px-16 pt-4">
      <v-col cols="12" sm="8" class="pa-0 d-flex align-center">
        <v-text-field
          label="ค้นหาด้วยชื่อ-นามสกุล,อีเมล,ชื่อหน่วยงาน หรือ ตำแหน่ง"
          variant="outlined"
          density="compact"
          hide-details
          append-inner-icon="mdi-magnify"
          class="full-width-input"
        ></v-text-field>
      </v-col>
      <v-col cols="6" sm="2" class="align-center justify-start d-flex">
        <v-btn left class="px-6" style="background-color: #1a237e; color: white"
          >ค้นหา</v-btn
        >
      </v-col>
      <v-col cols="6" sm="2" class="align-center justify-end d-flex">
        <v-btn color="green">
          <v-icon left size="18">mdi-account-plus</v-icon>
          เพิ่มผู้ใช้งาน
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="px-10">
          <v-data-table
            :headers="headers"
            :items="items"
            class="elevation-1 rounded-table"
            :items-per-page="5"
            :footer-props="{
              'items-per-page-options': [5, 10, 15],
            }"
          >
            <!-- ลำดับที่ -->
            <template v-slot:[`item.index`]="{ index }">
              <v-icon style="font-size: 16px" span class="pr-6"
                >mdi-chevron-up</v-icon
              ><span span class="pr-12">{{ index + 1 }}</span>
            </template>

            <template v-slot:[`item.select`]="{ item }">
              <v-btn small @click="navigate(item)">เลือก</v-btn>
            </template>
          </v-data-table>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
  
  <script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const name_route = ref('debt-changeBusiness-form')

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
  { title: 'เลือก', key: 'select', align: 'start', sortable: true },
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
  } else if (currentPath === '/debt/Substitute') {
    name_route.value = 'debt-Substitute-form'
  } else if (currentPath === '/debt/ChangeRoster') {
    name_route.value = 'debt-ChangeRoster-registration'
  } else if (currentPath === '/debt/Quit_Business') {
    name_route.value = 'debt-Quit_Business-registration'
  } else if (currentPath === '/debt/Renew_request') {
    name_route.value = 'debt-Renew_request-registration'
  } else if (currentPath === '/debt/Blame_Business') {
    name_route.value = 'debt-Blame_Business-registration'
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

.rounded-table {
  border-top-left-radius: 12px !important;
  border-top-right-radius: 12px !important;
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
  