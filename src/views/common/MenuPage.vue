<template>
  <div class="d-flex">
    <div class="login-background w-50 d-flex" />
    <div class="w-50 d-flex menu">
      <v-row>
        <v-col cols="12" class="d-flex align-center text-h4 font-weight-bold">
          <v-row>
            <v-col
              cols="12"
              class="d-flex justify-center text-h4 font-weight-bold"
            >
              ยินดีต้อนรับ
            </v-col>
            <v-col
              cols="12"
              class="d-flex justify-center text-h4 font-weight-bold"
            >
              น.ส. รุ่งนภา สะสม
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <v-btn
                variant="outlined"
                append-icon="mdi-file-document-edit"
                width="80%"
                height="100px"
                style="color: white"
                class="text-h4"
                id="regis"
                @click="$router.push({ name: 'debt-home-registration' })"
              >
                การจดทะเบียน
              </v-btn>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <v-btn
                variant="outlined"
                append-icon="mdi-chart-line-variant"
                width="80%"
                height="100px"
                style="color: white"
                class="text-h4"
                id="appeal"
                @click="$router.push({ name: 'debt-home-appeal' })"
              >
                การรายงานเรื่องร้องเรียนและผลการปฏิบัติงานอื่นๆ
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
.login-background {
  background-image: url('/src/assets/money-bg.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
}
.menu {
  background-color: #111751;
  color: white;
}
.v-btn#regis {
  background-color: #1e5a8d !important;
}
.v-btn#appeal {
  background-color: #b0892b !important;
}
</style>
