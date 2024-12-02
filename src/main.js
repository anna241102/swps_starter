import { createApp } from 'vue'
import App from './AppSettingsMenü.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app') //Test
