<template>
  
  <v-card class="ma-4 mt-4" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h5 text-md-h4 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span> สำรองข้อมูล</span>
    </v-card-title>
  <v-container class="d-flex justify-center">
    <div class=" pa-8 elevation-3 rounded-lg w-100">
      <v-row class="d-flex justify-center">
        <v-col cols="12" md="4" class="text-start">
          <span style="color: red">*</span> ข้อมูล
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col cols="12" md="4">
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
  </v-card>
</template>