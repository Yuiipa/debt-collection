<template>
  <v-row class="d-flex">
    <v-col cols="12">
      <div class="background w-100"></div>
    </v-col>
  </v-row>
  <v-card class="custom-card d-flex flex-column justify-center mt-12" :style="$vuetify.display.mdAndUp?'width:40%;height:70%':'width:80%;height:70%'">
    <v-row class="ma-1">
      <v-col cols="12" class="d-flex justify-center align-center">
        <div :class="$vuetify.display.mdAndUp?'text-h3 font-weight-bold':'text-h4 font-weight-bold'" style="color:#1a237e">เปลี่ยนรหัสผ่าน</div>
      </v-col>
    </v-row>
    <v-row class="ma-1">
      <v-col cols="12" class="py-0">
        <div class="mb-2 font-weight-bold">รหัสผ่านเก่า</div>
        <v-text-field
          variant="outlined"
          placeholder="รหัสผ่านเก่า"
          persistent-placeholder
          hide-details
          density="compact"
        />
      </v-col>
    </v-row>
    <v-row class="ma-1">
      <v-col cols="12" class="py-0">
        <div class="mb-2 font-weight-bold">รหัสผ่านใหม่</div>
        <v-text-field
          variant="outlined"
          placeholder="รหัสผ่านใหม่"
          persistent-placeholder
          hide-details
          density="compact"
        />
      </v-col>
    </v-row>
    <v-row class="ma-1">
      <v-col cols="12" class="py-0">
        <div class="mb-2 font-weight-bold">ยืนยันรหัสผ่านใหม่</div>
        <v-text-field
          variant="outlined"
          placeholder="ยืนยันรหัสผ่านใหม่"
          persistent-placeholder
          hide-details
          density="compact"
        />
      </v-col>
    </v-row>
    <v-row class="ma-1">
      <v-col cols="12" class="py-0">
        <v-btn block style="background-color: #1a237e; color: white;height:75%">
          <div class="text-h5">บันทึก</div>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.background {
  background-image: url('/src/assets/dopa_bg.png');
  background-size: cover;
  background-position: center;
  height: 50vh;
  position: relative;
}

.custom-card {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -25%);
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 20px;
  z-index: 10;
}
</style>
