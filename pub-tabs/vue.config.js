const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// module.exports = {
//   chainWebpack: (config) => {
//     config.plugin('define').tap((definitions) => {
//       definitions[0]['__VUE_OPTIONS_API__'] = 'true'; // Or 'false'
//       definitions[0]['__VUE_PROD_DEVTOOLS__'] = 'false'; // Set to 'true' for debugging production
//       definitions[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = 'false'; // Set to 'true' for detailed hydration mismatch warnings in production
//       return definitions;
//     });
//   },
// };