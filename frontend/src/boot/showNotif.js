import { boot } from 'quasar/wrappers'
import { Notify } from 'quasar'

const show = (pesan, jenis) => {
  Notify.create({
    message: pesan,
    color: jenis,
    timeout: 2000
  })
}

export default boot(async ({ app }) => {
  app.config.globalProperties.$suksesNotif = (msg) => {
    show(msg, 'positive')
  }
  app.config.globalProperties.$commonErrorNotif = () => {
    show('terjadi kesalahan')
  }
  app.config.globalProperties.$errorNotif = (msg) => {
    show(msg, 'negative')
  }
})
