<template>
    <div>
        <div id="footer">
            <div class="profile_social">
                <h4>©2016-2017 罗崇杰 | chongjie</h4>
                <a href="http://www.miitbeian.gov.cn/" target="_blank"><h5>湘ICP备17003525号</h5></a>
                <h4>powered by 罗崇杰</h4>
                <span>邮 箱 :&nbsp&nbsp<a class="focus" href="mailto:1367546524@qq.com">1367546524@qq.com</a></span><br>
                <div class="clear"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
    }
    #footer{
        min-height: 300px;
        background-color: #13CE66;
        overflow: hidden;
        color: whitesmoke;
    }
    .profile_social{
        width: 960px;
        margin: 100px auto;
        text-align: center;
    }
    .profile_social h6{
        color: slategrey;
    }
    .profile_social a{
        display: inline-block;
        height: 10px;
        line-height: 10px;
        font-size: 20px;
    }
    .profile_social h5:hover {
        color: #F7BA2A;
        transition: all 0.3s;
        text-decoration: underline;
    }
    .profile_social span{
        display: inline-block;
        margin-top: 5px;
    }
    .profile_social a {
        color: slategrey;
    }
    .focus:hover {
        color: #F7BA2A;
        transition: all 0.3s;
        text-decoration: underline;
    }

</style>