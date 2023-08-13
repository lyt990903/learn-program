<template>
	<div>
		<h2>我是用户界面</h2>
		<h2>获取用户ID：{{ userId }}</h2>
	</div>
</template>

<script>
export default {
	name: "User",
	computed: {
		userId() {
      // $route获取当前激活route的参数
      // 注意区分$router和$route
			return this.$route.params.userId
		},
	},
}
</script>

<style scoped>
</style>
