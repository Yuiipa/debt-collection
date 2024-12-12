<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h5 text-md-h4 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span>จัดการข้อร้องเรียน</span>
    </v-card-title>
    <div class="mx-4">
      <v-row>
        <v-col md="4" cols="12">
          <div class="mb-2 font-weight-bold">ประเภทความผิด</div>
          <v-select
            variant="outlined"
            persistent-placeholder
            hide-details
            density="compact"
            :items="['ทั้งหมด', 'โทษทางอาญา', 'โทษทางปกครอง']"
            v-model="selectedType"
          />
        </v-col>
        <v-col
          cols="12"
          md="8"
          class="align-end justify-end d-flex flex-column"
        >
          <div class="mb-2"></div>

          <v-btn
            color="green"
            prepend-icon="mdi-plus-circle-outline"
            @click="openEditDialog(1)"
          >
            เพิ่มข้อร้องเรียน
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
import EditDialog from '@/components/menuRegister/system/dataForm/ComplaintsForm.vue'

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
    width: '100px',
    value: (item) => {
      const index = items.indexOf(item)
      return index + 1
    },
  },
  {
    title: 'ประเภทความผิด',
    key: 'type',
    align: 'start',
    sortable: true,
    width: '150px',
  },
  {
    title: 'ความผิดตามมาตรา',
    key: 'offense_section',
    align: 'start',
    sortable: true,
    width: '160px',
  },
  {
    title: 'ข้อหาหรือฐานความผิด',
    key: 'plaint',
    align: 'start',
    sortable: true,
  },
  {
    title: 'มาตรา',
    key: 'section',
    align: 'start',
    sortable: true,
    width: '50px',
  },
  {
    title: 'อัตราโทษ',
    key: 'punishment',
    align: 'start',
    sortable: true,
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
    type: 'โทษทางอาญา',
    offense_section: '๕ วรรคหนึ่ง',
    plaint: 'ประกอบธุรกิจทวงถามหนี้ โดยไม่จดทะเบียน',
    section: '๓๔',
    punishment:
      'จำคุกไม่เกิน ๑ ปีหรือปรับไม่เกิน ๑๐๐,๐๐๐ บาท หรือทั้งจำทั้งปรับ',
  },
  {
    type: 'โทษทางปกครอง',
    offense_section: '๖ วรรคสอง',
    plaint: 'ประกอบธุรกิจโดยไม่ได้รับอนุญาต',
    section: '๔๕',
    punishment: 'ปรับไม่เกิน ๕๐,๐๐๐ บาท',
  },
])

const selectedType = ref('ทั้งหมด')

const filteredItems = computed(() => {
  if (selectedType.value === 'ทั้งหมด') {
    return items
  }
  return items.filter((item) => item.type === selectedType.value)
})
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
    