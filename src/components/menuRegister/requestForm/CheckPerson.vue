<template>
  <div class="d-flex justify-center mt-10 px-10">
    <span
      class="d-flex align-center justify-center text-blue-darken-4 text-h4 font-weight-bold"
    >
      ตรวจสอบข้อมูลบุคคล
    </span>
  </div>
  <v-form ref="form">
    <div
      class="mx-10 my-2 pa-6 elevation-3 rounded-lg"
      style="background-color: white"
    >
      <v-row>
        <v-col cols="10">
          <div class="font-weight-bold text-h6 text-blue-darken-4">
            ข้อมูลประชาชน
          </div>
        </v-col>
      </v-row>
      <v-divider
        class="opacity-100 mt-4 mb-10"
        :thickness="2"
        color="black"
      ></v-divider>
      <v-row>
        <div
          class="v-col-12 v-col-sm-4 py-0 d-flex align-center justify-start justify-sm-end text-end"
        >
          บัตรประจำตัวประชาชน
        </div>
        <v-text-field
          class="v-col-12 v-col-sm-7 v-col-md-5 pr-0"
          placeholder="บัตรประจำตัวประชาชน"
          variant="outlined"
          density="compact"
          hide-details="auto"
          v-mask="'#-####-#####-##-#'"
          ><template #append>
            <v-btn v-tooltip.bottom="'ดึงข้อมูลจากเครื่องอ่านบัตร'">
              <v-icon size="26">mdi-card-account-details-outline</v-icon>
            </v-btn>
          </template></v-text-field
        >
      </v-row>
      <v-row class="mt-6 d-flex justify-end">
        <v-btn
          color="lime-darken-3 "
          class="ma-1 v-col-12 v-col-sm-1"
          height="40"
          outlined
          @click="navigate()"
        >
          ข้าม
        </v-btn>
        <v-btn
          color="green-darken-1"
          class="ma-1 v-col-12 v-col-sm-4 v-col-md-3"
          height="40"
          outlined
        >
          ตรวจสอบข้อมูลนิติบุคคล
        </v-btn>
        <v-btn
          color="blue-darken-4"
          class="ma-1 v-col-12 v-col-sm-3 v-col-md-2"
          height="40"
          outlined
        >
          ตรวจสอบข้อมูล
        </v-btn>
      </v-row>
    </div>
  </v-form>
</template>
      
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
function navigate() {
  router.push({ name: 'debt-Registration-form' })
}
</script>
      