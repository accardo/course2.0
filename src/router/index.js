import Vue from 'vue';
import Router from 'vue-router'
import offlineCourse from '@/pages/offlineCourse/router'
Vue.use(Router);

const router = new Router({
	base: '/',
  mode: 'history',
});


router.addRoutes(offlineCourse);

router.addRoutes([{ path: '*', name: '404', component: {
  template: '<p>Page Not Found</p>'
} }]);


export default router;
