<template>
    <div class="header_container noselect">
        <div class="top-menu pc">
            <ul>
                <li>
                    <router-link to="/">
                        <span>{{$t('home.title')}}</span>
                    </router-link>

                </li>
                <li>
                    <router-link to="/aboutus">
                    <span>{{$t('aboutUs.title')}}</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/service">
                        <span>{{$t('service.title')}}</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/investment">
                    <span>{{$t('investment.title')}}</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/contact">
                    <span>{{$t('contact.title')}}</span>
                    </router-link>
                </li>
                <li>
                    <span @click="changeLocale">{{ $t('language') }}</span>
                </li>
            </ul>
        </div>
        <div class="top-menu web">
            <p style="margin: 0" @click="showWebNum = !showWebNum">{{$t('menu')}}</p>
            <transition name="el-zoom-in-top">
           <div v-show="showWebNum">
               <router-link to="/">
               <p>{{$t('home.title')}}</p>
               </router-link>
               <router-link to="/aboutus">
                   <p>{{$t('aboutUs.title')}}</p>
               </router-link>
               <router-link to="/service">
               <p>{{$t('service.title')}}</p>
               </router-link>
               <router-link to="/investment">
               <p>{{$t('investment.title')}}</p>
               </router-link>
               <router-link to="/contact">
               <p>{{$t('contact.title')}}</p>
               </router-link>
               <p @click="changeLocale">{{ $t('language') }}</p>
           </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    import {getCookie, delCookie, setCookie} from "../api/cookie";
    import {getCurrentStaff, getAllFloorNumbers} from "../api/getData";


    export default {

        data() {
            return {
                showWebNum:false
            }
        },
        mounted() {


        },
        watch: {
            '$route'(){
                this.showWebNum = false
            }
        },
        activated() {

        },
        created() {


        },
        computed: {
            topUserInfo() {
                return this.$store.state.topUserInfo
            }
        },
        methods: {
            ...mapActions(['getAdminData']),
            logOut() {
                console.log(1234)
                this.foreach()
                this.$router.push('/')
            },
            changeLocale() {
                this.showWebNum = false
                let locale = this.$i18n.locale
                locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
                locale === 'zh'?document.title='btx.capital - Leading blockchain investment bank and provide most professional advisory service in the world':document.title='btx.capital - 全球卓越的区块链投资机构及最专业的咨询服务者'
                // LangStorage.setLang(this.$i18n.locale) //后面会用做切换和将用户习惯存储到本地浏览器
            },
            foreach() {
                var strCookie = document.cookie;
                var arrCookie = strCookie.split("; ");
                for (var i = 0; i < arrCookie.length; i++) {
                    var arr = arrCookie[i].split("=");
                    if (arr.length > 0)
                        console.log(arr[0])
                    delCookie(arr[0]);
                }
            },

        },

    }
</script>

<style lang="less">
    @import '../style/mixin';

    .header_container {
        background-color: #000;
        height: 70px;
        color: #fff;
        position: relative;
        z-index: 10;
        .top-menu{
            width: 100%;

            margin: 0 auto;
        }
        .top-menu{
            li{
                span{
                    cursor: pointer;
                    letter-spacing: 3px;
                }
            }
        }
        @media screen and (min-width: 868px){
            .top-menu.pc{
                font-size: .9rem;
                display: block;
                text-align: center;

                ul{
                    width:100%;
                    display: inline-block;
                    text-align: center;
                }
                li{
                    display: inline-block;
                    padding: 24px 2.5%;
                }
            }
            .top-menu.web{
                display: none;
            }
        }
        @media screen and (max-width: 868px){
            .top-menu.pc{
                display: none;
            }
            .top-menu.web{
                background: rgba(0,0,0,.9);
                display: block;
                text-align: center;
                padding-top: 24px;
                p{
                    font-size: 1rem;
                    cursor: pointer;
                    margin: 1rem 0 ;
                }
            }

        }



    }



</style>
