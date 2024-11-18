<template>
  <div class="px-5">
    <v-card-title class="mt-1">
      <span class="font-weight-bold" style="color: #1a237e">
        ข้อมูลเรื่องร้องเรียน
      </span>
    </v-card-title>
    <v-divider :thickness="2" color="#1a237e" />
  </div>
  <v-row class="ma-1 mx-4">
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">เลขที่เรื่องร้องเรียน</div>
      <v-text-field
        v-model="details.id"
        variant="outlined"
        placeholder="เลขที่เรื่องร้องเรียน"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="3" cols="12">
      <div class="mb-2 font-weight-bold">เรื่องร้องเรียน</div>
      <v-text-field
        v-model="details.topic"
        variant="outlined"
        placeholder="เรื่องร้องเรียน"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
  </v-row>
  <v-row class="ma-1 mx-4">
    <v-col md="6" cols="12">
      <div class="mb-2 font-weight-bold">ประเภทเรื่องร้องเรียนหลัก</div>
      <v-text-field
        v-model="details.maintype"
        variant="outlined"
        placeholder="ประเภทเรื่องร้องเรียนหลัก"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="6" cols="12">
      <div class="mb-2 font-weight-bold">ประเภทเรื่องร้องเรียนรอง</div>
      <v-text-field
        v-model="details.sectype"
        variant="outlined"
        placeholder="ประเภทเรื่องร้องเรียนรอง"
        persistent-placeholder
        hide-details
        density="compact"
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
    <v-col md="4" cols="12">
      <div class="mb-2 font-weight-bold">เลขประจำตัวประชาชน</div>
      <v-text-field
        v-model="details.pid"
        variant="outlined"
        placeholder="เลขประจำตัวประชาชน"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="4" cols="12">
      <div class="mb-2 font-weight-bold">ชื่อ</div>
      <v-text-field
        v-model="details.name"
        variant="outlined"
        placeholder="ชื่อ"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="4" cols="12">
      <div class="mb-2 font-weight-bold">นามสกุล</div>
      <v-text-field
        v-model="details.lastname"
        variant="outlined"
        placeholder="นามสกุล"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
  </v-row>
  <v-row class="ma-1 mx-4">
    <v-col md="4" cols="12">
      <div class="mb-2 font-weight-bold">ตำบล</div>
      <v-text-field
        v-model="details.district"
        variant="outlined"
        placeholder="ตำบล"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="4" cols="12">
      <div class="mb-2 font-weight-bold">อำเภอ</div>
      <v-text-field
        v-model="details.town"
        variant="outlined"
        placeholder="อำเภอ"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="4" cols="12">
      <div class="mb-2 font-weight-bold">จังหวัด</div>
      <v-text-field
        v-model="details.province"
        variant="outlined"
        placeholder="จังหวัด"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
  </v-row>
  <v-row class="ma-1 mx-4">
    <v-col cols="12">
      <div class="mb-2 font-weight-bold">รายละเอียดปัญหา</div>
      <v-textarea
        v-model="details.problem"
        variant="outlined"
        placeholder="รายละเอียดปัญหา"
        persistent-placeholder
        hide-details
        density="compact"
        no-resize
      />
    </v-col>
  </v-row>
  <v-row class="ma-1 mx-4">
    <v-col cols="12">
      <div class="mb-2 font-weight-bold">ผู้ร้องต้องการ</div>
      <v-textarea
        v-model="details.needed"
        variant="outlined"
        placeholder="ผู้ร้องต้องการ"
        persistent-placeholder
        hide-details
        density="compact"
        no-resize
      />
    </v-col>
  </v-row>
  <v-row class="ma-1 mx-4">
    <v-col cols="12">
      <div class="mb-2 font-weight-bold">รายละเอียดมอบหมาย</div>
      <v-textarea
        v-model="details.assign"
        variant="outlined"
        placeholder="รายละเอียดมอบหมาย"
        persistent-placeholder
        hide-details
        density="compact"
        no-resize
      />
    </v-col>
  </v-row>
  <div class="px-5">
    <v-card-title
      class="font-weight-bold"
      style="background-color: #e3f2fd; color: #1a237e"
    >
      ที่เกิดเหตุ
    </v-card-title>
  </div>
  <v-row class="ma-1 mx-4">
    <v-col md="4" cols="12">
      <div class="mb-2 font-weight-bold">ตำบล</div>
      <v-text-field
        v-model="details.crimedistrict"
        variant="outlined"
        placeholder="ตำบล"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="4" cols="12">
      <div class="mb-2 font-weight-bold">อำเภอ</div>
      <v-text-field
        v-model="details.crimetown"
        variant="outlined"
        placeholder="อำเภอ"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
    <v-col md="4" cols="12">
      <div class="mb-2 font-weight-bold">จังหวัด</div>
      <v-text-field
        v-model="details.crimeprovince"
        variant="outlined"
        placeholder="จังหวัด"
        persistent-placeholder
        hide-details
        density="compact"
      />
    </v-col>
  </v-row>
</template>

<script setup>
const details = defineModel()
</script>
