const indexList = () => import('./indexList');
const innerList = () => import('./innerList');

const indexRouter = [
	{ path: '/offlineCourse', name: 'indexList', component: indexList, meta: { c: 'offlineCoruse', a: 'index' } },
	{ path: '/offlineCourse/innerList', name: 'innerList', component: innerList, meta: { c: 'offlineCoruse', a: 'inner' } },
];

export default indexRouter