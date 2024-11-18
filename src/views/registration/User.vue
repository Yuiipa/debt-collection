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
      <v-col cols="6" sm="1" class="align-center justify-end d-flex">
        <v-btn> ค้นหา </v-btn>
      </v-col>
      <v-col cols="6" sm="2" class="align-center justify-end d-flex">
        <v-btn color="green">
          <v-icon left size="18" @click="openEditDialog()">mdi-account-plus</v-icon>
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
              <span>{{ index + 1 }}</span>
            </template>

            <!-- ปุ่มดำเนินการ: แก้ไขและลบ -->
            <template v-slot:[`item.process`]="{ item }">
              <v-btn
                size="small"
                color="green"
                class="mr-1"
                @click="openEditDialog()"
              >
                <v-icon left size="18">mdi-pencil</v-icon> แก้ไข
              </v-btn>
              <v-btn size="small" color="red" @click="deleteItem(item)">
                <v-icon left size="18">mdi-delete</v-icon> ลบ
              </v-btn>
            </template>
          </v-data-table>
        </div>
      </v-col>
    </v-row>
  </div>
  <edit-dialog
    v-model:showDialog="showEditDialog"
    :item="items"
    @saved="handleSave"
  ></edit-dialog>
</template>
  
  <script setup>
import { ref } from 'vue'
import EditDialog from '@/components/menuRegister/user/Dialog.vue'

const showEditDialog = ref(false)

const openEditDialog = () => {
  showEditDialog.value = true
}

const headers = [
  { title: 'ลำดับที่', key: 'index', align: 'center', sortable: true },
  {
    title: 'เลขประจำตัวประชาชน',
    key: 'pid',
    align: 'start',
    sortable: true,
    width: '190px',
  },
  { title: 'คำนำหน้านาม', key: 'title', align: 'start', sortable: true },
  { title: 'ชื่อ', key: 'firstName', align: 'start', sortable: true },
  { title: 'นามสกุล', key: 'lastName', align: 'start', sortable: true },
  {
    title: 'ตำแหน่งผู้ปฎิบัติงาน',
    key: 'position',
    align: 'start',
    sortable: true,
  },
  { title: 'เอกสารแนบ', key: 'document', align: 'start', sortable: false },
  { title: 'ดำเนินการ', key: 'process', align: 'center', sortable: false },
]

const items = ref([
  {
    pid: 8466851084319,
    title: 'นาย',
    firstName: 'สมหมาย',
    lastName: 'บุญยงค์',
    position: 'เจ้าหน้าที่ปฏิบัติการ',
    document: '',
  },
  {
    pid: 8466851084319,
    title: 'นาย',
    firstName: 'สมคิด',
    lastName: 'เพชรพันธ์',
    position: 'ทนาย',
    document: '',
  },
  {
    pid: 8466851084319,
    title: 'น.ส.',
    firstName: 'สมทรง',
    lastName: 'เพชรพันธ์',
    position: 'เจ้าหน้าที่ปฏิบัติการ',
    document: '',
  },
  {
    pid: 8466851084319,
    title: 'นาย',
    firstName: 'สมทรง',
    lastName: 'เพชรพันธ์',
    position: 'นิติกรชำนาญการ',
    document: '',
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
  