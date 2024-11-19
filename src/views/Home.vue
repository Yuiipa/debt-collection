<template>
  <!-- <v-container fill-height fluid> -->
  <v-col class="pa-0">
    <v-container class="pt-7">
      <div style="height: 300px">
        <HomeChart :systems="mockSystems" />
      </div>
      <div class="d-flex text-center pt-10">
        <v-row justify="center" align="center" class="my-6">
          <v-col cols="12" md="5" class="d-flex justify-center">
            <v-btn
              class="w-100 text-h6"
              large
              @click="$router.push({ name: 'debt-poppulation' })"
              height="100px"
              color="#1e5a8d"
            >
              ประชาชน <br />
              (ข้อมูลการจดทะเบียน)
            </v-btn>
          </v-col>

          <v-col cols="12" md="5" class="d-flex justify-center">
            <v-btn
              class="w-100 text-h6"
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
    </v-container>
  </v-col>
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

