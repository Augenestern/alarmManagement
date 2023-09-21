<template>
    <div class="forming">
        <div class="item" style="height: 15%;"><div class="item-left">头像</div><div class="item-right"><img style="width: 80px;height:80px;border-radius: 50%;background-color: rgb(143, 143, 143); " src="../assets/people.8e13e312.png"/></div></div>
        <div class="item"><div class="item-left">手机号</div><div class="item-right">15503476608</div></div>
        <div class="item"><div class="item-left">账号</div><div class="item-right">admin</div></div>
        <div class="item"><div class="item-left">密码</div><div class="item-right"><el-button type="info">修改密码</el-button></div></div>
        <div class="item"><div class="item-left">姓名</div><div class="item-right">超级管理员</div></div>
        <div class="item"><div class="item-left">性别</div><div class="item-right">男</div></div>
        <div class="item"><div class="item-left">角色</div><div class="item-right">超级管理员</div></div>
    </div>
</template>

<script>
export default {
    name: 'pro-form',
    components: {},
    props: [],
    data() {
        return {
            
        }
    },
    computed: {},
    watch: {},
    created() { },
    mounted() {
        this.initCrew()
    },
    methods: {
       
    }
}
</script>

<style scoped>
.forming {
    /* border: 1px solid red; */
    margin-top: 1%;
    margin-left: 2%;
    width: 96%;
    height: 96%;
    box-shadow: 0px 0px 6px 6px #eee;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
}
.item{
    width: 30%;
    height: 10%;
    display: flex;
    margin-left: 100px;
}
.item-left{
    flex: 1;
}
.item-right{
    flex: 1;
}
</style>