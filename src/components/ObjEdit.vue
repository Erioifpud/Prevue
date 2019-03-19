<template>
  <div class="obj-edit">
    <el-button @click="openDialog" type="primary" plain size="small">编辑</el-button>
    <obj-tree :obj="obj"></obj-tree>
  </div>
</template>

<script>
import ObjTree from '@/components/ObjTree.vue'
import MonacoEditor from 'vue-monaco'

export default {
  components: {
    ObjTree,
    MonacoEditor
  },
  model: {
    prop: 'obj',
    event: 'change'
  },
  data () {
    return {
      code: '',
      options: {
        automaticLayout: true
      }
    }
  },
  props: {
    obj: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    handleObjUpdate (val) {
      try {
        const obj = JSON.parse(val)
        this.$emit('change', obj)
      } catch (err) {
        // this.$notify.error({
        //   title: '出错啦',
        //   message: err.toString()
        // })
        this.$message({
          type: 'error',
          message: err.toString()
        })
      }
    },
    openDialog () {
      const vm = <monaco-editor v-model={this.code} language="json" theme="vs-dark" style="height: 10rem" options={this.options}></monaco-editor>
      setTimeout(() => {
        const instance = vm.componentInstance
        const monaco = instance && instance.getMonaco()
        monaco && monaco.getAction('editor.action.formatDocument').run()
      }, 0)

      this.$msgbox({
        title: 'JSON 编辑',
        message: vm,
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            this.handleObjUpdate(this.code)
          }
          done()
        }
      }).then(action => {

      }).catch(action => {
        this.$message({
          type: 'info',
          message: '已取消修改'
        })
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.code = JSON.stringify(this.obj)
    })
  }
}
</script>

<style>

</style>
