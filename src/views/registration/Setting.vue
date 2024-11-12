<template>
  <v-row style="background-color: #1a237e">
    <v-col class="d-flex justify-center">
      <span class="text-h4 py-4" style="color: white"> การตั้งค่า </span>
    </v-col>
  </v-row>
  <v-container class="d-flex justify-center">
    <div class="mt-8 pa-6 elevation-3 rounded-lg w-100 d-flex justify-center">
      <v-simple-table class="custom-table">
        <template v-slot:default>
          <thead>
            <tr>
              <th id="" class="py-4">โปรแกรม</th>
              <th id=""></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(program, index) in programs" :key="index">
              <td class="px-2">{{ program.label }}</td>
              <td class="px-2">
                <v-switch v-model="program.switch" color="blue" />
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </v-container>
</template>
  
  <script setup>
import { reactive } from 'vue'

const programs = reactive([
  { label: 'คำขอจดทะเบียนการประกอบธุรกิจทางอามานนี้', switch: false },
  { label: 'คำขอเปลี่ยนแปลงรายการจดทะเบียน', switch: false },
  {
    label: 'คำขอรับใบแทนหนังสือสำคัญแสดงการจดทะเบียนการประกอบธุรกิจ',
    switch: false,
  },
  { label: 'คำขอจดทะเบียนการประกอบธุรกิจทางอามานนี้', switch: false },
  { label: 'คำขอเปลี่ยนแปลงรายการจดทะเบียน', switch: false },
  {
    label: 'คำขอรับใบแทนหนังสือสำคัญแสดงการจดทะเบียนการประกอบธุรกิจ',
    switch: false,
  },
])
</script>
  
  <style scoped>
.custom-table {
  border: 1px solid black;
}

.custom-table th,
.custom-table td {
  vertical-align: middle;
  border: 1px solid black;
}

.v-simple-table th,
.v-simple-table td {
  vertical-align: middle;
}
</style>
  