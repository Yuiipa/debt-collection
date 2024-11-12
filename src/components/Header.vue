<template>
  <!-- Navigation Drawer -->
  <v-navigation-drawer
    v-if="!isHomeRoute"
    v-model="drawer"
    :permanent="!$vuetify.display.mobile"
  >
    <v-list>
      <v-list-item-group>
        <v-list-item
          v-for="(item, index) in currentSidebar"
          :key="index"
        >
          <!-- Main Menu Item -->
          <v-list-item-content>
            <v-list-item-title @click="item.children ? toggleSubmenu(index) : navigateTo(item)">
              <v-icon v-if="item.icon" left>{{ item.icon }}</v-icon>
              {{ item.title }}
              <v-icon v-if="item.children" class="ml-2" small>{{ expanded[index] ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-list-item-title>
          </v-list-item-content>

          <!-- Nested Submenu Items -->
          <v-list v-if="item.children && expanded[index]" class="ml-4">
            <v-list-item
              v-for="(subItem, subIndex) in item.children"
              :key="subIndex"
              @click="navigateTo(subItem)"
            >
              <v-list-item-content>
                <v-list-item-title>{{ subItem.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>

  <v-main>
    <v-row class="py-2 px-10">
      <!-- Conditionally render this section if the path does not start with /home -->
      <v-col
        v-if="!isHomeRoute"
        cols="1"
        class="text-center d-flex justify-center align-center"
      >
        <!-- Icon to open/close the Navigation Drawer -->
        <v-icon color="grey" large @click.stop="drawer = !drawer">
          mdi-menu
        </v-icon>
      </v-col>

      <v-col cols="9">
        <div class="d-flex justify-start align-center">
          <div class="d-flex align-center">
            <v-avatar size="70" class="mr-3">
              <v-img src="/logo.ico" />
            </v-avatar>
            <div class="d-none d-md-flex">
              <div class="text-left">
                <span style="font-size: 16px; display: block">
                  ระบบฐานข้อมูลตามพระราชบัญญัติการทวงถามหนี้ พ.ศ.๒๔๔๕
                  กรมการปกครอง กระทรวงมหาดไทย
                </span>
                <span style="font-size: 15px; display: block">
                  Database on Dept Collection Act, B.E.2558
                </span>
                <span style="font-size: 15px; display: block">
                  Department Of Provincial Administration, Ministry of Interior
                </span>
              </div>
            </div>
          </div>
        </div>
      </v-col>

      <v-col
        v-if="!isHomeRoute"
        cols="2"
        class="d-flex justify-center align-center"
      >
        <v-icon class="px-2" large>mdi-bell</v-icon>
        <v-icon large>mdi-fullscreen</v-icon>
        <span class="pr-2" style="margin-left: 8px"> น.ส. รุ่งนภา สะสม </span>
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
              @click="navigateTo(item)"
              prepend-icon="mdi-email"
            >
              <v-list-item-title class="text-indigo-darken-4">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>

    <!-- Conditionally render slot only if not on /home route -->
    <slot v-if="!isHomeRoute" />
  </v-main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const drawer = ref(true)
const expanded = ref({}) // To track expanded state of each menu item

const listService = [
  { title: 'เปลี่ยนรหัสผ่าน', name: 'debt-change-password' },
  { title: 'กลับไปหน้าเมนู', name: 'debt-menu-page' },
  { title: 'ออกจากระบบ', name: 'debt-home' },
]

// Updated SideBar structure with nested menus
const SideBar = [
  { title: 'หน้าหลัก', name: 'debt-home-registration', icon: 'mdi-home' },
  { title: 'คำขอทำรายการ', name: 'debt-request-registration', icon: 'mdi-file-document' },
  { title: 'จัดการผู้ใช้งาน', name: 'debt-user-registration', icon: 'mdi-account' },
  { 
    title: 'รายงาน', 
    name: 'debt-report-registration', 
    icon: 'mdi-chart-bar',
    children: [
      { title: 'การประชุมคณะกรรมการ', name: 'debt-report-meeting' },
      { title: 'การประเมินผลการปฏิบัติงาน', name: 'debt-report-evaluation' },
      { title: 'ผลการดำเนินงาน', name: 'debt-report-progress' },
      { title: 'อื่น ๆ', name: 'debt-report-others' },
    ]
  },
  { title: 'จัดการระบบ', name: 'debt-system-registration', icon: 'mdi-menu' },
  { title: 'ตั้งค่า', name: 'debt-setting-registration', icon: 'mdi-cog' },
  { title: 'สำรองข้อมูล', name: 'debt-reservedata-registration', icon: 'mdi-database' },
]

const SideBar2 = [
  { title: 'หน้าหลัก', name: 'debt-home-appeal', icon: 'mdi-home' },
  { title: 'คำขอทำรายการ', name: 'debt-form-appeal', icon: 'mdi-file-document' },
  { title: 'จัดการผู้ใช้งาน', name: 'debt-process-appeal', icon: 'mdi-account' },
  { title: 'รายงาน', name: 'debt-report-appeal', icon: 'mdi-chart-bar' },
  { title: 'จัดการระบบ', name: 'debt-center-appeal', icon: 'mdi-cog' },
  { title: 'ตั้งค่า', name: 'debt-search-appeal', icon: 'mdi-settings' },
]

const route = useRoute()
const router = useRouter()

// Determine which sidebar to use based on the route path
const currentSidebar = computed(() => {
  return route.path.startsWith('/debt') ? SideBar : SideBar2
})

// Check if the current route starts with /home
const isHomeRoute = computed(() => route.path.startsWith('/home'))

// Navigation function to handle route changes
function navigateTo(item) {
  router.push({ name: item.name });
}

// Toggle submenu expansion
function toggleSubmenu(index) {
  expanded.value[index] = !expanded.value[index];
}
</script>
