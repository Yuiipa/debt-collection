// src/plugins/vuetify.js
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi' // For Material Design Icons
import colors from 'vuetify/lib/util/colors'
import * as Facade from 'vue-input-facade'
import { th, en } from 'vuetify/locale'
import '../styles/settings.scss'
const vuetify = createVuetify({
  locale: {
    locale: 'th',
    fallback: 'th',
    messages: { th, en },
  },
  directives: {
    mask: Facade.facade,
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1976D2', // Customize your primary color
          secondary: '#424242',
          accent: '#82B1FF',
        },
      },
    },
  },
})

export default vuetify
