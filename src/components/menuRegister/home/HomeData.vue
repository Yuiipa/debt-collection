<template>
  <v-form ref="form">
    <div class="ma-8 pa-6 elevation-3 rounded-lg" style="background-color: white;">
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
        <div class="v-col-12 v-col-sm-4  py-0 d-flex align-center justify-end text-end">
          เลขที่คำขอ
        </div>
        <v-text-field
          class="v-col-12 v-col-sm-6"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>
      <v-row>
        <div class="v-col-12 v-col-sm-4  py-0 d-flex align-center justify-end text-end">
          ทะเบียนเลขที่
        </div>
        <v-text-field
          class="v-col-12 v-col-sm-6"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>
      <v-row>
        <div class="v-col-12 v-col-sm-4  py-0 d-flex align-center justify-end text-end">
          เลขประจำตัวประชาชนผู้ประกอบธุรกิจ
        </div>
        <v-text-field
          class="v-col-12 v-col-sm-6"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>
      <v-row>
        <div class="v-col-12 v-col-sm-4  py-0 d-flex align-center justify-end text-end">
          ชื่อ-นามสกุล ผู้ขอจดทะเบียน
        </div>
        <v-text-field
          class="v-col-12 v-col-sm-6"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>
      <v-row>
        <div class="v-col-12 v-col-sm-4  py-0 d-flex align-center justify-end text-end">
          สัญชาติผู้ขอจดทะเบียน
        </div>
        <v-text-field
          class="v-col-12 v-col-sm-6"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>
      <v-row>
        <div class="v-col-12 v-col-sm-4  py-0 d-flex align-center justify-end text-end">
          ชื่อธุรกิจ
        </div>
        <v-text-field
          class="v-col-12 v-col-sm-6"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>

      <v-row>
        <div class="v-col-12 v-col-sm-4  py-0 d-flex align-center justify-end text-end">
          ประเภทกิจการ
        </div>
        <v-text-field
          class="v-col-12 v-col-sm-6"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>
      <v-row>
        <div class="v-col-12 v-col-sm-4  py-0 d-flex align-center justify-end text-end">
          ที่อยู่อาคาร
        </div>
        <v-text-field
          class="v-col-12 v-col-sm-6"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>

      <v-row>
        <div class="v-col-12 v-col-sm-4  py-0 d-flex align-center justify-end text-end">ชั้นที่</div>
        <v-text-field
          class="v-col-12 v-col-sm-6"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>
      <v-row>
        <div class="v-col-12 v-col-sm-4  py-0 d-flex align-center justify-end text-end">เลขที่</div>
        <v-text-field
          class="v-col-12 v-col-sm-6"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>

      <v-row>
        <div class="v-col-12 v-col-sm-4  py-0 d-flex align-center justify-end text-end">หมู่</div>
        <v-text-field
          class="v-col-12 v-col-sm-6"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>
      <v-row>
        <div class="v-col-12 v-col-sm-4  py-0 d-flex align-center justify-end text-end">ซอย/ตรอก</div>
        <v-text-field
          class="v-col-12 v-col-sm-6"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>

      <v-row>
        <div class="v-col-12 v-col-sm-4  py-0 d-flex align-center justify-end text-end">ถนน</div>
        <v-text-field
          class="v-col-12 v-col-sm-6"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>
      <v-row>
        <div class="v-col-12 v-col-sm-4  py-0 d-flex align-center justify-end text-end">ตำบล</div>
        <v-text-field
          class="v-col-12 v-col-sm-6"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>

      <v-row>
        <div class="v-col-12 v-col-sm-4  py-0 d-flex align-center justify-end text-end">อำเภอ</div>
        <v-text-field
          class="v-col-12 v-col-sm-6"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>
      <v-row>
        <div class="v-col-12 v-col-sm-4  py-0 d-flex align-center justify-end text-end">จังหวัด</div>
        <v-text-field
          class="v-col-12 v-col-sm-6"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>

      <v-row>
        <div class="v-col-12 v-col-sm-4  py-0 d-flex align-center justify-end text-end">โทรศัพท์</div>
        <v-text-field
          class="v-col-12 v-col-sm-6"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>
      <v-row>
        <div class="v-col-12 v-col-sm-4  py-0 d-flex align-center justify-end text-end">โทรสาร</div>
        <v-text-field
          class="v-col-12 v-col-sm-6"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>

      <v-row>
        <div class="v-col-12 v-col-sm-4  py-0 d-flex align-center justify-end text-end">
          จดหมายอิเลคทรอนิกส์
        </div>
        <v-text-field
          class="v-col-12 v-col-sm-6"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>
      <v-row>
        <div class="v-col-12 v-col-sm-4  py-0 d-flex align-center justify-end text-end">
          วัน/เดือน/ปี ที่ได้จดทะเบียน
        </div>
        <v-text-field
          class="v-col-12 v-col-sm-6"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>

      <v-row>
        <div class="v-col-12 v-col-sm-4  py-0 d-flex align-center justify-end text-end">
          สำนักงานทะเบียนที่รับจดทะเบียน
        </div>
        <v-text-field
          class="v-col-12 v-col-sm-6"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>
      <v-row>
        <div class="v-col-12 v-col-sm-4  py-0 d-flex align-center justify-end text-end">
          ชื่อผู้บันทึกข้อมูล
        </div>
        <v-text-field
          class="v-col-12 v-col-sm-6"
          variant="outlined"
          density="compact"
          hide-details="auto"
        ></v-text-field>
      </v-row>
    </div>
  </v-form>
  <History />
  <Request />
</template>
    
<script setup>
import History from './History.vue'
import Request from './Request.vue'
</script>
    