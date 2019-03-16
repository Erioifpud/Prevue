<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ title }}</span>
      <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
    </div>
    <el-button>123</el-button>
    <el-button>123</el-button>
    <el-button>123</el-button>
  </el-card>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    // extraButton: {
    //   type: Object
    // }
    settings: {
      type: Object,
      validator (val) {
        return true
      }
    }
  }
}
</script>

<style>
</style>
