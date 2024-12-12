<template>
  <v-menu v-model="isMenuOpen" offset-y >
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        variant="outlined"
        prepend-icon="mdi-tray-arrow-down"
        :style="
          isMenuOpen
            ? 'color: white; background-color: #1a237e'
            : 'background-color: white; color: #1a237e'
        "
        class="rounded-lg px-2 px-md-5"
        size="large"
        id="export"
      >
        Export
      </v-btn>
    </template>
    <v-list>
      <!-- เงื่อนไขการแสดง Excel -->
      <v-list-item
        v-if="exportExcel"
        class="d-flex justify-start"
        @click="exportExcel"
      >
        <v-icon class="text-green">mdi-file-excel</v-icon>
        <span class="mx-2">Excel</span>
      </v-list-item>
      <!-- เงื่อนไขการแสดง PDF -->
      <v-list-item v-if="exportPdf" @click="exportPdf">
        <v-icon class="text-orange">mdi-file-pdf-box</v-icon>

        <span class="mx-2">PDF</span>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
  
<script setup>
import { ref } from 'vue'

// Props รับฟังก์ชันจากภายนอก
const props = defineProps({
  exportExcel: Function, // ฟังก์ชันสำหรับ Excel
  exportPdf: Function, // ฟังก์ชันสำหรับ PDF
})

const isMenuOpen = ref(false) // สถานะเมนูเปิด/ปิด
</script>
  

  