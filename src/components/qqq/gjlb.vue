<template>
    <div class="forming">
        <div class="forming-top">
            <span>车间 </span>
            <el-select style="width: 100px;" v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="c1" value="1"></el-option>
                <el-option label="c2" value="2"></el-option>
                <el-option label="c3" value="3"></el-option>
            </el-select>
            <el-date-picker style="margin-left: 20px;" v-model="value1" type="daterange" range-separator="至"
                start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
            <el-button style="margin-left: 10px;" type="info">查询</el-button>
            <span style="margin-left: 350px;">状态</span><div style="margin-left: 5px;width: 10px; height: 10px;border-radius: 50%; background-color: #7dc483;display: inline-block;"></div>
        </div>
        <el-table :data="tableData" style="width: 90%;border: 1px solid #eee;">
            <el-table-column prop="id" label="编号" width="150">
            </el-table-column>
            <el-table-column prop="time" label="告警时间" width="150">
            </el-table-column>
            <el-table-column prop="chejian" label="告警车间" width="150">
            </el-table-column>
            <el-table-column label="告警图片" width="150">
                <span style="color:#6789bc;">查看详情</span>
            </el-table-column>
            <el-table-column label="备注" width="150">
            </el-table-column>
            <el-table-column prop="pendding" label="状态" width="150">
                <template slot-scope="scope">
                    <span :style="{ 'color': scope.row.pendding == '已处理' ? '' : 'red' }">{{ scope.row.pendding }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="150">
                <i style="color: #6789bc; font-size: 20px;" class="el-icon-edit"></i><span
                    style="font-size: 10px; color: #6789bc;margin-right: 5px;">编辑</span>
                <i style="color: #c47d7d; font-size: 20px;" class="el-icon-delete-solid"></i><span
                    style="font-size: 10px;color: #c47d7d;">删除</span>
            </el-table-column>
        </el-table>
        <el-pagination style="margin-top: 25px; margin-left: 100px;" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]"
            :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="4">
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
            select:'',
            value1:'',
            input: '',
            tableData: [{
                id: 'c401',
                time: '2023-9-13 18:06',
                chejian: '2A',
                pendding: '已处理'
            }, {
                id: 'c404',
                time: '2023-9-13 09:16',
                chejian: '2B',
                pendding: '已处理'
            }, {
                id: 'c402',
                time: '2023-9-13 03:24',
                chejian: '1A',
                pendding: '已处理'
            }, {
                id: 'c416',
                time: '2023-9-13 00:15',
                chejian: '1B',
                pendding: '已处理'
            },]
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
    padding: 20px 0px 0px 100px;
    box-sizing: border-box;
}

.forming-top {
    height: 10%;
    width: 100%;
}
</style>