<template>
        <div class="content index">
             <div style="position: absolute;z-index: 2;width: 100%;text-align: center;height: 0;top: 28vh;">
                 <img @click.stop="test" src="../assets/img/logo.png" alt="btx capital">
                 <p>{{$t('home.content')}}</p>
             </div>
        </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>

<style lang="less">
    .index{
        text-align: center;
        line-height: 100%;
        color: #FFFFFF;
        font-size:14px;
        img{
            width: 250px;
            max-width: 65vw;
            z-index: 2;
            margin-bottom: 50px;

        }
        p{
            line-height: 30px;
            font-size: 14px;
        }
    }
</style>
