<template>
  <div class="content">
    <div class="left">
      <Button type="primary"
              @click='handleClick'>
        登录
      </Button>
    </div>
    <div class="right">{{msg}}</div>
    <div class="center">3</div>
  </div>
</template>

<script>
export default {
  name: 'yygMain',
  data () {
    return {
      msg: 2
    }
  },
  methods: {
    handleClick () {
      // this.msg **= 3
      this.$router.push({ name: 'login' })
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
  .left {
    width: 300px;
    border: 1px solid #eee;
  }
  .right {
    width: 300px;
    border: 1px solid #eee;
  }
  .center {
    flex: 1;
    border: 1px solid #eee;
  }
}
</style>
