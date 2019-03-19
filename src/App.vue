<template>
  <div id="app">
    <el-container>
      <el-header>
        <topbar></topbar>
      </el-header>
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'

export default {
  name: 'app',
  components: {
    Topbar
  },
  data () {
    return {
      components: []
    }
  },
  methods: {

  },
  created () {
    const component = require.context('@/components/preview', false, /\.vue$/)
    const requireAll = context => context.keys().map(item => {
      const instance = context(item).default
      console.log(instance)
      const path = instance.__file
      const filename = path.slice(path.lastIndexOf('/') + 1, path.length)
      const title = instance.name || filename
      return {
        key: Symbol(title),
        title,
        instance
      }
    })
    this.$store.commit('setComponents', requireAll(component))
  }
}
</script>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

html,
body {
  margin: 0;
  height: 100%;
}

.el-header,
.el-footer {
  color: #333;
  // line-height: 60px
}

.el-header {
  z-index: 1010;
}

.el-aside {
  color: #333;
  // line-height: 200px
}

.el-main {
  color: #333;
  // line-height: 160px
}

.el-container {
  height: 100%;
}
</style>
