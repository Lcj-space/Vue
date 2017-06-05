<template>
    <div id="app">

        <FScreen v-show="loading"></FScreen>
        <MyTop></MyTop>
    </div>
</template>

<script>
    import FScreen from './components/loadFirstScreen.vue'
    import MyTop from  './components/head.vue'


    export default {
        name: 'app',
        data () {
            return {
                loading: true
            }
        },
        components: {
            FScreen,
            MyTop

        },
        mounted(){
            setTimeout(() => {
                this.loading = false;
            }, 1500)
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        background: #C0CCDA;
    }
    .works{
        width: 960px;
        margin: 0 auto;
        padding-top: 20px;
        color: whitesmoke;
    }
    .show-details{
        width: 960px;
        padding-bottom: 20px;
        margin: 0 auto;
        overflow: hidden;
    }
    .el-carousel {
        overflow: hidden;
        width: 960px;
        margin: 0 auto;
        padding-top: 100px;
        min-height: 350px;
        /*background: #324057;*/
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .el-carousel__item img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 200px;
    }
</style>
