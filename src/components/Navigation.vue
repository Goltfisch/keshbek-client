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
                        <div>Dashboard</div>
                    </el-menu-item>
                    <el-menu-item index="overview">
                        <div>Übersicht</div>
                    </el-menu-item>
                    <el-menu-item index="profile" class="el-menu-item-right">
                        <div>Profil</div>
                    </el-menu-item>
                </el-menu>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
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
