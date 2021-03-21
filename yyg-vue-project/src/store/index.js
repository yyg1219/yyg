import Vue from 'vue'
import Vuex from 'vuex'

import common from './module/common.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储状态值
  },
  getters: {
    // 在store中定义getters（可以认为是store的计算属性）。Getters接收state作为其第一个函数
  },
  mutations: {
    // 状态值的改变方法,操作状态值
    // 提交mutations是更改Vuex状态的唯一方法
    // mutations 里面只能是同步方法
  },
  actions: {
    // Action 提交的是 mutation，而不是直接变更状态。
    // actions 里面可以有异步方法
    // Action 还是得通过 mutation 方法来修改state
    // 不同于mutations使用commit方法，actions使用dispatch方法。
  },
  modules: {
    // 模块化
    common
  }
})
