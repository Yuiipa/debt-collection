<template>
  <div
    :elevation="1"
    :height="90"
    style="background-color: #1a237e"
    class="py-6 px-10"
  >
    <v-row class="pa-0">
      <v-col cols="1" class="text-center d-flex justify-center align-center">
        <v-icon color="grey" large>mdi-dots-horizontal</v-icon>
      </v-col>
      <v-col cols="1"> </v-col>
      <v-col cols="8">
        <div class="d-flex justify-center align-center">
          <div class="d-flex align-center">
            <v-avatar size="70" class="mr-3">
              <v-img src="/logo.ico" />
            </v-avatar>
            <div class="d-none d-md-flex">
              <div class="text-left">
                <span style="font-size: 16px; display: block; color: white">
                  ระบบฐานข้อมูลตามพระราชบัญญัติการทวงถามหนี้ พ.ศ.๒๔๔๕
                  กรมการปกครอง กระทรวงมหาดไทย
                </span>
                <span style="font-size: 15px; display: block; color: lightgray">
                  Database on Dept Collection Act, B.E.2558
                </span>
                <span style="font-size: 15px; display: block; color: lightgray">
                  Department Of Provincial Administration, Ministry of Interior
                </span>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="2" class="d-flex justify-center align-center">
        <v-icon class="px-2" large color="white">mdi-bell</v-icon>
        <v-icon large color="white">mdi-fullscreen</v-icon>
        <span class="pr-2" style="color: white; margin-left: 8px"
          >น.ส. รุ่งนภา สะสม</span
        >
        <v-menu transition="open-on-focus">
          <template v-slot:activator="{ props }">
            <v-avatar size="38" v-bind="props">
              <img src="/src/assets/logo.png" alt="Profile" />
            </v-avatar>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, index) in listService"
              :key="index"
              @click="$router.push({ name: item.name })"
            >
              <v-list-item-title class="text-indigo-darken-4">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const listService = [
  { title: 'เปลี่ยนรหัสผ่าน', name: 'debt-change-password' },
  { title: 'กลับไปหน้าเมนู', name: 'debt-menu-page' },
  { title: 'ออกจากระบบ', name: 'debt-home' },
]
</script>
  