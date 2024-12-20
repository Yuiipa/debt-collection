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
            แก้ไขผู้ใช้งาน
          </span>
        </v-card-title>
        <v-divider :thickness="2" color="#1a237e" />
      </div>

      <v-card-text class="pa-8">
        <v-form ref="form">
          <div>
            <v-row>
              <v-col cols="12" md="12" class="pl-2 py-0">
                <div class="v-col-12 py-0">เลขประจำตัวประชาชน</div>
                <v-text-field
                v-model="internalItem.pid"
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                  v-mask="'#-####-#####-##-#'"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12" class="pl-2 py-0">
                <div class="v-col-12 py-0">คำนำหน้านาม</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                  v-model="internalItem.title"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6" class="pl-2 py-0">
                <div class="v-col-12 py-0">ชื่อ</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                  v-model="internalItem.firstName"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6" class="pl-2 py-0">
                <div class="v-col-12 py-0">นามสกุล</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                  v-model="internalItem.lastName"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12" class="pl-2 py-0">
                <div class="v-col-12 py-0">ตำแหน่งผู้ปฏิบัติงาน</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                  v-model="internalItem.position"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12" class="pl-2 py-0">
                <div class="v-col-12 py-0">สังกัด</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                  v-model="internalItem.document"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12" class="pl-2 py-0">
                <div class="v-col-12 py-0">อีเมล์</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                  v-model="internalItem.email"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12" class="pl-2 py-0">
                <div class="v-col-12 py-0">เบอร์โทรศัพท์ติดต่อ</div>
                <v-text-field
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                  v-model="internalItem.phone"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12" class="pl-2 py-0">
                <div class="v-col-12 py-0">สิทธิ์การใช้งาน</div>
                <v-autocomplete
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                  v-model="internalItem.role"
                  :items="roles"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12" class="pl-2 py-0">
                <div class="v-col-12 py-0">สถานะการใช้งาน</div>
                <v-autocomplete
                  class="v-col-12"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                  v-model="internalItem.status"
                  :items="statuses"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12" class="pl-2 py-0">
                <div class="v-col-12 py-0">เอกสารแนบ</div>
                <UploadFile />
              </v-col>
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
import { ref, watch } from 'vue';
import UploadFile from '@/components/UploadFile.vue';
import Swal from 'sweetalert2';

const props = defineProps({
  showDialog: {
    type: Boolean,
    required: true,
  },
  item: {
    type: Object,
    required: false,
  },
});

const emit = defineEmits(['update:showDialog', 'saved']);

const internalShowDialog = ref(props.showDialog);

const defaultItem = {
  pid: '',
  title: '',
  firstName: '',
  lastName: '',
  position: '',
  document: '',
  role: 'กรมการปกครอง',
  status: 'ใช้งาน',
};

const internalItem = ref({ ...defaultItem, ...props.item });

const roles = ['กรมการปกครอง', 'จังหวัด', 'สภาทนายความ', 'กองบัญชาการตำรวจนครบาล'];
const statuses = ['ใช้งาน', 'ไม่ใช้งาน'];

watch(
  () => props.showDialog,
  (val) => {
    internalShowDialog.value = val;
    if (val) {
      internalItem.value = { ...defaultItem, ...props.item };
    }
  }
);

watch(internalShowDialog, (val) => {
  emit('update:showDialog', val);
  if (!val) {
    internalItem.value = { ...defaultItem, ...props.item }; // Reset values
  }
});

const close = () => {
  internalShowDialog.value = false;
  internalItem.value = { ...defaultItem, ...props.item };
};

const save = async () => {
  try {
    await Swal.fire({
      title: 'บันทึกสำเร็จ',
      icon: 'success',
    });
    emit('saved', internalItem.value);
    internalShowDialog.value = false;
  } catch (error) {
    await Swal.fire({
      title: 'เกิดข้อผิดพลาด',
      text: error.message || 'ไม่สามารถบันทึกข้อมูลได้',
      icon: 'error',
    });
  }
};
</script>
  
  