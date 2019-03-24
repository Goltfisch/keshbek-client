<template>
    <div class="outer-wrapper">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">

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
import ComponentNavigation from './../components/Navigation.vue';
import ComponentFooter from './../components/Footer.vue';

export default {
    data() {
        return {}
    },
    components: {
        ComponentNavigation,
        ComponentFooter
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
        background: #f7f7fa;
        width: 100%;
    }

    .content {
        padding: 0 10%;
        margin-top: 50px;
    }

    .headline {
        font-weight: normal;
    }
</style>
