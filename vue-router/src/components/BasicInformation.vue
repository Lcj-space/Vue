<template>
    <div>
        <div id="basic-information">

            <div class="comment">
                <div class="show">
                    <h2>我的基本信息</h2>
                </div>
                <div class="comment-top">
                    <div class="information">
                        <span>名 字 :&nbsp&nbsp罗崇杰</span><br>
                        <span>性 别 :&nbsp&nbsp男</span><br>
                        <span>生 日 :&nbsp&nbsp1995.01.01</span><br>
                        <span>手 机 :&nbsp&nbsp15545956712</span><br>
                        <span>邮 箱 :&nbsp&nbsp<a class="focus" href="mailto:1367546524@qq.com">1367546524@qq.com</a></span><br>
                        <span>点 击 :&nbsp&nbsp<a class="focus" href="https://github.com/Lcj-space">GitHub</a></span><br>
                        <span>地 址 : &nbsp&nbsp黑龙江大学A9</span>
                    </div>
                    <!--<Map></Map>-->
                    <div class="my-img">
                        <img src="src/assets/myImg.jpg" alt="我的照片">
                    </div>
                </div>

                <div class="about-me">
                    <h3>自我评价</h3>
                    <p>
                        本人性格稳健、和善、个性开朗，容易相处。人际沟通能力较强，做事细心、有很强的责任意识。学习能力强，专业知识殷实。积极的工作态度，能够独立解决工作中遇到的问题。喜欢对前端界新技术的研究，通过掘金、segmentFault了解新的技术，日常能够通过阅读和其他方式进行自学，逐渐积累前端人员基本知识，在github上一直保持提交自己日常学习和所参与项目中的代码。有一定的团队意识，集体荣誉感强。
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    #basic-information {
        width: 100%;
        background-color: #324057;
        padding-top: 75px;
    }

    .comment {
        width: 960px;
        margin: 0 auto;
        overflow: hidden;
        min-height: 450px;
    }
     .comment-top{
         width: 100%;
         overflow: hidden;
     }
    .comment span, .comment a {
        color: #F9FAFC;
    }
    .comment .focus{
        color: #13CE66;
    }
    .comment a:hover {
        color: #F7BA2A;
        transition: all 0.3s;
        text-decoration: underline;
    }

    .information {
        float: left;
        padding: 50px 0;
    }

    .my-img {
        margin: 50px 0;
        float: right;
        height: 140px;
        width: 140px;
        border-radius: 50%;
        overflow: hidden;
    }

    .my-img img {
        width: 140px;
        height: 140px;
    }
    .about-me {
        float: left;
        overflow: hidden;
    }
    .about-me h3{
        color: #1F2D3D;
    }
    .about-me p{
        margin-top: 20px;
        color: whitesmoke;
    }
    .show h2{
        color: #1F2D3D;

    }
</style>

<script>
//    import Map from 'src/components/map.vue'
//    export default{
//        name:'#basicInformation',
//        components: {
//            Map
//        }
//    }
</script>