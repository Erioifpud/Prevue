<template>
  <el-row class="prop-sidebar">
    <setting-card title="Props" v-if="currentInstance" :data="currentInstance.props"></setting-card>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import SettingCard from '@/components/SettingCard.vue'

export default {
  components: {
    SettingCard
  },
  computed: {
    ...mapGetters(['currentComponent']),
    currentInstance () {
      return this.currentComponent && this.currentComponent.instance
    }
  }
}
</script>

<style lang="scss" scoped>
.prop-sidebar {
  height: 100%;
  padding: 1.25rem;
}
</style>
