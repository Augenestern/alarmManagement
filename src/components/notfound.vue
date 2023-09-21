<template>
    <div class="notfo">
        <div class="notfooo">
            <div class="notfooooo">404</div>
            <div style="font-size: 50px">未找到页面</div>
            <div>
                <el-button type="text" style="margin-top: 20px; font-size: 20px" @click="$router.push('/login')">返回登录页
                </el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "notfound"
}
</script>
<style>
.notfo {
    position: relative;
    background-color: antiquewhite;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
}

.notfooo{
    margin-top: 150px;
    width: 100%;
    position: absolute;
    text-align: center;
    /* border: 1px solid red; */
}

.notfooooo {
    margin-top: 10px;
    font-size: 100px;
}
</style>