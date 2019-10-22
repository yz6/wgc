<template>
    <div class="footer">
        <a href="https://www.facebook.com/btxcapital/" target="_blank">
            <img @click="test" src="../assets/img/组 241.svg" alt="btx capital">
        </a>

        <a href="https://twitter.com/BTX_Capital" target="_blank"> <img src="../assets/img/组 242.svg" alt="btx capital"></a>
        <a href="https://www.linkedin.com/company/btxcapitaloffical" target="_blank">
            <img src="../assets/img/组 243.svg" alt="btx capital">
        </a>
        <a href=" https://medium.com/@btx.capital" target="_blank">
            <img src="../assets/img/组 545.png" alt="btx capital">
        </a>
           <p>2019 © BTX.Capital. All Rights Reserved.</p>
    </div>
</template>

<script>
    export default {
        name: "footer",
        data(){
            return{

            }
        },
        methods:{
            test(){
                console.log(1234)
            }
        }
    }
</script>

<style lang="less">
    .footer{
        width: 100%;
        height: 100px;
        z-index: 2;
        color: #fff;
        text-align: center;

        img{
            margin: 0 20px;
            z-index: 2;
        }
        p{
            padding-top: 20px;
            color: #666666;
            font-size: 14px;
        }

    }
</style>
