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
  <v-row class="d-flex mt-10">
    <v-col cols="12">
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <v-card
            class="mr-4 d-flex flex-column align-center pa-4 rounded-xl"
            variant="outlined"
            style="height: 30vh; width: 50vh"
            id="license"
            @click="$router.push({ name: 'debt-home-registration' })"
          >
            <v-icon size="100" class="my-2">mdi-file-document-edit</v-icon>
            <span class="text-h5 text-center mt-16">การจดทะเบียน</span>
            <!-- <v-icon size="50" class="mb-2">mdi-minus</v-icon> -->
          </v-card>
          <v-card
            class="ml-4 d-flex flex-column align-center pa-4 rounded-xl"
            variant="outlined"
            style="height: 30vh; width: 50vh"
            id="report"
            @click="$router.push({ name: 'debt-home-appeal' })"
          >
            <v-icon size="100" class="my-2"
              >mdi-chart-bell-curve-cumulative</v-icon
            >
            <span class="text-h5 text-center mt-12"
              >การรายงานเรื่องร้องเรียน</span
            >
            <span class="text-h5 text-center">และผลการปฏิบัติงานอื่น ๆ</span>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped>
.v-card#license {
  background-color: #fafafa !important;
  color: orange !important;
}
.v-card#license:hover {
  background-color: orange !important;
  color: white !important;
}
.v-card#report {
  background-color: #fafafa !important;
  color: #1a237e !important;
}
.v-card#report:hover {
  background-color: #1a237e !important;
  color: white !important;
}
.background {
  background-image: url('/src/assets/dopa_bg.png');
  background-size: cover;
  background-position: center;
  height: 50vh;
}
</style>
