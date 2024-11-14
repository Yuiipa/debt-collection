<template>
  <div class="d-flex justify-start mt-4 px-10">
    <span class="d-flex align-center justify-center text-blue-darken-4 " style="font-size: 40px">
        คำขอจดทะเบียนการประกอบธุรกิจทวงถามหนี้
    </span>
  </div>
  <v-container class="d-flex justify-center">
    <div class="mt-8 pa-6 elevation-3 rounded-lg d-flex justify-center">
      <v-row dense class="d-flex justify-center">
        <v-col cols="6">
          <v-btn class="ma-2" color="primary" size="x-large" block @click="$router.push({ name: 'debt-Request_All-registration' })"
            >บุคคลธรรมดา</v-btn
          >
        </v-col>
        <v-col cols="6">
          <v-btn class="ma-2" color="teal" size="x-large" block @click="$router.push({ name: 'debt-Request_All-registration' })"
            >นิติบุคคล</v-btn
          >
        </v-col>
        <v-col cols="6">
          <v-btn class="ma-2" color="primary" size="x-large" block @click="$router.push({ name: 'debt-Request_All-registration' })"
            >ทนายความ</v-btn
          >
        </v-col>
        <v-col cols="6">
          <v-btn class="ma-2" color="teal" size="x-large" block @click="$router.push({ name: 'debt-Request_All-registration' })"
            >สำนักงานทนายความ</v-btn
          >
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
    
    <script setup>
import {  useRouter } from 'vue-router'

const router = useRouter()
</script>
    
    <style scoped>
.v-table :deep(th) {
  background-color: #1a237e;
  color: white; /* เพิ่มสีขาวสำหรับตัวอักษรใน header */
  cursor: pointer;
  font-weight: bold;
}

.rounded-table {
  border-top-left-radius: 24px !important;
  border-top-right-radius: 24px !important;
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
    