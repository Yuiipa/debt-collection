<template>
  <!-- Navigation Drawer -->
  <v-app-bar prominent elevation="1" class="py-2" color="#1A237E">
    <v-row class="px-10">
      <!-- Conditionally render this section if the path does not start with /home -->
      <v-col
        v-if="!isHomeRoute && !isMenuPage"
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
            <v-avatar size="60" class="mr-3">
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
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    :permanent="!$vuetify.display.mobile"
    app
    :width="270"
    class="pt-2"
    
    v-if="!isHomeRoute && !isMenuPage"
  >
    <v-list>
      <!-- วนลูปเมนูหลัก -->
      <template v-for="(item, index) in currentSidebar" :key="index">
        <!-- ตรวจสอบว่า item มี children หรือไม่ -->
        <v-list-group v-if="item.children" :prepend-icon="item.icon" no-action>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :title="item.title"
              @click="navigate(item.name)"
              style="padding-left: 8px"
            >
            </v-list-item>
          </template>

          <!-- วนลูปเมนูย่อยภายใน children -->
          <v-list-item
            v-for="(child, idx) in item.children"
            :key="idx"
            :title="child.title"
            :class="{ 'selected-item': isSelected(child) }"
            :prepend-icon="child.icon"
            @click="navigate(child.name)"
          >
            <template #title>
              <span class="multiline-title">{{ child.title }}</span>
            </template></v-list-item
          >
        </v-list-group>

        <!-- ถ้าไม่มี children ให้แสดงเป็นเมนูปกติ -->
        <v-list-item
          v-else
          :title="item.title"
          :class="{ 'selected-item': isSelected(item) }"
          :prepend-icon="item.icon"
          @click="navigate(item.name)"
          style="padding-left: 8px"
        >
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
  <v-main app style="background-color: #fafafa; min-height: 100vh;">
    <!-- Conditionally render slot only if not on /home route -->
    <slot  />
  </v-main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const drawer = ref(true)
const router = useRouter()
const route = useRoute()

const listService = [
  { title: 'เปลี่ยนรหัสผ่าน', name: 'debt-change-password' },
  { title: 'กลับไปหน้าเมนู', name: 'debt-menu-page' },
  { title: 'ออกจากระบบ', name: 'debt-home' },
]

const SideBar = [
  { title: 'หน้าหลัก', name: 'debt-home-registration', icon: 'mdi-home' },
  {
    title: 'คำขอทำรายการ',
    icon: 'mdi-file-document',
    children: [
      { title: 'คำขอทำรายการทั้งหมด', name: 'debt-Request_All-registration' },
      {
        title: 'คำขอจดทะเบียนการประกอบธุรกิจทวงถามหนี้',
        name: 'debt-Registration-registration',
      },
      {
        title: 'คำขอเปลี่ยนแปลงรายการจดทะเบียนผู้ประกอบธุรกิจทวงถามหนี้',
        name: 'debt-ChangeBusiness-registration',
      },
      {
        title: 'คำขอรับใบแทนหนังสือสำคัญแสดงการจดทะเบียนการประกอบธุรกิจ',
        name: 'debt-Substitute-registration',
      },
      {
        title: 'บัญชีรายชื่อพนักงานของผู้ประกอบธุรกิจทวงถามหนี้',
        name: 'debt-ChangeRoster-registration',
      },
      {
        title: 'คำขอเลิกประกอบธุรกิจทวงถามหนี้',
        name: 'debt-Quit_Business-registration',
      },
      {
        title: 'ขอต่ออายุประกอบธุรกิจ',
        name: 'debt-Renew_request-registration',
      },
      {
        title: 'ประวัติกระทำความผิดของผู้ประกอบธุรกิจทวงถามหนี้',
        name: 'debt-Blame_Business-registration',
      },
      {
        title: 'ยกเลิกคำสั่งเพิกถอนการจดทะเบียนการประกอบธุรกิจทวงถามหนี้',
        name: 'debt-Cancel_Quit-registration',
      },
      {
        title: 'คำสั่งเพิกถอนการจดทะเบียนการประกอบธุรกิจทวงถามหนี้',
        name: 'debt-Revoke-registration',
      },
    ],
  },
  {
    title: 'จัดการผู้ใช้งาน',
    name: 'debt-user-registration',
    icon: 'mdi-account',
  },
  {
    title: 'รายงาน',
    icon: 'mdi-chart-bar',
    children: [
      {
        title: 'รายงานข้อมูลผู้ประกอบธุรกิจทวงถามหนี้',
        children: [
          { title: 'การประชุมคณะกรรมการ', name: 'debt-report-appeal-meeting' },
          {
            title: 'การประเมินผลการปฏิบัติงาน',
            name: 'debt-report-appeal-evaluate',
          },
          { title: 'ผลการดำเนินงาน', name: 'debt-report-appeal-performance' },
          { title: 'อื่น ๆ', name: 'debt-report-appeal-other' },
        ],
      },
      {
        title: 'รายงานการร้องเรียนผู้ทวงถามหนี้',
        name: 'debt-report-evaluation',
      },
      { title: 'รายงานผลอื่นๆ', name: 'debt-report-progress' },
    ],
  },
  {
    title: 'จัดการระบบ',
    icon: 'mdi-menu',
    children: [
      { title: 'ข้อมูลระบบ', name: 'debt-request-registration' },
      {
        title: 'ข้อมูลคำขอทำรายการ',
        name: 'debt-request-registration',
      },
      {
        title: 'ข้อมูลรายงานเรื่องร้องเรียน',
        name: 'debt-request-registration',
      },
    ],
  },
  { title: 'ตั้งค่า', name: 'debt-setting-registration', icon: 'mdi-cog' },
  {
    title: 'สำรองข้อมูล',
    name: 'debt-reservedata-registration',
    icon: 'mdi-database',
  },
]

