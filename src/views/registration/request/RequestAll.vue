<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h5 text-md-h4 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span> คำขอทำรายการทั้งหมด </span>
    </v-card-title>
    <div class="mx-4">
      <v-row >
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">เลขที่คำขอ</div>
          <v-text-field
            variant="outlined"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">ประเภทคำขอ</div>
          <v-autocomplete
            variant="outlined"
            persistent-placeholder
            hide-details
            density="compact"
            :items="menuItems"
            v-model="selectedMenu"
          ></v-autocomplete>
        </v-col>
        <v-col md="3" cols="12" class="d-flex align-end mb-1">
          <v-btn
            prepend-icon="mdi-magnify"
            style="background-color: #1a237e; color: white"
            >ค้นหา</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="rounded-lg pb-2">
            <v-data-table :headers="headers" :items="items" class="elevation-1">
              <template v-slot:[`item.note`]="{}">
                <v-btn
                  variant="outlined"
                  color="blue-lighten-2"
                  class="rounded-pill"
                  prepend-icon="mdi-tray-arrow-down"
                  @click="console.log('dowload')"
                >
                  ดาวน์โหลด
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
  ></edit-dialog>
</template>
      
<script setup>
import { ref,reactive } from 'vue'
import EditDialog from '@/components/menuRegister/user/Dialog.vue'

const showEditDialog = ref(false)
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
    width: '120px',
  },
  { title: 'สังกัด', key: 'affiliation', align: 'start', sortable: true },
  { title: 'เลขที่คำขอ', key: 'reqNo', align: 'start', sortable: true },
  { title: 'ประเภทคำขอ', key: 'type', align: 'start', sortable: true },
  {
    title: 'ชื่อธุรกิจ',
    key: 'name',
    align: 'start',
    sortable: true,
  },
  { title: 'หมายเหตุ', key: 'note', align: 'center', sortable: false },
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
    date: 8466851084319,
    affiliation: 'นาย',
    reqNo: 'สมหมาย',
    type: 'บุญยงค์',
    name: 'เจ้าหน้าที่ปฏิบัติการ',
    note: 'หมายเหตุ',
  },
])

const menuItems = [
  'ทั้งหมด',
  'ขอจดทะเบียนธุรกิจทวงถามหนี้',
  'ขอเปลี่ยนแปลงข้อมูลธุรกิจทวงถามหนี้',
  'ขอใบแทนหนังสือสำคัญประกอบธุรกิจทวงถามหนี้',
  'ขอเลิกประกอบธุรกิจทวงถามหนี้',
  'ขอต่ออายุประกอบธุรกิจทวงถามหนี้',
  'ยกเลิกคำสั่งเพิกถอนการจดทะเบียนธุรกิจทวงถามหนี้',
  'เพิกถอนการจดทะเบียนธุรกิจทวงถามหนี้',
]

const selectedMenu = ref('ทั้งหมด')
</script>
      
