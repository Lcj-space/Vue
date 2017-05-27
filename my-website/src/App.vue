<template>
    <div id="app">
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="(src,index) in img" >
                <img :src="src" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<!--<div id="allmap" style="height: 230px;"></div>-->


<script>
    export default {
        name: 'app',
        data () {
            return {
                img: [
                    "src/assets/1.jpg",
                    "src/assets/2.jpg",
                    "src/assets/3.jpg",
                    "src/assets/4.jpg"
                ]
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
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
