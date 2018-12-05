import Vue from 'vue';
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false

const app = new Vue({
	router,
	components: { App },
	render: h => h(App),
}).$mount('#app')

window.mountApp = () => {
	app.$mount('#app')
}


if (process.env.NODE_ENV === 'production') {
	if (window.STYLE_READY) {
		window.mountApp();
	}
} else {
	window.mountApp();
}