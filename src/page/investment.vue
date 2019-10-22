<template>
    <div class="content investment">
        <div class="body">
            <img @click.stop="test" src="../assets/img/logo.png" alt="btx capital">
            <p class="title">{{$t('investment.title')}}</p>
            <p>{{$t('investment.content')}}<br>
                {{$t('investment.emailw')}}：<a :href="'mailto:'+$t('contact.email')" style="text-decoration: underline;cursor: pointer;color: #fff">{{$t('investment.email')}}</a></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "investment",
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>

<style lang="less">
    .investment {
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
                position: absolute;
                z-index: 2;
                width: 100%;
                text-align: center;
                height: 0;
                top: 15vh;
            }
            .title{
                font-size: 20px;text-align: center;
                padding-top: 40px;
                color: #fff;
            }
            p {
                color: #999;
                text-align: left;
                font-size: 14px;
                line-height: 40px;
                max-width: 580px;
                margin: 0 auto;
                margin-top: 20px;
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
                text-align: left;
                line-height: 40px;
                max-width: 70%;
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
