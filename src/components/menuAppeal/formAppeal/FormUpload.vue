<template>
  <v-form ref="form">
    <v-card class="ma-8 custom-card">
      <v-row class="ma-1 mx-4">
        <v-col cols="12">
          <div class="mb-2 font-weight-bold">
            อัปโหลดแบบฟอร์มเรื่องร้องเรียน (รทน.1)
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <UploadFile />
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script setup>
import UploadFile from '@/components/UploadFile'
</script>
