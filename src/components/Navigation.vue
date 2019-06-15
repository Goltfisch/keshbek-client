<template>
    <div class="navigation-container">
        <div class="navigation-wrapper">
            <div class="container">
                <el-menu :default-active="activeIndex" 
                    class="el-menu-demo" 
                    mode="horizontal" 
                    :router=true
                    background-color="#344b63"
                    text-color="#fff"
                    active-text-color="#c4ffdd"
                >
                    <el-menu-item index="dashboard" class="logo-link" @click="handleLogoClick">
                        <div class="logo-wrapper nav-entry">
                            <img src="../assets/keshbek-logo-transparent.png" />
                        </div>
                    </el-menu-item>
                    <el-menu-item index="dashboard">
                        <!-- <router-link class="nav-entry" :to="{ name: 'dashboard' }"> -->
                            <div>Dashboard</div>
                        <!-- </router-link> -->
                    </el-menu-item>
                    <el-menu-item index="overview">
                        <!-- <router-link class="nav-entry" :to="{ name: 'overview' }"> -->
                            <div>Übersicht</div>
                        <!-- </router-link> -->
                    </el-menu-item>
                    <el-menu-item index="profile" class="el-menu-item-right">
                        <!-- <router-link class="nav-entry" :to="{ name: 'profile' }"> -->
                            <div>Profil</div>
                        <!-- </router-link> -->
                    </el-menu-item>
                </el-menu>
            </div>
        </div>
        <!-- <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-menu">
                <div class="navigation-logo">
                    <img src="../assets/logo.png" />
                </div>
                <router-link class="nav-entry" :to="{ name: 'dashboard' }">
                    <div>Dashboard</div>
                </router-link>
                <router-link class="nav-entry" :to="{ name: 'overview' }">
                    <img src="../assets/money.svg" />
                    <div>Übersicht</div>
                </router-link>
                <router-link class="nav-entry" :to="{ name: 'login' }">
                    <img src="../assets/login.svg" />
                    <div>Login</div>
                </router-link>
                <router-link class="nav-entry" :to="{ name: 'profile' }">
                    <img src="../assets/user.svg" />
                    <div>Profil</div>
                </router-link>
            </div>
        </nav> -->
    </div>
</template>

<script>
    export default {
        data() {
            console.log('router', this.$route);
            return {
                activeIndex: this.$route.name
            }
        },
        methods: {
            handleLogoClick: function(e) {
                this.$router.push('dashboard');
            }
        }
    }
</script>

<style>
    .el-menu-item.logo-link {
        border-bottom: 0 !important;
    }
</style>
