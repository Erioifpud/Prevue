import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current: undefined,
    components: [],
    props: {},
    slots: {},
    showSettingBar: true
  },
  mutations: {
    setComponents (state, components) {
      state.components = components
    },
    setCurrent (state, key) {
      state.current = key
    },
    setProps (state, props) {
      state.props = props
    },
    setSlots (state, slots) {
      state.slots = slots
    },
    setSettingBarState (state, status) {
      state.showSettingBar = status
    }
  },
  getters: {
    currentComponent (state) {
      const cur = state.current
      const component = state.components.find(c => c.key === cur)
      return cur ? component : undefined
    }
  },
  actions: {

  }
})
