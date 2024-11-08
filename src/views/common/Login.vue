<template>
  <div class="login-background w-100">
    <v-row justify="center" align="center" class="fill-height">
      <v-card max-width="900" class="login-card" elevation="10">
        <v-row no-gutters>
          <!-- ส่วนที่เป็นรูปภาพทางซ้าย -->
          <v-col cols="12" md="6">
            <v-img
              src="/src/assets/bg.png"
              alt="Background Image"
              class="image-section"
              height="100%"
              contain
            ></v-img>
          </v-col>

          <!-- ส่วนที่เป็น field login -->
          <v-col cols="12" md="6">
            <v-card-text>
              <!-- โลโก้และหัวข้อ -->

              <v-row class="logo-section">
                <v-col cols="3">
                  <v-img
                    src="/src/assets/logo.png"
                    alt="Logo"
                    max-width="100"
                  ></v-img>
                </v-col>
                <v-col class="text-left">
                  <h3>ระบบฐานข้อมูลตามพระราชบัญญัติการทวงถามหนี้</h3>
                  <p>Database on Debt Collection Act, B.E. 2558</p>
                </v-col>
              </v-row>

              <!-- Text Field สำหรับ Login -->
              <v-row>
                <v-container class="align-center justify-center">
                  <v-row>
                    <v-col col="12" lg="12" md="12" sm="12" class="black-text">
                      <v-text-field
                        variant="outlined"
                        placeholder="เลขประจำตัวประชาชน"
                        label="เลขประจำตัวประชาชน"
                        persistent-placeholder
                        hide-details
                        v-model="username"
                        v-mask="'#-####-#####-##-#'"
                      />
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col col="12" lg="12" md="12" sm="12" class="black-text">
                      <v-text-field
                        variant="outlined"
                        placeholder="รหัสผ่าน"
                        label="รหัสผ่าน"
                        persistent-placeholder
                        hide-details
                        v-model="password"
                        @keydown.enter="login()"
                        :feedback="false"
                        type="password"
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col col="12" lg="12" md="12" sm="12" class="text-center">
                      <v-btn color="primary" class="mt-20" block @click="$router.push({ name: 'debt-menu-page' })">
                        เข้าสู่ระบบ
                      </v-btn>
                    </v-col>
                  </v-row>
                  <div class="py-4" />
                </v-container>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
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

.login-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  max-width: 900px;
}

.image-section {
  width: 100%;
  height: 100%;
}

.logo-section {
  text-align: center;
  margin-bottom: 20px;
}
</style>
