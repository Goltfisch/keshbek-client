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
    }

    .outer-wrapper {
        display: table;
        height: 100%;
    }

    .left {
        background: #2a3b4d;
        min-width: 200px;
        display: table-cell;
    }

    .right {
        background: #e9e9e9;
        display: table-cell;
        width: 100%;
    }
</style>
