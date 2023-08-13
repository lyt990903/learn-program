<template>
	<div id="app">
		<h2>-------- Info内容 --------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改info</button>

		<h2>-------- App内容 --------</h2>
		<h2>{{ $store.state.counter }}</h2>
		<button @click="addClick(5)">+</button>
		<button @click="subClick">-</button>

		<h2>-------- HelloVuex内容 --------</h2>
		<HelloVuex />
	</div>
</template>

<script>
import HelloVuex from "./components/HelloVuex"
import { INCREMENT } from "./store/mutations-types"

export default {
	name: "App",
	components: {
		HelloVuex,
	},
	methods: {
		addClick(count) {
			// console.log(this.$store)
			// 1. 普通提交封装
			this.$store.commit(INCREMENT)
			// 2. 特殊提交封装
			this.$store.commit({
				type: "increment",
				// 该方式会使mutation获取到一个对象包含count和age
				count,
				age: 18,
			})
		},
		subClick() {
			this.$store.commit("decrement")
    },
    updateInfo() {
      this.$store
        .dispatch('aUpdateInfo',"传送的数据")
        .then(res => {
          console.log(res);
        })
    }
	},
}
</script>

<style>
</style>
