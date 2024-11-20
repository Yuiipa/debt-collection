<template>
  <div class="login-background w-100 d-flex">
    <v-row class="d-flex justify-end my-8 mx-16">
      <v-col lg="6" cols="12" class="d-flex align-center" v-if="$vuetify.display.lgAndUp">
        <v-row style="color: white" class="d-flex justify-center">
          <v-col cols="12" class="font-weight-bold text-h4">
            <span> ระบบฐานข้อมูลตามพระราชบัญญัติการทวงถามหนี้ พ.ศ. ๒๕๕๘</span>
          </v-col>
          <v-col cols="12" class="font-weight-bold text-h5">
            <span> กรมการปกครอง กระทรวงมหาดไทย </span>
          </v-col>
          <v-col cols="12" class="font-weight-bold text-h5">
            <span> Database on Dept Collection Act, B.E.2558 </span>
          </v-col>
          <v-col cols="12">
            <v-btn
              height="60px"
              variant="text"
              prepend-icon="mdi-arrow-left"
              id="backbtn"
              @click="$router.push({ name: 'debt-home' })"
            >
              กลับสู่หน้าหลัก
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col lg="6" cols="12" :class="$vuetify.display.mdAndUp?'d-flex align-center px-16':'d-flex align-center px-0'">
        <v-card class="rounded-xl">
          <v-row>
            <v-col cols="12" class="d-flex justify-center">
              <v-card
                height="20vh"
                width="20vh"
                class="rounded-circle ma-12 mb-0"
              >
                <v-img src="/src/assets/logo.png"></v-img>
              </v-card>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <span class="font-weight-bold text-h5">ลงชื่อเข้าใช้งาน</span>
            </v-col>
            <v-col cols="12" class="d-flex justify-center px-12 pb-6">
              <v-text-field
                variant="outlined"
                label="ชื่อผู้ใช้"
                hide-details
                rounded="xl"
              />
            </v-col>
            <v-col cols="12" class="d-flex justify-center px-12 pb-6">
              <v-text-field
                label="รหัสผ่าน"
                variant="outlined"
                hide-details
                rounded="xl"
              />
            </v-col>
            <v-col cols="12" class="d-flex justify-center px-12 mb-12">
              <v-btn
                style="
                  width: 100%;
                  height: 47px;
                  background-color: #1a237e;
                  color: white;
                "
                rounded="xl"
                @click="$router.push({ name: 'debt-menu-page' })"
              >
                <div class="text-h6">เข้าสู่ระบบ</div>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style scoped>
.login-background {
  background-image: url('/src/assets/bg.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
}
.v-btn#backbtn:hover {
  background-color: #fafafa !important;
  color: #1a237e !important;
}
</style>
