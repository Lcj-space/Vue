
    <style scoped>
        article, aside, blockquote, body, button, code, dd, details, dl, dt, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hr, input, legend, li, menu, nav, ol, p, pre, section, td, textarea, th, ul {
            margin: 0;
            padding: 0;
        }

        a {
            text-decoration: none;
        }

        *, :after, :before {
            box-sizing: inherit;
        }

        [class*=" icon-"] {

            speak: none;
            font-style: normal;
            font-weight: 400;
            -webkit-font-feature-settings: normal;
            font-feature-settings: normal;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .topbar {
            display: block;
            line-height: 60px;
            background-color: #323b43;
        }
        #top.topbar {
            height: 60px;
            position: fixed;
            width: 100%;
            z-index: 55;
        }
        .container {
            font-size: 14px;
            width: 960px;
            margin: 0 auto;
        }

        .topbar-logo {
            width: 105px;
            margin-right: 30px;
            line-height: inherit;
        }

        .topbar-item.focus {
            background-color: slategrey;
        }

        .topbar-item.topbar-homepage {
            width: 112px !important;
        }

        .topbar-item {
            font-size: 16px;
            position: relative;
            color: #fff;
            width: 104px;
            text-align: center;
        }

        .topbar-item, .topbar-logo, .topbar-nav-link {
            float: left;
        }

        .topbar-nav {
            float: right;
            width: 500px;
            color: #d2e7f9;
        }

        .topbar-nav-link {
            padding: 0 10px;
            width: 106px;
            color: inherit;
            position: relative;
            cursor: pointer;
            text-align: center;
        }

        .topbar-nav-link {
            float: left;
        }

        .topbar-nav-link .topbar-mobile-dropbox {
            top: 100%;
            margin-top: -5px;
            cursor: auto;
            display: none;
            width: 200px;
            left: 7px;
            line-height: 40px;
            color: #333;
            font-size: 16px;
            font-weight: 700;
            padding: 3px 10px;
        }

        .topbar-nav-link .topbar-mobile-dropbox:hover {
            display: block;
        }

        .dropbox {
            color: #999;
            position: absolute;
            background: #fff;
            background: rgba(255, 255, 255, .98);
            padding: 4px 6px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, .5);
            border: 1px solid #ddd;
            border-width: 0 1px 1px;
            z-index: 55;
        }

        .topbar-nav-link .topbar-mobile-dropbox:before {
            border-color: transparent transparent #fff;
            right: auto;
            left: 9px;
        }

        .dropbox:before {
            content: ' ';
            border: 5px solid #fff;
            display: block;
            position: absolute;
            top: -10px;
        }

        .topbar-nav-qrcode {
            width: 100%;
        }



        #wechat:hover #show {
            display: block;
        }
        .topbar-logo.icon-logo{
            color: white;
        }
       .el-icon-message,.el-icon-edit,el-icon-star-on{
            margin-right: 4px;
        }

    </style>
    <template>
        <div>
            <header id="top" class="topbar" role="navigation">
                <div class="container clearfix"><h1><a href="/" hardjump="" class="topbar-logo icon-logo"><span>Chongjie</span></a></h1>
                    <a href="/" hardjump="" class="topbar-item topbar-homepage focus">首页</a>
                    <a href="#" class="topbar-item">我的简历</a>
                    <nav class="topbar-nav">
                        <a href="#Skill" class="topbar-nav-link"><i class="el-icon-edit"></i>我的技能</a>
                        <!--<a href="#" class="topbar-nav-link" target="_blank"><i class="el-icon-star-on">收藏的文章</i></a>-->
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

