<template>
  <div class="box">
    <!-- <img class="logofaw" src="../../assets/faw-vw.png" width="200" alt=""> -->
    <div :class="logocss">
      <div style="height:15vh;width: 100%;">
        <div class="login-tx"> S-ADMIN 基础开发框架</div>
      </div>
      <div style="height:10vh;width: 70%;">
        <el-input prefix-icon="el-icon-user" class="s-input" placeholder="请输入账号" v-model="userName" clearable>
        </el-input>
      </div>
      <div style="height:10vh;width: 70%;">
        <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="passWord" show-password></el-input>
      </div>
      <div style="height:10vh;width: 70%;">
        <el-button type="warning" @click="sigin">确认登录</el-button>
      </div>

      <!-- <button class="denglu" @click="sigin()">登 录</button> -->
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  data() {
    return {
      userName: '',
      passWord: '',
      logocss: "login animate__animated animate__zoomInUp"
    }
  },
  methods: {
    sigin() {
      login({ username: this.userName, password: this.passWord }).then(async res => {
        // console.log(res.data)
        if (res.data.code == 200) {
          this.$message({
            message: res.data.msg,
            type: 'success'
          });
          localStorage.setItem('accessToken', res.data.token)
          localStorage.setItem('accessTime', Date.parse(new Date()))
          this.logocss = "login animate__animated animate__bounceOut"
          this.$router.push('/home');
          
        } else {
          this.$message.error(res.data.msg);
        }

      })
    },
  },
  mounted() {

  }

}
</script>

<style lang="scss" scoped>
.box {
  height: 100vh;
  width: 100vw;
  background-size: 100% 100%;
  background-color: #304156;
  //   background-image: url("../../assets/background/login-back.gif");
  line-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.logofaw {
  right: 10px;
  top: 10px;
  position: absolute;
}

.login {
  height: 50vh;
  width: 40vw;
  background: linear-gradient(114.83deg,
      rgba(255, 255, 255, 0.5) 0.8%,
      rgba(3, 17, 30, 0) 101.31%);
  filter: drop-shadow(0px 25px 25px rgba(0, 0, 0, 0.15));
  backdrop-filter: blur(40px);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-tx {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 2.5vw;
  font-weight: 800;
  color: #efca75;
  font-family: "黑体";
  text-shadow: 2px 2px 3px rgb(21, 68, 90);
}

::v-deep .el-input__icon {
  height: 100%;
  width: 2vw;
  font-size: 2.5vh !important;
  text-align: center;
  line-height: 7vh;
}

::v-deep .el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
}

::v-deep .el-input__inner:focus {
  border-color: #ff4050;
  outline: 0;
}

::v-deep .el-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #7f7f7f;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: 1.25vw;
  height: 7vh;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  text-align: center;

}

::v-deep .el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 1.5vw;
  border-radius: 8px;
  width: 100%;
  height: 7vh;
  letter-spacing: 2px;
}

::v-deep .el-button--warning {
  color: #fff;
  background-color: #20539f;
  border-color: #20539f;
}

.denglu {
  cursor: pointer;
  font-family: YouSheBiaoTiHei;
  width: 50%;
  height: 18%;
  margin: 40px 0px 0px 0px;
  background: #970d0f;
  color: #efd08e;
  border-radius: 15px;
  font-size: 35px;
  text-shadow: 2px 2px 3px #222;
  font-family: "方正兰亭黑";
  margin-bottom: 10%;
}
</style>