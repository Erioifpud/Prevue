<template>
  <div>
    <p>
      Default:
      <slot></slot>
    </p>
    <p>
      Another:
      <slot name="another"></slot>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    previewSlots () {
      return {
        default: '123',
        another: 'abc'
      }
    }
  }
}
</script>

<style>

</style>
