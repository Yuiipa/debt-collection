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
      <v-divider class="mr-2 opacity-100" :thickness="1"></v-divider>
      <v-card-text class="pb-0 pl-0 pr-0 pt-2">
        <UserForm :userData="internalItem" :isEdit="true" ref="userForm" />
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
import UserForm from './UserForm.vue'
import Swal from 'sweetalert2'

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
  
  