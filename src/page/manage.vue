<template>
  <div class="fillcontain">
      <head-top></head-top>
      <div id="particles-js" class="routerView" :style="{height:pHeight + 'px'}"></div>
      <router-view style="position: relative;" :style="{minHeight:pHeight + 'px'}"></router-view>
      <Footer ></Footer>
  </div>
</template>

<script>
    import {login,getCode} from "../api/getData";
    import pData from '../js/particlesData'
    import Footer from '../components/footer'
    import headTop from '../components/headTop'
    export default {
        components: {
            headTop,
            Footer
        },
        data() {
            return {
                loginForm:{
                    mobile:'',
                    code:'',
                },
                count:0,
                canClick:true,
                pHeight:0
            }
        },
        updated(){

        },
        mounted(){
            let that = this
            let minH = 480
            let a = (document.documentElement.clientHeight)<minH?minH:(document.documentElement.clientHeight-170)
            let b = document.body.scrollHeight-170
            that.$nextTick(function () {
                that.pHeight =b>a?b:a
                setTimeout(function () {
                    particlesJS('particles-js',pData.data);
                },200)
                window.onresize=function(){
                    let a = document.documentElement.clientHeight-170
                        that.pHeight =a<minH?minH:a

                }
            })

        },
        created() {

        },
        watch:{
            '$route'(){
                let that = this
                let minH = 450
                that.pHeight = 0
                console.log(document.documentElement.clientHeight)
                let a = document.documentElement.clientHeight-170
                that.pHeight =a<minH?minH:a

            }
        },
        methods: {

        },
    }
</script>

<style lang="less">
    @import '../style/mixin';
#particles-js{
   width: 100%;
    position:absolute;
    z-index: 1;
    top:70px;
    left:0;
    border-color:#000 ;
    .particles-js-canvas-el{
        border-color: #000;
    }
}


</style>
