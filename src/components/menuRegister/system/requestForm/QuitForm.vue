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
            จัดการข้อมูลคำขอเลิกประกอบธุรกิจ
          </span>
        </v-card-title>
        <v-divider :thickness="2" color="#1a237e" />
      </div>
      <v-card-text class="pa-8">
        <v-form ref="form">
          <v-row>
            <v-col cols="12" md="6" class="pa-0">
              <div class="v-col-12 py-0 font-weight-bold">เลขทะเบียน</div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="pa-0">
              <div class="v-col-12 py-0 font-weight-bold">ชื่อธุรกิจ</div>
              <v-text-field
                class="v-col-12"
                variant="outlined"
                density="compact"
                hide-details="auto"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mb-2">
            <v-col cols="12" md="12" class="py-0 px-0">
              <div class="v-col-12 py-0 font-weight-bold">
                หนังสือแจ้งความประสงค์เลิกประกอบธุรกิจทวงถามหนี้
              </div>
            </v-col>
          </v-row>
          <UploadFile />
          <v-divider class="mt-6 mb-10" :thickness="2" color="grey"></v-divider>
          <v-row>
            <v-col
              cols="12"
              class="d-flex align-center justify-center font-weight-bold py-0"
              style="font-size: 18px"
            >
              <span>คำสั่งนายทะเบียน</span>
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
import { ref, watch, computed } from 'vue'
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
                
                  
         