<template>
  <div class="v_footer" id="contract">
    <div class="footer_wrapper">
      <v-Title :title="title" :tip="tip"></v-Title>
      <div class="footer_content">
        <img src="./weixin.png">
        <div class="font">
          <a href="https://github.com/Clark124" target="_blank"><i class="iconfont icon-github"></i></a>
          <a href="http://www.jianshu.com/u/ed4670590fc8" target="_blank"><i class="iconfont icon-shu"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../title/Title'
export default {
  name: 'Contact',
  data() {
    return {
      title: '联系我',
      tip: 'HOW To Find'
    }
  },
  mounted: function () {
    // console.log(123)
  },
  components: {
    'v-Title': Title
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.v_footer {
  width: 100%;
  margin: 0 auto;
  background-color: #333333;
  background: url('./bg-contact.jpg') no-repeat center top;
  background-size: cover;
  padding: 50px 0;
  @media only screen and (max-width: 560px) {
    padding: 10px 0;
  }
}

.footer_wrapper {
  width: 100%;
  margin: 0 auto;
}

.footer_content {
  padding: 10px;
  width: 45%;
  margin: 0 auto;
  background: #f5f5f5;
  border-radius: 3px;
  text-align: center;
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.footer_content img {
  display: block;
  width: 40%;
  margin: 0 auto;
}
.footer_content .font{
  margin-top: 10px;
  padding: 10px;
  border-top: 1px solid #ccc;
  .icon-github{
    display: inline-block;
    vertical-align: top;
    font-size: 35px;
    color: #333333;
    transition: all .8s;
    &:hover{
      color: red;
    }
  }
  .icon-shu{
    vertical-align: top;
    display: inline-block;
    font-size: 38px;
    margin-left: 10px;
    color: #333333;
    transition: all .8s;
    &:hover{
      color: green;
    }
  }
}

</style>
