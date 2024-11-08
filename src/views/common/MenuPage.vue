<template>
  <v-col class="pa-0">
    <Header />
    <v-container>
      <div class="d-flex text-center pt-10">
        <v-row justify="center" align="center" class="my-6">
          <v-col cols="12" md="5" class="d-flex justify-center">
            <v-btn
              class="w-100 text-h5"
              large
              @click="$router.push({ name: 'debt-home-registration' })"
              height="140px"
              color="#1e5a8d"
            >
              การจดทะเบียน
            </v-btn>
          </v-col>

          <v-col cols="12" md="5" class="d-flex justify-center">
            <v-btn
              class="w-100 text-h5"
              large
              @click="$router.push({ name: 'debt-home-appeal' })"
              height="140px"
              color="#b0892b"
            >
              การรายงานเรื่องร้องเรียน<br />
              และผลประกอบการด้านอื่นๆ
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-col>
</template>

<script setup>
import Header from '@/components/Header'
</script>