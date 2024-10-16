<template>
  <v-main class="overflow-auto">
    <v-container fill-height fluid>
    <router-view :key="route.fullPath"></router-view>
    </v-container>
  </v-main>
</template>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
