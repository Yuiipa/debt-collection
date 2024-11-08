<template>
  <div class="d-flex justify-space-between">
    <span class="font-weight-medium text-h5 pt-2" style="color: #1a237e">
      บันทึกเรื่องร้องเรียน
    </span>
  </div>
  <v-card class="rounded-0 elevation-3 mx-8">
    <v-stepper v-model="step">
      <v-stepper-header>
        <v-stepper-item
          title="บันทึกเรื่องร้องเรียน"
          value="1"
          :complete="step > 0"
        >
        </v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item
          title="อัปโหลดแบบฟอร์มเรื่องร้องเรียน"
          value="2"
          :complete="step > 1"
        ></v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item
          title="สารบบการรับเรื่องร้องเรียน"
          value="3"
          :complete="step > 2"
        ></v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item
          title="หน่วยงานรับเรื่องร้องเรียน"
          value="4"
          :complete="step > 3"
        ></v-stepper-item>
      </v-stepper-header>
      <template v-if="step == 0"> <AppealRequest /> </template>
      <template v-if="step == 1"> <FormUpload /> </template>
      <template v-if="step == 2"> หน้าที่3 </template>
      <template v-if="step == 3"> หน้าที่4 </template>
    </v-stepper>
    <v-btn v-if="step > 0" @click="step--">back</v-btn>
    <v-btn x-large color="primary" @click="step++" v-if="step < 3">next</v-btn>
    <v-btn x-large color="gray" v-if="step >= 3">save</v-btn>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import AppealRequest from '@/components/menuAppeal/formAppeal/AppealRequest.vue'
import FormUpload from '@/components/menuAppeal/formAppeal/FormUpload.vue'
const step = ref(0)
</script>
