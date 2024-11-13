<template>
  <div
    style="background-color: #1a237e; color: white"
    class="d-flex justify-center"
  >
    <span
      class="d-flex align-center justify-center"
      style="font-size: 40px; color: white; height: 125px"
    >
      บันทึกเรื่องร้องเรียน
    </span>
  </div>
  <div>
    <v-stepper v-model="step">
      <v-stepper-header>
        <v-stepper-item
          :title="$vuetify.display.mdAndUp ? 'บันทึกเรื่องร้องเรียน' : ''"
          value="1"
          :complete="step > 0"
        >
        </v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item
          :title="
            $vuetify.display.mdAndUp ? 'อัปโหลดแบบฟอร์มเรื่องร้องเรียน' : ''
          "
          value="2"
          :complete="step > 1"
        ></v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item
          :title="$vuetify.display.mdAndUp ? 'สารบบการรับเรื่องร้องเรียน' : ''"
          value="3"
          :complete="step > 2"
        ></v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item
          :title="$vuetify.display.mdAndUp ? 'หน่วยงานรับเรื่องร้องเรียน' : ''"
          value="4"
          :complete="step > 3"
        ></v-stepper-item>
      </v-stepper-header>
      <template v-if="step == 0"> <AppealRequest /> </template>
      <template v-if="step == 1"> <FormUpload /> </template>
      <template v-if="step == 2"> หน้าที่3 </template>
      <template v-if="step == 3"> หน้าที่4 </template>
      <div class="d-flex justify-end mr-8">
        <v-btn x-large color="grey-darken-1 mr-4" v-if="step > 0" @click="step--"
          >ย้อนกลับ</v-btn
        >
        <v-btn x-large color="#1a237e" @click="step++" v-if="step < 3"
          >ถัดไป</v-btn
        >
        <v-btn x-large color="success" v-if="step >= 3">save</v-btn>
      </div>
    </v-stepper>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppealRequest from '@/components/menuAppeal/formAppeal/AppealRequest.vue'
import FormUpload from '@/components/menuAppeal/formAppeal/FormUpload.vue'
const step = ref(0)
</script>
