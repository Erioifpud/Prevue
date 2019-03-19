const MonocoEditorPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new MonocoEditorPlugin({
        language: ['json'],
        features: ['coreCommands', 'format']
      })
    ]
  }
  // runtimeCompiler: true
}
