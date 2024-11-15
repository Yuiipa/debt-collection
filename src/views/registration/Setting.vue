<template>
  <div class="d-flex justify-start mt-4 px-10">
    <span
      class="d-flex align-center justify-center text-blue-darken-4"
      style="font-size: 40px"
    >
      การตั้งค่า
    </span>
  </div>
  <v-container class="d-flex justify-center">
    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="11" md="8" v-for="(program, index) in programs" :key="index">
        <div
          class="pa-5 elevation-3 rounded-lg w-100 d-flex justify-space-between"
        >
          <span class="d-flex align-center text-h6">
            {{ program.label }}
          </span>
          <v-switch
            v-model="program.switch"
            color="#39AB4E"
            inset
            dense
            hide-details
            style="min-width: 70px"
          />
        </div>
      </v-col>
    </v-row>
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
