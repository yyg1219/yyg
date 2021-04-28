<template>
  <div class="content"
       :style="{height: `${clientHeight}px`}">
    <div class="left">
      <el-button type="primary"
                 @click='handleClick'>
        登录
      </el-button>
    </div>
    <div class="center">
      高度：<Input v-model="height"
             style="width: 300px"
             @on-change='changeHeight'></Input>

      <el-collapse v-model="activeNames">
        <el-collapse-item title="一致性 Consistency"
                          name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="反馈 Feedback"
                          name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency"
                          name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="可控 Controllability"
                          name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: 'yygMain',
  data () {
    return {
      height: 0,
      banned: false,
      activeNames: '1'
    }
  },
  computed: {
    clientHeight () {
      return this.$store.state.common.pageHeight
    }
  },
  methods: {
    handleClick () {
      // this.$router.push({ name: 'login' })
      /* this.throttle(() => {
        console.log('执行')
      }, 1000) */
    },
    // 测试工厂模式
    addFactory () {

    },
    // 实现new
    createNew () {

    },
    // 实现深拷贝
    cloneDeep (source) {
      // if (!isObject(source)) return source // 非对象返回自身

      // let target = Array.isArray(source) ? [] : {}
      // for (let key in source) {

      // }
    },
    changeHeight () {
      // this.$store.dispatch('updatePageHegiht', this.height)
    },
    // 防抖 触发高频事件 n秒后函数只会执行一次，
    // 如果 n 秒内高频事件再次被触发，则重新计算时间
    debounce (fn, delay) {
      let timeOut = null // 创建一个标记用来存放定时器的返回值
      return function () {
        clearTimeout(timeOut) // 每次触发防抖函数时 把前一个setTimeout 清掉
        // 然后创建一个新的setTimeout
        // 这样就能保证触发事件后的delay间隔内又再次触发的话，不会执行fn函数
        timeOut = setTimeout(() => {
          fn.apply(this, arguments)
        }, delay)
      }
    },
    // 节流 触发事件后 n秒内只会执行一次，
    // 所以节流会稀释函数的执行频率
    throttle (fn, interval) {
      // 时间戳写法 第一次立即执行
      /* let last = 0
      return () => {
        let now = Date().now
        console.log(now)
        if (now - last >= interval) {
          last = now
          fn.apply(this, arguments)
        }
      } */

      // 标记写法，第一次不会立即执行
      let canRun = true // 通过闭包创建一个标记
      return function () {
        // 如果canRUn不为true  则return
        if (!canRun) return
        canRun = false
        setTimeout(() => {
          fn.apply(this, arguments)
          canRun = true
        }, interval)
      }
    },
    // 手写 Promise.all
    // 1. Promise.all() 返回的是一个Promise
    // 2. Promise.all(argArr) 的参数是一个数组，这个数组的每一项，可能会是Promise，也可能会是其他类型，比如Number等
    // 3. Promise.all() 返回的执行结果的数组，是按参数的顺序返回的
    // 4. 应怎样判断所有Promise都执行完毕了？ 注意：对于一个空数组  如果直接 arr[6] = '1232' 则 arr.length = 7
    promiseAll (promiseArray) {
      return new Promise((resolve, reject) => {
        if (!Array.isArray(promiseArray)) return reject(new Error('传入的参数必须是数组'))

        const resArray = []
        const promiseNums = this.promiseArray.length
        let counter = 0
        for (let i = 0; i < promiseNums; i++) {
          Promise.resolve(promiseArray[i]).then(res => {
            counter++
            resArray[i] = res
            if (counter === promiseNums) {
              resolve(resArray)
            }
          }).catch(e => reject(e))
        }
      })
    }
  },
  mounted () {
    console.log(this.$store)
    this.$store.commit('setPageHeight', window.innerHeight - 100)
    window.addEventListener('click', (e) => {
      if (this.banned) {
        e.stopPropagation()
        this.$Message.warning('已禁止捕获')
      }
    }, true)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.content {
  display: flex;
  border: 1px solid #fee;
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

  // height: 600px;
  // .left {
  //   float: left;
  //   width: 300px;
  //   border: 1px solid #eee;
  //   height: 100%;
  // }
  // .right {
  //   float: right;
  //   width: 300px;
  //   border: 1px solid #eee;
  //   height: 100%;
  // }
  // .center {
  //   margin: auto 300px;
  //  border: 1px solid #eee;
  //   height: 100%;
  // }
}
</style>
