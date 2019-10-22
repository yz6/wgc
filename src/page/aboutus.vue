<template>
    <div class="content aubotus">
        <div class="body">
            <img @click.stop="test" src="../assets/img/logo.png" alt="btx capital">
            <p class="title">{{$t('aboutUs.title')}}</p>
            <p>{{$t('aboutUs.content')}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "aboutus",
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>

<style lang="less">
    .aubotus {
        text-align: center;
        line-height: 100%;
        color: #FFFFFF;
        font-size: 14px;
        img {
            width: 250px;
            max-width: 65vw;
            z-index: 2;
            margin-bottom: 50px;

        }
        @media screen and (min-width: 768px) {
            .body{
                position: relative;
                z-index: 2;
                width: 100%;
                text-align: center;
                height: auto;
                top: 15vh;
            }
            .title{
                font-size: 20px;text-align: center;
                color: #fff;
            }
            p {
                color: #999;
                text-align: left;
                font-size: 14px;
                line-height: 40px;
                max-width: 580px;
                margin: 0 auto;
                margin-top: 15px;
            }

        }

        @media screen and (max-width: 768px) {
            .body{
                position: relative;
                z-index: 2;
                width: 100%;
                text-align: center;
                height: auto;
                padding-top: 8vh;
            }
            p {
                text-align: center;
                line-height: 40px;
                max-width: 85%;
                margin: 0 auto;
                margin-top: 20px;
                font-size: 13px;
                color: #999999;
            }
           .title{
               color: #fff;
               font-size: 16px;
               text-align: center
            }

        }
    }
</style>
