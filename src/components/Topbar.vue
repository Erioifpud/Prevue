<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item>Prevue</el-menu-item>
    <el-menu-item v-for="r in routeInfos" :key="r.path" :index="r.path" :route="r.path">
      {{ r.title }}
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: this.$route.path
    }
  },
  computed: {
    routeInfos () {
      return this.$router.options.routes.map(r => {
        const title = r.meta && r.meta.title
        return {
          path: r.path,
          title: title || r.name
        }
      })
    }
  }
}
</script>

<style>
</style>
