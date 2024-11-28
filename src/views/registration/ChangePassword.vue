<template>
  <div>
    <v-row style="background-color: #1a237e">
      <v-col class="d-flex justify-center">
        <span class="text-h4 py-4" style="color: white">
          บันทึกเรื่องร้องเรียน
        </span>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="px-10">
          <v-data-table
            :headers="headers"
            :items="items"
            class="elevation-1 rounded-table"
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
    text: 'ชื่อ',
    value: 'name',
    align: 'start',
    sortable: true,
    width: '150px',
  },
  { text: 'แคลอรี่', value: 'calories', align: 'center', sortable: true },
  { text: 'ไขมัน (g)', value: 'fat', align: 'center', sortable: true },
  { text: 'คาร์บ (g)', value: 'carbs', align: 'center', sortable: true },
  { text: 'โปรตีน (g)', value: 'protein', align: 'center', sortable: true },
  { text: 'เหล็ก (%)', value: 'iron', align: 'center', sortable: true },
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
  background-color: #1A237E;

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
  background-color: #F1F1F1E5;

}
</style>
