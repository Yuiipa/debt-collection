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
            จัดการข้อมูลเรื่องร้องเรียน
          </span>
        </v-card-title>
        <v-divider :thickness="2" color="#1a237e" />
      </div>
      <v-divider class="opacity-100" :thickness="1"></v-divider>
      <v-card-text class="py-6">
        <v-form ref="form">
          <v-row class="d-flex justify-end">
            <v-col cols="12" md="3" class="px-0 py-0">
              <div class="v-col-12 py-0 font-weight-bold">เขียนที่</div>
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
                ข้อมูลผู้ยื่นเรื่องร้องเรียน
              </v-card-title>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="3" class="pa-0">
              <div class="v-col-12 py-0 font-weight-bold">คำนำหน้าชื่อ</div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3" class="pa-0">
              <div class="v-col-12 py-0 font-weight-bold">ชื่อ</div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3" class="pa-0">
              <div class="v-col-12 py-0 font-weight-bold">นามสกุล</div>
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
            <v-col cols="12" md="3" class="pa-0">
              <div class="v-col-12 py-0 font-weight-bold">บ้านเลขที่</div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3" class="pa-0">
              <div class="v-col-12 py-0 font-weight-bold">หมู่ที่</div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3" class="pa-0">
              <div class="v-col-12 py-0 font-weight-bold">ถนน/ซอย</div>
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
              <div class="v-col-12 py-0 font-weight-bold">จังหวัด</div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3" class="pa-0">
              <div class="v-col-12 py-0 font-weight-bold">อำเภอ</div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3" class="pa-0">
              <div class="v-col-12 py-0 font-weight-bold">ตำบล</div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3" class="pa-0">
              <div class="v-col-12 py-0 font-weight-bold">โทรศัพท์</div>
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
                ข้อมูลเกี่ยวข้องผู้ร้องเรียน
              </v-card-title>
            </v-col>
          </v-row>
          <v-row class="mt-6">
            <v-col cols="12" md="12" class="py-0 px-0">
              <div class="v-col-12 py-0 font-weight-bold">ข้อร้องเรียน</div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-6">
            <v-col cols="12" md="12" class="py-0 px-0">
              <div class="v-col-12 py-0 font-weight-bold">ชื่อธุรกิจ</div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-6">
            <v-col cols="12" md="12" class="py-0 px-0">
              <div class="v-col-12 py-0 font-weight-bold">
                รายละเอียดเรื่องร้องเรียน
              </div>
              <v-textarea
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-textarea>
            </v-col>
          </v-row>

          <v-row class="mt-6">
            <v-col cols="12" md="12" class="py-0 px-0">
              <div class="v-col-12 py-0 font-weight-bold">เหตุที่เกิด</div>
              <v-textarea
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row class="mt-6">
            <v-col cols="12" md="12" class="py-0 px-0">
              <div class="v-col-12 py-0 font-weight-bold">อื่นๆ (ถ้ามี)</div>
              <v-textarea
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="px-0">
              <v-card-title
                class="font-weight-bold"
                style="background-color: #e3f2fd; color: #1a237e"
              >
                เอกสารหลักฐานเกี่ยวกับเรื่องร้องเรียนดังกล่าว
              </v-card-title>
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
  </v-dialog>
</template>
                  
      <script setup>
import { ref, watch, computed } from 'vue'

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

// ปิด dialog
const close = () => {
  internalShowDialog.value = false
  internalItem.value = { ...props.item } // รีเซ็ตค่า internalItem เมื่อปิด dialog
}
</script>
                
                  
         