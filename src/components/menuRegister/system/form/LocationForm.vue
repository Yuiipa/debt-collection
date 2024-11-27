<template>
  <v-dialog
    v-model="internalShowDialog"
    max-width="1000px"
    style="z-index: 1000"
  >
    <v-card>
      <v-card-title class="font-weight-medium text-center">
        แก้ไขผู้ใช้งาน
      </v-card-title>
      <v-divider class="opacity-100" :thickness="1"></v-divider>
      <v-card-text class="pb-0 pl-0 pr-0 pt-2">
        <v-form ref="form">
          <div class="my-8 mx-4" style="background-color: white">
            <v-row>
              <div
                class="v-col-12 v-col-sm-4 py-0 d-flex align-center justify-end text-end"
              >
                ไอดีจังหวัด
              </div>
              <v-text-field
                class="v-col-12 v-col-sm-6"
                placeholder="ไอดีจังหวัด"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-row>
            <v-row>
              <div
                class="v-col-12 v-col-sm-4 py-0 d-flex align-center justify-end text-end"
              >
                รหัสจังหวัด
              </div>
              <v-text-field
                class="v-col-12 v-col-sm-6"
                 placeholder="รหัสจังหวัด"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-row>
            <v-row>
              <div
                class="v-col-12 v-col-sm-4 py-0 d-flex align-center justify-end text-end"
              >
                ชื่อจังหวัดภาษาไทย
              </div>
              <v-text-field
                class="v-col-12 v-col-sm-6"
                 placeholder="ชื่อจังหวัดภาษาไทย"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-row>
            <v-row>
              <div
                class="v-col-12 v-col-sm-4 py-0 d-flex align-center justify-end text-end"
              >
                ชื่อจังหวัดภาษาอังกฤษ
              </div>
              <v-text-field
                class="v-col-12 v-col-sm-6"
                placeholder="ชื่อจังหวัดภาษาอังกฤษ"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-row>
            <v-row>
              <div
                class="v-col-12 v-col-sm-4 py-0 d-flex align-center justify-end text-end"
              >
                GEO ID
              </div>
              <v-text-field
                class="v-col-12 v-col-sm-6"
                placeholder="GEO ID"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-row>
            <v-row>
              <div
                class="v-col-12 v-col-sm-4 py-0 d-flex align-center justify-end text-end"
              >
                ละติจูด
              </div>
              <v-text-field
                class="v-col-12 v-col-sm-6"
                placeholder="ละจิจูด"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-row>

            <v-row>
              <div
                class="v-col-12 v-col-sm-4 py-0 d-flex align-center justify-end text-end"
              >
                ลองจิจูด
              </div>
              <v-text-field
                class="v-col-12 v-col-sm-6"
                placeholder="ลองจิจูด"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-row>
          </div>
        </v-form>
      </v-card-text>
      <v-card-actions
        class="d-flex justify-center align-center custom-action pa-0"
      >
        <v-btn
          class="cancel-btn d-flex justify-center align-center"
          @click="close"
          >ยกเลิก</v-btn
        >
        <v-btn class="save-btn d-flex justify-center align-center" @click="save"
          >บันทึก</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
      
    <script setup>
import { ref, watch } from 'vue'

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

// ฟังก์ชัน save
const save = async () => {
  console.log('save')
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
      
      