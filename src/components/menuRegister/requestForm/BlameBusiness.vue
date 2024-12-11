<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h5 text-md-h4 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span> ประวัติการกระทำความผิดของผู้ประกอบธุรกิจทวงถามหนี้</span>
    </v-card-title>
    <div>
      <v-row class="px-10 pl-13">
        <v-col cols="12" md="4" class="pa-0 d-flex align-center">
          <v-text-field
            label="ค้นหา"
            variant="outlined"
            density="compact"
            hide-details
            v-model="searchQuery"
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
            prepend-icon="mdi-plus-circle-outline"
            color="green"
            @click="openEditDialog()"
          >
            กำหนดโทษ
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="px-10 rounded-lg pb-2">
            <v-data-table
              :headers="headers"
              :items="filteredItems"
              class="elevation-1"
            >
              <!-- ลำดับที่ -->
              <template v-slot:[`item.index`]="{ index }">
                <span>{{ index + 1 }}</span>
              </template>

              <!-- ปุ่มดำเนินการ: แก้ไขและลบ -->
              <template v-slot:[`item.process`]="{ item }">
                <v-btn
                  class="mr-1"
                  variant="text"
                  size="small"
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
    :item="items"
    @saved="handleSave"
  ></edit-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import EditDialog from '@/components/menuRegister/requestForm/Punishment.vue'

const showEditDialog = ref(false)
const searchQuery = ref('') // เก็บข้อความค้นหา

const openEditDialog = () => {
  showEditDialog.value = true
}

const handleSave = () => {
  console.log(save)
}

const headers = [
  { title: 'ลำดับที่', key: 'index', align: 'center', sortable: true },
  {
    title: 'วันที่',
    key: 'date',
    align: 'start',
    sortable: true,
    width: '190px',
  },
  { title: 'มาตรา', key: 'section', align: 'start', sortable: true },
  { title: 'ความผิด', key: 'fault', align: 'start', sortable: true },
  { title: 'อัตราโทษ', key: 'penaltyrate', align: 'start', sortable: true },
  { title: 'ดำเนินการ', key: 'process', align: 'center', sortable: false },
]

const items = ref([
  {
    date: '01/01/2023',
    section: 'มาตรา ๘',
    fault: 'ขโมยของ',
    penaltyrate: 'ปรับ ๒,๐๐๐',
  },
  {
    date: '02/02/2023',
    section: 'มาตรา ๑๐',
    fault: 'ลักทรัพย์',
    penaltyrate: 'จำคุก ๖ เดือน',
  },
  {
    date: '03/03/2023',
    section: 'มาตรา ๕',
    fault: 'ทำร้ายร่างกาย',
    penaltyrate: 'ปรับ ๕,๐๐๐',
  },
])

// ฟังก์ชันกรองข้อมูล
const filteredItems = computed(() =>
  items.value.filter((item) =>
    ['date', 'section', 'fault', 'penaltyrate'].some((key) =>
      item[key]?.toString().toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  )
)

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

.v-table ::v-deep tr:nth-child(even) {
  background-color: #f1f1f1e5;
}
</style>
