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
        <prop-item v-for="setting in settings"
          :key="setting.name"
          :title="setting.name"
          :type="setting.type"
          :options="{ required: false }"
          :form="form"
        ></prop-item>
      </el-form>
    </template>
  </el-card>
</template>

<script>
import { mapMutations } from 'vuex'
import PropItem from '@/components/PropItem'

export default {
  components: {
    PropItem
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
      type: Array
    }
  },
  methods: {
    ...mapMutations(['setSlots']),
    // initializeVal ({ type, default: defaultVal }) {
    //   const val = typeof defaultVal === 'function' ? defaultVal() : defaultVal
    //   switch (type) {
    //     case String:
    //       return val || ''
    //     case Number:
    //       return val || 0
    //     case Boolean:
    //       return val || false
    //     case Date:
    //       return val || new Date()
    //     case Function:
    //       return val || (() => {})
    //     case Object:
    //       return val || {}
    //     default:
    //       return undefined
    //   }
    // },
    initializeForm () {
      this.form = {}
      console.log(this.settings)
      for (const setting of this.settings) {
        const { name } = setting
        this.$set(this.form, name, '')
      }
    }
  },
  computed: {
    settings () {
      return (this.data || []).map(item => {
        return {
          name: item,
          type: String.name
        }
      })
    }
  },
  watch: {
    form: {
      handler (val) {
        this.setSlots(val)
      },
      deep: true
    }
  },
  mounted () {
    this.initializeForm()
    this.$eventBus.$on('componentChanged', (val) => {
      this.$nextTick(() => {
        this.initializeForm()
      })
    })
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
