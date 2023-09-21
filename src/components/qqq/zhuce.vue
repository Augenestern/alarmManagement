<template>
  <div style="height: 100vh; overflow: hidden; position: relative" class="inpots">
    <div style="width: 300px; height: 300px; background-color: #c7c7c7;  border-radius: 10px; box-shadow: 0 0 30px #dcdfe6;
        margin: 150px auto; padding:50px">
      <div style="text-align: center; font-size: 30px; font-weight: bold; color: #000000">欢迎注册</div>
      <el-form :model="admin" :rules="rules" ref="loginForm" style="margin-top:40px">
        <el-form-item prop="username">
          <el-input placeholder="请输入账号" prefix-icon="el-icon-user" size="medium" v-model="adduserlist.username">
          </el-input>
        </el-form-item>
        <el-form-item prop="password" style="margin-top:30px">
          <el-input placeholder="请输入密码" show-password prefix-icon="el-icon-lock" size="medium"
            v-model="adduserlist.password">
          </el-input>
        </el-form-item>
        <el-form-item style="margin-top:30px">
          <el-button class="login-button-left" type="info" @click="denglu()">返回登录</el-button>
          <el-button class="login-button-right" type="info" @click="panduan()">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adduserlist: {
        username: '',
        password: '',
      },
    }
  },
  created() {
    this.clerauser()
  },
  methods: {
    denglu() {
      this.$router.push('/login')
    },
    panduan() {
      if (this.adduserlist.username != null && this.adduserlist.password != null) {
        this.add()
      }
      else {
        this.$message({
          message: "请输入用户名或密码！",
          type: "warning",
        });
        return false;
      }
    },
    async add() {
      const { data: res } = await this.$axios.post(
        "http://127.0.0.1:7001/adduser",
        this.adduserlist
      );
      console.log("添加");
      console.log(res);
      if (res !== 200) return this.$message.error('注册失败,用户已存在')
      this.$message.success("注册成功");
      this.clerauser()
    },
    clerauser() {
      this.adduserlist.username = null
      this.adduserlist.password = null
    },
  },

  computed: {
    //获取是否显示在vuex中，目前并未使用
    sfxs() {
      return this.$store.state.sfxs
    },
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

.cover {
  width: fit-content;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

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