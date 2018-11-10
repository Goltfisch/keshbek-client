<template>
    <div class="outer-wrapper">
        <div class="left">
            <div class="navigation"> <component-navigation></component-navigation> </div>
        </div>
        <div class="right">
            <div class="content"> <router-view></router-view> </div>
            <div class="footer"> <component-footer></component-footer> </div>
        </div>
    </div>
</template>

<script>
import ComponentNavigation from './../components/navigation.vue';
import ComponentFooter from './../components/footer.vue';

export default {
    components: {
        ComponentNavigation,
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
