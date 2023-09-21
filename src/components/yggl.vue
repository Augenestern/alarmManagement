<template>
    <div class="forming">
        <div class="forming-top">
            <el-button type="info">新增用户</el-button>
            <el-input v-model="input" placeholder="请输入用户名" style="width: 300px; margin-left: 40px;"></el-input>
            <el-button style="margin-left: 10px;" type="info">查询</el-button>
        </div>
        <el-table :data="tableData" style="width: 90%;border: 1px solid #eee;">
            <el-table-column prop="id" label="编号" width="180">
            </el-table-column>
            <el-table-column prop="name" label="用户名" width="180">
            </el-table-column>
            <el-table-column prop="role" label="角色" width="180">
            </el-table-column>
            <el-table-column prop="phone" label="电话" width="180">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <i style="color: #6789bc; font-size: 20px;" class="el-icon-edit"></i><span
                    style="font-size: 10px; color: #6789bc;margin-right: 5px;">编辑</span>
                <i style="color: #c47d7d; font-size: 20px;" class="el-icon-delete-solid"></i><span
                    style="font-size: 10px;color: #c47d7d;">删除</span>
            </el-table-column>
        </el-table>
        <el-pagination style="margin-top: 5px; margin-left: 100px;" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
            :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper"
            :total="55">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name: 'pro-form',
    components: {},
    props: [],
    data() {
        return {
            input: '',
            tableData: [{
                id: 's021',
                name: 'admin',
                role: '普通员工',
                phone: '13834726754'
            }, {
                id: 's023',
                name: 'user',
                role: '普通员工',
                phone: '18834653456'
            }, {
                id: 's015',
                name: 'ax@123',
                role: '普通员工',
                phone: '15936724567'
            }, {
                id: 's032',
                name: 'we@22',
                role: '普通员工',
                phone: '13678453390'
            }, {
                id: 's012',
                name: 'wasd',
                role: '普通员工',
                phone: '13945608864'
            }, {
                id: 's022',
                name: 'aqwer',
                role: '普通员工',
                phone: '17788453865'
            }, {
                id: 's017',
                name: 'test',
                role: '普通员工',
                phone: '15578453390'
            }, {
                id: 's029',
                name: 'yy@22',
                role: '普通员工',
                phone: '13978453390'
            }, {
                id: 's024',
                name: 'user@123',
                role: '普通员工',
                phone: '13565727755'
            }, {
                id: 's011',
                name: 'axqwer',
                role: '普通员工',
                phone: '15537845566'
            }]
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
    padding: 20px 0px 0px 150px;
    box-sizing: border-box;
}

.forming-top {
    height: 8%;
    width: 100%;
}
</style>