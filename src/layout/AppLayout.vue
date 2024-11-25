<template>
  <AppBar>
    <div fill-height fluid >
      <router-view :key="route.fullPath"></router-view>
    </div>
  </AppBar>
  <!-- <v-main class="overflow-auto pa-0 ma-0">
    
    
  </v-main> -->
</template>
<script setup>
import { useRoute } from 'vue-router'
import AppBar from '@/components/AppBar'
const route = useRoute()
</script>


