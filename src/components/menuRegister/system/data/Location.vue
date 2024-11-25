<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h4 font-weight-bold"
      style="color: #1a237e"
    >
      <span> จัดการข้อมูลผู้ใช้งาน</span>
    </v-card-title>
    <div class="mb-6">
      <v-row class="px-16">
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
          <v-btn color="green">
            <v-icon left size="18" @click="openEditDialog()"
              >mdi-account-plus</v-icon
            >
            เพิ่มผู้ใช้งาน
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="px-10">
            <v-data-table
              :headers="headersProvince"
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
                  class="mr-1 mb-1"
                  @click="openEditDialog()"
                >
                  <v-icon left size="18">mdi-pencil</v-icon> แก้ไข
                </v-btn>
                <v-btn
                  size="small"
                  class="mb-1"
                  color="red"
                  @click="deleteItem(item)"
                >
                  <v-icon left size="18">mdi-delete</v-icon> ลบ
                </v-btn>
              </template>
            </v-data-table>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="mb-6">
      <v-row class="px-16">
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
          <v-btn color="green">
            <v-icon left size="18" @click="openEditDialog()"
              >mdi-account-plus</v-icon
            >
            เพิ่มผู้ใช้งาน
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="px-10">
            <v-data-table
              :headers="headersDistrict"
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
                  class="mr-1 mb-1"
                  @click="openEditDialog()"
                >
                  <v-icon left size="18">mdi-pencil</v-icon> แก้ไข
                </v-btn>
                <v-btn
                  size="small"
                  class="mb-1"
                  color="red"
                  @click="deleteItem(item)"
                >
                  <v-icon left size="18">mdi-delete</v-icon> ลบ
                </v-btn>
              </template>
            </v-data-table>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="mb-6">
      <v-row class="px-16">
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
          <v-btn color="green">
            <v-icon left size="18" @click="openEditDialog()"
              >mdi-account-plus</v-icon
            >
            เพิ่มผู้ใช้งาน
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="px-10">
            <v-data-table
              :headers="headersSubdistrict"
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
                  class="mr-1 mb-1"
                  @click="openEditDialog()"
                >
                  <v-icon left size="18">mdi-pencil</v-icon> แก้ไข
                </v-btn>
                <v-btn
                  size="small"
                  class="mb-1"
                  color="red"
                  @click="deleteItem(item)"
                >
                  <v-icon left size="18">mdi-delete</v-icon> ลบ
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
import EditDialog from '@/components/menuRegister/user/Dialog.vue'

const showEditDialog = ref(false)

const openEditDialog = () => {
  showEditDialog.value = true
}
const handleSave = () => {
  console.log(save)
}

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
  { title: 'ดำเนินการ', key: 'process', align: 'center', sortable: false },
]

const headersDistrict = [
  { title: 'รหัสอำเภอ', key: 'code', align: 'center', sortable: true },
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
  { title: 'ดำเนินการ', key: 'process', align: 'center', sortable: false },
]

const headersSubdistrict = [
  { title: 'รหัสตำบล', key: 'code', align: 'center', sortable: true },
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
  { title: 'ดำเนินการ', key: 'process', align: 'center', sortable: false },
]

const items = ref([
  {
    code: 300,
    thaiName: 8466851084319,
    engName: 8466851084319,
  },
  {
    code: 300,
    thaiName: 8466851084319,
    engName: 8466851084319,
  },
  {
    code: 300,
    thaiName: 8466851084319,
    engName: 8466851084319,
  },
  {
    code: 300,
    thaiName: 8466851084319,
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
    