<template>
  <v-dialog
    v-model="internalShowDialog"
    max-width="1000px"
    style="z-index: 1000"
  >
    <v-card>
      <div class="px-5">
        <v-card-title class="mt-1">
          <span class="font-weight-bold" style="color: #1a237e">
            คำสั่งเพิกถอนการจดทะเบียนการประกอบธุรกิจทวงถามหนี้
          </span>
        </v-card-title>
        <v-divider :thickness="2" color="#1a237e" />
      </div>
      <v-card-text class="pb-0 pl-0 pr-0 pt-2">
        <v-form ref="form">
          <div class="pa-6">
            <v-row>
              <v-col cols="12" md="6" class="pl-2 py-0">
                <div class="v-col-12 py-0">ชื่อสถานประกอบธุรกิจ</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6" class="pl-2 py-0">
                <div class="v-col-12 py-0">หน่วยงานที่รับเรื่อง</div>
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

            <v-row>
              <v-col cols="12" md="6" class="pl-2 py-0">
                <div class="v-col-12 py-0">เลขที่ทะเบียน</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6" class="pl-2 py-0">
                <div class="v-col-12 py-0">
                  ชื่อ-นามสกุลผู้จดทะเบียนประกอบธุรกิจ
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
              <v-col cols="12" md="4" class="pl-2 py-0">
                <div class="v-col-12 py-0">ตำแหน่งผู้ปฏิบัติงาน</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="pl-2 py-0">
                <div class="v-col-12 py-0">ตำแหน่งผู้ปฏิบัติงาน</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="pl-2 py-0">
                <div class="v-col-12 py-0">ตำแหน่งผู้ปฏิบัติงาน</div>
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
                <v-divider :thickness="5" color="primary" /> </v-col
            ></v-row>

            <v-row>
              <v-col cols="12" md="12" class="pl-2 py-0">
                <div class="v-col-12 py-0">
                  มติที่ประชุมคณะกรรมการกำกับการทวงถามหนี้ประจำท้องที่
                </div>
                <UploadFile/>
              </v-col>
            </v-row>
          </div>
        </v-form>
      </v-card-text>
      <v-divider  :thickness="5" color="#1a237e" />
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
import Swal from 'sweetalert2'
import UploadFile from '@/components/UploadFile.vue'

// รับ props ด้วย defineProps
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

// ใช้งาน emit
const emit = defineEmits(['update:showDialog', 'saved'])

// ค่าภายใน component
const internalShowDialog = ref(props.showDialog)
const internalItem = ref({ ...props.item })
const userForm = ref(null)
const oldStatus = ref(2)

// Watch props.showDialog
watch(
  () => props.showDialog,
  (val) => {
    internalShowDialog.value = val
  }
)

// Watch internalShowDialog
watch(internalShowDialog, (val) => {
  emit('update:showDialog', val)
  if (!val) {
    internalItem.value = { ...props.item } // รีเซ็ตค่า internalItem เมื่อปิด dialog
  }
})

// Watch props.item
watch(
  () => props.item,
  (val) => {
    if (val) {
      internalItem.value = { ...val }
      oldStatus.value = val.status // ตั้งค่า oldStatus จาก props.item.status
    }
  }
)

// ปิด dialog
const close = () => {
  internalShowDialog.value = false
  internalItem.value = { ...props.item } // รีเซ็ตค่า internalItem เมื่อปิด dialog
}

// ฟังก์ชัน validate ข้อมูล
const validateUserData = () => {
  let missingFields = []
  const requiredFields = {
    empPid: 'รหัสพนักงาน',
    fName: 'ชื่อ',
    lName: 'นามสกุล',
    age: 'อายุ',
    sex: 'เพศ',
    govId: 'หน่วยงาน',
    role: 'สิทธิ์',
    quota: 'โควต้า',
    quotaRemain: 'โควต้าคงเหลือ',
  }

  Object.keys(requiredFields).forEach((field) => {
    if (
      internalItem.value[field] === null ||
      internalItem.value[field] === undefined ||
      internalItem.value[field] === ''
    ) {
      missingFields.push(requiredFields[field])
    }
  })

  return missingFields
}

// ฟังก์ชัน save
const save = async () => {
  try {
    const isValid = await userForm.value.validate()
    if (!isValid.valid) {
      const missingFields = validateUserData()
      if (missingFields.length > 0) {
        await Swal.fire({
          title: 'แจ้งเตือน',
          text: `กรุณากรอกข้อมูลให้ครบถ้วนในช่องต่อไปนี้: ${missingFields.join(
            ', '
          )}`,
          icon: 'warning',
        })
        return
      }
    }

    if (internalItem.value.role === 3) {
      for (let i = 15; i <= 24; i++) {
        internalItem.value.permission[i] = false
      }
    }

    const result = await Swal.fire({
      title: 'แจ้งเตือน!',
      text: 'คุณต้องการแก้ไขสมาชิกหรือไม่?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'ยกเลิก',
    })

    if (result.isConfirmed) {
      internalShowDialog.value = false
      await Swal.fire({
        title: 'แก้ไขข้อมูลสำเร็จ',
        icon: 'success',
      })

      emit('saved')
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || 'เกิดข้อผิดพลาดในการเพิ่มสมาชิก'
    await Swal.fire({
      title: 'เกิดข้อผิดพลาด',
      text: errorMessage,
      icon: 'error',
    })
    console.error('Error adding member:', error)
  }
}
</script>

  
<style scoped>
.swal-custom-zindex {
  z-index: 2000 !important;
}
.custom-date {
  width: auto;
}
.custom-action {
  height: 70px !important;
}

.v-field__input {
  height: 40px !important;
  padding: 12px 24px !important;
}

.flex-area-10 {
  flex: 0 0 10%;
  text-align: right;
}

.flex-area {
  flex: 0 0 20%;
  text-align: right;
}

.cancel-btn {
  border: 2px solid #e12929;
  background-color: white;
  height: 45px;
  width: 150px;
}

.cancel-btn:hover {
  background-color: #f30c0c;
  color: white;
}

.save-btn {
  background-color: #4c7aaf;
  color: white;
  height: 45px;
  width: 150px;
}

.save-btn:hover {
  background-color: #0e77ee;
}

@media (max-width: 960px) {
  .flex-area {
    flex: 0 0 33.33%;
  }
}
</style>
  
  