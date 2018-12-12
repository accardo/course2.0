import Vue from 'vue';
import Router from 'vue-router'
import offlineCourse from '@/pages/offlineCourse/router'
Vue.use(Router);

const router = new Router({
	mode: 'hash',
});

router.addRoutes(offlineCourse);

router.addRoutes([{ path: '*', name: '404', component: {
  template: '<p>错误，页面没找到</p>'
} }]);
console.log(router)

export default router;
