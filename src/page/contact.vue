<template>
    <div class="content contact">

        <div class="h100"></div>
        <div class="topLeft">
            <p class="title">{{$t('contact.weChat')}}</p>
            <p style="margin-bottom: 40px">BTX_Capital</p>
            <p class="title">{{$t('contact.content')}}</p>
            <p><a :href="'mailto:'+$t('contact.email')">{{$t('contact.email')}}</a></p>
        </div>
        <div style="margin-top: 100px;text-align: center">
            <img @click="goformpage" style="position: relative;z-index: 2;margin-bottom:30px;cursor: pointer" src="../assets/img/组 231.svg" alt="btx capital">
            <p style="position: relative;z-index: 2">{{$t('contact.form.title[0]')}} <span  @click="goformpage" style="border-bottom: 1px solid #fff;cursor: pointer">{{$t('contact.form.title[1]')}}</span></p>
            <p style="margin-top: 10px;font-size: 14px;color: #999">{{$t('contact.formW')}}</p>
        </div>
        <!--<div class="formBox">-->
            <!--<div class="formBody">-->
            <!--<p class="formTitle">{{$t('contact.form.exchange')}}</p>-->
                <!--<el-input v-model="form.exchange"></el-input>-->
                <!--<p class="formTitle">{{$t('contact.form.budget')}}</p>-->
                <!--<el-input  v-model="form.budget"></el-input>-->
                <!--<p class="formTitle">{{$t('contact.form.profile')}}</p>-->
                <!--<el-input-->
                    <!--v-model="form.profile"-->
                    <!--type="textarea"-->
                    <!--resize="none"-->
                    <!--show-word-limit-->
                    <!--maxlength="32"-->
                    <!--:autosize="{ minRows: 4, maxRows: 4}">-->

                <!--</el-input>-->
                <!--<p class="formTitle">{{$t('contact.form.contacts')}}</p>-->
                <!--<el-input v-model="form.contacts"></el-input>-->
                <!--<p class="formTitle">{{$t('contact.form.contacts')}}Email</p>-->
                <!--<el-input v-model="form.email"></el-input>-->
                <!--<p style="text-align: center"><el-button class="sendBtn">发送</el-button></p>-->
            <!--</div>-->

        <!--</div>-->
        <div style="height: 20px"></div>
    </div>
</template>

<script>
    export default {
        name: "contact",
        data(){
          return{
              form:{
                  exchange:'',
                  budget:'',
                  profile:'',
                  contacts:'',
                  email:''
              }
          }
        },
        methods:{
            goformpage(){
                window.open('https://docs.google.com/forms/d/e/1FAIpQLSeAuxsYyyR1Dz4yEvPCD3_Oaer3zjRGBznxRn6bxJGAihMk3A/viewform?usp=sf_link','_blank')
            }
        }
    }
</script>

<style lang="less">
    .contact{
        max-width: 1200px;
        margin: 0 auto;
        color: #fff;
    }
    .topLeft{
        position: relative;
        text-align: center;
        z-index: 2;
        p{
            font-size: 14px;
            a{
                text-decoration: underline;
                cursor: pointer;
            }
        }
        .title{
            font-size: 20px;
            color: #999999;
            margin-bottom: 5px;
        }
    }
    .formBox{
        width: 330px;
        margin: 0 auto;
        text-align: center;
        .formTop{
            display: block;
            height: 65px;

            span{
                display: inline-block;
                position: relative;
                bottom: 22px;
                font-size: 16px;
            }
        }
        .sendBtn{
            margin-top: 20px;
            background: #D0AA68;
            padding: 0;
            width: 100px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            border-radius: 30px;
            border-color: #D0AA68;
            color: #fff;
        }
    }
    .formBody{
        height: auto;

        text-align: left;
        padding-top: 30px;
        position: relative;
        z-index: 2;
        .el-input__inner{
            font-size: 16px;
        }
        .el-textarea{
            position: relative;
            font-size: 16px;
            .el-input__count{
                position: absolute;
                top: -25px;
                right: 0;
                font-size: 12px;
                color: #999999;
            }
        }
        .formTitle{
            color: #999999;
            font-size: 14px;
            margin: 10px 0;
        }
    }
    @media screen and (min-width: 768px) {
        .h100{
            height: 100px;
        }
        .topLeft{
            display: block;
        }
        .formTop{
            height: 65px;
            img{
                display: inline-block;
            }
        }

    }

    @media screen and (max-width: 768px) {
        .h100{
            height: 0px;
        }
        .contact{
            padding-top: 0;
        }
        .topLeft{
            position: relative;
            top: 40px;
            left: 0;
            text-align: center;
        }
        .formBox{
            display: none;
            .formTop{
                height: 23px;
                color: #fff;
                span{
                    bottom: 0;

                }
                img{
                    display: none;
                }
            }
        }


    }
</style>
