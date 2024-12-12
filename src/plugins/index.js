import vuetify from './vuetify'
import router from '../router'
import DatePicker from '@cdglib/vue3-datepicker'
import VueTheMask from 'vue-the-mask'


export function registerPlugins(app) {
  app.use(vuetify).use(router).use(DatePicker)
}
