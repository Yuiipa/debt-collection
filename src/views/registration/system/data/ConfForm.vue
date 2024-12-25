<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h5 text-md-h4 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span>จัดการไฟล์แบบฟอร์ม</span>
    </v-card-title>
    <div class="mx-4">
      <v-row >
        <v-col cols="12" sm="4" class="d-flex align-center">
          <v-text-field
            v-model="searchQuery"
            label="ค้นหา"
            variant="outlined"
            density="compact"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="6" sm="2" class="align-center justify-start d-flex">
          <v-btn
            prepend-icon="mdi-magnify"
            style="background-color: #1a237e; color: white"
          >
            ค้นหา
          </v-btn>
        </v-col>
        <v-col cols="6" sm="6" class="align-center justify-end d-flex">
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
          <div class="rounded-lg pb-2">
            <v-data-table
              :headers="headers"
              :items="filteredItems"
              class="elevation-1"
            >
              <template v-slot:[`item.dowload`]="{ item }">
                <v-btn
                  variant="outlined"
                  color="blue-lighten-2"
                  class="rounded-pill"
                  prepend-icon="mdi-tray-arrow-down"
                  @click="downloadItem(item)"
                >
                  ดาวน์โหลด
                </v-btn>
              </template>

              <!-- ปุ่มดำเนินการ: แก้ไขและลบ -->
              <template v-slot:[`item.process`]="{ item }">
                <v-btn
                  variant="text"
                  size="small"
                  class="mr-1"
                  style="background-color: #e3f2fd; color: #1565c0"
                  @click="openEditDialog(2)"
                >
                  <v-icon left size="26">mdi-pencil-outline</v-icon>
                </v-btn>
                <v-btn
                  variant="text"
                  size="small"
                  style="background-color: #e3f2fd; color: #1565c0"
                  @click="deleteItem(item)"
                >
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
    :typeForm="typeEdit"
  ></edit-dialog>
</template>

<script setup>
import { ref, computed ,reactive} from 'vue'
import EditDialog from '@/components/menuRegister/system/dataForm/ConfForm.vue'

const showEditDialog = ref(false)
const typeEdit = ref(1)
const searchQuery = ref('') // ตัวแปรสำหรับข้อความค้นหา

const openEditDialog = (type) => {
  typeEdit.value = type
  showEditDialog.value = true
}
const handleSave = () => {
  console.log('save')
}

const headers = [
  {
    title: 'ลำดับที่',
    key: 'index',
    align: 'center',
    sortable: true,
    width: '100px',
    value: (item) => {
      const index = items.indexOf(item)
      return index + 1
    },
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

const items = reactive([
  {
    date: '06/01/2565',
    document: 'รายงานการจดทะเบียนการประกอบธุรกิจทวงถามหนี้',
    file_size: '2960.35 kb',
  },
  {
    date: '07/01/2565',
    document: 'แบบฟอร์มคำร้อง',
    file_size: '1200.25 kb',
  },
])

const filteredItems = computed(() => {
  return items.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  )
})

function deleteItem(item) {
  console.log('ลบ:', item)
}
</script>