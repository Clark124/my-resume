<template>
    <div id="tab">
        <div class="tab-item">
            <router-link to="/project">我的项目</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/skill">我的技能</router-link>
        </div>
        <!--<div class="tab-item">
            <router-link to="/experience">学历与工作</router-link>
        </div>-->
        <div class="tab-item">
            <router-link to="/about">自我简述</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/contact">联系我</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tab'
}
</script>

<style lang="scss" scoped>
    #tab{
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      .tab-item{
        flex: 1;
        text-align: center;
        background: #0d65b1;
        >a{
            display: block;
            font-size: 14px;
            color:#fff;
        }
        >.active{
            color: #5cefac;
        }
      }
    }
</style>
