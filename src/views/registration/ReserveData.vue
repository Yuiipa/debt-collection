<template>
  <div
    style="background-color: #1a237e; color: white"
    class="d-flex justify-center"
  >
    <span
      class="d-flex align-center justify-center"
      style="font-size: 40px; color: white; height: 100px"
    >
      สำรองข้อมูล
    </span>
  </div>
  <v-container class="d-flex justify-center">
    <div class="mt-8 pa-6 elevation-3 rounded-lg w-100">
      <v-row class="d-flex justify-center">
        <v-col cols="4" class="text-start">
          <span style="color: red">*</span> ข้อมูล
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col cols="4">
          <v-autocomplete
            placeholder="กรุณาเลือกผู้ตรวจ"
            variant="outlined"
            density="compact"
            hide-details="auto"
            persistent-placeholder
          ></v-autocomplete
        ></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex justify-end">
          <v-btn color="primary" class="mx-2">
            <v-icon left class="mr-1">mdi-server</v-icon>
            สำรองข้อมูลทั้งหมด
          </v-btn>
          <v-btn color="secondary" class="mx-2">
            <v-icon left class="mr-1">mdi-content-save</v-icon>
            สำรองข้อมูล
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>