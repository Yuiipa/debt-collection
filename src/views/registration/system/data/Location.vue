<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h5 text-md-h4 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span> จัดการข้อมูลที่อยู่</span>
    </v-card-title>
    <div class="mb-6">
      <v-row class="px-13 pr-10">
        <v-col cols="12" md="4" class="pa-0 d-flex align-center">
          <v-text-field
            v-model="searchProvince"
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
            >ค้นหา</v-btn
          >
        </v-col>
        <v-col cols="6" md="6" class="align-center justify-end d-flex">
          <v-btn
            color="green"
            prepend-icon="mdi-plus-circle-outline"
            @click="openEditDialog(1)"
          >
            เพิ่มจังหวัด
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="px-10 rounded-lg pb-2">
            <v-data-table
              :headers="headersProvince"
              :items="filteredProvinces"
              class="elevation-1"
            >
              <template v-slot:[`item.index`]="{ index }">
                <span>{{ index + 1 }}</span>
              </template>
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
    <div class="mb-6">
      <v-row class="px-13 pr-10">
        <v-col cols="12" md="4" class="pa-0 d-flex align-center">
          <v-text-field
            v-model="searchDistrict"
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
            >ค้นหา</v-btn
          >
        </v-col>
        <v-col cols="6" md="6" class="align-center justify-end d-flex">
          <v-btn
            color="green"
            prepend-icon="mdi-plus-circle-outline"
            @click="openEditDialog(3)"
          >
            เพิ่มอำเภอ
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="px-10 rounded-lg pb-2">
            <v-data-table
              :headers="headersDistrict"
              :items="filteredDistricts"
              class="elevation-1"
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
                  class="mr-1"
                  style="background-color: #e3f2fd; color: #1565c0"
                  @click="openEditDialog(4)"
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
    <div class="mb-6">
      <v-row class="px-13 pr-10">
        <v-col cols="12" md="4" class="pa-0 d-flex align-center">
          <v-text-field
            v-model="searchSubdistrict"
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
            >ค้นหา</v-btn
          >
        </v-col>
        <v-col cols="6" md="6" class="align-center justify-end d-flex">
          <v-btn
            color="green"
            prepend-icon="mdi-plus-circle-outline"
            @click="openEditDialog(5)"
          >
            เพิ่มตำบล
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="px-10 rounded-lg pb-2">
            <v-data-table
              :headers="headersSubdistrict"
              :items="filteredSubdistricts"
              class="elevation-1"
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
                  class="mr-1"
                  style="background-color: #e3f2fd; color: #1565c0"
                  @click="openEditDialog(6, item)"
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
    :title="typeEdit"
  ></edit-dialog>
</template>
    
    <script setup>
import { ref, computed } from 'vue'
import EditDialog from '@/components/menuRegister/system/dataForm/LocationForm.vue'

const searchProvince = ref('')
const searchDistrict = ref('')
const searchSubdistrict = ref('')
const showEditDialog = ref(false)
const typeEdit = ref(1)

const openEditDialog = (type) => {
  typeEdit.value = type
  showEditDialog.value = true
}
const handleSave = () => {
  console.log(save)
}
const filteredProvinces = computed(() =>
  items.value.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(searchProvince.value.toLowerCase())
    )
  )
)

const filteredDistricts = computed(() =>
  items.value.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(searchDistrict.value.toLowerCase())
    )
  )
)

const filteredSubdistricts = computed(() =>
  items.value.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(searchSubdistrict.value.toLowerCase())
    )
  )
)
const headersProvince = [
  { title: 'รหัสจังหวัด', key: 'code', align: 'center', sortable: true },
  {
    title: 'ชื่อจังหวัดภาษาไทย',
    key: 'thaiName',
    align: 'start',
    sortable: true,
    width: '190px',
  },
  {
    title: 'ชื่อจังหวัดภาษาอังกฤษ',
    key: 'engName',
    align: 'center',
    sortable: false,
  },
  {
    title: 'ดำเนินการ',
    key: 'process',
    align: 'center',
    sortable: false,
    width: '160px',
  },
]

const headersDistrict = [
  { title: 'รหัสอำเภอ', key: 'code', align: 'center', sortable: true },
  {
    title: 'ชื่ออำเภอภาษาไทย',
    key: 'thaiName',
    align: 'start',
    sortable: true,
    width: '190px',
  },
  {
    title: 'ชื่ออำเภอภาษาอังกฤษ',
    key: 'engName',
    align: 'center',
    sortable: false,
  },
  {
    title: 'ดำเนินการ',
    key: 'process',
    align: 'center',
    sortable: false,
    width: '160px',
  },
]

const headersSubdistrict = [
  { title: 'รหัสตำบล', key: 'code', align: 'center', sortable: true },
  {
    title: 'ชื่อตำบลภาษาไทย',
    key: 'thaiName',
    align: 'start',
    sortable: true,
    width: '190px',
  },
  {
    title: 'ชื่อตำบลภาษาอังกฤษ',
    key: 'engName',
    align: 'center',
    sortable: false,
  },
  {
    title: 'ดำเนินการ',
    key: 'process',
    align: 'center',
    sortable: false,
    width: '160px',
  },
]

const items = ref([
  {
    code: 300,
    thaiName: 'กรุงเทพมหานคร',
    engName: 8466851084319,
  },
  {
    code: 300,
    thaiName: 'ปทุมธานี',
    engName: 8466851084319,
  },
  {
    code: 300,
    thaiName: 'นนทบุรี',
    engName: 8466851084319,
  },
  {
    code: 300,
    thaiName: 'นครปฐม',
    engName: 8466851084319,
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
    