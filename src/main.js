import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

import Layout from './layout/Layout.vue';
import Overview from './pages/Overview.vue';
import Login from './pages/Login.vue';
import Profile from './pages/Profile.vue';

const routes = [
    { path: '/', component: Overview },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    router,
    render: h => h(Layout),
}).$mount('#app')
