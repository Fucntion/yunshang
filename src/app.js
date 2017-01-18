import Vue from 'vue'
var _ = require('lodash')

import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
		}
	}
});


import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to, from, next) => {
	NProgress.start()
	next()

})

router.afterEach((to, from, next) => {
	NProgress.done()
})

import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;

Vue.http.interceptors.push((request, next) => {

	next((response) => {
		return response
	});

});

import ElementUI from 'element-ui'
Vue.use(ElementUI)


import App from './App.vue'

import './filter.js'
import './directive.js'

const app = new Vue({
	router,
	el: '#studio',
	render: h => h(App)
})