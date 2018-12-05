const path = require('path')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname,dir);
}
  
module.exports = {
	// cli3 路径配置
    configureWebpack: config => {
				console.log(config.plugins, 'config');
				config.resolve = {
						extensions: ['.js', '.vue', '.json',".css"],
						alias: {
								'vue$': 'vue/dist/vue.esm.js', // ES Module 完整版
								'@': resolve('src'),
						}
				};
				let plugins = [
						new SkeletonWebpackPlugin({ // 骨架屏插件
								webpackConfig: {
										entry: {
											app: path.join(__dirname, './src/entry-skeleton.js'),
										},
								},
								minimize: true,
								quiet: true,
								router: {
									mode: 'history',
									routes: [
										{
											path: '/index',
											skeletonId: 'indexList'
										},
										{
											path: '/inner',
											skeletonId: 'innerList'
										},
									]
								}
						})
				]
				config.plugins = [...config.plugins, ...plugins];
    },
}