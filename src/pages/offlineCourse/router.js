const indexList = () => import('./indexList');

const indexRouter = [
	{ path: '/index', name: 'indexList', component: indexList, meta: { c: 'offlineCoruse', a: 'index' } },
];

export default indexRouter