<template>
  <div>HomeAppeal</div>
  <div class="pa-4">
    <v-btn x-large>หน้าหลัก</v-btn>
  </div>
  <div class="pa-4">
    <v-btn x-large @click="$router.push({ name: 'debt-form-appeal' })">รับเรื่องร้องเรียน</v-btn>
  </div>
  <div class="pa-4">
    <v-btn x-large>ดำเนินการเรื่องร้องเรียน</v-btn>
  </div>
  <div class="pa-4">
    <v-btn x-large>รายงาน</v-btn>
  </div>
  <div class="pa-4">
    <v-btn x-large>เรื่องร้องเรียนจากศูนย์ดำรงธรรม</v-btn>
  </div>
  <div class="pa-4">
    <v-btn x-large>ประวัติการกระทำผิดของผู้ทวงถามหนี้</v-btn>
  </div>
</template>

<script setup>
</script>

