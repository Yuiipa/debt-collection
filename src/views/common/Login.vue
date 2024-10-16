<template>
  <div class="d-block align-center align-content-center px-0 py-0 overflow">
    <v-img src="/src/assets/bg.png" height="100vh" width="100vw">
      <v-layout class="fill-height justify-center align-center text-center">
        <v-card
          class="mx-auto rounded-lg elevation-10 align-content-center"
          width="824px"
          height="574px"
        >
          <v-card-text>
            <div class="d-flex align-end">
              <v-img src="/src/assets/logo.png" :width="140" :height="140" />
            </div>
          </v-card-text>

          <v-card-text>
            <div class="v-row justify-center">
              <span style="font-size: 24px" class="font-weight-bold"
                >ศูนย์ดำรงธรรมอำเภอ กรมการปกครอง กระทรวงมหาดไทย</span
              >
              <span style="font-size: 20px">
                Damrongtham District Justice Provision Center</span
              >
            </div>
          </v-card-text>
          <v-card-text>
            <div class="d-flex v-col-8 offset-2">
              <v-btn
                block
                color="#030650"
                size="x-large"
                rounded="lg"
                class="py-9 font-weight-bold"
              >
                เข้าสู่ระบบด้วย ThaID
                <template v-slot:prepend>
                  <v-img src="/src/assets/thaiD.png" :width="62" :height="62" />
                </template>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-layout>
    </v-img>
  </div>
</template>

<style scoped>
.overflow {
  /* height: 100vh; */
  overflow: hidden !important;
}
/* .v-container {
  width: 100vw;
  padding: 0px;
  margin-right: auto;
  margin-left: auto;
} */
</style>
