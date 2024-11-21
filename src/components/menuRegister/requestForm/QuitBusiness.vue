<template>
  <div class="d-flex justify-start mt-4 px-10">
    <span
      class="d-flex align-center justify-center text-blue-darken-4 text-h4"
    >
    {{title_route}}
    </span>
  </div>
  <v-container class="d-flex justify-start">
    <div class="elevation-3 rounded-lg w-100">
      <!-- Tab Items -->

      <div class="pa-8">
        <v-row>
          <div class="d-flex justify-end align-center pl-4">
            <span>เลขทะเบียน</span>
          </div>
          <v-text-field
            class="v-col-12 v-col-md-4"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
          <div  class="d-flex justify-end align-center pl-4">
            <span>ชื่อธุรกิจ</span>
          </div>
          <v-text-field
          class="v-col-12 v-col-md-4"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
        </v-row>
        <v-row>
          <v-col class="py-0">
            <span> {{ subtitle_route }} </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-file-input
              label="ลากไฟล์มาวางตรงนี้ หรือคลิกเพื่อเลือกไฟล์"
              show-size
              variant="outlined"
              density="compact"
              truncate-length="15"
              multiple
              @change="handleFileChange"
            ></v-file-input>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            class="d-flex align-center justify-center font-weight-bold py-0"
            style="font-size: 18px"
          >
            <span>คำสั่งนายทะเบียน</span>
          </v-col>
          <v-textarea
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-textarea>
        </v-row>
        <r-row>
          <v-col cols="12" class="align-center justify-center d-flex">
            <v-btn
              left
              class="px-12"
              style="background-color: #1a237e; color: white"
              >บันทึก</v-btn
            >
          </v-col>
        </r-row>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const title_route = ref('')
const subtitle_route = ref('')

const handleFileChange = (files) => {
  console.log('Selected files:', files)
  // ดำเนินการกับไฟล์ เช่น อัปโหลด
}

onMounted(() => {
  const currentPath = route.path // ใช้ useRoute เพื่อดึง path ปัจจุบัน

  // ตัวอย่างเงื่อนไขการเปลี่ยนเส้นทาง
  if (currentPath === '/debt/Quit_Business/form') {
    title_route.value = 'คำขอเลิกประกอบธุรกิจทวงถามหนี้'
    subtitle_route.value = 'หนังสือแจ้งความประสงค์เลิกประกอบธุรกิจทวงถามหนี้'
  } else if (currentPath === '/debt/Renew_request/form') {
    title_route.value = 'ขอต่ออายุประกอบธุรกิจทวงถามหนี้'
    subtitle_route.value = 'หนังสือแจ้งความประสงค์ขอต่ออายุประกอบธุรกิจทวงถามหนี้'
  } else if (currentPath === '/debt/Cancel_Quit/form') {
    title_route.value = 'ยกเลิกการเพิกถอนการจดทะเบียนของผู้ประกอบธุรกิจทวงถามหนี้'
    subtitle_route.value = 'มติที่ประชุมคณะกรรมการทวงถามหนี้'
  }
})
</script>

<style scoped>
/* เพิ่มสไตล์เพิ่มเติมถ้าต้องการ */
</style>
