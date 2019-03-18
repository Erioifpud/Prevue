<template>
  <el-form-item :label="title" :required="options.required" class="setting-item">
    <el-input v-if="type === 'String'" v-model="form[title]"></el-input>
    <el-input-number v-else-if="type === 'Number'" :precision="2" v-model="form[title]"></el-input-number>
    <el-switch v-else-if="type === 'Boolean'" v-model="form[title]"></el-switch>
    <el-date-picker v-else-if="type === 'Date'" type="datetime" placeholder="选择日期时间" v-model="form[title]"></el-date-picker>
    <el-tag v-else type="info">{{ type }} 暂不支持</el-tag>
  </el-form-item>
</template>

<script>
export default {
  props: {
    title: String,
    type: {
      type: String,
      required: true
    },
    form: Object,
    options: Object
  }
}
</script>

<style lang="scss" scoped>
.setting-item {
  &__data {
    display: block;
  }
}
</style>
