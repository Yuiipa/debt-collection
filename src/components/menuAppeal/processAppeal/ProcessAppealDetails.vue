<template>
  <!-- <v-card-title
    class="font-weight-bold"
    style="background-color: #e3f2fd; color: #1a237e"
  >
    รายละเอียด
  </v-card-title> -->
  <div class="px-5">
    <v-card-title class="d-flex justify-space-between">
      <span class="font-weight-bold" style="color: #1a237e">รายละเอียด</span>
      <div>
        <span style="font-size:18px">สถานะ : </span>
        <v-btn
          v-if="details.status === '0'"
          variant="outlined"
          style="font-size: 14px; background-color: orange; color: white"
          class="rounded-pill"
        >
          ขาดเอกสารสำคัญ
        </v-btn>
        <v-btn
          v-if="details.status === '1'"
          variant="outlined"
          style="font-size: 14px; background-color: green; color: white"
          class="rounded-pill"
        >
          เอกสารครบถ้วน
        </v-btn>
      </div>
    </v-card-title>
    <v-divider :thickness="2" color="#1a237e" />
  </div>
  <v-row class="ma-1 mx-4 mb-2">
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">เรื่องร้องเรียนเลขที่</div>
      <v-text-field
        v-model="details.id"
        variant="outlined"
        placeholder="เรื่องร้องเรียนเลขที่"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">เขียนที่</div>
      <v-text-field
        v-model="details.writtingAt"
        variant="outlined"
        placeholder="เขียนที่"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">วันที่</div>
      <v-text-field
        v-model="details.datetime"
        variant="outlined"
        placeholder="วันที่"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
  </v-row>
  <v-card-title
    class="font-weight-bold"
    style="background-color: #e3f2fd; color: #1a237e"
  >
    ข้อมูลผู้ยื่นเรื่องร้องเรียน
  </v-card-title>
  <v-row class="ma-1 mx-4">
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">ชื่อ-นามสกุล</div>
      <v-text-field
        v-model="details.complainname"
        variant="outlined"
        placeholder="ชื่อ-นามสกุล"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">เลขประจำตัวประชาชน</div>
      <v-text-field
        v-model="details.complainPID"
        variant="outlined"
        placeholder="เลขประจำตัวประชาชน"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">อายุ</div>
      <v-text-field
        v-model="details.complainAge"
        variant="outlined"
        placeholder="อายุ"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">บ้านเลขที่</div>
      <v-text-field
        v-model="details.complainHno"
        variant="outlined"
        placeholder="บ้านเลขที่"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
  </v-row>
  <v-row class="ma-1 mx-4">
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">หมู่ที่</div>
      <v-text-field
        v-model="details.complainMoo"
        variant="outlined"
        placeholder="หมู่ที่"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">ถนนซอย</div>
      <v-text-field
        v-model="details.complainSoi"
        variant="outlined"
        placeholder="ถนนซอย"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">ตำบล</div>
      <v-text-field
        v-model="details.complainDistrict"
        variant="outlined"
        placeholder="ตำบล"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">อำเภอ</div>
      <v-text-field
        v-model="details.complainTown"
        variant="outlined"
        placeholder="อำเภอ"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
  </v-row>
  <v-row class="ma-1 mx-4">
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">จังหวัด</div>
      <v-text-field
        v-model="details.complainProvince"
        variant="outlined"
        placeholder="จังหวัด"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">เบอร์โทรศัพท์</div>
      <v-text-field
        v-model="details.complainTel"
        variant="outlined"
        placeholder="เบอร์โทรศัพท์"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
  </v-row>
  <v-card-title
    class="font-weight-bold"
    style="background-color: #e3f2fd; color: #1a237e"
  >
    ข้อมูลผู้ถูกร้องเรียน
  </v-card-title>
  <v-row class="ma-1 mx-4">
    <v-col md="6" cols="12">
      <div class="mb-2 font-weight-bold">ชื่อสถานประกอบธุรกิจ</div>
      <v-text-field
        v-model="details.defendant"
        variant="outlined"
        placeholder="ชื่อสถานประกอบธุรกิจ"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">ชื่อ-นามสกุล</div>
      <v-text-field
        v-model="details.defendantName"
        variant="outlined"
        placeholder="ชื่อ-นามสกุล"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">เลขประจำตัวประชาชน</div>
      <v-text-field
        v-model="details.defendantPID"
        variant="outlined"
        placeholder="เลขประจำตัวประชาชน"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
  </v-row>
  <v-row class="ma-1 mx-4">
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">อายุ</div>
      <v-text-field
        v-model="details.defendantAge"
        variant="outlined"
        placeholder="อายุ"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">สัญชาติ</div>
      <v-text-field
        v-model="details.defendantNationality"
        variant="outlined"
        placeholder="สัญชาติ"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">ที่อยู่</div>
      <v-text-field
        variant="outlined"
        placeholder="ที่อยู่"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">ชั้นที่</div>
      <v-text-field
        variant="outlined"
        placeholder="ชั้นที่"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
  </v-row>
  <v-row class="ma-1 mx-4">
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">เลขที่</div>
      <v-text-field
        v-model="details.defendantHno"
        variant="outlined"
        placeholder="เลขที่"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">หมู่ที่</div>
      <v-text-field
        v-model="details.defendantMoo"
        variant="outlined"
        placeholder="หมู่ที่"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">ซอย</div>
      <v-text-field
        v-model="details.defendantSoi"
        variant="outlined"
        placeholder="ซอย"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">ถนน</div>
      <v-text-field
        v-model="details.defendantRoad"
        variant="outlined"
        placeholder="ถนน"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
  </v-row>
  <v-row class="ma-1 mx-4">
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">ตำบล</div>
      <v-text-field
        v-model="details.defendantDistrict"
        variant="outlined"
        placeholder="ตำบล"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">อำเภอ</div>
      <v-text-field
        v-model="details.defendantTown"
        variant="outlined"
        placeholder="อำเภอ"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">จังหวัด</div>
      <v-text-field
        v-model="details.defendantProvince"
        variant="outlined"
        placeholder="จังหวัด"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">โทรศัพท์</div>
      <v-text-field
        v-model="details.defendantTel"
        variant="outlined"
        placeholder="โทรศัพท์"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
  </v-row>
  <v-row class="ma-1 mx-4">
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">โทรสาร</div>
      <v-text-field
        v-model="details.defendantFax"
        variant="outlined"
        placeholder="โทรสาร"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">จดหมายอิเลคทรอนิกส์</div>
      <v-text-field
        v-model="details.defendantMail"
        variant="outlined"
        placeholder="จดหมายอิเลคทรอนิกส์"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
  </v-row>
  <v-card-title
    class="font-weight-bold"
    style="background-color: #e3f2fd; color: #1a237e"
  >
    ข้อมูลเกี่ยวกับเรื่องร้องเรียน
  </v-card-title>
  <v-row class="ma-1 mx-4">
    <v-col cols="12">
      <div class="mb-2 font-weight-bold">ข้อร้องเรียน</div>
      <v-textarea
        v-model="details.topic"
        variant="outlined"
        placeholder="ข้อร้องเรียน"
        persistent-placeholder
        hide-details
        density="compact"
        no-resize
      />
    </v-col>
  </v-row>
  <v-row class="ma-1 mx-4">
    <v-col cols="12">
      <div class="mb-2 font-weight-bold">รายละเอียดเรื่องร้องเรียน</div>
      <v-textarea
        v-model="details.details"
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
      <div class="mb-2 font-weight-bold">เกิดเหตุที่</div>
      <v-text-field
        v-model="details.crimeScene"
        variant="outlined"
        placeholder="เกิดเหตุที่"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
  </v-row>
  <v-row class="ma-1 mx-4">
    <v-col cols="12">
      <div class="mb-2 font-weight-bold">อื่น ๆ ถ้ามี</div>
      <v-textarea
        v-model="details.other"
        variant="outlined"
        placeholder="อื่น ๆ ถ้ามี"
        persistent-placeholder
        hide-details
        density="compact"
        no-resize
      />
    </v-col>
  </v-row>
</template>

<script setup>
const details = defineModel()
</script>
