<template>
    <div id="app">
        <FScreen v-show="loading"></FScreen>
        <MyTop></MyTop>
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="(src,index) in img">
                <img :src="src" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    import FScreen from './components/loadFirstScreen.vue'
    import MyTop from  './components/head.vue'
    export default {
        name: 'app',
        data () {
            return {
                img: [
                    "src/assets/1.jpg",
                    "src/assets/2.jpg",
                    "src/assets/3.jpg",
                    "src/assets/4.jpg"
                ],
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
    *{
        margin: 0;
        padding: 0;
    }
    #app {

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
        z-index: 99999;
        width: 100%;
        height: 200px;
    }
</style>
