<template>
  <v-container class="pa-0" style="max-width: 100%">
    <v-card class="elevation-0">
      <v-card-title
        class="d-flex justify-center align-center text-center font-weight-medium text-h5"
        style="color: #ffffff; background-color: #1a237e; height: 80px"
      >
        เรื่องร้องเรียนจากศูนย์ดำรงธรรม
      </v-card-title>
    </v-card>
    <div class="px-16">
      <v-card class="mt-4 rounded-xl">
        <v-data-table
          :headers="headers"
          :items="centerappeal"
          :search="search"
          :items-per-page="10"
          v-model:options="pagination"
          hide-default-header
        >
          <template v-slot:thead>
            <thead>
              <tr>
                <th
                  v-for="header in headers"
                  :key="header.key"
                  :align="header.align || 'start'"
                  class="text-white"
                  style="background-color: #1a237e; text-align: center"
                  id
                >
                  {{ header.title }}
                </th>
              </tr>
            </thead>
          </template>
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
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

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
]

function openDetails(item) {
  router.push({ name: 'debt-center-appeal-details' })
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
