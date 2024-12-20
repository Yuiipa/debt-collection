<template>
  <v-card class="ma-4" variant="flat" style="background-color: #fafafa">
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
        <v-col cols="6" md="2" class="align-center justify-start d-flex">
          <v-btn
            prepend-icon="mdi-magnify"
            style="background-color: #1a237e; color: white"
          >
            ค้นหา
          </v-btn>
        </v-col>
        <v-col cols="12" md="6" class="align-center justify-end d-flex">
          <v-btn
            prepend-icon="mdi-account-plus"
            color="green"
            @click="openEditDialog()"
          >
            เพิ่มผู้ใช้งาน
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
              <template v-slot:[`item.status`]="{ item }">
                <v-switch
                  v-model="item.status"
                  color="#39ab4e"
                  inset
                  dense
                  hide-details
                  :false-value="false"
                  :true-value="true"
                ></v-switch>
              </template>
              <template v-slot:[`item.process`]="{ item }">
                <div style="display: flex;">
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
                </div>
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
  ></edit-dialog>
</template>

<script setup>
import { ref, computed ,reactive} from 'vue';
import EditDialog from '@/components/menuRegister/user/Dialog.vue';

const showEditDialog = ref(false);
const selectedItem = ref(null);
const searchQuery = ref(''); // เก็บข้อความค้นหา

const openEditDialog = (item = null) => {
  selectedItem.value = item ? { ...item } : null;
  showEditDialog.value = true;
};

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
    title: 'เลขประจำตัวประชาชน',
    key: 'pid',
    align: 'start',
    sortable: true,
    width: '190px',
  },
  { title: 'คำนำหน้านาม', key: 'title', align: 'start', sortable: true },
  { title: 'ชื่อ', key: 'firstName', align: 'start', sortable: true },
  { title: 'นามสกุล', key: 'lastName', align: 'start', sortable: true },
  {
    title: 'ตำแหน่งผู้ปฎิบัติงาน',
    key: 'position',
    align: 'start',
    sortable: true,
  },
  { title: 'จังหวัด', key: 'province', align: 'start', sortable: true },
  { title: 'สิทธิ์การใช้งาน', key: 'status', align: 'start', sortable: true },
  { title: 'เอกสารแนบ', key: 'document', align: 'start', sortable: false },
  {
    title: 'ดำเนินการ',
    key: 'process',
    align: 'center',
    sortable: false,
    width: '140px',
  },
];

const items = reactive([
  {
    pid: 8466851084319,
    title: 'นาย',
    firstName: 'สมหมาย',
    lastName: 'บุญยงค์',
    position: 'เจ้าหน้าที่ปฏิบัติการ',
    document: '',
    province: 'กรุงเทพมหานคร',
    status: true,
  },
  {
    pid: 8466851084319,
    title: 'นาย',
    firstName: 'สมคิด',
    lastName: 'เพชรพันธ์',
    position: 'ทนาย',
    document: '',
    province: 'กรุงเทพมหานคร',
    status: true,
  },
  {
    pid: 8466851084319,
    title: 'น.ส.',
    firstName: 'สมทรง',
    lastName: 'เพชรพันธ์',
    position: 'เจ้าหน้าที่ปฏิบัติการ',
    document: '',
    province: 'กรุงเทพมหานคร',
    status: true,
  },
  {
    pid: 8466851084319,
    title: 'นาย',
    firstName: 'สมทรง',
    lastName: 'เพชรพันธ์',
    position: 'นิติกรชำนาญการ',
    document: '',
    province: 'กรุงเทพมหานคร',
    status: true,
  },
]);

// กรองข้อมูลตามข้อความค้นหา
const filteredItems = computed(() =>
  items.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  )
);

function deleteItem(item) {
  console.log('ลบ:', item);
}
</script>

  
  <style scoped>
.v-table :deep(th) {
  background-color: #1a237e;
  color: white; /* เพิ่มสีขาวสำหรับตัวอักษรใน header */
  cursor: pointer;
  font-weight: bold;
  white-space: nowrap;
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
  