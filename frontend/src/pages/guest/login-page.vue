<template>
  <q-layout class="bg-blue-grey-1" view="lHh Lpr Lff">
      <q-page-container>
        <q-page class="row items-center justify-center">
          <div class="row full-width">
            <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md">
              <q-card flat class="text-blue-gray-14">
                <div class="row items-center">
                  <div class="col-md-6 col-sm-12-col-xs-12">
                    <div class="row q-pt-md q-pb-md">
                      <div class="col-md-8">
                        <q-img
                          src="https://images.unsplash.com/photo-1587334274328-64186a80aeee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"/>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <q-card-section>
                      <div class="text-h4">GH</div>
                      <div >Login page</div>
                    </q-card-section>
                    <q-form @submit="onSubmit">
                      <q-card-section>
                        <q-input label="Username"/>
                        <q-input label="Password"/>
                      </q-card-section>
                      <q-card-section>
                        <q-btn class="full-width" type="submit" unelevated color="primary" label="login"/>
                        <q-btn class="full-width q-mt-md" :to="{ name: 'registerPage' }" flat unelevated color="primary" label="register"/>
                      </q-card-section>
                    </q-form>
                  </div>
                </div>
              </q-card>
            </div>
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
      this.$axios.post('http://localhost:4000/users/login', {
        userName: this.username,
        password: this.password
      }).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>
