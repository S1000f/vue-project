import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import i18nPlugin from './plugins/i18n'
import localeString from './plugins/localeString'
import store from './store.js'

const i18nStrings = {
  en: {
    hi: 'Hello'
  },
  ko: {
    hi: '안녕하세요'
  }
}

createApp(App)
.use(router)
.use(store)
.use(i18nPlugin, i18nStrings)
.use(localeString)
.mixin(mixins)
.directive('focus', {
  mounted(el) {
    el.focus()
  }
})
.mount('#app')

window.Kakao.init("");