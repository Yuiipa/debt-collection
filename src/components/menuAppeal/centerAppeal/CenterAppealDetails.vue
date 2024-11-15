<template>
  <v-container class="pa-0" style="max-width: 100%">
    <v-card class="elevation-0">
      <v-card-title
        class="d-flex justify-center align-center text-center font-weight-medium text-h5"
        style="color: #ffffff; background-color: #1a237e; height: 80px"
      >
        ข้อมูลเรื่องร้องเรียน
      </v-card-title>
    </v-card>
    <div class="px-16">
      <v-card class="mt-6 rounded-xl">
        <v-row class="ma-1 mx-4">
          <v-col md="3" cols="12">
            <div class="mb-2 font-weight-bold">เลขที่เรื่องร้องเรียน</div>
            <v-text-field
              variant="outlined"
              placeholder="เลขที่เรื่องร้องเรียน"
              persistent-placeholder
              hide-details
              density="compact"
            />
          </v-col>
          <v-col md="3" cols="12">
            <div class="mb-2 font-weight-bold">เรื่องร้องเรียน</div>
            <v-text-field
              variant="outlined"
              placeholder="เรื่องร้องเรียน"
              persistent-placeholder
              hide-details
              density="compact"
            />
          </v-col>
        </v-row>
        <v-row class="ma-1 mx-4">
          <v-col md="6" cols="12">
            <div class="mb-2 font-weight-bold">ประเภทเรื่องร้องเรียน</div>
            <v-text-field
              variant="outlined"
              placeholder="ประเภทเรื่องร้องเรียน"
              persistent-placeholder
              hide-details
              density="compact"
            />
          </v-col>
          <v-col md="6" cols="12">
            <div class="mb-2 font-weight-bold">ประเภทเรื่องร้องเรียนรอง</div>
            <v-text-field
              variant="outlined"
              placeholder="ประเภทเรื่องร้องเรียนรอง"
              persistent-placeholder
              hide-details
              density="compact"
            />
          </v-col>
        </v-row>
        <v-row class="ma-1 mx-4">
          <v-col cols="12">
            <div class="mb-2 font-weight-bold">รายละเอียดเรื่องร้องเรียน</div>
            <v-textarea
              variant="outlined"
              placeholder="รายละเอียดเรื่องร้องเรียน"
              persistent-placeholder
              hide-details
              density="compact"
              no-resize
            />
          </v-col>
        </v-row>
        <v-row class="ma-1 mx-4">
          <v-col md="4" cols="12">
            <div class="mb-2 font-weight-bold">รหัสบัตรประชาชน</div>
            <v-text-field
              variant="outlined"
              placeholder="รหัสบัตรประชาชน"
              persistent-placeholder
              hide-details
              density="compact"
            />
          </v-col>
          <v-col md="4" cols="12">
            <div class="mb-2 font-weight-bold">ชื่อ</div>
            <v-text-field
              variant="outlined"
              placeholder="ชื่อ"
              persistent-placeholder
              hide-details
              density="compact"
            />
          </v-col>
          <v-col md="4" cols="12">
            <div class="mb-2 font-weight-bold">นามสกุล</div>
            <v-text-field
              variant="outlined"
              placeholder="นามสกุล"
              persistent-placeholder
              hide-details
              density="compact"
            />
          </v-col>
        </v-row>
        <v-row class="ma-1 mx-4">
          <v-col md="4" cols="12">
            <div class="mb-2 font-weight-bold">ตำบล</div>
            <v-text-field
              variant="outlined"
              placeholder="ตำบล"
              persistent-placeholder
              hide-details
              density="compact"
            />
          </v-col>
          <v-col md="4" cols="12">
            <div class="mb-2 font-weight-bold">อำเภอ</div>
            <v-text-field
              variant="outlined"
              placeholder="อำเภอ"
              persistent-placeholder
              hide-details
              density="compact"
            />
          </v-col>
          <v-col md="4" cols="12">
            <div class="mb-2 font-weight-bold">จังหวัด</div>
            <v-text-field
              variant="outlined"
              placeholder="จังหวัด"
              persistent-placeholder
              hide-details
              density="compact"
            />
          </v-col>
        </v-row>
        <v-row class="ma-1 mx-4">
          <v-col cols="12">
            <div class="mb-2 font-weight-bold">รายละเอียดปัญหา</div>
            <v-textarea
              variant="outlined"
              placeholder="รายละเอียดปัญหา"
              persistent-placeholder
              hide-details
              density="compact"
              no-resize
            />
          </v-col>
        </v-row>
        <v-row class="ma-1 mx-4">
          <v-col cols="12">
            <div class="mb-2 font-weight-bold">ผู้ร้องต้องการ</div>
            <v-textarea
              variant="outlined"
              placeholder="ผู้ร้องต้องการ"
              persistent-placeholder
              hide-details
              density="compact"
              no-resize
            />
          </v-col>
        </v-row>
        <v-row class="ma-1 mx-4">
          <v-col cols="12">
            <div class="mb-2 font-weight-bold">รายละเอียดมอบหมาบ</div>
            <v-textarea
              variant="outlined"
              placeholder="รายละเอียดมอบหมาบ"
              persistent-placeholder
              hide-details
              density="compact"
              no-resize
            />
          </v-col>
        </v-row>
        <v-row class="ma-1 mx-4">
          <v-col cols="12">
            <v-card variant="outlined" placeholder="ที่เกิดเหตุ">
              <v-row class="ma-1 mx-4">
                <v-col md="4" cols="12">
                  <div class="mb-2 font-weight-bold">ตำบล</div>
                  <v-text-field
                    variant="outlined"
                    placeholder="ตำบล"
                    persistent-placeholder
                    hide-details
                    density="compact"
                  />
                </v-col>
                <v-col md="4" cols="12">
                  <div class="mb-2 font-weight-bold">อำเภอ</div>
                  <v-text-field
                    variant="outlined"
                    placeholder="อำเภอ"
                    persistent-placeholder
                    hide-details
                    density="compact"
                  />
                </v-col>
                <v-col md="4" cols="12">
                  <div class="mb-2 font-weight-bold">จังหวัด</div>
                  <v-text-field
                    variant="outlined"
                    placeholder="จังหวัด"
                    persistent-placeholder
                    hide-details
                    density="compact"
                  />
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-card-actions class="justify-end pb-6">
          <v-btn
            style="
              width: 167px;
              height: 47px;
              background-color: #1a237e;
              color: white;
            "
          >
            <div class="text-h6">นำเข้าระบบ</div>
          </v-btn>
          <v-btn
            class="mr-4"
            style="
              width: 167px;
              height: 47px;
              background-color: #e22427;
              color: white;
            "
          >
            <div class="text-h6">ไม่มีมูลความผิด</div>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script setup></script>
