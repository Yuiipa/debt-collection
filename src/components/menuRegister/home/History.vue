<template>
    
    <div class="pt-10">
      <v-row>
        <v-col>
          <div class="px-10">
            <v-data-table
              :headers="headers"
              :items="items"
              class="elevation-1 rounded-table"
              :items-per-page="5"
              :footer-props="{
                'items-per-page-options': [5, 10, 15],
              }"
            >
              <template v-slot:[`item.index`]="{ index }">
                <span>{{ index + 1 }}</span>
              </template>
              <template v-slot:[`item.data`]="{ item }">
                <v-btn small @click="navigate(item)">ข้อมูล</v-btn>
              </template>
              <template v-slot:[`item.status`]="{ item }">
                <v-switch
                  v-model="item.status"
                  color="primary"
                  inset
                  dense
                  hide-details
                  :false-value="false"
                  :true-value="true"
                ></v-switch>
              </template>
            </v-data-table>
          </div>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  function navigate(routeName) {
    router.push({ name: 'debt-home-registration-detail_business' })
  }
  const headers = [
    { title: 'ลำดับที่', key: 'index', align: 'center', sortable: true },
    { title: 'เลขที่ทะเบียน', key: 'registerNumber', align: 'start', sortable: true, width: '150px' },
    { title: 'ชื่อธุรกิจ', key: 'businessName', align: 'start', sortable: true },
    { title: 'ประเภทการประกอบธุรกิจ', key: 'type', align: 'start', sortable: true },
    { title: 'ที่ตั้งสถานประกอบการ', key: 'location', align: 'start', sortable: true },
    { title: 'ข้อมูล', key: 'data', align: 'center', sortable: false },
    { title: 'สถานะ', key: 'status', align: 'center', sortable: false },
  ];
  
  const items = ref([
    { registerNumber: '001/2566', businessName: 'สำนักงาน จันทร์จิรา ฟองแก้ว ทนายความ', type: 'ทนายความ', location: 'จังหวัดแม่ฮ่องสอน', status: true },
    { registerNumber: '002/2566', businessName: 'Jelly bean', type: 'ทนายความ', location: 'จังหวัดแม่ฮ่องสอน', status: true },
    { registerNumber: '003/2566', businessName: 'KitKat', type: 'ทนายความ', location: 'จังหวัดแม่ฮ่องสอน', status: true },
    { registerNumber: '004/2566', businessName: 'Eclair', type: 'ทนายความ', location: 'จังหวัดแม่ฮ่องสอน', status: true },
  ]);
  
  </script>
  
  <style scoped>
  .v-table :deep(th) {
    background-color: #1a237e;
    color: white;
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
  