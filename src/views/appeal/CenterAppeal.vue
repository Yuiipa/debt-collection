<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h4 font-weight-bold"
      style="color: #1a237e"
    >
      <span>ข้อมูลการร้องเรียนตามพระราชบัญญัติการทวงถามหนี้ พ.ศ.๒๕๕๘</span>
    </v-card-title>
    <div class="px-4">
      <v-card class="mt-4 rounded-lg">
        <v-data-table
          :headers="$vuetify.display.mdAndUp ? headers : headers2"
          :items="centerappeal"
          :search="search"
          :items-per-page="10"
          v-model:options="pagination"
        >
          <template v-slot:[`item.num`]="{ index }">
            {{ calculateIndex(index) }}
          </template>
          <template v-slot:[`item.name`]="{ item }">
            {{ item.name }} {{ item.lastname }}
          </template>
          <template v-slot:[`item.info`]="{ item }">
            <v-btn
              append-icon="mdi-chevron-right"
              variant="plain"
              style="font-size: 14px"
              @click="openDetails(item)"
            >
              เรียกดู
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </v-card>

  <v-dialog v-model="dialog" width="80%">
    <v-card class="pa-0">
      <CenterAppealDetails v-model="selectItem" />
      <v-divider class="mt-4" :thickness="5" color="#1a237e" />
      <v-card-actions class="d-flex justify-space-between pb-4">
        <v-row class="d-flex justify-start">
          <v-col md="3" cols="12">
            <v-btn
              style="
                width: 100%;
                height: 47px;
                background-color: grey;
                color: white;
              "
              @click="dialog = false"
            >
              <div class="text-h6">ปิด</div>
            </v-btn>
          </v-col>
          <v-col cols="3"></v-col>
          <v-col md="3" cols="12" justify="end">
            <v-btn
              style="
                width: 100%;
                height: 47px;
                background-color: #1a237e;
                color: white;
              "
              class="mr-4"
            >
              <div class="text-h6">นำเข้าระบบ</div>
            </v-btn>
          </v-col>
          <v-col md="3" cols="12">
            <v-btn
              class="mr-4"
              style="
                width: 100%;
                height: 47px;
                background-color: #e22427;
                color: white;
              "
            >
              <div class="text-h6">ไม่มีมูลความผิด</div>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'
import CenterAppealDetails from '@/components/menuAppeal/centerAppeal/CenterAppealDetails.vue'

const dialog = ref(false)
const selectItem = ref({})
const search = ref('')

const headers = ref([
  { align: 'center', key: 'num', sortable: false, title: 'ลำดับที่' },
  { align: 'center', key: 'id', title: 'เลขที่เรื่องร้องเรียน' },
  { key: 'topic', title: 'เรื่องร้องเรียน' },
  { align: 'center', key: 'name', title: 'ผู้ร้องเรียน' },
  {
    align: 'center',
    key: 'info',
    sortable: false,
    title: 'รายละเอียด',
  },
])

const headers2 = ref([
  { align: 'center', key: 'num', sortable: false, title: 'ลำดับที่' },
  { align: 'center', key: 'id', title: 'เลขที่เรื่องร้องเรียน' },
  {
    align: 'center',
    key: 'info',
    sortable: false,
    title: 'รายละเอียด',
  },
])

