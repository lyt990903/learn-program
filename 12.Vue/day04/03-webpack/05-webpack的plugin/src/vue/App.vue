<template>
	<div>
		<h2 class="title">{{ message }}</h2>
		<h2>{{ name }}</h2>
		<button @click="btnClick">按钮</button>
	</div>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			message: "Hello Vue",
			name: "LYT",
		};
	},
	methods: {
		btnClick() {
			console.log("btn is clicked");
		},
	},
};
</script>

<style scoped>
.title {
	color: green;
}
</style>