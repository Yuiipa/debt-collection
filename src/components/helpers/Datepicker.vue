<template>
    <v-menu
      v-model="isMenuOpen"
      :close-on-content-click="false"
      transition="scale-transition"
      z-index="2400"
    >
      <template v-slot:activator="{ props }">
        <v-text-field
          v-bind="props"
          v-model="formattedDate"
          :label="label"
          :placeholder="placeholder"
          :density="density"
          append-inner-icon="mdi-calendar"
          :variant="variant"
          v-mask="'##/##/####'"
          :hint="hint"
          :hide-details="hideDetails"
          :persistent-placeholder="persistentPlaceholder"
          :persistent-hint="persistentHint"
          :rules="rules"
          :disabled="disabled"
          :rounded="rounded"
          readonly
          class="v-col-8 pa-0 align-start"
        />
      </template>
  
      <v-date-picker
        v-model="selectedDate"
        hide-actions
        :title="title"
        :color="color"
        :max="brith ? getDay() : null"
        :view-mode="view_mode"
      >
      
        <template v-slot:header></template>
      </v-date-picker>
    </v-menu>
  </template>
  
  <script>
  export default {
    name: 'DatePicker',
    props: {
      modelValue: {
        type: String,
      },
      label: {
        type: String,
      },
      placeholder: {
        type: String,
      },
      density: {
        type: String,
      },
      title: {
        type: String,
      },
      color: {
        type: String,
        default: 'primary',
      },
      variant: {
        type: String,
      },
      clearable: {
        type: Boolean,
        default: true,
      },
      hint: {
        type: String,
      },
      hideDetails: {
        type: String,
      },
      persistentPlaceholder: {
        type: Boolean,
      },
      persistentHint: {
        type: Boolean,
      },
      rules: {
        type: Array,
      },
      disabled: {
        type: Boolean,
      },
      rounded: {
        type: String,
      },
      brith: {
        type: Boolean,
        default: false,
      },
      view_mode: {
        type: String,
      },
    },
    data() {
      return {
        isMenuOpen: false,
        selectedDate: null,
        formattedDate: '',
      }
    },
    computed: {
      parsedDate() {
        return this.selectedDate
          ? this.selectedDate.toLocaleDateString('en', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })
          : ''
      },
    },
    watch: {
      modelValue() {
        this.formattedDate = this.modelValue
      },
      selectedDate() {
        this.isMenuOpen = false
        const [month, day, year] = this.parsedDate.split('/')
        const buddhistYear = parseInt(year) + 543
        this.formattedDate = `${day}/${month}/${buddhistYear}`
      },
  
      formattedDate(v) {
        if (v) {
          this.$emit('update:modelValue', this.formattedDate)
          const [day, month, year] = v.split('/')
          const gregorianYear = parseInt(year) - 543
          this.selectedDate = new Date(`${gregorianYear}/${month}/${day}`)
        }
      },
    },
    mounted() {
      if (this.modelValue) {
        const [day, month, year] = this.modelValue.split('/')
        const gregorianYear = parseInt(year) - 543
        this.selectedDate = new Date(`${gregorianYear}/${month}/${day}`)
        this.formattedDate = `${day}/${month}/${year}`
      }
    },
    methods: {
      getDay() {
        const d = new Date()
        return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
      },
    },
  }
  </script>
  
  <style scoped>
  .custom-datepicker {
    width: auto;
    height: 40px !important;
    padding: 8 16 !important;
  }
  .custom-datepicker .v-input__control .v-input__slot .v-field__input {
    padding: 8 16 !important;
  }
  
  .custom-datepicker input {
    padding: 8 16 !important;
    margin: 0 !important;
  }
  </style>
  