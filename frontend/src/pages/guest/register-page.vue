<template>
  <q-layout>
    <q-page-container>
      <q-page padding  class="bg-blue-grey-1">
        <div class="row">
          <q-card class="fixed-center col-md-4 col-xs-12">
            <q-card-section>
              <div class="text-h6 text-center">FORM REGISTRASI</div>
              <q-form @submit="onSubmit">
                <q-input v-model="username" label="Username" :rules="[val => val && val.length > 0 || 'Tolong masukan username']"></q-input>
                <q-input v-model="namaLengkap" label="Nama Lengkap" :rules="[val => val && val.length > 0 || 'Tolong masukan Nama Lengkap']"></q-input>
                <q-input v-model="email" label="Email" :rules="[val => val && val.length > 0 || 'Tolong masukan Email']"></q-input>
                <q-input v-model="password" label="Password" type="password" :rules="[val => val && val.length > 0 || 'Tolong masukan Password']"></q-input>
              <div>
                <q-btn color="primary" type="submit" unelevated label="Register"/>
                <q-btn class="float-right" :to="{ name: 'loginPage'}" flat unelevated label="Login"/>
              </div>
              </q-form>
            </q-card-section>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  data () {
    return {
      username: null,
      namaLengkap: null,
      email: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
      console.log('Berhasil')
      this.$axios.post('http://localhost:4000/users/register', {
        userName: this.username,
        namaLengkap: this.namaLengkap,
        email: this.email,
        password: this.password
      }).then((res) => {
        
      })
    }
  }
}
</script>
