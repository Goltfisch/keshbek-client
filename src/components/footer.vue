<template>
    <div class="footer-container">
        Version 1.0.0 - © 2018 Goltfisch GmbH All rights reserved - Made with Bugs <div class="footer-img-wrapper"><img src="../assets/bug.svg"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style>
    .footer-container {
        height: 40px;
        line-height: 40px;
        position: fixed;
        bottom: 0;
        background: #00b2b2;
        color: white;
        width: calc(100% - 200px);
        text-align: center;
    }

    .footer-img-wrapper {
        display: inline-block;
        max-width: 15px;
    }

    .footer-img-wrapper img {
        width: 100%;
        position: relative;
        top: 2px;
    }
</style>
