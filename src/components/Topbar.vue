<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
  >
    <el-menu-item>Prevue</el-menu-item>
    <el-menu-item v-for="r in routeInfos" :key="r.path" :index="r.path" :route="r.path">
      {{ r.title }}
    </el-menu-item>
    <el-menu-item>
      显示设置栏
      <el-switch :value="showSettingBar" @change="setSettingBarState">123</el-switch>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      activeIndex: this.$route.path
    }
  },
  computed: {
    ...mapState(['showSettingBar']),
    routeInfos () {
      return this.$router.options.routes.map(r => {
        const title = r.meta && r.meta.title
        return {
          path: r.path,
          title: title || r.name
        }
      })
    }
  },
  methods: {
    ...mapMutations(['setSettingBarState'])
  }
}
</script>

<style lang="scss" scoped>
.topbar {
  &__spacer {
    display: inline-block;
    flex-grow: 10;
  }
}
</style>
