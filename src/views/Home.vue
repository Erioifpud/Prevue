<template>
  <el-container class="home">
    <el-aside>
      <component-sidebar></component-sidebar>
    </el-aside>
    <el-main>
      <component ref="component" v-if="currentComponent" :is="instance" v-bind="props">
        <template v-for="slot in Object.entries(previewSlots || {})" v-slot:[slot[0]]>
          <!-- 暂时只支持string类型的slot内容 -->
          <template v-if="typeof slot[1] === 'string'">
            {{ slot[1] }}
          </template>
        </template>
      </component>
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
    ...mapState(['props']),
    instance () {
      return this.currentComponent.instance
    },
    previewSlots () {
      return this.instance.computed && this.instance.computed.previewSlots.call(this)
    }
  }
  // watch: {
  //   currentComponent (newVal) {
  //     this.$nextTick(() => {
  //       const component = this.$refs.component
  //       if (this.previewSlots && component) {
  //         for (const [name, content] of Object.entries(this.previewSlots)) {
  //           if (typeof content !== 'string') {
  //             component.$slots[name] = [content]
  //           }
  //         }
  //       }
  //     })
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.home {
  &__empty-tips {
    text-align: center;
  }
}
</style>
