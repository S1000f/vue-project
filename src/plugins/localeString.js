export default {
  install: (app) => {
    app.config.globalProperties.$localeNum = num => {
      return num.toLocaleString()
    }

    app.provide('localeNum');
  }
}