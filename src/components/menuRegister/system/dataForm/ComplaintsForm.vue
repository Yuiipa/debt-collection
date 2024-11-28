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
            {{ dialogTitle }}ข้อร้องเรียน
          </span>
        </v-card-title>
        <v-divider :thickness="2" color="#1a237e" />
      </div>
      <v-divider class="opacity-100" :thickness="1"></v-divider>
      <v-card-text class="py-0">
        <v-form ref="form">
          <div class="my-8 mx-4" style="background-color: white">
            <v-row>
              <div
                class="v-col-12 v-col-sm-4 py-0 d-flex align-center justify-start justify-sm-end text-end"
              >
                ไอดีข้อร้องเรียน
              </div>
              <v-text-field
                class="v-col-12 v-col-sm-6"
                placeholder="auto"
                :readonly="true"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-row>
            <v-row>
              <div
                class="v-col-12 v-col-sm-4 py-0 d-flex align-center justify-start justify-sm-end text-end"
              >
                ประเภทโทษ
              </div>
              <v-select
              v-model="selectedType"
                class="v-col-12 v-col-sm-6"
                :items="['โทษทางอาญา', 'โทษทางปกครอง']"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-select>
            </v-row>
            <v-row>
              <div
                class="v-col-12 v-col-sm-4 py-0 d-flex align-center justify-start justify-sm-end text-end"
              >
                ความผิดตามมาตรา
              </div>
              <v-text-field
                class="v-col-12 v-col-sm-6"
                placeholder="ความผิดตามมาตรา"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-row>
            <v-row>
              <div
                class="v-col-12 v-col-sm-4 py-0 d-flex pt-sm-4  justify-start justify-sm-end text-end"
              >
                ข้อหาหรือฐานความผิด
              </div>
              <v-textarea
                class="v-col-12 v-col-sm-6"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-textarea>
            </v-row>
            <v-row>
              <div
                class="v-col-12 v-col-sm-4 py-0 d-flex align-center justify-start justify-sm-end text-end"
              >
                มาตรา
              </div>
              <v-text-field
                class="v-col-12 v-col-sm-6"
                placeholder="มาตรา"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-row>
            <v-row>
              <div
                class="v-col-12 v-col-sm-4 py-0 d-flex pt-sm-4  justify-start justify-sm-end text-end"
              >
                อัตราโทษ
              </div>
              <v-textarea
                class="v-col-12 v-col-sm-6"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-textarea>
            </v-row>
            <v-row>
              <div
                class="v-col-12 v-col-sm-4 py-0 d-flex pt-sm-4 justify-start justify-sm-end text-end"
              >
                หมายเหตุ
              </div>
              <v-textarea
                class="v-col-12 v-col-sm-6"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-textarea>
            </v-row>
          </div>
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
  typeForm: {
    type: Number,
    required: true,
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
const selectedType = ref('โทษทางอาญา')
// ปิด dialog
const close = () => {
  internalShowDialog.value = false
  internalItem.value = { ...props.item } // รีเซ็ตค่า internalItem เมื่อปิด dialog
}

const save = async () => {
  console.log('save')
}

// กำหนดข้อความ title
const dialogTitle = computed(() => {
  switch (props.typeForm) {
    case 1:
      return 'เพิ่ม'
    case 2:
      return 'แก้ไข'
    default:
      return 'เพิ่ม'
  }
})
</script>
            
              
     