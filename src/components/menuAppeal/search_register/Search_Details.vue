<template>
  <v-card class="ma-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex flex-column align-center justify-center ma-2 text-h4 font-weight-bold"
      style="color: #1a237e"
    >
      <span> ข้อมูลการถูกร้องเรียนของ {{ name }} </span>
    </v-card-title>
    <v-row class="ma-1 my-2">
      <v-col md="4" cols="12">
        <v-text-field
          v-model="search"
          variant="outlined"
          placeholder="ค้นหา"
          persistent-placeholder
          hide-details
          density="compact"
        />
      </v-col>
      <v-col md="3" cols="12" class="d-flex align-end mb-1">
        <v-btn
          prepend-icon="mdi-magnify"
          style="background-color: #1a237e; color: white"
          >ค้นหา</v-btn
        >
      </v-col>
    </v-row>
    <v-card class="ma-4 rounded-lg">
      <v-data-table
        :headers="$vuetify.display.mdAndUp ? headers : headers2"
        :items="search_details"
        :search="search"
      >
        <template v-slot:[`item.num`]="{ index }">
          {{ calculateIndex(index) }}
        </template>
        <template v-slot:[`item.identity`]="{ item }">
          <v-btn
            v-if="item.identity === '0'"
            variant="outlined"
            style="font-size: 14px"
            class="rounded-pill"
            id="missdoc"
            @click="
              $router.push({ name: 'debt-form-appeal', query: { step: 1 } })
            "
          >
            ขาดเอกสารสำคัญ
          </v-btn>
          <v-btn
            v-if="item.identity === '1'"
            variant="outlined"
            style="font-size: 14px"
            class="rounded-pill"
            id="comdoc"
          >
            เอกสารครบถ้วน
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const search = ref('')

const route = useRoute()

const headers = ref([
  { align: 'center', key: 'num', sortable: false, title: 'ลำดับที่' },
  { align: 'center', key: 'licid', title: 'เลขที่เรื่องร้องเรียน' },
  { key: 'complainname', title: 'ชื่อผู้ร้อง' },
  { align: 'center', key: 'crimeScene', title: 'สถานที่เกิดเหตุ' },
  { align: 'center', key: 'complaintPlace', title: 'สถานที่ร้องเรียน' },
  { align: 'center', key: 'datetime', title: 'วันที่ร้องเรียน' },
  { align: 'center', key: 'identity', sortable: false, title: 'สถานะ' },
])

const headers2 = ref([
  { align: 'center', key: 'num', sortable: false, title: 'ลำดับที่' },
  { align: 'center', key: 'licid', title: 'เลขที่เรื่องร้องเรียน' },
  { align: 'center', key: 'identity', sortable: false, title: 'สถานะ' },
])

const search_details = ref([])
const name = ref('')

onMounted(() => {
  if (route.query.item) {
    const item = JSON.parse(route.query.item)
    search_details.value.push(item)
    name.value = search_details.value[0].name
  }
})

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

.v-btn#comdoc:hover {
  background-color: green !important;
  color: white !important;
}

.v-btn#comdoc {
  color: green !important;
  background-color: transparent !important;
}

.v-btn#missdoc:hover {
  background-color: orange !important;
  color: white !important;
}

.v-btn#missdoc {
  color: orange !important;
  background-color: transparent !important;
}

.v-btn#export:hover {
  color: white !important;
  background-color: #1a237e !important;
}
</style>
