<template>
  <el-container>
    <el-aside>
      <component-sidebar></component-sidebar>
    </el-aside>
    <el-main>Main</el-main>
    <el-aside>
      <setting-sidebar></setting-sidebar>
    </el-aside>
  </el-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import ComponentSidebar from '@/components/ComponentSidebar.vue'
import SettingSidebar from '@/components/SettingSidebar.vue'

export default {
  name: 'home',
  components: {
    ComponentSidebar,
    SettingSidebar
  }
}
</script>

<style lang="scss" scoped>
</style>
