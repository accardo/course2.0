const path = require('path')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname,dir);
}
module.exports = {
    // cli3 路径配置
		baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
		//baseUrl: './',
		assetsDir: 'static',
		//outputDir: path.resolve(__dirname, 'dist'),
		productionSourceMap: true,
		parallel: true,
		lintOnSave: true,
		configureWebpack: config => {
				config.resolve = {
						extensions: ['.js', '.vue', '.json',".css"],
						alias: {
								'vue$': 'vue/dist/vue.esm.js', // ES Module 完整版
								'@': resolve('src'),
						}
				};

		    if (process.env.NODE_ENV === 'production') {
			      console.log(process.env, '生产'); // 生产环境
		    } else {
		    	  console.log(process.env, '开发')
			     // console.log(config, '开发'); // 为开发环境修改配置...
		    }
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
									mode: 'hash',
									routes: [
										{
											path: '/',
											skeletonId: 'indexList'
										},
										{
											path: '/inner',
											skeletonId: 'innerList'
										},
									]
								}
						})
				];
				config.plugins = [...config.plugins, ...plugins];
		},
}