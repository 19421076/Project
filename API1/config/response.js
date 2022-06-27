const requestResponse = {
  gagal: (msg) => {
    return({
      status: false,
      msg: msg
    })
  },
  sukses: (msg) => {
    return({
      status: true,
      msg: msg
    })
  },
  kesalahan: {
    status: false,
    msg: 'terjadi kesalahan pada server'
  },
  suksesLogin: (data) => {
    return {
      status: true,
      msg: 'sukses login',
      data: data
    }
  },
  suksesWithData: (data) => {
    return({
      status: true,
      msg: 'berhasil Memuat data',
      data: data
    })
  }
}

module.exports = { requestResponse }