<template>
  <div class="v_footer" id="contract">
    <div class="footer_wrapper">
      <v-Title :title="title" :tip="tip"></v-Title>
      <div class="footer_content">
        <img src="./weixin.png">
        <dl>
          <dt>Contact By Email</dt>
          <dd>
            <a href="#">53799906@qq.com</a>
          </dd>
        </dl>
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

.footer_content dl {
  border-top: 1px solid rgb(214, 212, 212);
  position: relative;
  padding-bottom: 5px;
  margin-top: 10px;
}

.footer_content dl:after {
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translate(-50%);
  content: "";
  width: 20px;
  height: 20px;
  background: url('./email.png') no-repeat;
  background-size: 100% auto;
}

.footer_content dt {
  font-size: 14px;
  margin: 25px 0 14px;
}

.footer_content dd {
  font-size: 14px;
  color: #999;
  margin-top: 14px;
}

.footer_content dd a {
  font-size: 14px;
  color: #00a78e;
}
</style>
