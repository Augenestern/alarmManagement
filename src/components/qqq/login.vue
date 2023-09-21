<template>
  <div style="height: 100vh; overflow: hidden; position: relative" class="inpots">
    <div style="width: 300px; height: 300px; background-color: #c7c7c7; border-radius: 10px; box-shadow: 0 0 30px #dcdfe6;
              margin: 150px auto; padding:50px">
      <!-- <div style="text-align: center; font-size: 30px; font-weight: bold; color: #055476">图书管理系统</div> -->
      <div style="text-align: center; font-size: 30px; font-weight: bold; color: #000000">欢迎登录</div>
      <el-form style="margin-top:40px">
        <el-form-item prop="username">
          <el-input placeholder="请输入账号" prefix-icon="el-icon-user" size="medium" v-model="userlist.username"></el-input>
        </el-form-item>
        <el-form-item prop="password" style="margin-top:30px">
          <el-input placeholder="请输入密码" show-password prefix-icon="el-icon-lock" size="medium"
            v-model="userlist.password">
          </el-input>
        </el-form-item>
        <el-form-item style="margin-top:30px">
          <el-button class="login-button-left" type="info" @click="panduan()" @keyup.enter="keyDown(e)">登录</el-button>
          <el-button class="login-button-right" type="info" @click="zhuce()">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userlist: {
        username: '',
        password: '',
      },
    }
  },
  created() {
    this.clerauser()
  },
  methods: {
    zhuce() {
      this.$router.push('/zhuce')
    },
    panduan() {
      if (this.userlist.username != null && this.userlist.password != null) {
        this.login()
      }
      else {
        this.$message({
          message: "请输入用户名或密码！",
          type: "warning",
        });
        return false;
      }
    },
    //登录函数
    async login() {
      const { data: res } = await this.$axios.post(
        "http://127.0.0.1:7001/login",
        this.userlist
      );
      console.log(res);
      if (res.code !== 200) return this.$notify.error('登录失败')
      this.$notify.success("登录成功")
      sessionStorage.setItem('isLogin', 'ture');
      this.$router.push("/main");
      let xx = this.userlist.username;
      sessionStorage.setItem('loginname', xx);
    },
    clerauser() {
      this.userlist.username = null
      this.userlist.password = null
    },
    //回车键登录
    keyDown(e) {
      if (e.keyCode == 13) {
        this.panduan();
      }
    },
  },
  //监听事件
  mounted() {
    window.addEventListener("keydown", this.keyDown);
  },
  destroyed() {
    window.removeEventListener("keydown", this.keyDown, false);
  },
}
</script>

<style>
.inpots {
  background-color: hsla(0, 0%, 90%, 1);
  background-image:
    radial-gradient(at 0% 100%, hsla(0, 0%, 0%, 1) 0px, transparent 50%),
    radial-gradient(at 100% 100%, hsla(0, 0%, 0%, 1) 0px, transparent 50%);
}

/* .cover {
  width: fit-content;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
} */

.login-button-left {
  margin-top: 30px;
  width: 140px;
}

.login-button-right {
  margin-top: 30px;
  float: right;
  width: 140px;
}
</style>