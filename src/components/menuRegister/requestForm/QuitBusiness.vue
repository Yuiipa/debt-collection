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
            {{ title_route }}
          </span>
        </v-card-title>
        <v-divider :thickness="2" color="#1a237e" />
      </div>
      <v-card-text class="pa-2">
        <v-container class="d-flex justify-start">
          <div class="w-100">
            <v-row>
              <div class="d-flex justify-end align-center pl-4">
                <span>เลขทะเบียน</span>
              </div>
              <v-text-field
                class="v-col-12 v-col-md-4"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
              <div class="d-flex justify-end align-center pl-4">
                <span>ชื่อธุรกิจ</span>
              </div>
              <v-text-field
                class="v-col-12 v-col-md-4"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-col class="px-4">
                <span> {{ subtitle_route }} </span>
              </v-col>
            </v-row>
            <UploadFile />
            <v-divider class="my-6" :thickness="2" color="#1a237e" />
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
          </div>
        </v-container>
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
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import UploadFile from '@/components/UploadFile.vue'
const route = useRoute()

const title_route = ref('')
const subtitle_route = ref('')

const handleFileChange = (files) => {
  console.log('Selected files:', files)
}

onMounted(() => {
  const currentPath = route.path // ใช้ useRoute เพื่อดึง path ปัจจุบัน

  // ตัวอย่างเงื่อนไขการเปลี่ยนเส้นทาง
  if (currentPath === '/debt/Quit_Business') {
    title_route.value = 'คำขอเลิกประกอบธุรกิจทวงถามหนี้'
    subtitle_route.value = 'หนังสือแจ้งความประสงค์เลิกประกอบธุรกิจทวงถามหนี้'
  } else if (currentPath === '/debt/Renew_request') {
    title_route.value = 'ขอต่ออายุประกอบธุรกิจทวงถามหนี้'
    subtitle_route.value =
      'หนังสือแจ้งความประสงค์ขอต่ออายุประกอบธุรกิจทวงถามหนี้'
  } else if (currentPath === '/debt/Cancel_Quit') {
    title_route.value =
      'ยกเลิกการเพิกถอนการจดทะเบียนของผู้ประกอบธุรกิจทวงถามหนี้'
    subtitle_route.value = 'มติที่ประชุมคณะกรรมการทวงถามหนี้'
  }
})

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

const emit = defineEmits(['update:showDialog', 'saved'])

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
