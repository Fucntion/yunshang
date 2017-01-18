<template>
	<div class="left">
		<el-menu class="nav" @open="handleopen" @close="handleclose" @select="handleselect" unique-opened router>
			<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
				<el-submenu class="nav_item" :index="index+''" v-if="item.children && !item.leaf">
					<!--为了满足hover变白色的需要，所以改用nav_navname的形式定义className-->
					<template slot="title"><i :class="'nav_'+item.iconCls" class="nav_icon"></i><span class="nav_name">{{item.name}}</span></template>
					<el-menu-item v-for="child in item.children"  v-if="!child.hidden" :index="child.path">{{child.name}}</el-menu-item>
				</el-submenu>
				<el-menu-item class="leaf nav_item" v-else :index="item.path">
					<i :class="'nav_'+item.iconCls" class="nav_icon"></i>
					<span class="nav_name">{{item.name}}</span>
				</el-menu-item>
			</template>
		</el-menu>
		
	</div>

</template>

<script>
	export default {

		data: function() {

			return {

			}

		},
		mounted() {

		},
		methods: {
			handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
			handleselect: function(index, path) {
				// console.log(index,path)       
			}
		},
		components: {

		},
		watch: {

		}
	}
</script>
<style lang="less">
	.nav_item {
		position: relative;
	}
	
	.nav_icon {
		position: absolute;
		top: 20px;
		display: inline-block;
		height: 20px;
		width: 20px;
	}
	
	.nav_name {
		margin-left: 30px;
	}
		
</style>