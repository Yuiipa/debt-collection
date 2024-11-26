<template>
  <v-container class="pa-0" style="max-width: 100%">
    <v-card class="elevation-0">
      <v-card-title
        class="d-flex justify-center align-center text-center font-weight-bold text-h4"
        style="color: #1a237e; background-color: #e3f2fd; height: 80px"
      >
        ข้อมูลการจดทะเบียน
      </v-card-title>
    </v-card>
    <div class="px-16">
      <v-row class="d-flex justify-start align-center mt-6 px-4">
        <v-col cols="5">
          <v-text-field
            v-model="search"
            label="ค้นหาด้วยชื่อธุรกิจ ประเภท จังหวัด"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            hide-details
            single-line
            density="compact"
          />
        </v-col>
        <v-col cols="1" class="d-flex justify-start">
          <v-btn
            color="#1a237e"
            class="white--text"
            style="height: 40px; width: 100%"
          >
            ค้นหา
          </v-btn>
        </v-col>
      </v-row>
      <v-card class="mt-4 rounded-lg">
        <v-data-table
          :headers="$vuetify.display.mdAndUp ? headers : headers2"
          :items="desserts"
          :search="search"
          :items-per-page="10"
          v-model:options="pagination"
        >
          <template v-slot:[`item.num`]="{ index }">
            {{ calculateIndex(index) }}
          </template>
          <template v-slot:[`item.locate`]="{ item }">
            {{ splitlocate(item.locate) }}
          </template>
          <template v-slot:[`item.info`]="{ item }">
            <v-btn
              append-icon="mdi-chevron-right"
              variant="plain"
              style="font-size: 14px"
              @click="openDialog(item)"
            >
              ข้อมูล
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </div>

    <v-dialog v-model="dialog" max-width="800px" persistent>
      <v-card>
        <v-card-title
          class="text-center font-weight-medium text-h5"
          :style="{ color: '#1a237e' }"
        >
          ข้อมูลแสดงการจดทะเบียนการประกอบธุรกิจทวงถามหนี้
          <div>{{ selectItem.name }}</div>
        </v-card-title>
        <v-divider
          class="opacity-100 mx-6 mb-4"
          :thickness="2"
          color="#1a237e"
        />
        <div class="px-8">
          <v-row v-for="(label, key) in fields" :key="key" class="py-2">
            <v-col cols="5" class="font-weight-bold text-end">
              {{ label }} :
            </v-col>
            <v-col cols="7">
              {{ selectItem[key] || '-' }}
            </v-col>
          </v-row>
        </div>
        <v-divider class="mt-4" :thickness="5" color="#1a237e" />
        <v-card-actions class="justify-center pb-4">
          <v-btn
            style="
              width: 167px;
              height: 47px;
              background-color: #1a237e;
              color: white;
            "
            @click="dialog = false"
          >
            <div class="text-h6">ปิด</div>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const search = ref('')
const selectItem = ref({})
const dialog = ref(false)

const fields = {
  name: 'ชื่อธุรกิจ',
  applicant: 'ชื่อ - นามสกุล ผู้ขอจดทะเบียน',
  type: 'ประเภทกิจการ',
  licdate: 'วัน เดือน ปี ที่ได้จดทะเบียน',
  liclocate: 'สถานที่จดทะเบียน',
  locate: 'ที่ตั้งสถานประกอบธุรกิจ',
  call: 'โทรศัพท์',
  fax: 'โทรสาร',
  mail: 'จดหมายอิเลคทรอนิกส์',
}

const headers = ref([
  { align: 'center', key: 'num', sortable: false, title: 'ลำดับที่' },
  { key: 'name', title: 'ชื่อธุรกิจ' },
  { key: 'type', title: 'ประเภทการประกอบธุรกิจ' },
  { key: 'call', title: 'เบอร์โทรศัพท์ติดต่อ' },
  { align: 'center', key: 'locate', title: 'ที่ตั้งสถานประกอบธุรกิจ' },
  {
    align: 'center',
    key: 'info',
    sortable: false,
    title: 'ข้อมูลการจดทะเบียน',
  },
])
const headers2 = ref([
  { align: 'center', key: 'num', sortable: false, title: 'ลำดับที่' },
  { key: 'name', title: 'ชื่อธุรกิจ' },
  {
    align: 'center',
    key: 'info',
    sortable: false,
    title: 'ข้อมูลการจดทะเบียน',
  },
])

