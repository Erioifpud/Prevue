<template>
  <el-menu
    default-active="2"
    class="component-sidebar"
    @select="handleSelect"
  >
    <el-menu-item v-for="(c, i) in components" :key="c.key" :index="i.toString()">
      <i class="el-icon-setting"></i>
      <span slot="title">{{ c.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState([
      'components'
    ])
  },
  methods: {
    ...mapMutations(['setCurrent']),
    handleSelect (index, arr, vm) {
      this.setCurrent(vm.$vnode.key)
    }
  }
}
</script>

<style lang="scss" scoped>
.component-sidebar {
  height: 100%;
}
</style>
