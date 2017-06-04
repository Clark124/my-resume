<template>
    <div class="title">
        <span class="tip">{{tip}}</span>
        <h1>{{title}}</h1>
        <span class="border one"></span>
    </div>
</template>
<script>
export default {
    name: 'title',
    props: ['title', 'tip']
}
</script>
<style lang="scss" scoped>
.title {
    text-align: center;
    h1 {
        text-align: center;
        padding: 20px;
        font-family: 'Overlock', cursive;
        color: #2F2C06;
        font-size: 20px;
        @media only screen and (max-width: 560px) {
            padding: 10px;
        }
    }
    .tip {   
        position: relative; 
        height: 20px;
        line-height: 20px;
        padding: 5px 10px;
        margin: 0 auto;
        text-align: center;
        font-size: 16px;
        @media only screen and (max-width: 560px) {
            font-size: 10px;
            padding: 3px 5;
        }
        background: #03a9f4;
        color: #fff;
        &:after {
            position: absolute;
            width: 0;
            height: 0;
            left: 42%;
            bottom: -10px;
            content: '';
            border-style: solid;
            border-width: 10px 10px 0 10px;
            border-color: #03a9f4 transparent;
            @media only screen and (max-width: 560px) {
                bottom: -8px;
                left: 40%;
                border-width: 8px 8px 0 8px;
            }
        }
    }
    .border {
        display: block;
        width: 20%;
        height: 1px;
        position: relative;
        margin: 0 auto 30px;
        @media only screen and (max-width: 560px) {
            margin: 0 auto 10px;
        }
        background: #8C8989;
        &::after {
            position: absolute;
            top: 0;
            left: 30%;
            content: " ";
            width: 40%;
            height: 5px;
            margin-top: -2px;
            background: #03a9f4;
        }
    }
}
</style>
