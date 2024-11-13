<template>
  <div>
    <v-row style="background-color: #1a237e">
      <v-col class="d-flex justify-center">
        <span class="text-h4 py-4" style="color: white">
          บันทึกเรื่องร้องเรียน
        </span>
      </v-col>
    </v-row>
    <v-row class="px-16 pt-4">
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
      <v-col cols="12" sm="1" class="align-center justify-end d-flex">
        <v-btn > ค้นหา </v-btn>
      </v-col>
    </v-row>
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
            <template v-slot:[`item.calories`]="{ item }">
              <span>{{ item.calories }} kcal</span>
            </template>
          </v-data-table>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
  
  <script setup>
const headers = [
  {
    title: 'ชื่อ',
    key: 'name',
    align: 'start',
    sortable: true,
    width: '150px',
  },
  { title: 'แคลอรี่', key: 'calories', align: 'center', sortable: true },
  { title: 'ไขมัน (g)', key: 'fat', align: 'center', sortable: true },
  { title: 'คาร์บ (g)', key: 'carbs', align: 'center', sortable: true },
  { title: 'โปรตีน (g)', key: 'protein', align: 'center', sortable: true },
  { title: 'เหล็ก (%)', key: 'iron', align: 'center', sortable: true },
]

const items = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    iron: '1',
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    iron: '0',
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    iron: '6',
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    iron: '7',
  },
]
</script>
  
<style scoped>
.v-table :deep(th) {
  background-color: #1a237e;
  color: white; /* เพิ่มสีขาวสำหรับตัวอักษรใน header */
  cursor: pointer;
  font-weight: bold;
}

/* เพิ่มความโค้งให้ขอบตาราง */
.rounded-table {
  border-radius: 24px !important;
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

  