const desserts = [
  {
    name: 'บริษัท ทรานส์วิช จำกัด',
    applicant: 'นายสหะ เลาหศรีสกุล',
    type: 'บริษัทจำกัด',
    licdate: '14/08/2562',
    liclocate: 'จังหวัดนนทบุรี',
    call: '',
    fax: '086-565-68',
    locate:
      '288 หมู่ - ถนนรัตนาธิเบศร์ ตำบลบางกระสอ อำเภอเมืองนนทบุรี จังหวัดนนทบุรี',
  },
  {
    name: 'สำนักกฎหมายอนุสิทธิ์',
    applicant: 'นายอนุสิทธิ์ วรรณประวรรต',
    type: 'สำนักงานทนายความ',
    licdate: '29/10/2561',
    liclocate: 'สภาทนายความ',
    call: '',
    fax: '081-842740',
    locate: '12 หมู่ 4 ถนน- ตำบลเบิกไพร อำเภอบ้านโป่ง จังหวัดราชบุรี',
  },
  {
    name: '"จัสติส" ลอว์ แอนด์ แอคเคาท์ติ้ง ออฟฟิต',
    applicant: 'นายพัฒนพงษ์ โพธิ์เพชร',
    type: 'สำนักงานทนายความ',
    licdate: '26/05/2560',
    liclocate: 'สภาทนายความ',
    call: '',
    fax: '098-428837',
    locate:
      '65/1 หมู่ 1 ถนน- ตำบลทุ่งเตาใหม่ อำเภอบ้านนาสาร จังหวัดสุราษฎร์ธานี',
  },
  {
    name: '"พารวย"',
    applicant: 'น.ส.โสรยา มนต์คาถา',
    type: 'บุคคลธรรมดา',
    licdate: '07/12/2560',
    liclocate: 'จังหวัดนครพนม',
    call: '',
    fax: '0629857499',
    locate: '417/2 หมู่ 8 ถนนมัธยมจันทร์ ตำบลนาแก อำเภอนาแก จังหวัดนครพนม',
  },
  {
    name: '	3 พีพีพี กฎหมายและธุรกิจ',
    applicant: 'น.ส.พรศรี พุทธิพร',
    type: 'สำนักงานทนายความ',
    licdate: '29/07/2562',
    liclocate: 'สภาทนายความ',
    call: '',
    fax: '089-776516',
    locate:
      '656 หมู่ - ถนนรามคำแหง ตำบลหัวหมาก อำเภอบางกะปิ จังหวัดกรุงเทพมหานคร',
    mail: 'lawyer596.2540@gmail.com',
  },
  {
    name: '99/3 หมู่ 3 ถนนบ้านไร่เหนือ ตำบลสะเดียง อำเภอเมือง จังหวัดเพชรบูรณ์	',
    applicant: 'นายเลอเกียรติ เหลืองดำรงค์พันธ์',
    type: 'สำนักงานทนายความ',
    licdate: '22/04/2559',
    liclocate: 'สภาทนายความ',
    call: '',
    fax: '081-379681',
    locate:
      '99/3 หมู่ 3 ถนนบ้านไร่เหนือ ตำบลสะเดียง อำเภอเมืองเพชรบูรณ์ จังหวัดเพชรบูรณ์',
  },
  {
    name: '	Kwan Chai Dept (KCD)',
    applicant: 'นายขวัญชัย สวยล้ำ',
    type: 'บุคคลธรรมดา',
    licdate: '08/08/2560',
    liclocate: 'จังหวัดนครปฐม',
    call: '',
    fax: '084-569-10',
    locate: '47 หมู่ 7 ถนน ตำบลหนองงูเหลือม อำเภอเมืองนครปฐม จังหวัดนครปฐม',
  },
  {
    name: '	S.K.WORLD',
    applicant: 'นายศรายุทธ ศิริยากร',
    type: 'บุคคลธรรมดา',
    licdate: '07/11/2559',
    liclocate: 'จังหวัดมหาสารคาม',
    call: '',
    fax: '0929915676',
    locate: '2 หมู่ - ถนนค้อใหญ่ ตำบลตลาด อำเภอเมืองมหาสารคาม จังหวัดมหาสารคาม',
  },
  {
    name: 'กฎหมาย บัวเพชร ประกายสิทธิ์ ทนายความ',
    applicant: 'นายบัวเพชร  ประกายสิทธิ์',
    type: 'ทนายความ',
    licdate: '21/07/2565',
    liclocate: 'สภาทนายความ',
    call: '',
    fax: '081-974089',
    locate: '495 หมู่ 7 ถนน ตำบลหนองเข็ง อำเภอเมืองบึงกาฬ จังหวัดบึงกาฬ',
  },
  {
    name: '	กฎหมายอุปราชทนายความ',
    applicant: 'ว่าที่ร้อยตรีปรีดา  สายอุปราช',
    type: 'ทนายความ',
    licdate: '25/08/2565',
    liclocate: 'สภาทนายความ',
    call: '',
    fax: '062-664982',
    locate: '298/1 หมู่ 5 ถนน ตำบลดอนแก้ว อำเภอแม่ริม จังหวัดเชียงใหม่',
  },
  {
    name: '	กฎหมายอุปราชทนายความ',
    applicant: 'ว่าที่ร้อยตรีปรีดา  สายอุปราช',
    type: 'ทนายความ',
    licdate: '25/08/2565',
    liclocate: 'สภาทนายความ',
    call: '',
    fax: '062-664982',
    locate: '298/1 หมู่ 5 ถนน ตำบลดอนแก้ว อำเภอแม่ริม จังหวัดเชียงใหม่',
  },
]

const splitlocate = (item) => {
  return item.includes('จังหวัด') ? `จังหวัด${item.split('จังหวัด')[1]}` : item
}

const openDialog = (item) => {
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
