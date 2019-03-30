import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAuth from '@websanova/vue-auth';
import Notifications from 'vue-notification';
import VueCurrencyFilter from 'vue-currency-filter'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Notifications);
Vue.use(VueCurrencyFilter,
    {
    symbol : '€',
    thousandsSeparator: '.',
    fractionCount: 2,
    fractionSeparator: ',',
    symbolPosition: 'back',
    symbolSpacing: true
});

import App from './App.vue';
import Layout from './layout/Layout.vue';
import Overview from './pages/Overview.vue';
import Login from './pages/Login.vue';
import Profile from './pages/Profile.vue';
import NotFound from './layout/NotFound.vue';

const routes = [
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/',
        component: Layout,
        redirect: '/overview',
        meta: { auth: true },
        children: [
            {
                path: 'overview',
                component: Overview,
                name: 'overview',
                meta: { auth: true },
            },
            {
                path: 'profile',
                component: Profile,
                name: 'profile',
                meta: { auth: true },
            },
        ]
    },
    {
        path: '*',
        component: NotFound
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.router = router;

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = 'http://localhost:8000/api';

Vue.use(VueAuth, {
    auth: {
        request: function (req, token) {
            this.options.http._setHeaders.call(this, req, {Authorization: 'Bearer ' + localStorage.getItem('token')});
        },
        response: function (res) {
            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                return res.data.token;
            }
        }
    },
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
