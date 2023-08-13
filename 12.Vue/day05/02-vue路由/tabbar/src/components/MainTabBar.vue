<template>
	<div>
		<TabBar>
			<TabBarItem path="/home" activeColor="blue">
				<img slot="item-img" src="~img/home.png" />
				<img slot="item-active-img" src="~img/home_active.png" />
				<div slot="item-text">首页</div>
			</TabBarItem>
			<TabBarItem path="/category">
				<img slot="item-img" src="~img/category.png" />
				<img slot="item-active-img" src="~img/category_active.png" />
				<div slot="item-text">目录</div>
			</TabBarItem>
			<TabBarItem path="/cart">
				<img slot="item-img" src="~img/cart.png" />
				<img slot="item-active-img" src="~img/cart_active.png" />
				<div slot="item-text">购物车</div>
			</TabBarItem>
			<TabBarItem path="/profile">
				<img slot="item-img" src="~img/profile.png" />
				<img slot="item-active-img" src="~img/profile_active.png" />
				<div slot="item-text">我的</div>
			</TabBarItem>
		</TabBar>
	</div>
</template>

<script>
import TabBar from "components/tabbar/TabBar"
import TabBarItem from "components/tabbar/TabBarItem"

export default {
	name: "MainTabBar",
	components: {
		TabBar,
		TabBarItem,
	},
}
</script>

<style>
</style>
