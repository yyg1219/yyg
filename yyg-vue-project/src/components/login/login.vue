<template>
  <div class="content">
    {{msg}}
    <Button type="primary"
            @click='handleClick'>
      返回首页
    </Button>
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
    console.log(this.$route)
  },
  methods: {
    handleClick () {
      // this.$router.replace({ name: 'home' })
      this.axios.post({})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.content {
  display: flex;
  height: 500px;
}
</style>
