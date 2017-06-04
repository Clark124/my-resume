<template>

    <div class="v_about_wrapper" id="about">
      <div class="v_about">
        <v-Title :title="title" :tip="tip"></v-Title>
        <div class="a_info">
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
              <p>为前端痴狂的coder</p>
              <p>热爱前端开发</p>
              <p>I am The One!!</p>
            </swiper-slide>
            <swiper-slide>
              <p>追求代码的简洁易读</p>
              <p>善于学习并解决问题</p>
              <p>对新技术好奇但理智</p>
            </swiper-slide>
            <swiper-slide>
              <p>注重效率，偏爱敏捷开发</p>
              <p>前端即兴趣，兴趣即未来</p>
              <p>行路有良友，便是捷径</p>
              <p>带上我吧，一起看到更大的世界</p>
  
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <!--<div class="swiper-button-prev" slot="button-prev"></div>
             <div class="swiper-button-next" slot="button-next"></div>-->
            <!--<div class="swiper-scrollbar"   slot="scrollbar"></div> -->
          </swiper>
        </div>
      </div>
    </div>

</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Title from '../title/Title'
export default {
  name: 'v_about',
  data() {
    return {
      title: '自我简述',
      tip: 'WHO AM I',
      swiperOption: {
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: 4000,
        direction: 'horizontal',
        grabCursor: true,
        loop: true,
        // setWrapperSize: true,
        // autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // prevButton: '.swiper-button-prev',
        // nextButton: '.swiper-button-next',
        // scrollbar: '.swiper-scrollbar',
        // mousewheelControl: true,
        // observeParents: true,

      }
    }
  },
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {

  },
  mounted: function () {

  },
  components: {
    swiper,
    swiperSlide,
    'v-Title': Title
  }
}
</script>


<style lang="scss" scoped>
.v_about_wrapper {
 
}

.v_about {
  background: url('./bg1.jpg') no-repeat; 
  background-size:100% 100%;
  height: auto;
  width: 100%;
  margin: 0 auto;
  padding-top: 30px;
  @media only screen and (max-width: 560px) {
    padding-top: 10px;
  }
}

.a_info {
  font-size: 20px;
  text-align: center;
  padding-bottom: 20px;
}

.swiper-container {
  width: 100%;
  height: 330px;
  overflow: hidden;
  text-align: center;
}

.swiper-slide {
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 60px;
}

.swiper-container-horizontal>.swiper-pagination-bullets {
  bottom: 0;
}
</style>
