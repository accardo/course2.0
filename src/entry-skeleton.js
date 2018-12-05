import Vue from 'vue';
import indexList from '@/skeleton/indexList';
import innerList from '@/skeleton/innerList';


export default new Vue({
	components: {
		indexList,
		innerList,
	},
	template: `
        <div>
            <indexList id="indexList" style="display:none"/>
            <innerList id="innerList" style="display:none"/>
        </div>
    `
	//render: h => h(innerList),
});

