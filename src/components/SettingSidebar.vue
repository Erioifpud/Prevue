<template>
  <el-row class="prop-sidebar">
    <prop-card title="Props" v-if="currentInstance && currentInstance.props" :data="currentInstance.props"></prop-card>
    <slot-card title="Slots" v-if="currentInstance && currentInstance.previewSlots" :data="currentInstance.previewSlots"></slot-card>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import PropCard from '@/components/PropCard.vue'
import SlotCard from '@/components/SlotCard.vue'

export default {
  components: {
    PropCard,
    SlotCard
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
