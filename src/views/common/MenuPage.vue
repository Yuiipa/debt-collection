<template>
  <v-row class="d-flex">
    <v-col cols="12">
      <div class="background w-100 d-flex justify-center align-center">
        <span class="text-h4 font-weight-bold" style="color: #fff">
          ยินดีต้อนรับ นางสาวรุ่งนภา สะสม
        </span>
      </div>
    </v-col>
  </v-row>
  <v-row class="d-flex">
    <v-col cols="12">
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <v-btn
            variant="outlined"
            class="mr-4"
            style="height: 30vh; width: 50vh; color: orange"
            @click="$router.push({ name: 'debt-home-registration' })"
          >
            การจดทะเบียน
          </v-btn>
          <v-btn
            variant="outlined"
            class="ml-4"
            style="height: 30vh; width: 50vh; color: #1a237e"
            @click="$router.push({ name: 'debt-home-appeal' })"
          >
            การรายงานเรื่องร้องเรียนและผลการปฏิบัติงานอื่น ๆ
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped>
.background {
  background-image: url('/src/assets/dopa_bg.png');
  background-size: cover;
  background-position: center;
  height: 50vh;
}
</style>
