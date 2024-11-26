<template>
  <Report :titletext="titletext" :report="performanceReport" />
</template>

<script setup>
import { ref } from 'vue'
import Report from '@/views/appeal/Report.vue'

const titletext = 'ผลการดำเนินงานตรวจติดตามผู้ประกอบธุรกิจทวงถามหนี้'
const performanceReport = ref([
  {
    datetime: '18/05/2566',
    year: '2023',
    quarter: '3',
    month: 'เมษายน-มิถุนายน',
    file: 'ตรวจติดตามผลการดำเนินงาน จ.เชียงราย',
  },
  {
    datetime: '19/04/2566',
    year: '2022',
    quarter: '4',
    month: 'กรกฎาคม-กันยายน',
    file: 'ตรวจติดตามผลการดำเนินงาน จ.พระนครศรีอยุธยา',
  },
  {
    datetime: '19/04/2566',
    year: '2023',
    quarter: '1',
    month: 'ตุลาคม-ธันวาคม',
    file: 'ตรวจติดตามผลการดำเนินงาน จ.ร้อยเอ็ด',
  },
  {
    datetime: '19/04/2566',
    year: '2022',
    quarter: '4',
    month: 'กรกฎาคม-กันยายน',
    file: 'ตรวจติดตามผลการดำเนินงาน จ.ขอนแก่น',
  },
])
</script>
