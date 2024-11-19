<template>
  <v-form ref="form">
    <div class="d-flex justify-start align-end mt-4 px-10">
      <span>
        <span class="text-blue-darken-4" style="font-size: 30px">
          คำขอรับใบแทนหนังสือสำคัญแสดงการจดทะเบียนการประกอบธุรกิจทวงถามหนี้
        </span>
      </span>
    </div>
    <div
      class="ma-8 mt-2 pa-6 elevation-3 rounded-lg"
      style="background-color: white"
    >
      <v-row>
        <v-col cols="10">
          <div class="font-weight-bold text-h6 text-blue-darken-1">
            ขอรับใบแทนหนังสือสำคัญแสดงการจดทะเบียนประกอบธุรกิจทวงถามหนี้
          </div>
        </v-col>
      </v-row>
      <v-divider
        class="opacity-100 mt-6 mb-10"
        :thickness="2"
        color="grey"
      ></v-divider>
      <v-row class="d-flex justify-end">
        <v-col cols="12" md="3" class="pl-2 pa-0">
          <div class="v-col-12 py-0 font-weight-bold">
            <span style="color: red">* </span>เขียนที่
          </div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12" class="pl-2 py-0">
          <div class="v-col-12 pa-0 font-weight-bold">
            <span style="color: red">* </span>ข้าพเจ้า
          </div>
          <v-text-field
            class="v-col-12 px-0"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3" class="pl-2 py-0">
          <div class="v-col-12 pa-0 font-weight-bold">
            <span style="color: red">* </span>สัญชาติ
          </div>
          <v-text-field
            class="v-col-12 px-0"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="3" class="pl-2 py-0">
          <div class="v-col-12 pa-0 font-weight-bold">
            <span style="color: red">* </span>อายุ
          </div>
          <v-text-field
            class="v-col-12 px-0"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="3" class="pl-2 py-0">
          <div class="v-col-12 pa-0 font-weight-bold">
            <span style="color: red">* </span>หมายเลขประจำตัวประชาชน
          </div>
          <v-text-field
            class="v-col-12 px-0"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="3" class="pl-2 py-0">
          <div class="v-col-12 pa-0 font-weight-bold">
            <span style="color: red">* </span>
            หมายเลขใบอนุญาตให้เป็นทนายความเลขที่
          </div>
          <v-text-field
            class="v-col-12 px-0"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3" class="pl-2 py-0">
          <div class="v-col-12 pa-0 font-weight-bold">
            <span style="color: red">* </span>อยู่บ้านเลขที่
          </div>
          <v-text-field
            class="v-col-12 px-0"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="3" class="pl-2 py-0">
          <div class="v-col-12 pa-0 font-weight-bold">
            <span style="color: red">* </span>หมู่ที่
          </div>
          <v-text-field
            class="v-col-12 px-0"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="3" class="pl-2 py-0">
          <div class="v-col-12 pa-0 font-weight-bold">ซอย/ตรอก</div>
          <v-text-field
            class="v-col-12 px-0"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="3" class="pl-2 py-0">
          <div class="v-col-12 pa-0 font-weight-bold">ถนน</div>
          <v-text-field
            class="v-col-12 px-0"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" class="pl-2 py-0">
          <div class="v-col-12 pa-0 font-weight-bold">
            <span style="color: red">* </span>จังหวัด
          </div>
          <v-text-field
            class="v-col-12 px-0"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" class="pl-2 py-0">
          <div class="v-col-12 pa-0 font-weight-bold">
            <span style="color: red">* </span>อำเภอ/เขต
          </div>
          <v-text-field
            class="v-col-12 px-0"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" class="pl-2 py-0">
          <div class="v-col-12 pa-0 font-weight-bold">
            <span style="color: red">* </span> ตำบล/แขวง
          </div>
          <v-text-field
            class="v-col-12 px-0"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6" class="pl-2 py-0">
          <div class="v-col-12 pa-0 font-weight-bold">
            <span style="color: red">* </span>โทรศัพท์
          </div>
          <v-text-field
            class="v-col-12 px-0"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6" class="pl-2 py-0">
          <div class="v-col-12 pa-0 font-weight-bold">
            <span style="color: red">* </span> โทรสาร
          </div>
          <v-text-field
            class="v-col-12 px-0"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6" class="pl-2 py-0">
          <div class="v-col-12 pa-0 font-weight-bold">
            <span style="color: red">* </span>ชื่อสถานประกอบธุรกิจทวงถามหนี้
          </div>
          <v-text-field
            class="v-col-12 px-0"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6" class="pl-2 py-0">
          <div class="v-col-12 pa-0 font-weight-bold">
            <span style="color: red">* </span> เลขทะเบียน
          </div>
          <v-text-field
            class="v-col-12 px-0"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex align-center font-weight-bold pa-0">
          <span
            >ข้าพเจ้าขอยื่นคำขอ/แจ้งความประสงค์ต่อนายทะเบียนตามพระราชบัญญัติการทวงถามหนี้
            พ.ศ.๒๕๕๘ ดังนี้</span
          >
        </v-col>
        <v-textarea
          class="v-col-12 px-2"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-textarea>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          class="d-flex align-center rounded bg-blue text-white pa-3 mb-3"
        >
          <span>เปลี่ยนชื่อที่ใช้ในการประกอบธุรกิจทวงถามหนี้ เป็น </span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12" class="pl-2 py-0">
          <div class="v-col-12 pa-0 font-weight-bold">
            สำเนาหนังสือแสดงการจดทะเบียนเป็นผู้ประกอบธุรกิจทวงถามหนี้ (ถ้ามี)
          </div>
          <v-text-field
            class="v-col-12 px-0"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12" class="pl-2 py-0">
          <div class="v-col-12 pa-0 font-weight-bold">
            กรณีที่หลักฐานและเอกสารที่ยื่นไว้ในการขออนุญาตมีการแก้ไขหรือเปลี่ยนแปลงผู้ขอต้องยื่นหลักฐานและเอกสารที่มีการแก้ไขเปลี่ยนแปลงด้วย
          </div>
          <v-text-field
            class="v-col-12 px-0"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="1" class="pl-2 pa-0 d-flex align-center justify-center">
          <div class=" pa-0 font-weight-bold">อื่นๆ ระบุ</div>
        </v-col>
        <v-text-field
          class="v-col-12 v-col-md-11"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          class="v-col-12 "
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>

      <v-divider
        class="opacity-100 mt-6 mb-10"
        :thickness="2"
        color="blue"
      ></v-divider>
      <v-row>
        <v-col cols="12" class="d-flex align-center font-weight-bold pa-0">
          <span>คำสั่งนายทะเบียน</span>
        </v-col>
        <v-textarea
          class="v-col-12 px-2"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-textarea>
      </v-row>
      <r-row>
        <v-col cols="12" class="align-center justify-center d-flex">
          <v-btn
            left
            class="px-12"
            style="background-color: #1a237e; color: white"
            >บันทึก</v-btn
          >
        </v-col>
      </r-row>
    </div>
  </v-form>
  <div class="pb-10"></div>
</template>
      
  <script setup>
</script>
      