<template>
  <el-row class="prop-sidebar">
    <setting-card title="Props"></setting-card>
  </el-row>
</template>

<script>
import SettingCard from '@/components/SettingCard.vue'

export default {
  components: {
    SettingCard
  }
}
</script>

<style lang="scss" scoped>
.prop-sidebar {
  height: 100%;
  padding: 1.25rem;
}
</style>
