<template>
  <v-app>
    <v-layout height="100vh">
      <router-view></router-view>
    </v-layout>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
const showHomePages = ref(true)
</script>
