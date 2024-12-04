<template>
 <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
   <v-card-title
      class="d-flex justify-center ma-2 text-h5 text-md-h4 font-weight-bold text-wrap"
      style="color: #1a237e;"
    >
      <span> การตั้งค่า </span>
    </v-card-title>
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
  </v-card>
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
