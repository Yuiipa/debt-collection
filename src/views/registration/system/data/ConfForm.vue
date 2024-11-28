<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h4 font-weight-bold"
      style="color: #1a237e"
    >
      <span>จัดการไฟล์แบบฟอร์ม </span>
    </v-card-title>
    <div>
      <v-row class="px-16">
        <v-col cols="12" sm="9" class="pa-0 d-flex align-center">
          <v-text-field
            label="ค้นหา"
            variant="outlined"
            density="compact"
            hide-details
            append-inner-icon="mdi-magnify"
            class="full-width-input"
          ></v-text-field>
        </v-col>
        <v-col cols="6" sm="1" class="align-center justify-start d-flex">
          <v-btn
            left
            class="px-6"
            style="background-color: #1a237e; color: white"
            >ค้นหา</v-btn
          >
        </v-col>
        <v-col cols="6" sm="2" class="align-center justify-end d-flex">
          <v-btn
            color="green"
            prepend-icon="mdi-plus-circle-outline"
            @click="openEditDialog(1)"
          >
            เพิ่มเอกสาร
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
            >
              <!-- ลำดับที่ -->
              <template v-slot:[`item.index`]="{ index }">
                <span>{{ index + 1 }}</span>
              </template>
              <template v-slot:[`item.dowload`]="{ item }">
                <v-btn
                  variant="outlined"
                  color="blue-lighten-2"
                  class="rounded-pill"
                  prepend-icon="mdi-cloud-download"
                  @click="downloadItem(item)"
                >
                  ดาวน์โหลด
                </v-btn>
              </template>


              <!-- ปุ่มดำเนินการ: แก้ไขและลบ -->
              <template v-slot:[`item.process`]="{ item }">
                <v-btn variant="text" size="small" @click="openEditDialog(2)">
                  <v-icon left size="26">mdi-pencil</v-icon>
                </v-btn>
                <v-btn variant="text" size="small" @click="deleteItem(item)">
                  <v-icon left size="26">mdi-delete</v-icon>
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
    :typeForm="typeEdit"
  ></edit-dialog>
</template>
    
    <script setup>
import { ref } from 'vue'
import EditDialog from '@/components/menuRegister/system/dataForm/ConfForm.vue'

const showEditDialog = ref(false)

const typeEdit = ref(1)

const openEditDialog = (type) => {
  typeEdit.value = type
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
    width: '120px',
  },
  {
    title: 'วันที่',
    key: 'date',
    align: 'start',
    sortable: true,
    width: '120px',
  },
  {
    title: 'ชื่อเอกสาร',
    key: 'document',
    align: 'start',
    sortable: true,
  },
  {
    title: 'ขนาดไฟล์',
    key: 'file_size',
    align: 'start',
    sortable: true,
    width: '190px',
  },
  {
    title: 'เรียกดู',
    key: 'dowload',
    align: 'start',
    sortable: true,
    width: '190px',
  },
  {
    title: 'ดำเนินการ',
    key: 'process',
    align: 'center',
    sortable: false,
    width: '190px',
  },
]

const items = ref([
  {
    date: '06/01/2565',
    document: 'รายงานการจดทะเบียนการประกอบธุรกิจทวงถามหนี้',
    file_size: '2960.35 kb',
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
    