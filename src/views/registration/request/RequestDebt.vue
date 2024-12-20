<template>
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h5 text-md-h4 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span> {{ title_route }}</span>
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
            </v-data-table>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-card>
  <component
    :is="editDialogComponent"
    v-model:showDialog="showEditDialog"
    :item="selectedItem"
  ></component>
</template>

<script setup>
import { ref, computed, onMounted, defineAsyncComponent,reactive ,markRaw} from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const showEditDialog = ref(false)
const selectedItem = ref(null)
const title_route = ref('')
const searchQuery = ref('')
const editDialogComponent = ref(null) // สำหรับ dynamic component

const openEditDialog = (item = null) => {
  selectedItem.value = item // กำหนด item ที่เลือก
  showEditDialog.value = true
}

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
  { title: 'เลือก', key: 'select', align: 'center', sortable: true },
]

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
])

const filteredItems = computed(() =>
  items.filter((item) =>
    ['refLicId', 'name', 'type', 'location'].some((key) =>
      item[key]
        ?.toString()
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase())
    )
  )
)

onMounted(() => {
  const currentPath = route.path

  if (currentPath === '/debt/ChangeBusiness') {
    title_route.value =
      'คำขอเปลี่ยนแปลงรายการจดทะเบียนผู้ประกอบธุรกิจทวงถามหนี้'
    editDialogComponent.value = markRaw(defineAsyncComponent(() =>
      import('@/components/menuRegister/requestForm/ChangeForm.vue')
    ))
  } else if (currentPath === '/debt/Substitute') {
    title_route.value =
      'คำขอรับใบแทนหนังสือสำคัญแสดงการจดทะเบียนการประกอบธุรกิจทวงถามหนี้'
    editDialogComponent.value = markRaw(defineAsyncComponent(() =>
      import('@/components/menuRegister/requestForm/Substitute.vue')
    ))
  } else if (currentPath === '/debt/ChangeRoster') {
    title_route.value = 'บัญชีรายชื่อพนักงานของผู้ประกอบธุรกิจทวงถามหนี้'
    editDialogComponent.value = markRaw(defineAsyncComponent(() =>
      import('@/components/menuRegister/requestForm/ChangeRoster.vue')
    ))
  } else if (currentPath === '/debt/Quit_Business') {
    title_route.value = 'คำขอเลิกประกอบธุรกิจทวงถามหนี้'
    editDialogComponent.value = markRaw(defineAsyncComponent(() =>
      import('@/components/menuRegister/requestForm/QuitBusiness.vue')
    ))
  } else if (currentPath === '/debt/Renew_request') {
    title_route.value = 'ขอต่ออายุประกอบธุรกิจทวงถามหนี้'
    editDialogComponent.value = markRaw(defineAsyncComponent(() =>
      import('@/components/menuRegister/requestForm/QuitBusiness.vue')
    ))
  } else if (currentPath === '/debt/Blame_Business') {
    title_route.value = 'ประวัติการกระทำความผิดของผู้ประกอบธุรกิจทวงถามหนี้'
    editDialogComponent.value = markRaw(defineAsyncComponent(() =>
      import('@/components/menuRegister/requestForm/BlameBusiness.vue')
    ))
  }
})
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
