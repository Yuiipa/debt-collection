<template>
  <Report :titletext="titletext" :report="meetingReport" />
</template>

<script setup>
import { ref } from 'vue'
import Report from '@/views/appeal/Report.vue'

const titletext = 'การประชุมคณะกรรมการกำกับการทวงถามหนี้ประจำท้องที่'
const meetingReport = ref([
  {
    datetime: '10/01/2567',
    year: '2023',
    quarter: '1',
    month: 'มกราคม-กุมภาพันธ์',
    file: '22',
  },
])
</script>
