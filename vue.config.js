const MonocoEditorPlugin = require('monaco-editor-webpack-plugin')
// const SlotLoader = require.resolve('./loaders/slot-loader.js')

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new MonocoEditorPlugin({
        language: ['json'],
        features: ['coreCommands', 'format']
      })
    ]
    // module: {
    //   rules: [{
    //     resourceQuery: /blockType=docs/,
    //     loader: require.resolve('./loaders/slot-loader.js')
    //   }]
    // }
  }
  // runtimeCompiler: true
}
