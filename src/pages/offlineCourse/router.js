const indexList = () => import('./indexList');
const innerList = () => import('./innerList');


const indexRouter = [
	{ path: '/index', name: 'indexList', component: indexList, meta: { c: 'offlineCoruse', a: 'index' } },
	{ path: '/inner', name: 'innerList', component: innerList, meta: { c: 'offlineCoruse', a: 'inner' } },
];

export default indexRouter