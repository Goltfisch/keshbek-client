<template>
    <div class="navigation-container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-menu">
                <div class="navigation-logo">
                    <img src="../assets/logo.png" />
                </div>
                <router-link to="/" class="nav-entry">
                    <img src="../assets/money.svg" />
                    <div>Übersicht</div>
                </router-link>
                <router-link to="/login" class="nav-entry">
                    <img src="../assets/login.svg" />
                    <div>Login</div>
                </router-link>
                <router-link to="/profile" class="nav-entry">
                    <img src="../assets/user.svg" />
                    <div>Profil</div>
                </router-link>
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
    .navigation-logo {
        max-width: 130px;
        margin: 30px auto;
    }

    .navigation-logo img {
        max-width: 100%;
    }

    a.nav-entry {
        width: 100%;
        display: block;
        color: white;
        text-decoration: none;
        text-align: center;
        margin-bottom: 40px;
    }

    a.nav-entry img {
        max-width: 30px;
    }

    a.nav-entry div {
        margin-top: 3px;
    }
</style>
