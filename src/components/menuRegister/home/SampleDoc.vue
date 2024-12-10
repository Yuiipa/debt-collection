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
            หนังสือสั่งการ
          </span>
        </v-card-title>
        <v-divider :thickness="2" color="#1a237e" />
      </div>

      <v-card-text class="pa-12">
        <v-row class="pa-0">
          <v-col cols="4" class="pa-0">
            <div class="rounded-lg elevation elevation-2">
              <v-row class="px-0 py-6">
                <v-col cols="4" class="pa-0 d-flex justify-end"
                  ><v-icon size="96">mdi-book-open</v-icon>
                </v-col>
                <v-col
                  cols="8"
                  class="d-flex align-start justify-center flex-column"
                  style="gap: 4px;"
                >
                  <div>รายงานการจดทะเบียน</div>
                  <div class="text-body-2">อัพเดทเมื่อ : 6 มกราคม 2565</div>
                  <v-btn
                    variant="outlined"
                    color="blue-lighten-2"
                    class="rounded-pill"
                    prepend-icon="mdi-tray-arrow-down"
                    @click="downloadItem(item)"
                  >
                    ดาวน์โหลด
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider :thickness="5" color="#1a237e" />
      <v-card-actions class="d-flex justify-space-between">
        <v-row class="d-flex justify-center">
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
})

const emit = defineEmits(['update:showDialog'])

const internalShowDialog = ref(props.showDialog)

watch(
  () => props.showDialog,
  (newVal) => {
    internalShowDialog.value = newVal
  }
)

const close = () => {
  internalShowDialog.value = false
  emit('update:showDialog', false)
}
</script>
    
    