const routes = [{
	path: '/login',
	component: function(resolve){require(['./view/login.vue'],resolve)},
	name: '用户登录',
	hidden: true
}, 
{
	path: '/error',
	component: function(resolve){require(['./components/error.vue'],resolve)},
	name: '出错了',
	hidden: true
},
{
	path: '/',
	component: require('./view/layout.vue'),
	name: '首页',
	redirect: '/home',
	leaf: true, //只有一个节点
	children: [{
		path: '/home',
		component: function(resolve){require(['./view/home.vue'],resolve)},
	}]
}, 
{
	path: '/businessman',
	component: require('./view/layout.vue'),
	name: '直播管理',
	redirect: '/roomlist',
	leaf: true, //只有一个节点
	children: [{
		path: '/roomlist',
		component: function(resolve){require(['./view/room/list.vue'],resolve)},
	}]
}, 
{
	path: '/',
	component: require('./view/layout.vue'),
	name: '商品管理',
	children: [{
		path: '/list',
		name: '商品列表',
		component: function(resolve){require(['./view/goods/list.vue'],resolve)},

	}, {
		path: '/add',
		name: '添加商品',
		component: function(resolve){require(['./view/goods/add.vue'],resolve)},

	}, {
		path: '/edit/:id',
		name: '修改商品',
		hidden: true,
		component: function(resolve){require(['./view/goods/edit.vue'],resolve)},

	}, {
		path: '/order',
		name: '订单管理',
		component: function(resolve){require(['./view/goods/order.vue'],resolve)},

	}]
},  
{
	path: '*',
	redirect: '/error',
	name: '其他',
	hidden: true
}
]

export default routes;