<template>
  <v-app>
    <v-layout >
      <router-view></router-view>
    </v-layout>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
const showHomePages = ref(true)
</script>
