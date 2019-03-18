<template>
  <li class='tree__wrapped'>
    <div @click='toggleOpen' class='tree__name' :class='{tree__directory: isContainer, tree__directory_open: isOpen}'>
      {{ isRoot ? model.name : data.name }}
      <span v-if="!isContainer" class='tree__value'>
        {{ isRoot ? model.value : data.value }}
      </span>
    </div>
    <ul v-if='isContainer' v-show='isOpen' class='tree'>
      <tree-wrapped
        v-for='(node, index) in (isRoot ? model.value : data.value)'
        :data='node'
        :key='node.name || index'
      />
    </ul>
  </li>
</template>

<script>
export default {
  name: 'TreeWrapped',
  data () {
    return {
      isOpen: false
    }
  },
  props: {
    obj: {
      type: Object,
      default: undefined
    },
    data: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    isContainer () {
      const data = this.isRoot ? this.model : this.data
      return data.value && data.value instanceof Array
    },
    model () {
      return this.wrap(this.obj)
    },
    isRoot () {
      return this.obj && !this.data
    }
  },
  methods: {
    toggleOpen () {
      if (this.isContainer) {
        this.isOpen = !this.isOpen
      }
    },
    /**
     * 将对象转换成{ name: String, value: Object | Array }的形式
     */
    objToModel (obj) {
      return Object.entries(obj).map(([key, val]) => {
        const isObject = Object.prototype.toString.call(val) === '[object Object]'
        return {
          name: key,
          value: isObject ? this.objToModel(val) : val
        }
      })
    },
    /**
     * 将{ name: String, value: Object | Array }结构转换为对象
     */
    modelToObj (model) {
      return model.reduce((a, b) => {
        const { name, value } = b
        const isArray = Object.prototype.toString.call(value) === '[object Array]'
        return {
          ...a,
          [name]: isArray ? this.modelToObj(value) : value
        }
      }, {})
    },
    /**
     * 将对象转换成带根结构的Model
     */
    wrap (obj) {
      return {
        name: 'Object',
        value: this.objToModel(obj)
      }
    },
    /**
     * 去除Model的根结构，并转换成对象
     */
    unwrap (model) {
      return this.modelToObj(model.value)
    }
  }
}
</script>

<style lang="scss" scoped>
$main-color: #589ef8;

.tree{
  padding-left: 0.8rem;
  list-style: none;
  margin-left: 0.5rem;
  margin: 0.2rem 0;

  &:not(:first-child) {
    border-left: 1px dotted lighten($main-color, 15%);
  }

  &__wrapped {
    line-height: 1rem;
    margin: 0;
    list-style: none;
  }

  &__name {
    display: inline-block;
  }

  &__directory {
    font-weight: 700;
  }

  &__directory_open {
    color: $main-color;
  }

  &__value {
    font-size: 0.8rem;
    // vertical-align: sub;
  }
}
</style>
