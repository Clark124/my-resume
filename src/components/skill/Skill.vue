<template>
  <div id="skill" class="skill">
    <v-Title :title="title" :tip="tip"></v-Title>
    <ul class="skill-wrapper container">
      <li class="item-wrapper col-sm-3" v-for="(item,index) in skill">
        <div class="item">
          <h1 class="title">{{item.title}}</h1>
          <p class="content" v-for="info in item.info">
            <span>{{info}}</span>
          </p>
          <button class="btn" @click="showDesc(index)">描述</button>
          <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
            <div class="desc" v-show="show===index" @click="hideDesc(index)">
              <p v-for="desc in item.desc"> {{desc}}</p>
            </div>
          </transition>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Title from '../title/Title'
export default {
  name: "Project",
  props: ['skill'],
  data() {
    return {
      title: '我的技能',
      tip: 'WHAT CAN I',
      show: -1
    }
  },
  computed: {

  },
  created() {

  },
  methods: {
    showDesc(index) {
      this.show = index;
    },
    hideDesc(index) {
      this.show = -1;
    }
  },
  components: {
    'v-Title': Title
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/column.scss';
.skill {
  width: 100%;
  margin: 0 auto;
  background-color: #333333;
  background: url('./bg3.png') no-repeat center top;
  background-size: cover;
  padding: 50px 0;
  @media only screen and (max-width: 560px) {
    padding: 10px 0;
  }
}

.skill-wrapper {
  .item-wrapper {
    padding: 0 10px;
    .item {
      position: relative;
      height: 360px;
      padding: 20px 30px;
      margin-top: 20px;
      border-radius: 3px;
      box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.35);
      background: #efefef;
      border: 1px solid #efefef;
      text-align: center;
      .title {
        font-size: 20px;
        padding-bottom: 20px;
        border-bottom: 3px solid red;
        margin-bottom: 10px;
        font-weight: bold;
      }
      .content {
        text-align: center;
        margin-bottom: 10px;
        line-height: 40px;
        span {
          padding: 10px 15px;
          font-size: 16px;
          border-radius: 5px;
          background: rgba(255, 154, 0, 0.4);
          font-family: 'Overlock', cursive;
        }
      }
      .btn {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        bottom: 5px;
        padding: 3px 10px;
        border-radius: 3px;
      }
      .desc {
        position: absolute;
        z-index: 100;
        top: 0;
        left: 0;
        bottom: 0;
        overflow: auto;
        padding: 20px;
        text-align: left;
        background: rgba(7, 17, 27, 0.8);
        -webkit-backdrop-filter: blur(10px);
        color: #fff;
        p {
          line-height: 30px;
        }
      }
    }
  }
}


</style>