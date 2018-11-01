<template>
    <div class="outer-wrapper">
        <div class="left">
            <div class="sidebar"> <component-sidebar></component-sidebar> </div>
        </div>
        <div class="right">
            <div class="subnav"> <component-subnav></component-subnav> </div>
            <div class="content"> <router-view></router-view> </div>
            <div class="footer"> <component-footer></component-footer> </div>
        </div>
    </div>
</template>

<script>
import ComponentSidebar from './../components/sidebar.vue';
import ComponentSubnav from './../components/subnav.vue';
import ComponentFooter from './../components/footer.vue';

export default {
    components: {
        ComponentSidebar,
        ComponentSubnav,
        ComponentFooter
    },
    data() {
        return {}
    }
}
</script>

<style>
    html {
        height: 100%;
    }

    body {
        margin: 0;
        height: 100%;
        font-family: 'Raleway', sans-serif;
        font-size: 14px;
    }

    .outer-wrapper {
        display: flex;
        height: 100%;
    }

    .left {
        background: #2a3b4d;
        min-width: 200px;
    }

    .right {
        background: #e9e9e9;
        width: 100%;
    }

    .headline {
        font-weight: normal;
        padding: 0 10%;
        margin-top: 50px;
    }
</style>
