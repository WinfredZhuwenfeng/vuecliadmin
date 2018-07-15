<template>
  <div class="login">
      <div class="login-wrap">
          <div class="avatar">
              <img src="../../assets/images/monkey.png" class="img-circle" alt="">
          </div>
          <form @submit.prevent="login" class="col-md-offset-1 col-md-10">
              <div class="input-group input-group-lg">
                  <span class="input-group-addon">
                      <i class="fa fa-user"></i>
                  </span>
                  <input type="text" class="form-control" v-model="userinfo.username" placeholder="用户名">
              </div>
              <div class="input-group input-group-lg">
                  <span class="input-group-addon">
                      <i class="fa fa-key"></i>
                  </span>
                  <input type="password" class="form-control" v-model="userinfo.password" placeholder="密码">
              </div>
              <button type="submit" class="btn btn-lg btn-primary btn-block">登 录</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userinfo: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const {username, password} = this.userinfo
      if (username === 'admin' && password === '123') {
        window.localStorage.setItem('userinfo', JSON.stringify({username: 'admin'}))
        this.router.push(this.$route.query.redirect || '/home')
      } else {
        window.alert('账号或密码有误！')
      }
    }
  }
}
</script>

<style>
</style>
