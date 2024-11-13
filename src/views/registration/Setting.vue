<template>
  <div
    style="background-color: #1a237e; color: white"
    class="d-flex justify-center"
  >
    <span
      class="d-flex align-center justify-center "
      style="font-size: 40px; height: 100px"
    >
    การตั้งค่า
    </span>
  </div>
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
              <td class="pl-4">
                <v-switch
                  v-model="program.switch"
                  color="blue"
                  inset
                  dense
                  hide-details
                  style="min-width: 70px;"
                />
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
  { label: 'คำขอรับใบแทนหนังสือสำคัญแสดงการจดทะเบียนการประกอบธุรกิจ', switch: false },
  { label: 'คำขอจดทะเบียนการประกอบธุรกิจทางอามานนี้', switch: false },
  { label: 'คำขอเปลี่ยนแปลงรายการจดทะเบียน', switch: false },
  { label: 'คำขอรับใบแทนหนังสือสำคัญแสดงการจดทะเบียนการประกอบธุรกิจ', switch: false },
  { label: 'คำขอรับใบแทนหนังสือสำคัญแสดงการจดทะเบียนการประกอบธุรกิจ', switch: false },
  { label: 'คำขอจดทะเบียนการประกอบธุรกิจทางอามานนี้', switch: false },
  { label: 'คำขอเปลี่ยนแปลงรายการจดทะเบียน', switch: false },
  { label: 'คำขอรับใบแทนหนังสือสำคัญแสดงการจดทะเบียนการประกอบธุรกิจ', switch: false },
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
