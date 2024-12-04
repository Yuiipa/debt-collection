<template>
  <v-card class="my-4 mx-4 mx-md-12" variant="flat" style="background-color: #fafafa">
    <v-card-title
      class="d-flex justify-center ma-2 text-h5 text-md-h4 font-weight-bold text-wrap"
      style="color: #1a237e"
    >
      <span>จัดการสิทธิ์การใช้งาน </span>
    </v-card-title>
    <v-table>
      <!-- หัวตาราง -->
      <thead>
        <tr>
          <th id>โปรแกรม</th>
          <th id class="text-center">ส่วนกลาง</th>
          <th id class="text-center">จังหวัด</th>
          <th id class="text-center">กองบัญชาการตำรวจ</th>
          <th id class="text-center">สภาทนายความ</th>
        </tr>
      </thead>
      <!-- เนื้อหาในตาราง -->
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ item.program }}</td>
          <td class="text-center">
            <v-checkbox
              v-model="item.central"
              class="d-flex justify-center"
              density="compact"
              color="primary"
              hide-details
            />
          </td>
          <td class="text-center">
            <v-checkbox
              v-model="item.province"
              class="d-flex justify-center"
              density="compact"
              color="primary"
              hide-details
            />
          </td>
          <td class="text-center">
            <v-checkbox
              v-model="item.police"
              class="d-flex justify-center"
              density="compact"
              color="primary"
              hide-details
            />
          </td>
          <td class="text-end">
            <v-checkbox
              v-model="item.lawyer"
              class="d-flex justify-center"
              density="compact"
              color="primary"
              hide-details
            />
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>
  
  <script setup>
import { ref } from 'vue'

const items = ref([
  {
    program: 'คำขอทำรายการทั้งหมด',
    central: true,
    province: true,
    police: true,
    lawyer: true,
  },
  {
    program: 'ขอจดทะเบียนประกอบธุรกิจ',
    central: true,
    province: true,
    police: true,
    lawyer: true,
  },
  {
    program: 'ขอเปลี่ยนแปลงข้อมูลการประกอบธุรกิจ',
    central: true,
    province: true,
    police: true,
    lawyer: true,
  },
  {
    program: 'ขอใบแทนหนังสือสำคัญ',
    central: true,
    province: true,
    police: true,
    lawyer: false,
  },
  {
    program: 'ขอยกเลิกประกอบธุรกิจ',
    central: true,
    province: false,
    police: false,
    lawyer: false,
  },
  {
    program: 'ขอต่ออายุประกอบธุรกิจ',
    central: true,
    province: false,
    police: false,
    lawyer: false,
  },
  {
    program: 'เพิ่มโทษผู้ประกอบธุรกิจ',
    central: true,
    province: false,
    police: true,
    lawyer: false,
  },
  {
    program: 'ยกเลิกคำสั่งพิทักษ์ทรัพย์',
    central: true,
    province: true,
    police: true,
    lawyer: false,
  },
  {
    program: 'รับเรื่องร้องเรียน',
    central: true,
    province: false,
    police: true,
    lawyer: true,
  },
  {
    program: 'ดำเนินเรื่องร้องเรียน',
    central: true,
    province: true,
    police: true,
    lawyer: true,
  },
])
</script>
  
  <style scoped>
th {
  background-color: #1a237e;
  color: white;
  font-weight: bold;
  text-align: center;
}
</style>
  