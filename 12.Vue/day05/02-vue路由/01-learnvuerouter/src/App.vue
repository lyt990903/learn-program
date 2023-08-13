<template>
	<div id="app">
		<!-- 该组件默认渲染成一个a组件 -->
		<!-- tag:改变渲染后的形式tag=“button” -->
		<!-- replace：history模式下改为replaceState -->
		<!-- 激活后会有router-link-active，可以通过active-class进行修改，可以在router中统一修改 -->
		<router-link to="/home" tag="button">首页</router-link>
		<router-link to="/about" tag="button">关于</router-link>
		<!-- 使用代码进行跳转 -->
		<button @click="btnClick">切换</button>
		<!-- 动态路由配置 -->
		<router-link :to="'/user/' + userId" tag="button">用户</router-link>
		<!-- 路由传参 -->
		<router-link :to="{ path: '/profile', query: userInfo }" tag="button">
			档案
		</router-link>
		<!-- 使用代码进行传参跳转 -->
		<button @click="profileClick">档案</button>
    <!-- exclude属性可以设置不进行kepp-alive的组件，用组件名，逗号不要加空格 -->
		<keep-alive exclude="User,Profile">
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			flag: true,
			userId: "lyt",
			userInfo: {
				name: "otis",
				age: 17,
				height: 171,
			},
		}
	},
	methods: {
		btnClick() {
			if (this.flag) {
				// 通过$router调用router管理路由，$router即为创建的VueRouter实例
				this.$router.push("/about")
				// this.$router.replace('/about')
				this.flag = !this.flag
			} else {
				this.$router.push("/home")
				this.flag = !this.flag
			}
		},
		profileClick() {
			this.$router.push({
				path: "/profile",
				query: this.userInfo,
			})
		},
	},
}
</script>

<style>
.active {
	color: red;
}
</style>
