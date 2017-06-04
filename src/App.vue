<template>
  <div id="app" ref="app">
    <v-Header :baseInfo="baseInfo">
      <!--<vue-particles color="#ffffff" :particleOpacity="0.7" linesColor="#ffffff" :particlesNumber="80" shapeType="circle" :particleSize="5" :linesWidth="2" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
      </vue-particles>-->
    </v-Header>
    <Tab></Tab>
    <router-view :skill="skill" :project="project"></router-view>
    <footer>
      <p id="footer">{{desc}}</p>
    </footer>
  </div>
</template>

<script>
import Header from './components/header/Header'
import Tab from './components/tab/Tab'
import data from './../data.json'
import BScroll from 'better-scroll'
export default {
  name: 'app',
  data() {
    return {
      baseInfo: {},
      skill:{},
      project:{},
      desc: '© 2017 Preface . All rights reserved | Design by Clark.'
    }
  },
  created() {
    this.baseInfo = data.baseInfo
    this.skill = data.skill
    this.project = data.project
  },
  mounted() {
    // this.$nextTick(() => {
    //   console.log(1)
    //   if (!this.scroll) {
    //     this.scroll = new BScroll(this.$refs.app, {
    //       click: true
    //     });
    //   } else {
    //     this.scroll.refresh();
    //   }
    // })

  },
  components: {
    'v-Header': Header,
    Tab
  }
}
</script>

<style lang="scss">
#app {}

#footer {
  line-height: 40px;
  height: 40px;
  text-align: center;
  font-size: 14px;
  background: #03a9f4;
  color: #fff;
  @media only screen and (max-width: 560px) {
    font-size: 10px;
  }
}
</style>
