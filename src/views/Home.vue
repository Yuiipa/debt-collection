<template>
  <div class="px-4 px-sm-10" style="height: 100%">
    <v-row style="height: 100%">
      <v-col cols="12" md="8" class="d-flex flex-column ">
        <div
          class="d-flex justify-center my-10 my-sm-16  text-h5 text-sm-h4 font-weight-bold text-wrap"
          style="color: #1a237e"
        >
          <span>ข้อมูลทั้งหมด แยกตามประเภทการประกอบธุรกิจ</span>
        </div>
        <div  class="responsive-chart">
          <HomeChart :systems="mockSystems" />
        </div>
      </v-col>
      <v-col cols="12" md="4" class="d-flex justify-center align-center mt-16 mb-6 mt-sm-6 ">
        <div class="d-flex text-center">
          <v-row justify="center" align="center" >
            <v-col cols="12" md="12" class="d-flex justify-center">
              <v-btn
                class="w-100 text-h5 rounded-lg"
                large
                @click="$router.push({ name: 'debt-poppulation' })"
                height="100px"
                color="#1e5a8d"
              >
                ประชาชน <br />
                (ข้อมูลการจดทะเบียน)
              </v-btn>
            </v-col>

            <v-col cols="12" md="12" class="d-flex justify-center">
              <v-btn
                class="w-100 text-h5 rounded-lg"
                large
                @click="$router.push({ name: 'debt-login' })"
                height="100px"
                color="#b0892b"
              >
                เจ้าหน้าที่ผู้ปฏิบัติงาน
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import HomeChart from '@/components/charts/HomeChart'

const mockSystems = [
  { name: 'บุคคลธรรมดา', usage: 100, color: '#42A5F5' },
  { name: 'ห้างหุ้นส่วนสามัญ (ไม่จดทะเบียน)', usage: 50, color: '#757575' },
  { name: 'ห้างหุ้นส่วนสามัญจดทะเบียน', usage: 80, color: '#66BB6A' },
  { name: 'ห้างหุ้นส่วนจำกัด', usage: 30, color: '#FFA726' },
  { name: 'บริษัทจำกัด', usage: 120, color: '#AB47BC' },
  { name: 'บริษัทมหาชนจำกัด', usage: 60, color: '#FF7043' },
  { name: 'ทนายความ', usage: 20, color: '#FFD54F' },
]
</script>

<style scoped>
.responsive-chart {
  width: 100%;
  height: 300px; /* ค่าเริ่มต้น */
}

/* สำหรับหน้าจอที่มีความกว้างน้อยกว่า 350px */
@media (max-width: 350px) {
  .responsive-chart {
    height: 150px;
  }
}

/* สำหรับหน้าจอที่มีความกว้างตั้งแต่ 350px ถึง 400px */
@media (min-width: 350px) and (max-width: 500px) {
  .responsive-chart {
    height: 200px;
  }
}

/* สำหรับหน้าจอที่มีความกว้างตั้งแต่ 400px ขึ้นไป */
@media (min-width: 500px) {
  .responsive-chart {
    height: 300px;
  }
}
</style>
