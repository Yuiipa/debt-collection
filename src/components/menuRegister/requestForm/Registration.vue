<template>
  <v-card class="ma-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h4 font-weight-bold"
      style="color: #1a237e"
    >
      <span>คำขอจดทะเบียนการประกอบธุรกิจทวงถามหนี้</span>
    </v-card-title>
    <!-- <v-container> -->
      <v-row class="d-flex justify-center">
        <v-col cols="12" md="4" class="d-flex justify-center mb-4">
          <v-card
            class="d-flex flex-column align-center pa-4"
            width="80%"
            height="25vh"
            variant="outlined"
            elevation="2"
            id="person"
            @click="console.log('บุคคลธรรมดา')"
          >
            <v-icon size="100" class="my-2">mdi-account</v-icon>
            <span class="text-h4 text-center mt-2">บุคคลธรรมดา</span>
            <!-- <v-icon size="50" class="mb-2">mdi-minus</v-icon> -->
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="d-flex justify-center mb-4">
          <v-card
            class="d-flex flex-column align-center pa-4"
            width="80%"
            height="25vh"
            variant="outlined"
            elevation="2"
            id="legal"
            @click="console.log('นิติบุคคล')"
          >
            <v-icon size="100" class="my-2">mdi-office-building</v-icon>
            <span class="text-h4 text-center mt-2">นิติบุคคล</span>
            <!-- <v-icon size="50" class="mb-2">mdi-minus</v-icon> -->
          </v-card>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col cols="12" md="4" class="d-flex justify-center mb-4">
          <v-card
            class="d-flex flex-column align-center pa-4"
            width="80%"
            height="25vh"
            variant="outlined"
            elevation="2"
            id="lawyer"
            @click="console.log('ทนายความ')"
          >
            <v-icon size="100" class="my-2">mdi-gavel</v-icon>
            <span class="text-h4 text-center mt-2">ทนายความ</span>
            <!-- <v-icon size="50" class="mb-2">mdi-minus</v-icon> -->
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="d-flex justify-center mb-4">
          <v-card
            class="d-flex flex-column align-center pa-4"
            width="80%"
            height="25vh"
            variant="outlined"
            elevation="2"
            id="lawfirm"
            @click="console.log('สำนักงานทนายความ')"
          >
            <v-icon size="100" class="my-2">mdi-briefcase</v-icon>
            <span class="text-h4 text-center mt-2">สำนักงานทนายความ</span>
            <!-- <v-icon size="50" class="mb-2">mdi-minus</v-icon> -->
          </v-card>
        </v-col>
      </v-row>
    <!-- </v-container> -->
  </v-card>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped>
.v-card#person:hover {
  background-color: white !important;
  color: #4fc3f7 !important;
}
.v-card#person {
  background-color: #4fc3f7 !important;
  color: white !important;
}
.v-card#legal:hover {
  background-color: white !important;
  color: #1976d2 !important;
}
.v-card#legal {
  background-color: #1976d2 !important;
  color: white !important;
}
.v-card#lawyer:hover {
  background-color: white !important;
  color: #43a047 !important;
}
.v-card#lawyer {
  background-color: #43a047 !important;
  color: white !important;
}
.v-card#lawfirm:hover {
  background-color: white !important;
  color: #455a64 !important;
}
.v-card#lawfirm {
  background-color: #455a64 !important;
  color: white !important;
}
</style>
