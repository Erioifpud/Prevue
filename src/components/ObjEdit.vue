<template>
  <div class="obj-edit">
    <el-button type="primary" plain size="small">编辑</el-button>
    <obj-tree :obj="obj"></obj-tree>
  </div>
</template>

<script>
import ObjTree from '@/components/ObjTree.vue'

export default {
  components: {
    ObjTree
  },
  model: {
    prop: 'obj',
    event: 'handleObjUpdate'
  },
  data () {
    return {}
  },
  props: {
    obj: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style>

</style>
