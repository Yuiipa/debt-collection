<template>
  <v-form ref="form">
    <v-card class="ma-8 custom-card">
      <v-row class="ma-1 mx-4">
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">
            หน่วยงานที่รับเรื่องร้องเรียน
          </div>
          <v-text-field
            variant="outlined"
            placeholder="หน่วยงานที่รับเรื่องร้องเรียน"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
      </v-row>
      <v-row class="ma-1 mx-4">
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">
            ยื่นเมื่อวันที่
          </div>
          <v-text-field
            variant="outlined"
            placeholder="ยื่นเมื่อวันที่"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">
            ชื่อ นามสกุลผู้ยื่นเรื่องร้องเรียน
          </div>
          <v-text-field
            variant="outlined"
            placeholder="ชื่อ นามสกุลผู้ยื่นเรื่องร้องเรียน"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
      </v-row>
      <v-row class="ma-1 mx-4">
        <v-col cols="12">
          <div class="mb-2 font-weight-bold">
            ได้ยื่นเรื่องร้องเรียนเรื่อง
          </div>
          <v-textarea
            variant="outlined"
            placeholder="ได้ยื่นเรื่องร้องเรียนเรื่อง"
            persistent-placeholder
            hide-details
            density="compact"
            no-resize
          />
        </v-col>
      </v-row>
      <v-row class="ma-1">
        <v-col cols="12">
          <div class="mb-2 font-weight-bold">
            หน่วยงานรับเรื่องร้องเรียน
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
