<style scoped>
    @import "../assets/css/head.css";
</style>
<template>
    <div>
        <header id="top" class="topbar" role="navigation">
            <div class="container clearfix">
                <h1><a href="/" class="topbar-logo icon-logo"><span>Chongjie</span></a></h1>
                <div id="select">
                    <router-link class="topbar-item topbar-homepage focus" to="/home">首页</router-link>
                    <router-link class="topbar-item resume" to="/about">我的简历</router-link>
                </div>
                <nav class="topbar-nav">
                    <a href="#Skill" class="topbar-nav-link skill"><i class="el-icon-edit"></i>我的技能</a>
                    <div id="wechat" class="topbar-nav-link"><i class="el-icon-message"></i>联系我
                        <div id="show" class="dropbox topbar-mobile-dropbox"><span>扫一扫联系我</span> <img
                                src="src/assets/wechat.jpg" class="topbar-nav-qrcode"
                                alt="扫一扫联系我"></div>
                    </div>
                </nav>
            </div>
        </header>

    </div>
</template>
<script src="../assets/js/head.js"></script>

