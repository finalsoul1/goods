const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addWebpackAlias,
  overrideDevServer,
  watchAll
} = require('customize-cra')

const path = require('path')

module.exports = {
  webpack: override(
    disableEsLint(),
    addDecoratorsLegacy(),
    addWebpackAlias({
      ['components']: path.resolve(__dirname, 'src/components'),
      ['store']: path.resolve(__dirname, 'src/store'),
      ['pages']: path.resolve(__dirname, 'src/pages'),
      ['utils']: path.resolve(__dirname, 'src/utils'),
      ['organisms']: path.resolve(__dirname, 'src/components/organisms'),
      ['style']: path.resolve(__dirname, 'src/style')
    })
  ),
  devServer: overrideDevServer(
    watchAll()
  )
}
