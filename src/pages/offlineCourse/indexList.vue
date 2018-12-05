<template>
	<div class="height:100px">
		index 页面
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		mounted() {
			this.$http._get({
				url: 'https://store-wms-s.daydaycook.com.cn/wms/service/shop/list',
			}).then((data) => {
				console.log(data);
			});
		}
	}
</script>

<style>

</style>
