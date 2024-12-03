<template>
  <div
    class="mx-10 my-8 px-6 py-6 elevation-3 rounded-lg"
    style="background-color: white"
  >
    <v-row>
      <v-col cols="10">
        <div class="font-weight-bold text-h6" style="color: #1a237e">
          คำขอจดทะเบียนการประกอบธุรกิจทวงถามหนี้
        </div>
      </v-col>
    </v-row>
    <v-divider
      class="opacity-100 mt-6 mb-6"
      :thickness="2"
      color="grey"
    ></v-divider>
    <v-card class="elevation-0">
      <v-card-text class="pb-6">
        <v-form ref="form">
          <v-row class="d-flex justify-end">
            <v-col md="3" cols="12">
              <div class="mb-2 font-weight-bold">
                <div style="color: red" class="d-inline-flex">*</div>
                เขียนที่
              </div>
              <v-text-field
                variant="outlined"
                placeholder="เขียนที่"
                persistent-placeholder
                hide-details
                density="compact"
              />
            </v-col>
          </v-row>
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
          <v-row class="px-0">
            <v-col cols="12" class="px-0">
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
          <v-row>
            <v-col cols="12" class="px-0">
              <v-card-title
                class="font-weight-bold"
                style="background-color: #e3f2fd; color: #1a237e"
              >
                หลักฐานต่างๆเพื่อประกอบการพิจารณา
              </v-card-title>
            </v-col>
          </v-row>
          <v-row class="mb-2">
            <v-col cols="12" md="12" class="py-0 px-0">
              <div class="v-col-12 py-0 font-weight-bold">
                สำเนาบัตรประจำตัวประชาชน หรือสำเนาหนังสือเดินทาง
                หรือใบสำคัญประจำตัวคนต่างด้าว พร้อมลงลายมือชื่อรับรองสำเนา
              </div>
            </v-col>
          </v-row>
          <UploadFile />
          <v-row class="mb-2">
            <v-col cols="12" md="12" class="py-0 px-0">
              <div class="v-col-12 py-0 font-weight-bold">
                สำเนาทะเบียนบ้าน
                หรือสำเนาใบสำคัญถิ่นที่อยู่ในราชอาณาจักรหรือหลักฐานการได้รับอนุญาติให้เข้ามาในราชอาณาจักรเป็นการชั่วคราวตามกฏหมายว่าด้วยคนเข้าเมือง
                พร้อมลงลายมือชื่อรับรองสำเนา
              </div>
            </v-col>
          </v-row>
          <UploadFile />
          <v-row class="mb-2">
            <v-col cols="12" md="12" class="py-0 px-0">
              <div class="v-col-12 py-0 font-weight-bold">
                สำเนาใบอนุญาติประกอบธุรกิจ
                หรือสำเนาหนังสือรับรองการประกอบธุรกิจตามกฏหมายว่าด้วยการประกอบธุรกิจของคนต่างด้าว
              </div>
            </v-col>
          </v-row>
          <UploadFile />
          <v-row class="mb-2">
            <v-col cols="12" md="12" class="py-0 px-0">
              <div class="v-col-12 py-0 font-weight-bold">
                แผนที่สังเขปแสดงบริเวณที่ตั้งของสถานประกอบธุรกิจทวงถามหนี้
              </div>
            </v-col>
          </v-row>
          <UploadFile />
          <v-row class="mb-2">
            <v-col cols="12" md="12" class="py-0 px-0">
              <div class="v-col-12 py-0 font-weight-bold">
                หลักฐานแสดงความเป็นเจ้าของสถานประกอบธุรกิจทวงถามหนี้
                หรือหนังสือแสดงความยินยอมให้ใช้เป็นสถานประกอบธุรกิจทวงถามหนี้ในกรณีที่สถานที่นั้นเป็นของผู้อื่น
              </div>
            </v-col>
          </v-row>
          <UploadFile />
          <v-row class="mb-2">
            <v-col cols="12" md="12" class="py-0 px-0">
              <div class="v-col-12 py-0 font-weight-bold">
                สำเนาหนังสือรับรองการจดทะเบียนนิติบุคคล
                ซึ่งแสดงรายการเกี่ยวกับชื่อ วัตถุประสงค์ ที่ตั้งสำนักงาน
                และผู้อำนวยลงนามผูกพันนิติบุคคล โดยทำขึ้นไว้ไม่เกินสามเดือน
              </div>
              <div class="v-col-12 py-0 pr-0 text-body-2" style="color: red">
                (กรณีนิติบุคคลเป็นผู้ขออนุญาติประกอบธุรกิจทวงถามหนี้)
              </div>
            </v-col>
          </v-row>
          <UploadFile />
          <v-row class="mb-2">
            <v-col cols="12" md="12" class="py-0 px-0">
              <div class="v-col-12 py-0 font-weight-bold">
                หนังสือแต่งตั้งผู้แทนนิติบุคคลซึ่งต้องเป็นกรรมการหรือบุคคลซึ่งมีอำนาจลงนามผูกพันนิติบุคคล
              </div>
            </v-col>
          </v-row>
          <UploadFile />
          <v-divider
            class="opacity-100 mt-6 mb-8"
            :thickness="2"
            color="blue"
          ></v-divider>
          <v-row>
            <v-col
              cols="12"
              class="d-flex justify-center font-weight-bold pa-0"
            >
              <span>คำสั่งนายทะเบียน</span>
            </v-col>
            <v-textarea
              class="v-col-12 px-2"
              variant="outlined"
              density="compact"
              hide-details="auto"
            ></v-textarea>
          </v-row>
        </v-form>
      </v-card-text>
      <v-divider :thickness="5" color="#1a237e" />
      <v-card-actions class="d-flex justify-space-between pb-4">
        <v-row class="d-flex justify-center">
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
  </div>
</template>
                  
      <script setup>
import { ref, watch } from 'vue'
import UploadFile from '@/components/UploadFile.vue'

// รับ props ด้วย defineProps
const props = defineProps({
  item: {
    type: Object,
    required: false,
  },
})

const internalItem = ref({ ...props.item })
</script>
                
                  
         