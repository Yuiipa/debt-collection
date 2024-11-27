<template>
  <v-app-bar
    elevation="1"
    class="py-2 position-fixed"
    :color="isPop ? '#fff' : '#1A237E'"
  >
    <v-row class="px-2 px-md-10">
      <!-- Conditionally render this section if the path does not start with /home -->
      <v-col
        v-if="!isHomeRoute && !isMenuPage"
        cols="1"
        class="text-center d-flex justify-center align-center"
      >
        <!-- Icon to open/close the Navigation Drawer -->
        <v-icon color="grey" large @click="toggleDrawer"> mdi-menu </v-icon>
      </v-col>

      <v-col cols="6" md="8">
        <div class="d-flex justify-start align-center">
          <div class="d-flex align-center">
            <v-avatar size="60" class="mr-3">
              <v-img src="/logo.ico" />
            </v-avatar>
            <div class="d-none d-lg-flex">
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
        cols="5"
        md="4"
        class="d-flex justify-end align-center"
        v-if="isPop"
      >
        <v-btn
          size="large"
          height="60px"
          @click="$router.push({ name: 'debt-home' })"
        >
          หน้าหลัก
        </v-btn>
        <v-btn
          size="large"
          height="60px"
          @click="$router.push({ name: 'debt-login' })"
        >
          เข้าสู่ระบบ
        </v-btn>
      </v-col>
      <v-col v-if="isHomeRoute || isMenuPage" cols="1"> </v-col>
      <v-col
        v-if="!isHomeRoute"
        cols="5"
        md="3"
        class="d-flex justify-end align-center"
      >
        <v-icon class="px-2" large>mdi-bell</v-icon>
        <v-icon large>mdi-fullscreen</v-icon>
        <span class="pr-2 d-none d-md-flex" style="margin-left: 8px">
          น.ส. รุ่งนภา สะสม
        </span>
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
              class="list-item-underline"
            >
              <v-list-item-title class="text-indigo-darken-4">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-app-bar>

  <!-- Navigation Drawer หลัก -->
  <v-navigation-drawer
    v-model="drawer"
    :permanent="!$vuetify.display.mobile"
    :scrim="!subDrawer && $vuetify.display.mobile"
    elevation="0"
    :rail="subDrawer"
    :width="subDrawer ? 56 : 270"
    class="pt-2 position-fixed"
    v-if="!isHomeRoute && !isMenuPage"
  >
    <v-list>
      <template v-for="(item, index) in currentSidebar" :key="index">
        <!-- เมนูที่มี children -->
        <v-list-item
          v-if="item.children"
          :title="!subDrawer ? item.title : ''"
          :prepend-icon="item.icon"
          @click="selectMenu(item)"
          :class="{ 'selected-item': isSelected(item) }"
        >
        </v-list-item>

        <!-- เมนูปกติ -->
        <v-list-item
          v-else
          :title="!subDrawer ? item.title : ''"
          :prepend-icon="item.icon"
          :class="{ 'selected-item': isSelected(item) }"
          @click="navigate(item.name)"
        >
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>

  <!-- Children Drawer -->
  <v-navigation-drawer
    v-model="subDrawer"
    app
    right
    :permanent="!$vuetify.display.mobile"
    :width="270"
    
    :class="{ 'pl-12': $vuetify.display.mobile && drawer }"
    v-if="!isHomeRoute && !isMenuPage"
    class="pt-2 position-fixed"
  >
    <v-list>
      <template v-if="selectedMenu && selectedMenu.children">
        <template v-for="(child, idx) in selectedMenu.children" :key="idx">
          <!-- ตรวจสอบว่า child มี children หรือไม่ -->
          <v-list-group
            v-if="child.children"
            :prepend-icon="child.icon"
            no-action
          >
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" @click="navigate(child.name)"  class="list-item-underline">
                <v-list-item-title class="wrap-text">{{
                  child.title
                }}</v-list-item-title>
              </v-list-item>
            </template>

            <!-- วนลูปเมนูย่อยภายใน children ของ child -->
            <v-list-item
              v-for="(grandChild, grandIdx) in child.children"
              :key="grandIdx"
              class="list-item-underline"
              :class="{ 'selected-item': isSelected(grandChild) }"
              :prepend-icon="grandChild.icon"
              @click="navigate(grandChild.name)"
            >
              <v-list-item-title class="wrap-text">{{
                grandChild.title
              }}</v-list-item-title>
            </v-list-item>
          </v-list-group>

          <!-- ถ้าไม่มี children ให้แสดงเป็นเมนูปกติ -->
          <v-list-item
            v-else
            class="list-item-underline"
            :class="{ 'selected-item': isSelected(child) }"
            :prepend-icon="child.icon"
            @click="navigate(child.name)"
          >
            <v-list-item-title class="wrap-text">{{
              child.title
            }}</v-list-item-title>
          </v-list-item>
        </template>
      </template>
    </v-list>
  </v-navigation-drawer>

  <v-main app style="background-color: #fafafa; min-height: 100vh">
    <slot />
  </v-main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import menuData from '@/static/navigation.json'

