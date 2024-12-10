<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h5 text-md-h4 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span>จัดการข้อมูลผู้ประกอบธุรกิจ </span>
    </v-card-title>
    <div>
      <v-row class="px-13 pr-10">
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
                <span>{{ index + 1 }}</span>
              </template>
              <template v-slot:[`item.status`]="{ item }">
                <div
                  class="rounded-pill text-center py-1 px-2"
                  :style="{
                    backgroundColor: item.status === 1 ? '#4caf50' : '#f44336',
                    color: 'white',
                  }"
                >
                  {{ item.status === 1 ? 'ใช้งาน' : 'ไม่ใช้งาน' }}
                </div>
              </template>
              <template v-slot:[`item.process`]="{ item }">
                <v-btn  variant="text"
                  size="small"
                  class="mr-1"
                  style="background-color: #e3f2fd; color: #1565c0" @click="openEditDialog(2)">
                  <v-icon left size="26">mdi-pencil-outline</v-icon>
                </v-btn>
                <v-btn variant="text"
                  size="small"
                  style="background-color: #e3f2fd; color: #1565c0" @click="deleteItem(item)">
                  <v-icon left size="26">mdi-delete-outline</v-icon>
                </v-btn>
              </template>
            </v-data-table>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-card>
  <edit-dialog
    v-model:showDialog="showEditDialog"
    :item="items"
    @saved="handleSave"
  ></edit-dialog>
</template>
    
    <script setup>
import { ref } from 'vue'
import EditDialog from '@/components/menuRegister/system/requestForm/BusinessForm.vue'

const showEditDialog = ref(false)

const openEditDialog = () => {
  showEditDialog.value = true
}
const handleSave = () => {
  console.log(save)
}

const headers = [
  {
    title: 'ลำดับที่',
    key: 'index',
    align: 'center',
    sortable: true,
    width: '100px',
  },
  {
    title: 'ทะเบียนเลขที่',
    key: 'register',
    align: 'start',
    sortable: true,
    width: '100px',
  },
  {
    title: 'ชื่อธุรกิจ',
    key: 'name',
    align: 'start',
    sortable: true,
  },
  {
    title: 'ประเภทธุรกิจ',
    key: 'type',
    align: 'start',
    sortable: true,
    width: '170px',
  },
  {
    title: 'ที่ตั้งสถานประกอบธุรกิจ',
    key: 'location',
    align: 'start',
    sortable: true,
    width: '190px',
  },
  {
    title: 'สถานะ',
    key: 'status',
    align: 'start',
    sortable: true,
    width: '100px',
  },
  {
    title: 'ดำเนินการ',
    key: 'process',
    align: 'center',
    sortable: false,
    width: '150px',
  },
]

const items = ref([
  {
    register: 'ปท136000',
    name: 'บริษัท ซีบี เซอร์วิส กรุ๊ป จำกัด โดย นายพุทธรักษ์ โสภา กรรมการผู้จัดการ',
    type: 'บริษัทจำกัด',
    location: 'จังหวัดปทุมธานี',
    status: 1,
  },
])

function deleteItem(item) {
  console.log('ลบ:', item)
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