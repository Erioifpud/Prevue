<template>
  <el-container class="home">
    <el-aside>
      <component-sidebar></component-sidebar>
    </el-aside>
    <el-main>
      <component v-if="currentComponent" :is="currentComponent.instance" v-bind="props"></component>
      <template v-else>
        <div class="home__empty-tips">No component</div>
      </template>
    </el-main>
    <el-aside>
      <setting-sidebar></setting-sidebar>
    </el-aside>
  </el-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import ComponentSidebar from '@/components/ComponentSidebar.vue'
import SettingSidebar from '@/components/SettingSidebar.vue'

export default {
  name: 'home',
  components: {
    ComponentSidebar,
    SettingSidebar
  },
  computed: {
    ...mapGetters(['currentComponent']),
    ...mapState(['props'])
  }
}
</script>

<style lang="scss" scoped>
.home {
  &__empty-tips {
    text-align: center;
  }
}
</style>
