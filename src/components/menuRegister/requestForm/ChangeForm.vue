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
            ขอเปลี่ยนแปลงตามแบบ ทคน.๑/๑
          </span>
        </v-card-title>
        <v-divider :thickness="2" color="#1a237e" />
      </div>

      <v-card-text class="pa-8">
        <v-form ref="form">
          <v-row class="d-flex justify-end">
            <v-col cols="12" md="3" class="pl-2 py-0">
              <div class="v-col-12 py-0 font-weight-bold">
                <div style="color: red" class="d-inline-flex pr-1">*</div>
                เขียนที่
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
            <v-col cols="12" md="6" class="pa-0">
              <div class="v-col-12 py-0 font-weight-bold">
                <div style="color: red" class="d-inline-flex pr-1">*</div>
                ข้าพเจ้า
              </div>
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
            <v-col cols="12" md="6" class="pa-0">
              <div class="v-col-12 py-0 font-weight-bold">
                <div style="color: red" class="d-inline-flex pr-1">*</div>
                ซึ่งได้จดทะเบียนการประกอบธุรกิจทวงถามหนี้ ทะเบียนเลขที่
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
              <div class="v-col-12 py-0 font-weight-bold">
                <div style="color: red" class="d-inline-flex pr-1">*</div>
                ที่อยู่ อาคาร
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
              <div class="v-col-12 py-0 font-weight-bold">
                <div style="color: red" class="d-inline-flex pr-1">*</div>
                เลขที่
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
            <v-col cols="12" md="4" class="py-0 px-0">
              <div class="v-col-12 py-0 font-weight-bold">
                <div style="color: red" class="d-inline-flex pr-1">*</div>
                หมู่ที่
              </div>
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
              <div class="v-col-12 py-0 font-weight-bold">
                <div style="color: red" class="d-inline-flex pr-1">*</div>
                จังหวัด
              </div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="py-0 px-0">
              <div class="v-col-12 py-0 font-weight-bold">
                <div style="color: red" class="d-inline-flex pr-1">*</div>
                เขต/อำเภอ
              </div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="py-0 px-0">
              <div class="v-col-12 py-0 font-weight-bold">
                <div style="color: red" class="d-inline-flex pr-1">*</div>
                แขวง/ตำบล
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
            <v-col cols="12" md="4" class="py-0 px-0">
              <div class="v-col-12 py-0 font-weight-bold">
                <div style="color: red" class="d-inline-flex pr-1">*</div>
                โทรศัพท์
              </div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="py-0 px-0">
              <div class="v-col-12 py-0 font-weight-bold">
                <div style="color: red" class="d-inline-flex pr-1">*</div>
                โทรสาร
              </div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" class="py-0 px-0">
              <div class="v-col-12 py-0 font-weight-bold">
                <div style="color: red" class="d-inline-flex pr-1">*</div>
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
          <v-divider class="mt-6 mb-6" :thickness="2" color="#1a237e" />
          <v-row>
            <v-col cols="12" md="5" class="d-flex align-center">
              <v-checkbox
                class="mr-2"
                density="compact"
                hide-details="auto"
              ></v-checkbox>
              <span
                >เปลี่ยนแปลงผู้แทนคณะบุคคล/ห้างหุ้นส่วนสามัญ/นิติบุคคลเป็น</span
              >
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
            <div class="ml-4 font-weight-bold d-flex align-center">เอกสารแนบ</div>
            <div class="v-col pa-0">
              <v-btn class="elevation-0" v-tooltip.bottom="'เพิ่มเอกสารแนบ'" @click="addAttachment()">
                <v-icon size="28">mdi-plus-circle-outline</v-icon>
              </v-btn>
            </div>
          </v-row>
          <v-row v-for="(attachment, index) in attachments" :key="index">
            <v-col cols="12" md="6" class="pa-0">
              <v-text-field
              v-model="attachment.description"
                class="v-col-12 pt-2"
                placeholder="ระบุ"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="pa-0">
              <v-file-input
                v-model="attachment.file"
                label="ลากไฟล์มาวางตรงนี้ หรือคลิกเพื่อเลือกไฟล์"
                class="v-col-12 pt-2"
                variant="outlined"
                density="compact"
                hide-details="auto"
                prepend-icon=""
                prepend-inner-icon="mdi-file"
                truncate-length="15"
                multiple
                @change="handleFileChange"
              ></v-file-input>
            </v-col>
          </v-row>
          <v-divider class="mt-6 mb-4" :thickness="2" color="#1a237e" />
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
const attachments = ref([
  { description: '', file: null }, // เอกสารแนบเริ่มต้น 1 ชุด
])

const addAttachment = () => {
  if (attachments.value.length < 10) {
    attachments.value.push({ description: '', file: null })
  } else {
    alert('เพิ่มเอกสารแนบได้สูงสุด 10 รายการ')
  }
}
const emit = defineEmits(['update:showDialog', 'saved'])

const internalShowDialog = ref(props.showDialog)

const close = () => {
  internalShowDialog.value = false
  internalItem.value = { ...defaultItem, ...props.item }
}

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
</script>