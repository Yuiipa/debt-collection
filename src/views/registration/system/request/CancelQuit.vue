<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h5 text-md-h4 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span> จัดการข้อมูลผู้ใช้งาน</span>
    </v-card-title>
    <div class="mx-4">
      <v-row >
        <v-col cols="12" md="4" class="d-flex align-center">
          <v-text-field
            label="ค้นหา"
            variant="outlined"
            density="compact"
            hide-details
            v-model="searchQuery"
          ></v-text-field>
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
                  @click="openEditDialog(item)"
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
    :item="selectedItem"
    @saved="handleSave"
  ></edit-dialog>
</template>

<script setup>
import { ref, computed,reactive } from 'vue'
import EditDialog from '@/components/menuRegister/user/Dialog.vue'

const showEditDialog = ref(false)
const selectedItem = ref(null)
const searchQuery = ref('') // ตัวแปรสำหรับข้อความค้นหา

const openEditDialog = (item) => {
  selectedItem.value = item
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
    width: '100px',
  },
  {
    title: 'ทะเบียนเลขที่',
    key: 'register',
    align: 'start',
    sortable: true,
    width: '190px',
  },
  {
    title: 'ชื่อธุรกิจ',
    key: 'name',
    align: 'start',
    sortable: true,
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
    width: '140px',
  },
]

const items = reactive([
  {
    date: '10/2/2546',
    register: 'ปท136000',
    name: 'บริษัท ซีบี เซอร์วิส กรุ๊ป จำกัด',
    status: 1,
  },
  {
    date: '11/3/2547',
    register: 'กร145200',
    name: 'บริษัท เอ็นเตอร์ไพรส์ จำกัด',
    status: 0,
  },
  {
    date: '12/4/2548',
    register: 'ชล113000',
    name: 'บริษัท ชลบุรีการค้า จำกัด',
    status: 1,
  },
])

// ฟังก์ชันสำหรับกรองข้อมูล
const filteredItems = computed(() =>
  items.filter((item) =>
    ['date', 'register', 'name'].some((key) =>
      item[key]
        ?.toString()
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase())
    )
  )
)

const deleteItem = (item) => {
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
