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
            บัญชีรายชื่อพนักงานของผู้ประกอบธุรกิจทวงถามหนี้
          </span>
        </v-card-title>
       
      </div>
      <v-card-text class="px-8 py-0">
        <v-container class="d-flex justify-start pa-0">
          <div class="w-100">
            <!-- Tabs -->
            <v-tabs v-model="activeTab" color="blue-darken-3">
              <v-tab value="employee" class="font-weight-bold">
                แจ้งแก้ไขบัญชีรายชื่อ
              </v-tab>
              <v-tab value="others" class="font-weight-bold">อื่นๆ</v-tab>
            </v-tabs>

            <!-- Tab Items -->
            <v-window v-model="activeTab">
              <!-- Tab 1 -->
              <v-window-item value="employee">
                <div class="pa-8">
                  <v-row>
                    <v-col cols="12" class="pl-8">
                      <span> ไฟล์บัญชีรายชื่อ </span>
                    </v-col>
                  </v-row>
                  <UploadFile />
                </div>
              </v-window-item>

              <!-- Tab 2 -->
              <v-window-item value="others">
                <div class="pa-8">
                  <v-row>
                    <v-col
                      cols="12"
                      md="1"
                      class="d-flex align-center justify-center"
                    >
                      <div>อื่นๆ ระบุ</div>
                    </v-col>
                    <v-text-field
                      class="v-col-12 v-col-md-11"
                      variant="outlined"
                      density="compact"
                      hide-details="auto"
                    ></v-text-field>
                  </v-row>
                  <UploadFile />
                </div>
              </v-window-item>
            </v-window>
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

const activeTab = ref('employee')
const handleFileChange = (files) => {
  console.log('Selected files:', files)
}
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
  
  