const SideBar2 = [
  { title: 'หน้าหลัก', name: 'debt-home-appeal', icon: 'mdi-home-outline' },
  {
    title: 'รับเรื่องร้องเรียน',
    name: 'debt-form-appeal',
    icon: 'mdi-file-document-edit-outline',
  },
  {
    title: 'ดำเนินการเรื่องร้องเรียน',
    name: 'debt-process-appeal',
    icon: 'mdi-rocket-launch-outline',
  },
  {
    title: 'รายงาน',
    icon: 'mdi-chart-bell-curve-cumulative',
    children: [
      {
        title: 'การประชุมคณะกรรมการกำกับการทวงถามหนี้',
        name: 'debt-report-appeal-meeting',
      },
      {
        title:
          'การประเมินผลการปฏิบัติงานตาม พ.ร.บ. การทวงถามหนี้ พ.ศ.๒๕๕๘ (ตัวชี้วัด)',
        name: 'debt-report-appeal-evaluate',
      },
      {
        title: 'ผลการดำเนินงานตรวจติดตามผู้ประกอบธุรกิจทวงถามหนี้',
        name: 'debt-report-appeal-performance',
      },
      { title: 'อื่น ๆ', name: 'debt-report-appeal-other' },
    ],
  },
  {
    title: 'เรื่องร้องเรียนจากศูนย์ดำรงธรรม',
    name: 'debt-center-appeal',
    icon: 'mdi-file-document-multiple-outline',
  },
  {
    title: 'ประวัติการกระทำผิดของผู้ทวงถามหนี้',
    icon: 'mdi-clipboard-text-clock-outline',
    children: [
      {
        title: 'ผู้ประกอบการทวงถามหนี้',
        name: 'debt-search-appeal-register',
      },
      {
        title: 'ผู้ทวงถามหนี้ประเภทอื่น',
        name: 'debt-search-appeal-unregister',
      },
    ],
  },
]

const currentSidebar = computed(() => {
  return route.path.startsWith('/debt') ? SideBar : SideBar2
})

function navigate(routeName) {
  router.push({ name: routeName })
}

const isHomeRoute = computed(() => route.path.startsWith('/home'))
const isMenuPage = computed(() => route.path.startsWith('/menu_page'))
// ฟังก์ชันเพื่อตรวจสอบว่ารายการเมนูใดถูกเลือก
function isSelected(item) {
  return route.name === item.name
}
</script>

<style scoped>
.selected-item {
  background-color: rgba(209, 211, 229, 0.7); /* เปลี่ยนสีพื้นหลังที่เลือก */
  color: #1a237e; /* เปลี่ยนสีตัวอักษรที่เลือก */
  border-right: 10px solid #1a237e; /* เพิ่มเส้นขอบด้านขวาสีน้ำเงินเมื่อเมนูถูกเลือก */
}
.selected-group {
  color: #1a237e; /* สีน้ำเงินสำหรับตัวอักษร */
}

.multiline-title {
  white-space: normal; /* อนุญาตให้ขึ้นบรรทัดใหม่ได้ */
  word-break: break-word; /* ตัดคำอัตโนมัติเมื่อข้อความยาว */
}

</style>
