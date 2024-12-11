<template>
  <v-dialog
    v-model="internalShowDialog"
    max-width="1200px"
    style="z-index: 1000"
  >
    <v-card>
      <div class="px-5">
        <v-card-title class="mt-1">
          <span class="font-weight-bold" style="color: #1a237e">
            คำขอรับใบแทนหนังสือสำคัญแสดงการจดทะเบียนการประกอบธุรกิจทวงถามหนี้
          </span>
        </v-card-title>
        <v-divider :thickness="2" color="#1a237e" />
      </div>

      <v-card-text class="pa-8">
        <v-form ref="form">
          <v-row class="d-flex justify-end px-0">
            <v-col cols="12" md="3" class="py-0 pl-2">
              <div class="v-col-12 pa-0 font-weight-bold">
                <span style="color: red">* </span>เขียนที่
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
                <span style="color: red">* </span>ข้าพเจ้า
              </div>
              <v-text-field
                class="v-col-12 px-0"
                placeholder="ข้าพเจ้า"
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
            <v-col cols="12">
              <v-card-title
                class="font-weight-bold"
                style="background-color: #e3f2fd; color: #1a237e"
              >
                เปลี่ยนชื่อที่ใช้ในการประกอบธุรกิจทวงถามหนี้ เป็น
              </v-card-title>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12" class="pl-2 py-0">
              <div class="v-col-12 pa-0 font-weight-bold">
                สำเนาหนังสือแสดงการจดทะเบียนเป็นผู้ประกอบธุรกิจทวงถามหนี้
                (ถ้ามี)
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
            <v-col
              cols="12"
              md="1"
              class="pl-2 pa-0 d-flex align-center justify-center"
            >
              <div class="pa-0 font-weight-bold">อื่นๆ ระบุ</div>
            </v-col>
            <v-text-field
              class="v-col-12 v-col-md-11"
              placeholder="ระบุ"
              variant="outlined"
              density="compact"
              hide-details="auto"
            ></v-text-field>
          </v-row>
          <v-row>
            <UploadFile/>
          </v-row>

          <v-divider  class="mt-6 mb-8" :thickness="2" color="#1a237e" />
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
      <v-card-actions class="d-flex justify-space-between">
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
  </v-dialog>
</template>


<script setup>
import { ref, watch } from 'vue'
import UploadFile from '@/components/UploadFile.vue'

const props = defineProps({
  showDialog: {
    type: Boolean,
    required: true,
  },
  item: {
    type: Object,
    required: false,
  },
})

const emit = defineEmits(['update:showDialog'])

const internalShowDialog = ref(props.showDialog)

const defaultItem = {}

const internalItem = ref({ ...defaultItem, ...props.item })

watch(
  () => props.showDialog,
  (val) => {
    internalShowDialog.value = val
    if (val) {
      internalItem.value = { ...defaultItem, ...props.item }
    }
  }
)

watch(internalShowDialog, (val) => {
  emit('update:showDialog', val)
  if (!val) {
    internalItem.value = { ...defaultItem, ...props.item } // Reset values
  }
})

const close = () => {
  internalShowDialog.value = false
  internalItem.value = { ...defaultItem, ...props.item }
}
</script>
  
  