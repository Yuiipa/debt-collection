<template>
  <Header>
    <div fill-height fluid class="pt-3" >
      <router-view :key="route.fullPath"></router-view>
    </div>
  </Header>
  <!-- <v-main class="overflow-auto pa-0 ma-0">
    
    
  </v-main> -->
</template>
<script setup>
import { useRoute } from 'vue-router'
import Header from '@/components/Header'
const route = useRoute()
</script>
