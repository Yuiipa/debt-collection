<template>
  <v-form ref="form">
    <v-card class="ma-4">
      <span class="font-weight-bold text-h5 mx-8" style="color: #1a237e">
        ข้อมูลผู้ยื่นเรื่องร้องเรียน
      </span>

      <v-divider class="border-opacity-100 mx-6" style="color: #1a237e" />

      <v-row class="ma-1">
        <v-col md="3" cols="12" class="mb-2">
          <div class="mb-2">
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
      <v-row class="ma-1">
        <v-col md="3" cols="12" class="mb-2">
          <div class="mb-2">
            คำนำหน้าชื่อ
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-text-field
            variant="outlined"
            placeholder="คำนำหน้าชื่อ"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12" class="mb-2">
          <div class="mb-2">
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
        <v-col md="3" cols="12" class="mb-2">
          <div class="mb-2">
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
        <v-col md="3" cols="12" class="mb-2">
          <div class="mb-2">
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
      <v-row class="ma-1">
        <v-col md="3" cols="12" class="mb-2">
          <div class="mb-2">
            เลขประจำตัวประชาชน
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-text-field
            variant="outlined"
            placeholder="เลขประจำตัวประชาชน"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12" class="mb-2">
          <div class="mb-2">
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
        <v-col md="3" cols="12" class="mb-2">
          <div class="mb-2">
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
        <v-col md="3" cols="12" class="mb-2">
          <div class="mb-2">
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
      <v-row class="ma-1">
        <v-col md="3" cols="12" class="mb-2">
          <div class="mb-2">
            จังหวัด
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-text-field
            variant="outlined"
            placeholder="จังหวัด"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12" class="mb-2">
          <div class="mb-2">
            อำเภอ/เขต
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-text-field
            variant="outlined"
            placeholder="อำเภอ/เขต"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12" class="mb-2">
          <div class="mb-2">
            ตำบล/แขวง
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-text-field
            variant="outlined"
            placeholder="ตำบล/แขวง"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
        <v-col md="3" cols="12" class="mb-2">
          <div class="mb-2">
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

    <v-card class="ma-4">
      <span class="font-weight-bold text-h5 mx-8" style="color: #1a237e">
        ข้อมูลเกี่ยวข้องผู้ร้องเรียน
      </span>

      <v-divider class="border-opacity-100 mx-6" style="color: #1a237e" />

      <v-row class="ma-1">
        <v-col md="6" cols="12" class="mb-2">
          <div class="mb-2">
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
      </v-row>
      <v-row class="ma-1">
        <v-col md="6" cols="12" class="mb-2">
          <div class="mb-2">
            ชื่อธุรกิจ
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
          <v-text-field
            variant="outlined"
            placeholder="ชื่อธุรกิจ"
            persistent-placeholder
            hide-details
            density="compact"
          />
        </v-col>
      </v-row>
      <v-row class="ma-1">
        <v-col cols="12" class="mb-2">
          <div class="mb-2">
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
      <v-row class="ma-1">
        <v-col cols="12" class="mb-2">
          <div class="mb-2 font-weight-bold">
            เกิดเหตุที่
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
      <v-row class="ma-1">
        <v-col cols="12" class="mb-2">
          <div class="mb-2">
            อื่น ๆ (ถ้ามี)
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
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
      <v-row class="ma-1">
        <v-col cols="12" class="mb-2">
          <div class="mb-2">
            ความคิดเห็นเจ้าหน้าที่
            <div style="color: red" class="d-inline-flex">*</div>
          </div>
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
      <v-row class="ma-1">
        <v-col cols="12" class="mb-2">
          <div class="mb-2">
            ความคิดเห็น/คำสั่งหัวหน้าหน่วยงาน
            <div style="color: red" class="d-inline-flex">*</div>
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
  </v-form>
</template>
