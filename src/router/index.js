import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/'
Vue.use(Router)

const index = r => require.ensure([], () => r(require('@/page/index')), 'index');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const aboutus = r => require.ensure([], () => r(require('@/page/aboutus')), 'aboutus');
const service = r => require.ensure([], () => r(require('@/page/service')), 'service');
const investment = r => require.ensure([], () => r(require('@/page/investment')), 'investment');
const contact = r => require.ensure([], () => r(require('@/page/contact')), 'contact');


const routes = [
 
	{
		path: '/',
		component: manage,
        meta: ['首页'],
        children:[
            {
                path:'/',
                meta: ['首页'],
                component: index,
            },
            {
                path:'/aboutus',
                meta: ['关于我们'],
                component: aboutus,
            },
            {
                path:'/service',
                meta: ['我们提供的服务'],
                component: service,
            },
            {
                path:'/investment',
                meta: ['关于投资'],
                component: investment,
            },
            {
                path:'/contact',
                meta: ['联系我们'],
                component: contact,
            },
            
            
        ]
	}
]

export default new Router({
    mode: 'history',
    // base:'/mobile',
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
