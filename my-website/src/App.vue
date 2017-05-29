<template>
    <div id="app">
        <FScreen v-show="loading"></FScreen>
        <MyTop></MyTop>
        <MyInfo></MyInfo>
        <div class="works">
        <h2>我的项目</h2>
        </div>
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="(src,index) in img">
                <img :src="src" alt="">
            </el-carousel-item>
        </el-carousel>
        <div class="show-details">
            <span>1 : 基于PHP的社会医疗保障系统</span><br>
            <span>2 : 基于互联网+小区停车系统</span><br>
            <span>3 : 网上购物商城</span><br>
            <span>4 : 天天有课微信端开发</span><br>
        </div>
        <Skill></Skill>
        <MyMap></MyMap>
        <MyFooter></MyFooter>
    </div>
</template>

<script>
    import FScreen from './components/loadFirstScreen.vue'
    import MyTop from  './components/head.vue'
    import MyInfo from  './components/BasicInformation.vue'
    import Skill from  './components/Skill.vue'
    import MyFooter from  './components/footer.vue'
    import MyMap from  './components/map.vue'


    export default {
        name: 'app',
        data () {
            return {
                img: [
                    "src/assets/4.png",
                    "src/assets/3.png",
                    "src/assets/2.png",
                    "src/assets/1.png"
                ],
                loading: true
            }
        },
        components: {
            FScreen,
            MyTop,
            MyInfo,
            Skill,
            MyFooter,
            MyMap
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
