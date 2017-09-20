<template>
    <div>
        <div id="Skill">

            <div class="container">
                <div class="show">
                    <h2>我的技能</h2>
                </div>
                <div class="box">
                <el-progress class="el-progress-one" type="circle" :percentage="90"></el-progress>
                <el-progress class="el-progress-two" type="circle" :percentage="60"></el-progress>
                <el-progress class="el-progress-three"  type="circle" :percentage="75"></el-progress>
                <el-progress class="el-progress-four" type="circle" :percentage="60"></el-progress>
                <el-progress class="el-progress-five" type="circle" :percentage="65"></el-progress>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #Skill{
        background: #1F2D3D;
    }
    .container{
        width: 960px;
        margin: 0 auto;
        min-height: 377px;
        overflow: hidden;
        background: #1F2D3D;
        /*background: salmon;*/
    }
    .show {
        margin-top:20px ;
        color: #324057;
    }
    .box{
        display: flex;
        padding-top: 50px;
        justify-content: space-around;
    }

    .el-progress:after{
        position: absolute;
        top:120%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        color: whitesmoke;
    }
    .el-progress-one:after{
        content: "CSS/Html/JavaScrip";
    }
    .el-progress-two:after{
        content: "JQ/RequireJS/SeaJS";
    }
    .el-progress-three:after{
        content: "Html5/CSS3/VueJS";
    }
    .el-progress-four:after{
        content: "MySql/PHP";
    }
    .el-progress-five:after{
        content: "Sass/Gulp/ES6";
    }
</style>