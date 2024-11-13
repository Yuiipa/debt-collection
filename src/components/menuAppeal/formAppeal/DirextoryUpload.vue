<template>
  <v-form ref="form">
    <v-card class="ma-8 custom-card">
      <v-row class="ma-1 mx-4">
        <v-col cols="12">
          <div class="mb-2 font-weight-bold">
            สารบบการรับเรื่องร้องเรียน ตามพระราชบัญญัติการทวงถามหนี้ พ.ศ.๒๕๕๘
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-text-field
            variant="outlined"
            placeholder="เขียนที่"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>
