export default ({
  state: {
    pageHeight: '300'
  },
  getters: {
    getterHeightz (state) {
      return state.pageHeight - 100
    }
  },
  mutations: {
    setPageHeight (state, height) {
      console.log(state, height)
      state.pageHeight = height
    }
  },
  actions: {
    updatePageHegiht (context, height) {
      console.log(context)
      context.commit('setPageHeight', height)
    }
  },
  modules: {

  }
})
