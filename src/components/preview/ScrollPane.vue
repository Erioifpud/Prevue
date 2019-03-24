<template>
  <div class="scroll-pane" v-scroll="handleScroll" v-touch:up="nextPage" v-touch:down="prevPage">
    <div class="scroll-pane__wrapper" :style="translateY">
      <div class="scroll-pane__item scroll-pane__item--red">1</div>
      <div class="scroll-pane__item scroll-pane__item--yellow">2</div>
      <div class="scroll-pane__item scroll-pane__item--blue">3</div>
    </div>
  </div>
</template>

<script>
import scroll from '@/directives/scroll'
import { instantDebounce } from '@/utils.js'

export default {
  directives: {
    scroll
  },
  data () {
    return {
      index: 0
    }
  },
  computed: {
    translateY () {
      return `transform: translateY(-${this.index}00%)`
    }
  },
  methods: {
    nextPage () {
      const count = this.count // || getChildrenCount
      if (!count) {
        return
      }
      if (this.index < count - 1) {
        this.index++
      } else {
        this.$emit('onTop')
      }
    },
    prevPage () {
      const count = this.count // || getChildrenCount
      if (!count) {
        return
      }
      if (this.index > 0) {
        this.index--
      } else {
        this.$emit('onBottom')
      }
    }
  },
  props: {
    count: {
      type: Number,
      default: 3
    }
  },
  created () {
    this.handleScroll = instantDebounce((e) => {
      if (e === 'down') {
        this.nextPage()
      } else if (e === 'up') {
        this.prevPage()
      }
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.scroll-pane {
  height: 100%;
  overflow: hidden;

  &__wrapper {
    display: flex;
    height: 100%;
    flex-direction: column;


    transition: transform 0.3s ease-in-out;
  }

  &__item {
    flex-shrink: 0;
    height: 100%;

    &--red {
      background-color: #F56C6C;
    }

    &--yellow {
      background-color: #E6A23C;
    }

    &--blue {
      background-color: #409EFF;
    }
  }
}
</style>