const centerappeal = [
  {
    id: 'DOPA45004506621590',
    topic: 'ขอความอนุเคราะห์ในการติดตามเงิน',
    maintype: 'ขอความช่วยเหลือ',
    sectype: 'การกระทำความผิดตาม พ.ร.บ.การทวงถามหนี้ พ.ศ.2558',
    details:
      'บริษัทอ้างว่าได้มีการวางเงินมัดจำให้กับ นางขวัญใจ เพียรชนะ เพื่อให้บริษัทได้ดำเนินโครงการต่างๆ ของกองทุนหมู่บ้าน แต่ปรากฏว่า บริษัทไม่ได้รับการอนุมัติให้เป็นผู้ดำเนินการและไม่มีการคืนเงินมัดจำให้แก่บริษัท',
    pid: '',
    name: 'วัตน์ฐิกรณ์',
    lastname: 'ขอนพุดชา',
    district: 'พุดซา',
    town: 'เมืองนครราชสีมา',
    province: 'นครราชสีมา',
    problem: '',
    needed:
      'ขอให้ติดต่อให้ นางขวัญใจ เพียรชนะ ได้คืนเงินมัดจำแก่บริษัทและพิจารณาดำเนินการทางวินัย',
    assign: '',
    crimedistrict: 'พนมไพร',
    crimetown: 'พนมไพร',
    crimeprovince: 'ร้อยเอ็ด',
  },
  {
    id: 'DOPA63006302635547',
    topic: 'ขอให้ไกล่เกลี่ยและประนอมข้อพิพาททางแพ่ง',
    maintype: 'ขอความช่วยเหลือ',
    sectype: 'การกระทำความผิดตาม พ.ร.บ.การทวงถามหนี้ พ.ศ.2558',
    details:
      'นางสมคิด ขำมะศิริ ยื่นคำร้องต่อศูนย์ดำรงธรรมอำเภอบ้านตาก ขอให้ไกล่เกลี่ยเรื่องสัญญาการกู้เงิน กรณี นางนันทิยา องอาจ ได้ทำสัญญากู้เงินกับ นางสมคิด ขำมะศิริ จำนวน 125,000 บาท' +
      '\n' +
      'ต่อมา นางสมคิด ขำมะศิริ ได้ไปติดต่อนางนันทิยา องอาจ เพื่อขอให้นางนันทิยา องอาจ ชำระเงิน ปรากฏว่าไม่ได้รับเงินคืนแต่อย่างใด ทำให้ได้รับความเดือดร้อนดังกล่าว',
    pid: '3630200288066',
    name: 'สมคิด',
    lastname: 'ขำมะศิริ',
    district: 'ตากตก',
    town: 'บ้านตาก',
    province: 'ตาก',
    problem: '',
    needed:
      'ผู้ร้องต้องการให้ศูนย์ดำรงธรรมอำเภอเชิญผู้ถูกร้อง มาดำเนินการไกล่เกลี่ยและชำระหนี้',
    assign: '',
    crimedistrict: '',
    crimetown: '',
    crimeprovince: '',
  },
  {
    id: 'DOPA52005202636435',
    topic: 'ขอให้ช่วยเหลือ กรณีหนี้นอกระบบ',
    maintype: 'ขอความช่วยเหลือ',
    sectype: 'การกระทำความผิดตาม พ.ร.บ.การทวงถามหนี้ พ.ศ.2558',
    details:
      'ผู้ร้องแจ้งว่า ตนเองได้กู้ยืมเงินนอกระบบจากเจ้าหนี้ 6 ราย โดยเจ้าหนี้ได้คิดดอกเบี้ยเกินอัตราที่กฎหมายกำหนด และมีพฤติกรรมข่มขู่ลูกหนี้',
    pid: '1520200032511',
    name: 'ยุพิน',
    lastname: 'พุธศิริ',
    district: 'นาสัก',
    town: 'แม่เมาะ',
    province: 'ลำปาง',
    problem: '',
    needed:
      '1. ขอให้ไกล่เกลี่ยหนี้สินให้เหมาะสม โดยผู้ร้องยินดีจะชำระหนี้หากเหมาะสมตามกฎหมาย' +
      '\n' +
      '2. ขอให้นำเรื่องเข้าพิจารณาช่วยเหลือให้คณะกรรมการช่วยเหลือหนี้นอกระบบจังหวัดลำปาง',
    assign: 'มอบหมายให้สถานีตำรวจผู้ธร',
    crimedistrict: '',
    crimetown: '',
    crimeprovince: '',
  },
]

function openDetails(item) {
  selectItem.value = item
  dialog.value = true
}

const pagination = ref({
  page: 1,
  itemsPerPage: 10,
})

const calculateIndex = (index) => {
  return (pagination.value.page - 1) * pagination.value.itemsPerPage + index + 1
}
</script>

<style scoped>
.v-table ::v-deep th {
  background-color: #1a237e;
  color: white;
  font-weight: bold;
}
.v-table ::v-deep tr:nth-child(even) {
  background-color: #f1f1f1e5;
}

.v-table :deep(table > thead) {
  background-color: #ffffff;
  cursor: pointer;
  font-weight: bold;
}
.v-data-table tbody tr {
  border-bottom: 1px solid #ddd;
}

.v-data-table tbody tr:nth-child(odd) {
  background-color: #f9f9f9;
}

.v-data-table tbody tr:nth-child(even) {
  background-color: #ffffff;
}

.primary--text {
  color: #1a237e !important;
}
</style>
