<template>
  <div class="box">
    S-ADMIN 基础开发框架{{ userInfo.username }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "s-header",
  computed: {
    ...mapState('user', ['userInfo'])
  },
  mounted() {
    let accessToken = localStorage.getItem('accessToken')
    let accessTime = localStorage.getItem('accessTime')
    let nowTime = Date.parse(new Date())
    if (!accessToken || (nowTime - accessTime) > 7200 * 1000) {
      this.$router.push('/')
    }
    this.$store.dispatch("user/userInfo")
    

  }
}

</script>

<style lang="scss" scoped>
.box {
  height: 60px;
  background-color: #304156;
  text-align: center;
  line-height: 60px;
  font-size: 30px;
  color: #fff;
}
</style>>

