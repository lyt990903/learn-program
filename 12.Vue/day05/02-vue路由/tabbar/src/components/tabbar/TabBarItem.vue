<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive">
			<slot name="item-img"></slot>
		</div>
		<div v-else>
			<slot name="item-active-img"></slot>
		</div>
		<div :class="{ active: isActive }" :style="activeStyle">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "TabBarItem",
	props: {
		path: String,
		activeColor: {
			type: String,
			default: "rgb(255, 87, 119)",
		},
	},
	data() {
		return {
			// isActive: true,
		}
	},
	computed: {
		isActive() {
			return this.$route.path.indexOf(this.path) !== -1
		},
		activeStyle() {
			return this.isActive ? { color: this.activeColor } : {}
		},
	},
	methods: {
		itemClick() {
			// console.log(this.path)
			this.$router.replace(this.path)
		},
	},
}
</script>

<style scoped>
.tab-bar-item {
	flex: 1;
	text-align: center;
	font-size: 14px;
}

.tab-bar-item img {
	width: 20px;
	height: 20px;
	vertical-align: middle;
	margin-top: 4px;
	margin-bottom: 3px;
}
/*
.tab-bar-item .active {
	color: rgb(255, 87, 119);
}
*/
</style>
