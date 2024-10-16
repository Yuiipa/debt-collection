<template>
  <v-app-bar :elevation="1" :height="90">
    <v-app-bar-title>
      <div class="d-flex v-col-12">
        <div class="d-flex v-col-2">
          <v-avatar size="large" class="mt-2">
            <v-img src="/logo.ico" />
          </v-avatar>

          <div class="text-center font-weight-bold ma-0 ml-2 v-row">
            <span style="font-size: 13px"
              >ศูนย์ดำรงธรรมอำเภอ กรมการปกครอง กระทรวงมหาดไทย
            </span>

            <!-- <span style="font-size: 13px; text-transform: uppercase">
              Damrongtham District Justice Provision Center
            </span> -->
          </div>
        </div>

        <v-spacer />
        <div
          class="d-flex v-col-9 text-indigo-darken-4 ma-2 justify-end font-weight-bold"
        >
          <v-btn variant="text" height="52" min-width="146" :ripple="false"
            >หน้าแรก</v-btn
          >
          <v-btn variant="text" height="52" min-width="146" :ripple="false">
            เกี่ยวกับ</v-btn
          >

          <v-menu transition="open-on-focus">
            <template v-slot:activator="{ props, isActive }">
              <v-btn
                variant="text"
                height="52"
                min-width="146"
                :ripple="false"
                :append-icon="!isActive ? 'mdi-chevron-down' : 'mdi-chevron-up'"
                v-bind="props"
              >
                บริการ
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, index) in listService"
                :key="index"
                :value="item.title"
              >
                <v-list-item-title class="text-indigo-darken-4">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn variant="text" height="52" min-width="146" :ripple="false"
            >ข้อมูลศูนย์ดำรงธรรม</v-btn
          >
          <v-btn variant="text" height="52" min-width="146" :ripple="false"
            >คำถามที่พบบ่อย</v-btn
          >
          <v-btn
            variant="text"
            height="52"
            min-width="146"
            :ripple="false"
            @click="router.replace({ name: 'drt-contact' })"
            >ติดต่อเรา</v-btn
          >
          <v-btn
            variant="elevated"
            color="indigo-darken-4"
            :ripple="true"
            height="52"
            min-width="146"
            @click="$router.push({ name: 'drt-login' })"
            >เข้าสู่ระบบ</v-btn
          >
        </div>
      </div>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const listService = [
  { title: 'ร้องเรียน', name: 'drt-appeal' },
  { title: 'เอกสารคำร้องขอไกล่เกลี่ย', name: 'drt-document' },
  { title: 'ติดตามเรื่อง', name: 'drt-follow' },
]

const menu = [
  { title: 'หน้าแรก', name: 'drt-home' },
  { title: 'เกี่ยวกับ', name: 'drt-about' },
  {
    title: 'บริการ',
    name: 'drt-service',
    children: [
      { title: 'ร้องเรียน', name: 'drt-appeal' },
      { title: 'เอกสารคำร้องขอไกล่เกลี่ย', name: 'drt-document' },
      { title: 'ติดตามเรื่อง', name: 'drt-follow' },
    ],
  },
  { title: 'ข้อมูลศูนย์ดำรงธรรม', name: 'drt-details' },
  { title: 'คำถามที่พบบ่อย', name: 'drt-questions' },
  { title: 'ติดต่อเรา', name: 'drt-contact' },
]
</script>
