// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)


// const actions = {
	
// }
// const mutations = {
// 	updateSfxs(state,sfxs){
// 		state.sfxs=!state.sfxs;
// 		console.log(state.sfxs);
// 	}
// }
// //准备state——用于存储数据
// const state = {
// 	sfxs:false,
// }

// //创建并暴露store
// export default new Vuex.Store({
// 	actions,
// 	mutations,
// 	state,
// })
import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
export default new Vuex.Store({
  state: {
//设置全局访问的state对象
//要设置的初始属性值
//存储登录名
    username:localStorage.getItem("username"),
//存储其他有关数据
    number:localStorage.getItem("number"),
//存储登录需要用到的请求头token
    Authorization: localStorage.getItem('Authorization')
  },
  mutations: {
//要修改store中的值唯一的方法就是提交mutation来修改
    changeLogin (state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    },
    setnumber(state,number){
//自定义改变state初始值的方法，这里面的参数除了stae之外还可以再传额外的参数（变量或对象）
      state.number=number
    },
    setusername(state,username){
      state.username=username
    }
  },
  actions: {
//Action 类似于 mutation，不同在于：1.Action 提交的是 mutation，而不是直接变更状态。
//2.Action 可以包含任意异步操作。
    getUser(context, username){
      context.commit('setusername',username)
    },
    getNumber(context, number){
//自定义触发mutations里函数的方法context与store实例具有相同方法和属性
      context.commit('setnumber',number)
    },
  },
  modules: {
  }
  ,getters:{
//实时监听state值的变化（最新状态）
    getusername(state){  //承载变化的对象（username）的值
      return state.username
    },
    getnumber(state){//承载变化的对象（number）的值
      return state.number
    }
  }
})