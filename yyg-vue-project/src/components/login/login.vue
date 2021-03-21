<template>
  <div class="contain"
       :style="{height: `${clientHeight}px`}">
    <div class="inner">
      {{msg}}
      <Button type="primary"
              @click='handleClick'>
        返回首页
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: '我是登录页面'
    }
  },
  mounted () {
    // console.log(this.$route)
  },
  computed: {
    clientHeight () {
      return this.$store.state.common.pageHeight
    }
  },
  methods: {
    handleClick () {
      this.$router.replace({ name: 'home' })
      // this.axios.post({})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.contain {
  border: 1px solid #eee;
  // position: relative;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  .inner {
    // flex: 0 1 auto;
    border: 1px solid #eee;
    // position: absolute;
    width: 300px;
    height: 300px;

    // left: 0;
    // right: 0;
    // top: 0;
    // bottom: 0;
    // margin: auto;

    // left: calc(50% - 50px);
    // top: calc(50% - 50px);
  }
}
</style>
