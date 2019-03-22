<template>
  <div>
    <p>
      Default:
      <slot></slot>
    </p>
    <p>
      Another:
      <slot name="another"></slot>
      {{content}}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    // previewSlots () {
    //   return {
    //     default: '123',
    //     another: 'abc'
    //   }
    // }
  },
  props: {
    content: String
  },
  previewSlots: ['default', 'another']
}
</script>

<style>

</style>
