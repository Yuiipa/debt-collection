<template>
  <v-card-title class="d-flex justify-center mt-8 px-10">
    <span
      class="d-flex align-center justify-center text-h5 text-md-h4 font-weight-bold text-wrap" style="color: #1a237e"
    >
      บัญชีรายชื่อพนักงานของผู้ประกอบธุรกิจทวงถามหนี้
    </span>
  </v-card-title>
  <v-container class="d-flex justify-start">
    <div class="elevation-3 rounded-lg w-100">
      <!-- Tabs -->
      <v-tabs v-model="activeTab" color="blue-darken-3">
        <v-tab value="employee" class="font-weight-bold">
          แจ้งแก้ไขบัญชีรายชื่อ
        </v-tab>
        <v-tab value="others" class="font-weight-bold">อื่นๆ</v-tab>
      </v-tabs>

      <!-- Tab Items -->
      <v-window v-model="activeTab">
        <!-- Tab 1 -->
        <v-window-item value="employee">
          <div class="pa-8">
            <v-row>
              <v-col cols="12" class="pl-8">
                <span> ไฟล์บัญชีรายชื่อ </span>
              </v-col>
            </v-row>
            <UploadFile/>
          </div>
        </v-window-item>

        <!-- Tab 2 -->
        <v-window-item value="others">
          <div class="pa-8">
            <v-row>
              <v-col
                cols="12"
                md="1"
                class="d-flex align-center justify-center"
              >
                <div >อื่นๆ ระบุ</div>
              </v-col>
              <v-text-field
                class="v-col-12 v-col-md-11"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-row>
            <UploadFile/>
          </div>
        </v-window-item>
      </v-window>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import UploadFile from '@/components/UploadFile.vue'

// ตัวแปร state สำหรับแท็บและไฟล์
const activeTab = ref('employee')
const handleFileChange = (files) => {
  console.log('Selected files:', files)
  // ดำเนินการกับไฟล์ เช่น อัปโหลด
}
</script>

<style scoped>
/* เพิ่มสไตล์เพิ่มเติมถ้าต้องการ */
</style>
