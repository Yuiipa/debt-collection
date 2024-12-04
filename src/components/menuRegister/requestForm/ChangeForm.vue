<template>
  <v-form ref="form">
    <v-card-title class="d-flex justify-center align-end mt-10 mb-4 px-10">
      <span>
        <span class=" text-h4" style="color: #1a237e">
          คำขอเปลี่ยนแปลงรายการจดทะเบียนผู้ประกอบธุรกิจทวงถามหนี้
        </span>
      </span>
    </v-card-title>
    <div
      class="ma-8 mt-2 pa-6 elevation-3 rounded-lg"
      style="background-color: white"
    >
      <v-row>
        <v-col cols="10">
          <span class="font-weight-bold text-h5" style="color: #1a237e">
            ขอเปลี่ยนแปลงตามแบบ ทคน.๑/๑
          </span>
        </v-col>
      </v-row>
      <v-divider
        class="opacity-100 mt-6 mb-10"
        :thickness="2"
        color="grey"
      ></v-divider>
      <v-row class="d-flex justify-end">
        <v-col cols="12" md="3" class="pl-2 py-0">
          <div class="v-col-12 py-0 font-weight-bold"><div style="color: red" class="d-inline-flex pr-1">*</div>เขียนที่</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" class="pl-2 py-0">
          <div class="v-col-12 py-0 font-weight-bold"><div style="color: red" class="d-inline-flex pr-1">*</div>ข้าพเจ้า</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
          <div class="v-col-12 py-0 pr-0 text-body-2" style="color: red">
            (ชื่อที่ใช้ในการประกอบธุรกิจทวงถามหนี้)
          </div>
        </v-col>
        <v-col cols="12" md="6" class="pl-2 py-0">
          <div class="v-col-12 py-0 font-weight-bold">
            <div style="color: red" class="d-inline-flex pr-1">*</div>ซึ่งได้จดทะเบียนการประกอบธุรกิจทวงถามหนี้ ทะเบียนเลขที่
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
        <v-col>
          ประสงค์จะเปลี่ยนแปลงรายการจดทะเบียนที่ได้จดทะเบียนไว้ดังนี้
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="5" class="d-flex align-center">
          <v-checkbox
            class="mr-2"
            density="compact"
            hide-details="auto"
          ></v-checkbox>
          <span>เปลี่ยนชื่อที่ใช้ในการประกอบธุรกิจทวงถามหนี้ เป็น </span>
        </v-col>
        <v-text-field
          class="v-col-12 v-col-md-4"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex align-center">
          <v-checkbox
            class="mr-2"
            density="compact"
            hide-details="auto"
          ></v-checkbox>
          <span>เปลี่ยนแปลงที่ตั้งสถานประกอบธุรกิจทวงถามหนี้ เป็น</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card-title
            class="font-weight-bold"
            style="background-color: #e3f2fd; color: #1a237e"
          >
            ข้อมูลสถานประกอบธุรกิจ
          </v-card-title>
        </v-col>
      </v-row>
      <v-row class="mt-6">
        <v-col cols="12" md="6" class="py-0 px-0">
          <div class="v-col-12 py-0 font-weight-bold"><div style="color: red" class="d-inline-flex pr-1">*</div>ที่อยู่ อาคาร</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="3" class="py-0 px-0">
          <div class="v-col-12 py-0 font-weight-bold">ชั้นที่</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="3" class="py-0 px-0">
          <div class="v-col-12 py-0 font-weight-bold"><div style="color: red" class="d-inline-flex pr-1">*</div>เลขที่</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" class="py-0 px-0">
          <div class="v-col-12 py-0 font-weight-bold"><div style="color: red" class="d-inline-flex pr-1">*</div>หมู่ที่</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" class="py-0 px-0">
          <div class="v-col-12 py-0 font-weight-bold">ซอย/ตรอก</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" class="py-0 px-0">
          <div class="v-col-12 py-0 font-weight-bold">ถนน</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" class="py-0 px-0">
          <div class="v-col-12 py-0 font-weight-bold"><div style="color: red" class="d-inline-flex pr-1">*</div>จังหวัด</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" class="py-0 px-0">
          <div class="v-col-12 py-0 font-weight-bold"><div style="color: red" class="d-inline-flex pr-1">*</div>เขต/อำเภอ</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" class="py-0 px-0">
          <div class="v-col-12 py-0 font-weight-bold"><div style="color: red" class="d-inline-flex pr-1">*</div>แขวง/ตำบล</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" class="py-0 px-0">
          <div class="v-col-12 py-0 font-weight-bold"><div style="color: red" class="d-inline-flex pr-1">*</div>โทรศัพท์</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" class="py-0 px-0">
          <div class="v-col-12 py-0 font-weight-bold"><div style="color: red" class="d-inline-flex pr-1">*</div>โทรสาร</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" class="py-0 px-0">
          <div class="v-col-12 py-0 font-weight-bold"><div style="color: red" class="d-inline-flex pr-1">*</div>จดหมายอิเล็กทรอนิกส์</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-divider
        class="opacity-100 mt-6 mb-10"
        :thickness="2"
        color="grey"
      ></v-divider>
      <v-row>
        <v-col cols="12" md="5" class="d-flex align-center">
          <v-checkbox
            class="mr-2"
            density="compact"
            hide-details="auto"
          ></v-checkbox>
          <span>เปลี่ยนแปลงผู้แทนคณะบุคคล/ห้างหุ้นส่วนสามัญ/นิติบุคคลเป็น</span>
        </v-col>
        <v-text-field
          class="v-col-4"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-col cols="12" md="5" class="d-flex align-center">
          <v-checkbox
            class="mr-2"
            density="compact"
            hide-details="auto"
          ></v-checkbox>
          <span>เปลี่ยนแปลงหัวหน้าสำนักงานทนายความเป็น</span>
        </v-col>
        <v-text-field
          class="v-col-4"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-col>
          <div class="v-col-12 py-0 font-weight-bold">เอกสารแนบ</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" class="pl-2 py-0">
          <v-text-field
            class="v-col-12"
            placeholder="ระบุ"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6" class="pl-2 py-0">
          <div class="v-col-12 py-0 font-weight-bold"></div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex justify-center font-weight-bold">
          <span>การดำเนินการของนายทะเบียนสภาทนายความ</span>
        </v-col>
        <v-textarea
          class="v-col-12"
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
  <div class="pb-4"></div>
</template>
    