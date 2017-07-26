<template>
    <div>
        <el-button @click="find_task">search</el-button>
        <el-input v-model="contract_id"></el-input>
        <el-table :data="taskList"
                  v-show="true"
                  stripe border
                  style="width: 100%"
                  @cell-dblclick="showEditTaskDiscountForm(row,column,cell,event)"
        >
            <el-table-column
                    type="index"
                    label="序号">
            </el-table-column>
            <el-table-column
                    prop="taskId"
                    label="任务id">
            </el-table-column>
            <el-table-column
                    prop="taskName"
                    label="任务名称"
                    :sortable="true"
                    width="150"
                    :show-tooltip-when-overflow="true">
            </el-table-column>
            <el-table-column
                    prop="typeName"
                    label="任务渠道"
                    :sortable="true"
                    :show-tooltip-when-overflow="true">
            </el-table-column>
            <el-table-column
                    prop="amount"
                    label="任务总金额（元）"
                    :sortable="true"
                    :show-tooltip-when-overflow="true">
            </el-table-column>

            <el-table-column
                    prop="discountAmount"
                    label="任务折后金额（元）"
                    :sortable="true"
                    :show-tooltip-when-overflow="true"
            >
            </el-table-column>
            <el-table-column
                    label="任务折扣率"
                    :sortable="true"
                    :show-tooltip-when-overflow="true"
                    :context="_self"
                    inline-template
            >
                <div>{{ Math.round(row.discountAmount * 10000 / row.amount) / 100 }}%</div>
            </el-table-column>
            <el-table-column
                    :context="_self"
                    inline-template
                    label="操作">
                <div>
                    <el-button
                            size="small"
                            @click="handleEdit($index, row)">
                        编辑
                    </el-button>
                </div>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
    import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
    import {  getList } from 'api/contract';
    export default {
        components: {
            ElInput,
            ElButton
        },
        name: 'contract',
//        props: {
//            isActive: {
//                type: Boolean,
//                default: false
//            },
//            toggleClick: {
//                type: Function,
//                default: null
//            }
//        },
        data() {
            return {
                contract_id:1,
                taskList:[]
            }
        },
        methods: {
            find_task() {
                console.info("find task invoke");
                var params = {'contract_id': this.contract_id};
                getList().then(response => {
                    console.log("response is"+response)
                    this.taskList = response.data;
                })
//                getList(this.listQuery).then(response => {
//                    this.list = response.data;
//                    this.listLoading = false;
//                  });
            }
        }
//        //below is hook
//        beforeCreate:function () {
//            console.log("beforeCreate");
//        },
//        created:function () {
//            console.log("has created");
//        },
//        beforeMount:function () {
//            console.log("before mount")
//        },
//        mounted:function () {
//            console.log("mounted")
//        },
//        beforeUpdate:function () {
//            console.log("before update")
//        },
//        updated:function () {
//            console.log('updated')
//        },
//        beforeDestroy:function () {
//            console.log("before destroy")
//        },
//        destroyed:function () {
//            console.log("destroyed")
//        }

    };

</script>

<style scoped>
    .hamburger {
        display: inline-block;
        cursor: pointer;
        width: 20px;
        height: 20px;
        transform: rotate(0deg);
        transition: .38s;
        transform-origin: 50% 50%;
    }

    .hamburger.is-active {
        transform: rotate(90deg);
    }
</style>
