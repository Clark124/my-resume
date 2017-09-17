<template>
  <div class="v_project" id="project">
    <div class="p_wrapper">
      <v-Title :title="title" :tip="tip"></v-Title>
      <ul>
        <li>
          <router-link to="/project/react">React & React Native</router-link>
        </li>
        <li>
          <router-link to="/project/vue">Vue</router-link>
        </li>
        <li>
          <router-link to="/project/node">Node</router-link>
        </li>
        <li>
          <router-link to="/project/bootstrap">Bootstrap</router-link>
        </li>
      </ul>
      <transition enter-active-class="animated zoomIn">
        <router-view :vuePro="project.vue" :nodePro="project.node" :reactPro="project.react" :bootstrapPro="project.bootstrap"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Title from '../title/Title'
export default {
  name: 'Project',
  props: ['project'],
  data() {
    return {
      title: '我的项目',
      tip: 'WHAT I DO'
    }
  },
  components: {
    'v-Title': Title
  }
}
</script>

<style scoped lang="scss">
.v_project {
  background: url('./bg-project.jpg') no-repeat center top;
  background-size: 100% 100%;
  background-color: #fff;
}

.p_wrapper {
  height: auto;
  width: 100%;
  margin: 0 auto;
  padding-top: 30px;
  @media only screen and (max-width: 560px) {
    padding-top: 10px;
  }
  ul {
    padding: 0 10%;
    background: #03a9f4;
    height: 40px;
    line-height: 40px;
    margin-bottom: 20px;
    color: #000;
    display: flex;
    li {
      flex: 1;
      text-align: center;
      font-size: 16px;
      a {
        color: #fff;
        &.active {
          color: #5cefac;
        }
      }
    }
  }
}
</style>

