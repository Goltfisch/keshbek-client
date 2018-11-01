<template>
    <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-menu is-active buttons">
                <router-link to="/" class="nav-entry"> Übersicht </router-link>
                <router-link to="/login" class="nav-entry"> Login </router-link>
                <router-link to="/profile" class="nav-entry"> Profil </router-link>
            </div>
        </nav>
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
    a.nav-entry {
        width: 100%;
        height: 40px;
        line-height: 40px;
        display: block;
        color: white;
        text-decoration: none;
        text-align: center;
    }
</style>
