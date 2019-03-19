<template>
  <div>
    <h1>{{ content }}</h1>
    <h1>{{ num }}</h1>
    <h1>{{ date }}</h1>
    <h1>{{ bool }}</h1>
  </div>
</template>

<script>
export default {
  name: 'PropTest',
  props: {
    content: {
      type: String,
      default: 'Hello world'
    },
    num: {
      type: Number
    },
    obj: {
      type: Object,
      default () {
        return {
          name: 'abcd',
          age: 1234
        }
      }
    },
    bool: Boolean,
    func: Function,
    sym: Symbol,
    date: Date,
    list: Array
  }
}
</script>

<style>

</style>
