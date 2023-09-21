<template>
  <div>
    <!-- 头部区域 -->
    <div class="headerqu">
      <div style="width: 500px; display: flex;align-items: center;">
        <svg style="margin-left: 20px;" t="1695113129901" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20843" width="32" height="32"><path d="M192 832a32 32 0 0 0 0 64h640a32 32 0 0 0 0-64H192z m0-64h640a96 96 0 0 1 0 192H192a96 96 0 0 1 0-192z" fill="#000000" p-id="20844"></path><path d="M816 208m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z" fill="#000000" p-id="20845"></path><path d="M208 208m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z" fill="#000000" p-id="20846"></path><path d="M480 608a32 32 0 0 1 64 0v160a32 32 0 0 1-64 0v-160z" fill="#000000" p-id="20847"></path><path d="M512 640a112 112 0 1 1 0-224 112 112 0 0 1 0 224z m0-64a48 48 0 1 0 0-96 48 48 0 0 0 0 96zM864 480a32 32 0 0 1 0-64h96a32 32 0 0 1 0 64h-96zM64 480a32 32 0 0 1 0-64h96a32 32 0 0 1 0 64H64zM480 64a32 32 0 0 1 64 0v96a32 32 0 0 1-64 0V64z" fill="#000000" p-id="20848"></path><path d="M272.448 800h-64v-288a304 304 0 0 1 608 0v288h-64v-288a240 240 0 0 0-480 0v288z" fill="#000000" p-id="20849"></path></svg>
        <span style="margin-left: 5px; font-size: 24px">XX碳素石墨化车间火苗识别告警系统</span>
      </div>
      <div style="flex: 1; text-align: right; padding-right: 20px">
        <el-dropdown size="medium">
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <span>{{ this.usern }}</span>
          <el-dropdown-menu slot="dropdown" style="margin-top: -5px">
            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
            <el-dropdown-item @click.native="userself">个人中心</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <!-- 侧边栏和主体 -->
    <div style="display: flex">
      <!-- 侧边栏导航 -->
      <div
        style="width: 200px; min-height: calc(100vh - 62px); overflow: hidden; margin-right: 2px; background-color:#E4E7ED">
        <el-menu :default-active="$route.path" router class="el-menu-demo"
          style="margin-bottom: 10px; background-color:white" :default-openeds="['1','2']">
          <!-- <el-menu-item index="/shouye">
              <i class="el-icon-eleme"></i>
              <span>首页</span>
            </el-menu-item> -->

          <el-menu-item index="/zhuye">
            <i class="el-icon-s-home"></i>
            <span>主页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-release"></i>
              <span>告警管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/gjlb">告警列表</el-menu-item>
              <el-menu-item index="/gjcl">告警处理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span>历史报表</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/ribaobiao">周报表</el-menu-item>
              <el-menu-item index="/yuebaobiao">月报表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/yggl">
          <i class="el-icon-user-solid"></i>
          <span>员工管理</span>
        </el-menu-item>
        <el-menu-item index="/grzx">
          <i class="el-icon-s-custom"></i>
          <span>个人中心</span>
        </el-menu-item>
        </el-menu>
      </div>

      <!-- 主体数据 -->
      <!-- width: 0; 可以限制容器的宽度，不被子元素无限撑开-->
      <div style="flex: 1; width: 0; background-color: white; padding: 0px">
        <router-view />
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Layout.vue",
  data() {
    return {
      usern: '',
    }
  },
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push('/beautiful')
    },
    userself() {
      this.$router.push('/userself')
    }
  },
  mounted() {
    this.usern = sessionStorage.getItem('loginname');
    console.log(this.usern);
  }
}
</script>
  
<style scoped>
.headerqu {
  height: 60px;
  line-height: 60px;
  background-color: #bbbbbc;
  /* background-color: rgb(190, 218, 242); */
  margin-bottom: 2px;
  display: flex
}
</style>