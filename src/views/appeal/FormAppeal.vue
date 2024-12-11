<template>
  <v-card class="ma-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h4 font-weight-bold"
      style="color: #1a237e;"
    >
      <span>บันทึกเรื่องร้องเรียน</span>
    </v-card-title>
    <div>
      <v-stepper v-model="step" style="background-color: #fafafa">
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
            :title="
              $vuetify.display.mdAndUp ? 'สารบบการรับเรื่องร้องเรียน' : ''
            "
            value="3"
            :complete="step > 2"
          ></v-stepper-item>

          <v-divider></v-divider>

          <v-stepper-item
            :title="
              $vuetify.display.mdAndUp ? 'หน่วยงานรับเรื่องร้องเรียน' : ''
            "
            value="4"
            :complete="step > 3"
          ></v-stepper-item>
        </v-stepper-header>
        <template v-if="step == 0"> <AppealRequest /> </template>
        <template v-if="step == 1"> <FormUpload /> </template>
        <template v-if="step == 2"> <DirextoryUpload /> </template>
        <template v-if="step == 3"> <ReceivingAgency /> </template>
        <div class="d-flex justify-end mr-8 mb-6">
          <v-btn
            size="x-large"
            color="grey-darken-1"
            class="mr-4"
            v-if="step > 0"
            @click="step--"
            >ย้อนกลับ</v-btn
          >
          <v-btn size="x-large" color="#1a237e" @click="step++" v-if="step < 3"
            >ถัดไป</v-btn
          >
          <v-btn size="x-large" color="#39ab4e" v-if="step >= 3">บันทึก</v-btn>
        </div>
      </v-stepper>
    </div>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AppealRequest from '@/components/menuAppeal/formAppeal/AppealRequest.vue'
import FormUpload from '@/components/menuAppeal/formAppeal/FormUpload.vue'
import DirextoryUpload from '@/components/menuAppeal/formAppeal/DirextoryUpload.vue'
import ReceivingAgency from '@/components/menuAppeal/formAppeal/ReceivingAgency.vue'

const route = useRoute()
const step = ref(0)

onMounted(() => {
  if (route.query.step) {
    step.value = parseInt(route.query.step)
  }
})
</script>
