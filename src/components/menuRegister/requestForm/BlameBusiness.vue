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
          <v-btn
            left
            class="px-6"
            style="background-color: #1a237e; color: white"
            >ค้นหา</v-btn
          >
        </v-col>
        <v-col cols="6" sm="2" class="align-center justify-end d-flex">
          <v-btn
            prepend-icon="mdi-plus-circle-outline"
            color="green"
            @click="openEditDialog()"
            >กำหนดโทษ</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="px-10 rounded-lg pb-2">
            <v-data-table
              :headers="headers"
              :items="items"
              class="elevation-1 rounded-table"
              
            >
              <!-- ลำดับที่ -->
              <template v-slot:[`item.index`]="{ index }">
                <span>{{ index + 1 }}</span>
              </template>

              <!-- ปุ่มดำเนินการ: แก้ไขและลบ -->
               
              <template v-slot:[`item.process`]="{ item }">
                <v-btn
                  variant="text"
                  size="small"
                  @click="openEditDialog(item)"
                >
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
  ></edit-dialog>
</template>
  
  <script setup>
import { ref } from 'vue'
import EditDialog from '@/components/menuRegister/requestForm/Punishment.vue'

const showEditDialog = ref(false)

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
    date: 8466851084319,
    section: 'มาตรา ๘',
    fault: 'ขโมยของ',
    penaltyrate: 'ปรับ ๒,๐๐๐',
  }
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
  