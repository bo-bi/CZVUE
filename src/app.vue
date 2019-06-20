<template>
    <div>
        我们的第一个Vue程序<br/>
        {{text}}
        <br/>
        <!--双向数据绑定-->
        输入：<input type="text" v-model="text"/>
        <!--列表-->
        <ul>
            <li v-for="(person, index) in list" :key="index">{{person.name}}</li>
        </ul>
    </div>
    <!--<div>-->
        <!--只能包含一个根结点2.x以后-->
    <!--</div>-->
</template>

<script>
    export default {
        //配置
        //类似 $scope.xxx = '初始化'
        // data: function() {
        //
        // }
        data() {
            return {
                //放数据的地方
                text: '大家好',
                list: [
                    {
                        name: 'jack'
                    },
                    {
                        name: 'rouse'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
