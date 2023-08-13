<template>
	<div>
		<h2>我是首页</h2>
		<h2>我是首页内容，哈哈哈</h2>
		<router-link to="/home/news">新闻</router-link>
		<router-link to="/home/message">消息</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: "Home",
	data() {
		return {
			routeMemory: "",
		}
	},
	created() {
		console.log("home is created")
	},
	destroyed() {
		console.log("home is destroyed")
	},
	activated() {
    console.log("home is activated");
    this.$router.push(this.path);
	},
	deactivated() {
		console.log("home is deactivated")
  },
  beforeRouteLeave (to, from, next) {
    this.path = from.path;
    next();
  }
}
</script>

<style scoped></style>
