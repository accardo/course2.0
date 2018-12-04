const path = require('path')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname,dir);
}
  
module.exports = {
	// cli3 路径配置
    configureWebpack: config => {
				console.log(config, 'config');
        config
						.resolve({
								extensions: ['.js', '.vue', '.json',".css"],
								alias: {
										'vue$': 'vue/dist/vue.esm.js', // ES Module 完整版
										'@': resolve('src'),
								}
						})
						.plugins([
								new SkeletonWebpackPlugin({ // 骨架屏插件
									webpackConfig: {
										entry: {
											app: path.join(__dirname, './src/skeleton.js'),
										},
									},
									minimize: true,
									quiet: true,
								}),
						])
    },
}