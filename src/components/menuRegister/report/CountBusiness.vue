<template>
  <v-card class="pt-2 mx-12 mt-12">
    <v-row>
      <v-col
        cols="12"
        class="d-flex justify-center rounded-lg elevation-3"
        style="background-color: white; height: 400px"
      >
        <AreaChart :data="graph" /></v-col
    ></v-row>
  </v-card>
</template>

<script setup>
import AreaChart from '@/components/charts/AreaChart.vue'
const graph = [
  { usage_count: 385, usage_name: 'กรุงเทพมหานคร' },
  { usage_count: 251, usage_name: 'เชียงใหม่' },
  { usage_count: 89, usage_name: 'ภูเก็ต' },
  { usage_count: 159, usage_name: 'ชลบุรี' },
  { usage_count: 359, usage_name: 'ขอนแก่น' },
  { usage_count: 421, usage_name: 'สงขลา' },
  { usage_count: 275, usage_name: 'นครราชสีมา' },
  { usage_count: 310, usage_name: 'สุราษฎร์ธานี' },
  { usage_count: 195, usage_name: 'ระยอง' },
  { usage_count: 320, usage_name: 'อยุธยา' },
]
</script>