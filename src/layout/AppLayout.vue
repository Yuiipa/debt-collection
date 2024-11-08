<template>
  <v-main class="overflow-auto pa-0 ma-0">
    <v-container fill-height fluid class="pa-0">
    <router-view :key="route.fullPath"></router-view>
    </v-container>
  </v-main>
</template>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
