<template>
  <v-form ref="form">
    <v-card
      :class="
        $vuetify.display.mdAndUp ? 'ma-8 custom-card' : 'ma-8 custom-card'
      "
    >
      <div class="py-4">
        <span class="font-weight-bold text-h5 mx-8" style="color: #1a237e">
          ข้อมูลผู้ยื่นเรื่องร้องเรียน
        </span>
      </div>

      <v-divider
        class="border-opacity-100 mx-6"
        thickness="2"
        style="color: #000"
      />

      <v-row class="ma-1 mx-4">
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">
            เขียนที่
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-text-field
            variant="outlined"
            placeholder="เขียนที่"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
      </v-row>
      <v-row class="ma-1 mx-4">
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">
            คำนำหน้าชื่อ
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-autocomplete
            variant="outlined"
            placeholder="คำนำหน้าชื่อ"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">
            ชื่อ
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-text-field
            variant="outlined"
            placeholder="ชื่อ"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">
            นามสกุล
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-text-field
            variant="outlined"
            placeholder="นามสกุล"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">
            อายุ
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-text-field
            variant="outlined"
            placeholder="อายุ"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
      </v-row>
      <v-row class="ma-1 mx-4">
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">
            เลขประจำตัวประชาชน
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-text-field
            variant="outlined"
            placeholder="เลขประจำตัวประชาชน"
            persistent-placeholder
            hide-details
            density="compact"
            v-mask="'#-####-#####-##-#'"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">
            บ้านเลขที่
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-text-field
            variant="outlined"
            placeholder="บ้านเลขที่"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">
            หมู่ที่
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-text-field
            variant="outlined"
            placeholder="หมู่ที่"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">
            ถนน/ตรอก/ซอย
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-text-field
            variant="outlined"
            placeholder="ถนน/ตรอก/ซอย"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
      </v-row>
      <v-row class="ma-1 mx-4 pb-4">
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">
            จังหวัด
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-autocomplete
            :items="provinces"
            item-title="description"
            item-value="value"
            variant="outlined"
            placeholder="จังหวัด"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">
            อำเภอ/เขต
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-autocomplete
            variant="outlined"
            placeholder="อำเภอ/เขต"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">
            ตำบล/แขวง
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-autocomplete
            variant="outlined"
            placeholder="ตำบล/แขวง"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12">
          <div class="mb-2 font-weight-bold">
            โทรศัพท์
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-text-field
            variant="outlined"
            placeholder="โทรศัพท์"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
      </v-row>
    </v-card>

    <v-card
      :class="
        $vuetify.display.mdAndUp ? 'ma-8 custom-card' : 'ma-8 custom-card'
      "
    >
      <div class="py-4">
        <span class="font-weight-bold text-h5 mx-8" style="color: #1a237e">
          ข้อมูลเกี่ยวข้องผู้ร้องเรียน
        </span>
      </div>

      <v-divider
        class="border-opacity-100 mx-6"
        thickness="2"
        style="color: #000"
      />

      <v-row class="ma-1 mx-4">
        <v-col md="6" cols="12">
          <div class="mb-2 font-weight-bold">
            ข้อร้องเรียน
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-text-field
            variant="outlined"
            placeholder="ข้อร้องเรียน"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="6" cols="12">
          <div class="mb-2 font-weight-bold">
            คู่กรณี
          </div>
          <div class="d-flex">
            <v-radio-group
            v-model="radio"
            hide-details
            row
          >
            <v-radio value="1"
              ><template v-slot:label>
                <span>ผู้ประกอบธุรกิจทวงถามหนี้</span>
              </template></v-radio
            >
          </v-radio-group>
          <v-radio-group
          v-model="radio"
          hide-details
          row
        >
          <v-radio value="2"
            ><template v-slot:label>
              <span>ผู้ทวงถามหนี้ประเภทอื่น</span>
            </template></v-radio
          >
        </v-radio-group>
          </div>
        </v-col>
      </v-row>
      <v-row class="ma-1 mx-4">
        <v-col md="6" cols="12">
          <div class="mb-2 font-weight-bold">
            ชื่อธุรกิจ
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-autocomplete
            variant="outlined"
            placeholder="ชื่อธุรกิจ"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
      </v-row>
      <v-row class="ma-1 mx-4">
        <v-col cols="12">
          <div class="mb-2 font-weight-bold">
            รายละเอียดเรื่องร้องเรียน
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-textarea
            variant="outlined"
            placeholder="รายละเอียดเรื่องร้องเรียน"
            persistent-placeholder
            hide-details
            density="compact"
            no-resize
          />
        </v-col>
      </v-row>
      <v-row class="ma-1 mx-4">
        <v-col cols="12">
          <div class="mb-2 font-weight-bold">
            เหตุเกิดที่
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-textarea
            variant="outlined"
            placeholder="เกิดเหตุที่"
            persistent-placeholder
            hide-details
            density="compact"
            no-resize
          />
        </v-col>
      </v-row>
      <v-row class="ma-1 mx-4">
        <v-col cols="12">
          <div class="mb-2 font-weight-bold">อื่น ๆ (ถ้ามี)</div>
          <v-textarea
            variant="outlined"
            placeholder="อื่น ๆ (ถ้ามี)"
            persistent-placeholder
            hide-details
            density="compact"
            no-resize
          />
        </v-col>
      </v-row>
      <v-row class="ma-1 mx-4">
        <v-col cols="12">
          <div class="mb-2 font-weight-bold">ความคิดเห็นเจ้าหน้าที่</div>
          <v-textarea
            variant="outlined"
            placeholder="ความคิดเห็นเจ้าหน้าที่"
            persistent-placeholder
            hide-details
            density="compact"
            no-resize
          />
        </v-col>
      </v-row>
      <v-row class="ma-1 mx-4 pb-4">
        <v-col cols="12">
          <div class="mb-2 font-weight-bold">
            ความคิดเห็น/คำสั่งหัวหน้าหน่วยงาน
          </div>
          <v-textarea
            variant="outlined"
            placeholder="ความคิดเห็น/คำสั่งหัวหน้าหน่วยงาน"
            persistent-placeholder
            hide-details
            density="compact"
            no-resize
          />
        </v-col>
      </v-row>
    </v-card>

    <v-card
      :class="
        $vuetify.display.mdAndUp ? 'ma-8 custom-card' : 'ma-8 custom-card'
      "
    >
      <div class="py-4">
        <span class="font-weight-bold text-h5 mx-8" style="color: #1a237e">
          เอกสารหลักฐานเกี่ยวกับเรื่องร้องเรียนดังกล่าว
        </span>
      </div>

      <v-divider
        class="border-opacity-100 mx-6"
        thickness="2"
        style="color: #000"
      />

      <v-row class="ma-1 mx-4">
        <v-col cols="12">
          <div class="mb-2 font-weight-bold">สำเนาบัตรประจำตัวประชาชน</div>
          <UploadFile />
        </v-col>
      </v-row>
      <v-row class="ma-1 mx-4">
        <v-col cols="12">
          <div class="mb-2 font-weight-bold">สำเนาสัญญากู้ยืมเงิน (ถ้ามี)</div>
          <UploadFile />
        </v-col>
      </v-row>
      <v-row class="ma-1 mx-4">
        <v-col cols="12">
          <div class="mb-2 font-weight-bold">
            บัญชีรายชื่อพยานและที่อยู่พร้อมเบอร์โทรศัพท์
          </div>
          <UploadFile />
        </v-col>
      </v-row>
      <v-row class="ma-1 mx-4">
        <v-col cols="12">
          <div class="mb-2 font-weight-bold">หนังสือมอบอำนาจ</div>
          <UploadFile />
        </v-col>
      </v-row>
      <v-row class="ma-1 mx-4 pb-4">
        <v-col cols="12">
          <div class="mb-2 font-weight-bold">
            เอกสารหลักฐานอื่นๆ (ถ้ามี) ระบุ
          </div>
          <UploadFile />
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'
import { getListsCC } from '@/static/province'
import UploadFile from '@/components/UploadFile'

const provinces = ref(getListsCC())
const radio = ref(null)
</script>

<style scoped>
.custom-card {
  border-radius: 20px;
}
</style>
