<template>
  <v-form ref="form">
    <div class="ma-8 pa-6 elevation-3 rounded-lg">
      <v-row>
        <v-col>
          <div class="font-weight-bold text-h6 text-blue-darken-1">
            ข้อมูลแสดงการจดทะเบียนการประกอบธุรกิจทวงถามหนี้ สำนักงาน จันทร์จิรา
            ฟองแก้ว ทนายความ
          </div>
        </v-col>
      </v-row>
      <v-divider
        class="opacity-100 mt-6 mb-10"
        :thickness="2"
        color="grey"
      ></v-divider>
      <v-row>
        <v-col cols="12" md="6" class="pl-2 py-0">
          <div class="v-col-12 py-0">เลขที่คำขอ</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6" class="pl-2 py-0">
          <div class="v-col-12 py-0">ทะเบียนเลขที่</div>
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
          <div class="v-col-12 py-0">เลขประจำตัวประชาชนผู้ประกอบธุรกิจ</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6" class="pl-2 py-0">
          <div class="v-col-12 py-0">ชื่อ-นามสกุล ผู้ขอจดทะเบียน</div>
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
          <div class="v-col-12 py-0">สัญชาติผู้ขอจดทะเบียน</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6" class="pl-2 py-0">
          <div class="v-col-12 py-0">ชื่อธุรกิจ</div>
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
          <div class="v-col-12 py-0">ประเภทกิจการ</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6" class="pl-2 py-0">
          <div class="v-col-12 py-0">ที่อยู่อาคาร</div>
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
          <div class="v-col-12 py-0">ชั้นที่</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6" class="pl-2 py-0">
          <div class="v-col-12 py-0">เลขที่</div>
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
          <div class="v-col-12 py-0">หมู่</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6" class="pl-2 py-0">
          <div class="v-col-12 py-0">ซอย/ตรอก</div>
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
          <div class="v-col-12 py-0">ถนน</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6" class="pl-2 py-0">
          <div class="v-col-12 py-0">ตำบล</div>
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
          <div class="v-col-12 py-0">อำเภอ</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6" class="pl-2 py-0">
          <div class="v-col-12 py-0">จังหวัด</div>
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
          <div class="v-col-12 py-0">โทรศัพท์</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6" class="pl-2 py-0">
          <div class="v-col-12 py-0">โทรสาร</div>
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
          <div class="v-col-12 py-0">จดหมายอิเลคทรอนิกส์</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6" class="pl-2 py-0">
          <div class="v-col-12 py-0">วัน/เดือน/ปี ที่ได้จดทะเบียน</div>
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
          <div class="v-col-12 py-0">สำนักงานทะเบียนที่รับจดทะเบียน</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6" class="pl-2 py-0">
          <div class="v-col-12 py-0">ชื่อผู้บันทึกข้อมูล</div>
          <v-text-field
            class="v-col-12"
            variant="outlined"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
    </div>
  </v-form>
</template>
  
  <script setup>
</script>
  