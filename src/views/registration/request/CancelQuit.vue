<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h5 text-md-h4 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span> ยกเลิกการเพิกถอนการจดทะเบียนของผู้ประกอบธุรกิจทวงถามหนี้</span>
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
        <v-col
          cols="12"
          md="2"
          class="align-center justify-start d-flex"
        >
          <v-btn
            prepend-icon="mdi-magnify"
            style="background-color: #1a237e; color: white"
          >
            ค้นหา
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
              <template v-slot:[`item.select`]="{ item }">
                <v-btn
                  variant="plain"
                  append-icon="mdi-chevron-right"
                  small
                  @click="openEditDialog(item)"
                >
                  <div class="text-decoration-underline">เลือก</div>
                </v-btn>
              </template>
              <template v-slot:[`item.status`]="{}">
                <div
                  class="rounded-lg text-white text-center py-1"
                  style="background-color: #4caf50"
                >
                  เลิกประกอบธุรกิจ
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
import { ref, computed,reactive } from 'vue';
import EditDialog from '@/components/menuRegister/requestForm/QuitBusiness.vue';

const selectedItem = ref(null);
const showEditDialog = ref(false);
const openEditDialog = (item = null) => {
  selectedItem.value = item; // กำหนด item ที่เลือก
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
    title: 'เลขที่ทะเบียน',
    key: 'refLicId',
    align: 'start',
    sortable: true,
    width: '190px',
  },
  { title: 'ชื่อธุรกิจ', key: 'name', align: 'start', sortable: true },
  {
    title: 'ประเภทการประกอบธุรกิจ',
    key: 'type',
    align: 'start',
    sortable: true,
  },
  {
    title: 'ที่ตั้งสถานประกอบธุรกิจ',
    key: 'location',
    align: 'start',
    sortable: true,
  },
  {
    title: 'สถานะ',
    key: 'status',
    align: 'center',
    sortable: true,
    width: '140px',
  },
  {
    title: 'เลือก',
    key: 'select',
    align: 'center',
    sortable: true,
    width: '100px',
  },
];

const items = reactive([
  {
    refLicId: 8466851084319,
    name: 'นาย',
    type: 'สมหมาย',
    location: 'บุญยงค์',
  },
  {
    refLicId: 8466851084319,
    name: 'นาย',
    type: 'สมคิด',
    location: 'เพชรพันธ์',
  },
  {
    refLicId: 8466851084319,
    name: 'น.ส.',
    type: 'สมทรง',
    location: 'เพชรพันธ์',
  },
  {
    refLicId: 8466851084319,
    name: 'นาย',
    type: 'สมทรง',
    location: 'เพชรพันธ์',
  },
]);

const searchQuery = ref(''); // เก็บข้อความค้นหา

// กรองเฉพาะบางฟิลด์
const filteredItems = computed(() =>
  items.filter((item) =>
    ['refLicId', 'name', 'type'].some((key) =>
      item[key]?.toString().toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  )
);
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