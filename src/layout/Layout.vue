<template>
    <div class="outer-wrapper">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
        <component-navigation></component-navigation>
        <div class="content"> <router-view></router-view> </div>
        <!-- <div class="left">
            <div class="navigation"> <component-navigation></component-navigation> </div>
        </div>
        <div class="right">
            <div class="content"> <router-view></router-view> </div>
            <div class="footer"> <component-footer></component-footer> </div>
        </div> -->
    </div>
</template>

<script>

import ComponentNavigation from './../components/Navigation.vue';

export default {
    data() {
        return {
            activeIndex: '1',
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    components: {
        ComponentNavigation
    }
}
</script>

<style>
    * {
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }

    html, body {
        margin: 0;
        height: 100%;
    }

    .navigation-wrapper {
        width: 100%;
        border-bottom: solid 1px #e6e6e6;
        background-color: rgb(52, 75, 99);
    }

    .container {
        width: 1140px;
        margin: 0 auto;
    }

    .el-menu.el-menu--horizontal {
        border: 0;
    }

    .logo-wrapper img{
        height: 40px;
        padding: 10px 0;
    }

    a {
        text-decoration: none;
    }

    .el-menu-item:hover {
        background-color: rgb(34, 48, 64);
    }

    .el-menu--horizontal>.el-menu-item.el-menu-item-right {
        float: right;
    }
</style>
