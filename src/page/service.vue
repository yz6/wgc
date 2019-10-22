<template>
    <div class="content service">
        <div class="body">
            <img  class="logo" @click.stop="test" src="../assets/img/logo.png" alt="btx capital">
            <p class="title">{{$t('service.title')}}</p>
           <div class="centerBox">
               <div class="centerItem fleft">
                   <p class="itemTitle">{{$t('service.item1.title')}}</p>
                   <p class="itemContent">{{$t('service.item1.content')}}</p>
               </div>
               <div class="centerItem fright">
                   <p class="itemTitle">{{$t('service.item2.title')}}</p>
                   <p class="itemContent">{{$t('service.item2.content')}}</p>
               </div>
           </div>
            <div class="bottomBox">
                <img v-for="item in bottomImg" :src="item" alt="btx capital">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "service",
        data(){
            return{
                bottomImg: [require('../assets/img/组 247@2x.png'),require('../assets/img/组 250@2x.png'),require('../assets/img/组 248@2x.png'),require('../assets/img/组 251@2x.png'),require('../assets/img/组 249.svg'),require('../assets/img/组 252@2x.png')]

            }
        },
        methods:{

        }
    }
</script>

<style lang="less">
    .service {
        text-align: center;
        line-height: 100%;
        color: #FFFFFF;
        font-size: 14px;
        .logo {
            width: 250px;
            max-width: 65vw;
            z-index: 2;
            margin-bottom: 50px;
            position: relative;

        }
        @media screen and (min-width: 768px) {
            .body{
                position: relative;
                width: 100%;
                text-align: center;
                height: auto;
                padding-top: 15vh;
            }
            .title{
                font-size: 20px;text-align: center;
                padding-top: 40px;
                position: relative;
                z-index: 2;
            }

           .centerBox{
                max-width: 1000px;
                overflow: hidden;
                zoom: 1;
                margin: 100px auto;
               margin-top: 40px;
               .fleft{
                   float: left;
               }
               .fright{
                   float: right;
               }
               .centerItem{
                   img{
                       position: relative;
                       z-index: 2;
                   }
                   width: 100%;
                   text-align: center;
                    .itemTitle{
                        padding: 50px 0 20px 0;
                        font-size: 16px;
                    }
                   .itemContent{
                       letter-spacing: 0.5px;
                       position: relative;
                       z-index: 2;
                       margin: 0 auto;
                       max-width: 70%;
                       text-align: left;
                       color: #999999;
                       line-height: 30px;
                       font-size: 13px;
                   }
               }
           }
           .bottomBox{
               max-width: 750px;
               display: inline-block;
               margin-bottom: 100px;
               img{
                   position: relative;
                   z-index: 2;
                   width: 32%;
               }

           }

        }

        @media screen and (max-width: 768px) {
            .body{
                position: relative;
                width: 100%;
                text-align: center;
                height: auto;
                padding-top: 8vh;
            }
            p {
                text-align: left;
                line-height: 30px;
                margin: 0 auto;
                font-size: 13px;
                color: #999999;
            }
            .centerBox{
                position: relative;
                z-index: 2;
                width:80vw;
                margin: 0 auto;
                .centerItem{
                    margin-bottom: 70px;
                }
                .itemTitle{
                    color: #fff;
                    font-size: 14px;
                    margin: 50px 0 10px 0;
                    text-align: center;
                }
            }
            .bottomBox{
                img{
                    width: 45%;
                    margin-bottom: 20px;
                }
                margin-bottom: 100px;
            }
            .title{
                color: #fff;
                font-size: 16px;
                text-align: center;
                margin-bottom: 90px;
            }

        }
    }
</style>
