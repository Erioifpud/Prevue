<template>
  <el-card class="box-card" :style="{ opacity: data ? 1 : 0.5 }">
    <div slot="header" class="clearfix">
      <span>{{ title }}</span>
      <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
    </div>
    <div class="box-card__empty-tips" v-if="!data">
      Empty
    </div>
    <template v-else>
      <el-form>
        <setting-item v-for="setting in settings"
          :key="setting.prop"
          :title="setting.prop"
          :type="setting.type"
          :options="setting.options"
          :form="form"
        ></setting-item>
      </el-form>
    </template>
  </el-card>
</template>

<script>
import { mapMutations } from 'vuex'
import SettingItem from '@/components/SettingItem'

export default {
  components: {
    SettingItem
  },
  data () {
    return {
      form: {}
    }
  },
  props: {
    title: {
      required: true,
      type: String
    },
    // extraButton: {
    //   type: Object
    // }
    data: {
      type: Object
    }
  },
  methods: {
    ...mapMutations(['setProps']),
    initializeVal ({ type, default: defaultVal }) {
      const val = typeof defaultVal === 'function' ? defaultVal() : defaultVal
      switch (type) {
        case String:
          return val || ''
        case Number:
          return val || 0
        case Boolean:
          return val || false
        case Date:
          return val || new Date()
        case Function:
          return val || (() => {})
        case Object:
          return val || {}
        default:
          return undefined
      }
    }
  },
  computed: {
    settings () {
      return Object.entries(this.data || {}).map(pair => {
        const [prop, val] = pair
        return {
          prop,
          type: val.type ? val.type.name : 'null/undefined',
          options: val
        }
      })
    }
  },
  watch: {
    form: {
      handler (val) {
        this.setProps(val)
      },
      deep: true
    }
  },
  mounted () {
    for (const setting of this.settings) {
      const { prop, options } = setting
      // this.form[prop] = this.initializeVal(options)
      this.$set(this.form, prop, this.initializeVal(options))
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  margin-bottom: 1.25rem;

  &__empty-tips {
    text-align: center;
  }
}
</style>
