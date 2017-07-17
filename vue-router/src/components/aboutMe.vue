<template>
    <div id="myInfo">
        <img src="src/assets/myImg.jpg"/>
        <div class="base-info">
            <header>
                <span style="font-size: 16px">基本信息：</span>
                <div class="line">

                </div>
                <span>姓名：&nbsp;罗崇杰</span>
                <span>性别：&nbsp;男</span>
                <span>最高学历：&nbsp;本科</span>
                <span>工作年限：&nbsp;1年</span>
                <span>毕业时间：&nbsp;2018年</span>
                <span>邮箱：&nbsp;1367546524@qq.com</span>
            </header>
            <div class="prize">
                <span style="font-size: 16px ">获奖荣誉：</span>
                <div class="line">

                </div>
                <span class="t-title"> 2015年</span>
                <p>
                    获校级二级奖学金、优秀贫困大学生三等奖学金
                </p>

                <span class="t-title"> 2016年</span>
                <p>
                    获CET-4、黑龙江大学物理知识竞赛一等奖、获校级三等奖学金、汽车驾驶证

                </p>
                <span class="t-title"> 2017</span>
                <p>
                    获黑龙江大学移动开发三等奖
                </p>
            </div>
            <div class="project-experience">
                <span style="font-size: 16px">项目经历：</span>
                <div class="line">

                </div>
                <span class="t-title"> 2017.05-至今</span><br>
                <p>
                    项目名称: &nbsp; 时光漫步
                    <span class="row-blank">

                </span>
                    项目职责：&nbsp; 前端负责人
                </p>

                <p>
                    项目内容:<br>
                    <span>
                    基于 vue-cli 脚手架 利用 vue2.0+ vue-router + vuex + webpack + es6 编写项目
                </span><br>
                    <span>
                    完成时光漫步的收发信件的功能，和连通数据库的交互
                  </span><br>
                    <span>使用了GIt进行代码的托管，尽可能的便面协作开发代码冲突</span><br>
                    <span>前后端并行开发的方式，控制开发的效率。遇到问题及时沟通</span><br>
                    <span>使用Vue+webpack构建单页面应用，构建时光漫步项目</span><br>
                    <span>项目即将参加全国创新创业大赛</span>
                </p>

                <span class="t-title"> 2017.02-2017.5</span><br>
                <p>
                    项目名称: &nbsp; 悦居短租
                    <span class="row-blank">

                </span>
                    项目职责：&nbsp; 前端+后端（组员）
                </p>

                <p>
                    项目内容:<br>
                    <span>
                    基于CI框架 + vueJs + Bootstrap + zeptoJs + axios + mint-ui 构建移动端页面<br>
                </span><br>
                    <span>
                    网站设计是一个短租平台
                </span><br>
                    <span>
                    负责评论页面、订单页面、支付页面的编写。利用axios进行前后端的数据交互。
                </span><br>
                    <a>
                        后台页面利用了bootstrap，在图片的上传功能为防止恶意注入进行了后端校验
                    </a><br>
                    <span>
                    页面的编写大部分是利用了vueJS提高了页面的性能。
                 </span><br>
                    网站地址:<a href="http://www.hrbyueju.com/yuejum/">http://www.hrbyueju.com/yuejum/</a><br>

                </p>
            </div>
            <footer>
                <span style="font-size: 16px">自我描述：</span>
                <div class="line"></div>
                <p style="padding-left: 30px; ">
                    自我学习能力强，做事认真。编程爱好者,喜欢研究新知识。热爱折腾拥有梦想。对于工作积极负责。坚信“态度决定一切，细节决定成败”。善于沟通，善于捕捉业务逻辑。我年轻有活力有梦想，以成为一名极客而努力，我这个人运气比较好希望能把好运带给身边的人。创新能力很强，拥有较强的逻辑。最近在看平凡的世界，希望我们能够像著作中一样一起平凡而伟大。
                </p>
            </footer>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import "../assets/css/aboutMe.scss";
</style>