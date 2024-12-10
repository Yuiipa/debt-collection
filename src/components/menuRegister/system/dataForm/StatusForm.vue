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
            {{ dialogTitle }}สถานะ
          </span>
        </v-card-title>
        <v-divider :thickness="2" color="#1a237e" />
      </div>
      <v-card-text class="py-0">
        <v-form ref="form">
          <div class="my-8 mx-4" style="background-color: white">
            <v-row>
              <div
                class="v-col-12 v-col-sm-4 py-0 d-flex align-center justify-start justify-sm-end"
              >
                ไอดีสถานะ
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
                class="v-col-12 v-col-sm-4 py-0 d-flex align-center justify-start justify-sm-end"
              >
                สถานะ
              </div>
              <v-text-field
                class="v-col-12 v-col-sm-6"
                placeholder="สถานะ"
                variant="outlined"
                density="compact"
                hide-details="auto"
              ></v-text-field>
            </v-row>
            <v-row>
              <div
                class="v-col-12 v-col-sm-4 py-0 d-flex align-center justify-start justify-sm-end"
              >
                รูปแบบ
              </div>
              <v-select
                class="v-col-12 v-col-sm-6"
                variant="outlined"
                density="compact"
                hide-details="auto"
                persistent-hint
                :items="badgeOptions"
                item-title="text"
                item-value="value"
                v-model="selectedBadgeColor"
                @change="(value) => updateSelectedBadge(value)"
              />
            </v-row>
            <v-row>
              <div
                class="v-col-12 v-col-sm-4 py-0 d-flex align-center justify-start justify-sm-end"
              >
                ตัวอย่าง
              </div>
              <div class="v-col-12 v-col-sm-6">
                <div
  class="rounded-pill text-center py-1"
  :style="{
    backgroundColor: selectedBadgeColor,
    color: selectedBadgeColor === '#f8f9fa' ? '#000000' : '#ffffff',
    width: '120px',
  }"
>
 status
</div>
              </div>
            </v-row>
            <v-row>
              <div
                class="v-col-12 v-col-sm-4 py-0 d-flex align-center justify-start justify-sm-end"
              >
                สิ้นสุดการดำเนินการ
              </div>
              <div class="v-col-12 v-col-sm-6">
                <v-switch
                  v-model="item.status"
                  color="primary"
                  inset
                  dense
                  hide-details
                  :false-value="false"
                  :true-value="true"
                ></v-switch>
              </div>
            </v-row>
          </div>
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

const badgeOptions = ref([
  { text: 'badge-primary', value: '#007bff' },
  { text: 'badge-secondary', value: '#6c757d' },
  { text: 'badge-success', value: '#28a745' },
  { text: 'badge-danger', value: '#dc3545' },
  { text: 'badge-warning', value: '#ffc107' },
  { text: 'badge-info', value: '#17a2b8' },
  { text: 'badge-light', value: '#f8f9fa' },
  { text: 'badge-dark', value: '#343a40' },
])

const selectedBadgeColor = ref('#007bff') // Default สี
const selectedBadgeText = ref('badge-primary') // Default ชื่อ

const updateSelectedBadge = (value) => {
  const selected = badgeOptions.value.find((option) => option.value === value)
  if (selected) {
    selectedBadgeText.value = selected.text // อัปเดตชื่อ
    selectedBadgeColor.value = selected.value // อัปเดตสี
  }
}
</script>
            

              