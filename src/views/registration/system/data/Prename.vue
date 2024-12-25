<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h5 text-md-h4 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span> จัดการข้อมูลคำนำหน้าชื่อ </span>
    </v-card-title>
    <div class="mx-4 mb-6">
      <v-row >
        <v-col cols="12" md="4" class="d-flex align-center">
          <v-text-field
            v-model="searchQuery"
            label="ค้นหา"
            variant="outlined"
            density="compact"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="6" md="2" class="align-center justify-start d-flex">
          <v-btn
            prepend-icon="mdi-magnify"
            style="background-color: #1a237e; color: white"
          >
            ค้นหา
          </v-btn>
        </v-col>
        <v-col cols="6" md="6" class="align-center justify-end d-flex">
          <v-btn
            color="green"
            prepend-icon="mdi-plus-circle-outline"
            @click="openEditDialog(1)"
          >
            เพิ่มคำนำหน้าชื่อ
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
import { ref, computed,reactive } from 'vue'
import EditDialog from '@/components/menuRegister/system/dataForm/PrenameForm.vue'

const showEditDialog = ref(false)
const typeEdit = ref(1)
const searchQuery = ref('') // ตัวแปรสำหรับข้อความค้นหา

const openEditDialog = (type) => {
  showEditDialog.value = true
  typeEdit.value = type
}

const handleSave = () => {
  console.log('save')
}

const headers = [
  { title: 'ลำดับที่', key: 'index', align: 'center', sortable: true,width: '100px',
    value: (item) => {
      const index = items.indexOf(item)
      return index + 1
    }, },
  {
    title: 'ชื่อคำนำหน้า',
    key: 'pid',
    align: 'start',
    sortable: true,
    width: '190px',
  },
  { title: 'ดำเนินการ', key: 'process', align: 'center', sortable: false },
]

const items = reactive([
  { pid: 'นาย' },
  { pid: 'นางสาว' },
  { pid: 'ดร.' },
  { pid: 'ศาสตราจารย์' },
])

// ฟิลเตอร์รายการตามข้อความค้นหา
const filteredItems = computed(() => {
  return items.filter((item) =>
    item.pid.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

function deleteItem(item) {
  console.log('ลบ:', item)
}
</script>


