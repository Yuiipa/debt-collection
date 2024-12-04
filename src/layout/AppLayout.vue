<template>
  <AppBar>
    <router-view :key="route.fullPath"></router-view>
  </AppBar>
</template>
<script setup>
import { useRoute } from 'vue-router'
import AppBar from '@/components/AppBar'
const route = useRoute()
</script>


