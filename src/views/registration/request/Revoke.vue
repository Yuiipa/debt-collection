<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h5 text-md-h4 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span> คำสั่งเพิกถอนการจดทะเบียนการประกอบธุรกิจทวงถามหนี้</span>
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
        <v-col cols="6" sm="2" class="align-center justify-start d-flex">
          <v-btn
            prepend-icon="mdi-magnify"
            style="background-color: #1a237e; color: white"
            >ค้นหา</v-btn
          >
        </v-col>
        <v-col cols="6" sm="2" class="align-center justify-end d-flex">
          <v-btn color="green"
            prepend-icon="mdi-plus-circle-outline"
            @click="openEditDialog">
            เพิ่มข้อมูล
          </v-btn>
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
import EditDialog from '@/components/menuRegister/requestForm/Revoke.vue'

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
    title: 'วันที่แจ้งเพิกถอน',
    key: 'pid',
    align: 'start',
    sortable: true,
    width: '190px',
  },
  {
    title: 'ชื่อสถานประกอบธุรกิจ',
    key: 'title',
    align: 'start',
    sortable: true,
  },
  { title: 'ชื่อ', key: 'firstName', align: 'start', sortable: true },
  { title: 'นามสกุล', key: 'lastName', align: 'start', sortable: true },
  {
    title: 'หน่วยงานแจ้งเพิกถอน',
    key: 'position',
    align: 'start',
    sortable: true,
  },
  {
    title: 'หน่วยงานดำเนินการเพิกถอน',
    key: 'document',
    align: 'start',
    sortable: false,
  },
  { title: 'สถานะ', key: 'document', align: 'start', sortable: false },
  { title: 'เรียกดู', key: 'document', align: 'start', sortable: false },
  { title: 'ดำเนินการ', key: 'process', align: 'center', sortable: false },
]

const items = ref([])

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
    