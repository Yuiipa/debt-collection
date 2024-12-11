<template>
  <!-- {{readonly}} -->
  <v-row class="ma-1">
    <v-col
      v-for="i in maxfile"
      :key="i"
      xxl="3"
      xl="3"
      lg="3"
      md="3"
      sm="6"
      cols="12"
      :class="{
        'd-none': !(
          (files[i - 1].file || i === 1 || files[i - 2]?.file) &&
          !(readonly && !files[i - 1].file)
        ),
      }"
    >
      <v-card
        variant="outlined"
        class="fixed-card-height"
        v-if="
          (files[i - 1].file || i === 1 || files[i - 2]?.file) &&
          !(readonly && !files[i - 1].file)
        "
      >
        <div
          class="d-flex justify-end closebtn"
          v-if="files[i - 1].file && !readonly"
        >
          <v-btn
            icon="mdi-close"
            color="grey-darken-1"
            @click="removeFile(i - 1)"
          ></v-btn>
        </div>
        <div
          class="d-flex justify-center align-center flex-column"
          v-if="files[i - 1].file"
        >
          <img
            src="@/assets/image/pdf_color.png"
            alt="Uploaded"
            style="max-width: 80%"
            @click="showPicture(files[i - 1].file)"
          />
        </div>
        <div v-if="!files[i - 1].file">
          <div class="d-flex justify-center">
            <img
              src="@/assets/image/pdf_grey.png"
              alt="Uploaded"
              style="max-width: 40%"
            />
          </div>
          <div class="d-flex justify-center grey-text">
            เลือกไฟล์รูปภาพที่จะนำเข้า
          </div>
          <div class="d-flex justify-center grey-text">
            (รองรับเฉพาะไฟล์ PDF หรือ PNG ขนาดไม่เกิน: 10MB)
          </div>
          <div class="mb-2"></div>
          <div class="d-flex justify-center">
            <v-btn
              color="primary"
              class="mr-2"
              prepend-icon="mdi-tray-arrow-up"
              @click="uploadFile(i - 1)"
            >
              เลือกไฟล์
            </v-btn>
          </div>
        </div>
        <v-file-input
          :ref="'fileInput' + i"
          v-model="files[i - 1].file"
          @input="beforeFileChange(i - 1)"
          @change="handleFileUpload"
          style="display: none"
        ></v-file-input>
      </v-card>
    </v-col>
  </v-row>

  <v-dialog
    transition="dialog-top-transition"
    width="450px"
    persistent
    v-model="openDialog"
    v-if="isPdf === false"
  >
    <v-card>
      <v-card-text class="pa-0">
        <img
          :src="selectedPicture"
          alt="Selected"
          style="max-width: 100%"
          v-if="selectedPicture"
        />
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          class="btn-red"
          rounded="xl"
          variant="text"
          @click="openDialog = false"
        >
          ปิด
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
  
  <script >
import Swal from 'sweetalert2'

export default {
  props: {
    modelValue: {
      type: [Array, Object],
      required: false,
    },
    license: { type: Object, required: true },
    selectSearchTypegunshop: { required: true, default: 1 },
    maxfile: { type: Number, default: 6 }, // เพิ่ม prop maxfile เพื่อควบคุมจำนวนไฟล์สูงสุด
  },
  data() {
    return {
      files: Array(this.maxfile)
        .fill(null)
        .map(() => ({ file: null, blob: null, base64: '' })),
      clickIndex: null,
      transformedRoute: 1,
      transformedsubRoute: 0,
      instype: 3,
      readonly: false,
      openDialog: false,
      selectedPicture: null,
      isPdf: false,
    }
  },
  methods: {
    uploadFile(index) {
      this.clickIndex = index
      const fileInput = this.$refs['fileInput' + (index + 1)]
      if (fileInput && fileInput.length) {
        fileInput[0].click()
      } else {
        fileInput.click()
      }
    },
    removeFile(index) {
      this.clickIndex = index
      const fileInput = this.$refs['fileInput' + (index + 1)]
      if (fileInput && fileInput.length) {
        fileInput[0].click()
      } else {
        fileInput.click()
      }
    },
    async handleFileUpload() {
      const maxSize = 10 * 1024 * 1024
      const file = this.files[this.clickIndex].file

      if (!(file instanceof Blob)) {
        return
      }
      if (file.size > maxSize) {
        Swal.fire('อัพโหลดรูปไม่สำเร็จ', 'ขนาดไฟล์เกิน 10MB', 'error')
        this.files[this.clickIndex].file =
          this.files[this.clickIndex].previousFile
        return
      } else {
        this.files[this.clickIndex].blob = URL.createObjectURL(file)
      }

      const base64File = await this.convertImageToBase64(file)
      this.files[this.clickIndex].base64 = base64File
    },
    beforeFileChange(index) {
      // เก็บไฟล์เดิมก่อนที่จะถูกแทนที่
      if (!this.files[index].previousFile && this.files[index].file) {
        console.log('เก็บไฟล์เดิม: ', this.files[index].file)
        this.files[index].previousFile = this.files[index].file
      }
    },

    async showPicture(blob) {
      if (!blob.imageBase64 && blob.type === 'application/pdf') {
        this.isPdf = true
        const blobbase64 = await this.convertImageToBase64(blob)
        const pdfBlob = this.base64ToBlob(
          blobbase64.split(',')[1],
          'application/pdf'
        )
        const pdfUrl = URL.createObjectURL(pdfBlob)

        const pdfWindow = window.open('')
        pdfWindow.document.write(
          `<iframe width='100%' height='100%' src='${pdfUrl}'></iframe>`
        )
      } else if (!blob.imageBase64 && blob.type !== 'application/pdf') {
        this.isPdf = false
        this.selectedPicture = URL.createObjectURL(blob)
        this.openDialog = true
      } else if (blob.imageBase64.startsWith('data:application/pdf')) {
        this.isPdf = true
        const pdfBlob = this.base64ToBlob(
          blob.imageBase64.split(',')[1],
          'application/pdf'
        )
        const pdfUrl = URL.createObjectURL(pdfBlob)

        const pdfWindow = window.open('')
        pdfWindow.document.write(
          `<iframe width='100%' height='100%' src='${pdfUrl}'></iframe>`
        )
      } else {
        this.isPdf = false
        this.selectedPicture = this.convertBase64ToImage(blob.imageBase64)
        this.openDialog = true
      }
    },
    base64ToBlob(base64, contentType) {
      const byteCharacters = atob(base64)
      const byteNumbers = Array.from(byteCharacters).map((char) =>
        char.charCodeAt(0)
      )
      const byteArray = new Uint8Array(byteNumbers)
      return new Blob([byteArray], { type: contentType })
    },
    async convertImageToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
        reader.readAsDataURL(file)
      })
    },
    convertBase64ToImage(base64) {
      const byteString = atob(base64.split(',')[1])
      const mimeString = base64.split(',')[0].split(':')[1].split(';')[0]
      const ab = new ArrayBuffer(byteString.length)
      const ia = new Uint8Array(ab)
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i)
      }
      const blob = new Blob([ab], { type: mimeString })
      return URL.createObjectURL(blob)
    },
  },
}
</script>
  
  <style scoped>
.fixed-card-height {
  padding: 15px;
  height: 100%;
  overflow: hidden;
  border: 1px dashed #bdbdbd;
}

.closebtn {
  position: absolute;
  top: 10px;
  right: 10px;
}

.grey-text {
  color: gray;
  font-size: 10px;
}
</style>
  