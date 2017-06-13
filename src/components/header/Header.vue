<template>
    <div id="header" class="v_header">
        <div class="v_container">
            <!-- 分发组件内容 -->
            <slot></slot>
            <div class="v_banner">
                <div class="v_headpic">
                    <img src="./touxiang.jpg" alt="">
                </div>
                <div class="v_baseinfo">
                    <h5>Hello</h5>
                    <h1>{{baseInfo.name}}</h1>
                    <h6 class="text_hidden">{{baseInfo.job}}</h6>
                    <ul>
                        <li class="text_hidden">
                            <i class="iconfont icon-xuexiao"></i>
                            <b>毕业学校</b>
                            <span>{{baseInfo.edu}}</span>
                        </li>
                        <li class="text_hidden">
                            <i class="iconfont icon-edu"></i>
                            <b>学历</b>
                            <span>{{baseInfo.degree}}</span>
                        </li>
                        <li class="text_hidden">
                            <i class="iconfont icon-phone"></i>
                            <b>手机号码</b>
                            <span>{{baseInfo.phone}}</span>
                        </li>
                        <li class="text_hidden">
                            <i class="iconfont icon-chengshi"></i>
                            <b>目标城市</b>
                            <span>{{baseInfo.city}}</span>
                        </li>
                        <li class="text_hidden">
                            <i class="iconfont icon-email"></i>
                            <b>邮箱</b>
                            <span>{{baseInfo.email}}</span>
                        </li>
                    </ul>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: ['baseInfo']
}
</script>

<style lang="scss" scoped>
.v_header {
    width: 100%;
    height: auto;
    background: url('./bgheader.png') no-repeat ;
    background-size: cover;
    color: #fff;
}

.v_container {
    width: 100%;
    height: auto;

   
    position: relative;
}

.v_banner {
    width: 100%;
    padding: 50px 0;
    @media only screen and (max-width: 400px) {
       padding: 30px 0;
      }
    margin: 0 auto;
}

.v_headpic {
    float: left;
    width: 40%;
    text-align: center;
    position: relative;
    z-index: 10;
    img {
        width: 50%;
        border: 5px solid rgba(255, 255, 255, 0.68);
        border-radius: 50%;
        opacity: 0.9;
    }
}

.v_baseinfo {
    float: right;
    width: 60%;
    text-align: left;
    h5 {
        position: relative;
        display: inline-block;
        padding: 5px 15px;
        font-size: 18px;
        color: #fff;
        background-color: #03a9f4;
        font-family: 'Overlock', cursive;
        vertical-align: top;
        box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        &::after {
            position: absolute;
            width: 0;
            height: 0;
            left: 5px;
            bottom: -5px;
            content: '';
            border-style: solid;
            border-width: 10px 10px 0 10px;
            border-color: #03a9f4 transparent;
        }
    }
    h1 {
        margin-top: 10px;
        font-size: 24px;
        font-family: 'Overlock', cursive;
    }
    h6 {
        margin-top: 10px;
        font-size: 16px;
        font-family: 'Overlock', cursive;
        color: #C7C7C7;
        letter-spacing: 5px;
    }
    ul {
        margin-top: 15px;
        border-top: 1px solid #fff;
        li {
            font-size: 14px;
            margin-top: 15px;
            span {
                &:hover {
                    color: #03a9f4;
                }
            }
            b {
                display: inline-block;
                font-family: 'Overlock', cursive;
                margin-right: 20px;
                width: 60px;
            }
        }
    }
}

#particles-js {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    z-index: 1;
     @media only screen and (max-width: 300px) {
       height: 200px;
      }
}







/*清除浮动*/

.clearfix:before {
    display: table;
    content: "";
    box-sizing: border-box;
}

.clearfix:after {
    clear: both;
    display: table;
    content: "";
    box-sizing: border-box;
}
</style>
