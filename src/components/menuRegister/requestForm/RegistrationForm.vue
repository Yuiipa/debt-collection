<template>

      <v-card>
        <div class="px-5">
          <v-card-title class="mt-1">
            <span class="font-weight-bold" style="color: #1a237e">
                คำขอจดทะเบียนการประกอบธุรกิจทวงถามหนี้
            </span>
          </v-card-title>
          <v-divider :thickness="2" color="#1a237e" />
        </div>
        <v-divider class="opacity-100" :thickness="1"></v-divider>
        <v-card-text class="py-6">
          <v-form ref="form">
            <v-row>
              <v-col cols="12" md="6" class="pa-0">
                <div class="v-col-12 py-0 font-weight-bold">
                    คำขอจดทะเบียนการประกอบธุรกิจทวงถามหนี้
                </div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                ></v-text-field>
                <div class="v-col-12 py-0 pr-0 text-body-2" style="color: red">
                  (ในกรณีที่ผู้ประกอบธุรกิจทวงถามหนี้เป็นสาขาหรือตัวแทน
                  ให้ระบุชื่อสำนักงานใหญ่หรือตัวการใหญ่)
                </div>
              </v-col>
              <v-col cols="12" md="3" class="pa-0">
                <div class="v-col-12 py-0 font-weight-bold">ประเภทธุรกิจ</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3" class="pa-0">
                <div class="v-col-12 py-0 font-weight-bold">วันหมดอายุ</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="3" class="pa-0">
                <div class="v-col-12 py-0 font-weight-bold">คำนำหน้านาม</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" class="pa-0">
                <div class="v-col-12 py-0 font-weight-bold">ชื่อ-สกุล</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3" class="pa-0">
                <div class="v-col-12 py-0 font-weight-bold">อายุ</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="3" class="pa-0">
                <div class="v-col-12 py-0 font-weight-bold">สัญชาติ</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" class="pa-0">
                <div class="v-col-12 py-0 font-weight-bold">
                  เลขประจำตัวประชาชน
                </div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mt-6">
              <v-col cols="12" md="6" class="py-0 px-0">
                <div class="v-col-12 py-0 font-weight-bold">
                  ที่อยู่ อาคาร เป็น
                </div>
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
                <div class="v-col-12 py-0 font-weight-bold">เลขที่</div>
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
                <div class="v-col-12 py-0 font-weight-bold">หมู่ที่</div>
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
                <div class="v-col-12 py-0 font-weight-bold">จังหวัด</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="py-0 px-0">
                <div class="v-col-12 py-0 font-weight-bold">เขต/อำเภอ</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="py-0 px-0">
                <div class="v-col-12 py-0 font-weight-bold">แขวง/ตำบล</div>
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
                <div class="v-col-12 py-0 font-weight-bold">โทรศัพท์</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="py-0 px-0">
                <div class="v-col-12 py-0 font-weight-bold">โทรสาร</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="py-0 px-0">
                <div class="v-col-12 py-0 font-weight-bold">
                  จดหมายอิเล็กทรอนิกส์
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
                <div class="v-col-12 py-0 font-weight-bold">
                  ที่อยู่ อาคาร เป็น
                </div>
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
                <div class="v-col-12 py-0 font-weight-bold">เลขที่</div>
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
                <div class="v-col-12 py-0 font-weight-bold">หมู่ที่</div>
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
                <div class="v-col-12 py-0 font-weight-bold">จังหวัด</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="py-0 px-0">
                <div class="v-col-12 py-0 font-weight-bold">เขต/อำเภอ</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="py-0 px-0">
                <div class="v-col-12 py-0 font-weight-bold">แขวง/ตำบล</div>
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
                <div class="v-col-12 py-0 font-weight-bold">โทรศัพท์</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="py-0 px-0">
                <div class="v-col-12 py-0 font-weight-bold">โทรสาร</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="py-0 px-0">
                <div class="v-col-12 py-0 font-weight-bold">
                  จดหมายอิเล็กทรอนิกส์
                </div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-divider :thickness="5" color="#1a237e" />
        <v-card-actions class="d-flex justify-space-between pb-4">
          <v-row class="d-flex justify-start">
            <v-col cols="3"></v-col>
            <v-col md="3" cols="12">
              <v-btn
                style="
                  width: 100%;
                  height: 47px;
                  background-color: grey;
                  color: white;
                "
                @click="close"
              >
                <div class="text-h6">ปิด</div>
              </v-btn>
            </v-col>
  
            <v-col md="3" cols="12" justify="end">
              <v-btn
                style="
                  width: 100%;
                  height: 47px;
                  background-color: #1a237e;
                  color: white;
                "
                class="mr-4"
              >
                <div class="text-h6">บันทึก</div>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>

  </template>
                  
      <script setup>
  import { ref, watch  } from 'vue'
  
  // รับ props ด้วย defineProps
  const props = defineProps({
    item: {
      type: Object,
      required: false,
    },
  })

  
  const internalItem = ref({ ...props.item })
  
  </script>
                
                  
         