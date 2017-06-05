<template>
  <div class="node-pro">
    <ul class="node-wrapper container">
      <li class="col-sm-2 empty"></li>
      <li class="item-wrapper col-sm-4" v-for="(item,index) in nodePro">
        <div class="item">
          <h1 class="title">{{item.title}}</h1>
          <div class="desc">
            <p v-for="desc in item.desc"> {{desc}}</p>
            <div class="img">
              <p>{{item.imgTitle}}</p>
              <img :src="item.img" alt="">
            </div>
          </div>
          <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
            <div class="tech" v-show="tech === index" @click="hideTech(index)">
              <p v-for="tech in item.tech"> {{tech}}</p>
            </div>
          </transition>
          <ul class="btn-wrapper">
            <li>
              <a class="btn btn-1" @click="showTech(index)">技术栈</a>
            </li>
            <li>
              <a class="btn btn-2" :href="item.src" target="_blank">LiveDome</a>
            </li>
          </ul>
        </div>
      </li>
      <li class="col-sm-2 empty"></li>
    </ul>
  
  </div>
</template>
<script>
export default {
  name: 'Node',
  props: ['nodePro'],
  data() {
    return {
      tech: -1
    }
  },
  methods: {
    showTech(index) {
      this.tech = index
    },
    hideTech(index) {
      this.tech = -1
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/column.scss';
.node-pro {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 20px;
}

.node-wrapper {
  .empty {
    height: 1px;
  }
  .item-wrapper {
    padding: 0 20px;
    .item {
      position: relative;
      height: 400px;
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
        border-bottom: 3px solid #03a9f4;
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
      .btn-wrapper {
        position: absolute;
        left: 0;
        bottom: 35px;
        display: flex;
        width: 100%;

        height: 30px;
        li {
          flex: 1;
          .btn {
            display: inline-block;
            font-size: 14px;
            color: #fff;
            cursor: pointer;
            padding: 5px 10px;
            background: #ef4d4d;
            border-radius: 4px;
            box-shadow: 0 3px 0 0 #ab3434;
            width: 87px;
            &.btn-2 {
              background: #18a924;
              box-shadow: 0 3px 0 0 #3d7d54;
            }
          }
        }
      }
      .desc {
        height: 250px;
        overflow: auto;
        line-height: 24px;
        text-align: left;
        font-size: 16px;
        color: #666;
        .img {
          text-align: center;
          p {
            color: #b75a5a;
            font-weight: bold;
          }
        }
      }
      .tech {
        position: absolute;
        z-index: 100;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
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

