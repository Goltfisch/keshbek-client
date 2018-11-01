<template>
    <div class="outer-wrapper">
        <div class="left">
            <div class="sidebar"></div>
        </div>
        <div class="right">
            <div class="subnav"></div>
            <div class="content"> <router-view></router-view> </div>
            <div class="footer"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>
