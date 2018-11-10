import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAuth from '@websanova/vue-auth';

Vue.config.productionTip = false;

Vue.use(VueRouter);

import Layout from './layout/layout.vue';
import Overview from './pages/overview.vue';
import Login from './pages/login.vue';
import Profile from './pages/profile.vue';

const routes = [
    { path: '/', component: Overview },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.router = router;

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = 'http://localhost:8000/api';

Vue.use(VueAuth, {
    //auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
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
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});

new Vue({
    router,
    render: h => h(Layout),
}).$mount('#app');