const drawer = ref(true) // สำหรับ Drawer หลัก
const subDrawer = ref(false) // สำหรับ Drawer ย่อย
const selectedMenu = ref(null) // เก็บเมนูที่เลือก
const router = useRouter()
const route = useRoute()

const listService = menuData.listService
const SideBar = menuData.SideBar
const SideBar2 = menuData.SideBar2

const currentSidebar = computed(() => {
  return route.path.startsWith('/debt') ? SideBar : SideBar2
})

function toggleDrawer() {
  drawer.value = !drawer.value // เปลี่ยนสถานะของเมนูหลัก
  if (!drawer.value) {
    subDrawer.value = false // ปิดเมนูย่อยเมื่อเมนูหลักปิด
  }
}

function navigate(routeName) {
  // ฟังก์ชันช่วยเพื่อตรวจสอบว่า routeName อยู่ใน children ใดๆ ของเมนูหรือไม่
  function isRouteInChildren(children, routeName) {
    return children.some((child) => {
      // ตรวจสอบ child ชั้นแรก
      if (child.name === routeName) {
        return true
      }
      // ตรวจสอบ children ของ child ถ้ามี
      if (child.children) {
        return isRouteInChildren(child.children, routeName)
      }
      return false
    })
  }

  // ตรวจสอบว่า routeName เป็น children หรือ children ของ children ของ selectedMenu หรือไม่
  const isChildRoute =
    selectedMenu.value &&
    selectedMenu.value.children &&
    isRouteInChildren(selectedMenu.value.children, routeName)

  if (!isChildRoute) {
    subDrawer.value = false // ปิดเมนูย่อยถ้า routeName ไม่ใช่ children
  }

  router.push({ name: routeName }) // เปลี่ยน Route
}

function selectMenu(item) {
  if (item.children) {
    selectedMenu.value = item // กำหนดเมนูหลักที่เลือก
    subDrawer.value = true // เปิดเมนูย่อย
  }
}

const isPop = computed(() => route.path === '/home/population')
const isHomeRoute = computed(() => route.path.startsWith('/home'))
const isMenuPage = computed(() => route.path.startsWith('/menu_page'))

function isSelected(item) {
  // ถ้าเมนูตรงกับ route ปัจจุบัน
  if (route.name === item.name) {
    return true
  }

  // ตรวจสอบ children
  if (item.children) {
    return item.children.some((child) => isSelected(child))
  }

  return false
}

function openDrawerForCurrentPath() {
  // ตรวจสอบ Sidebar ปัจจุบัน
  const sidebar = currentSidebar.value

  // ค้นหาเมนูหลักที่มี path ปัจจุบันใน children
  const findMenuWithPath = (menuList, path) => {
    for (const menu of menuList) {
      if (menu.children) {
        const child = findMenuWithPath(menu.children, path)
        if (child) {
          selectedMenu.value = menu // ตั้งค่าเมนูหลักที่ถูกเลือก
          subDrawer.value = true // เปิด drawer ย่อย
          return child
        }
      }
      if (menu.name === route.name) {
        return menu
      }
    }
    return null
  }

  findMenuWithPath(sidebar, route.name)
}

// เรียกใช้เมื่อ component ถูกสร้าง
onMounted(() => {
  openDrawerForCurrentPath() // เช็ค path ปัจจุบันและเปิด drawer
})
</script>

<style scoped>
.selected-item {
  background-color: rgba(209, 211, 229, 0.7); /* เปลี่ยนสีพื้นหลังที่เลือก */
  color: #1a237e; /* เปลี่ยนสีตัวอักษรที่เลือก */
  border-right: 10px solid #1a237e; /* เพิ่มเส้นขอบด้านขวาสีน้ำเงินเมื่อเมนูถูกเลือก */
}

.selected-item2 {
  background-color: rgba(209, 211, 229, 0.7); /* เปลี่ยนสีพื้นหลังที่เลือก */
  color: #1a237e; /* เปลี่ยนสีตัวอักษรที่เลือก */
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.wrap-text {
  white-space: normal;
  word-wrap: break-word;
  line-height: 1.5; /* สำหรับเว้นช่องไฟระหว่างบรรทัด */
}

.main-content {
  overflow-y: auto; /* เพิ่ม scrollbar เฉพาะในเนื้อหาของ main */
  height: calc(100vh - var(--v-toolbar-height)); /* ลดความสูงของ app-bar */
  padding: 16px;
  background-color: #fafafa;
}

.list-item-underline {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1); /* เพิ่มเส้นใต้ */
}

.list-item-underline:hover {
  background-color: rgba(0, 0, 0, 0.05); /* เพิ่มสีพื้นหลังเมื่อ hover */
  border-bottom: 1px solid rgba(0, 0, 0, 0.2); /* เส้นใต้หนาขึ้นเมื่อ hover */
}
</style>