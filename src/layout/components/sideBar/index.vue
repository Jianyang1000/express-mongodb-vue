<template>
    <div class="sideBar" :class="{closeBar:opend}">
        <el-scrollbar>
            <el-menu
                    :default-active="activeMenu"
                    class="el-menu-vertical-demo"
                    background-color="#3a3f51"
                    text-color="#b5b6bd"
                    active-text-color="rgb(79, 148, 212)"
                    mode="vertical"
                    :collapse="opend">
                <sidebar-item
                        v-for="route in routes"
                        :key="route.path"
                        :item="route"
                        :basePath="route.path"
                ></sidebar-item>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
    import {currencyRoutes} from '@/router'
    import SidebarItem from './SidebarItem'
    export default {
        name: "Layout",
        components: {
            'sidebar-item': SidebarItem
        },

        computed: {
            opend(){
                return this.$store.state.app.opend
            },
            routes(){
                return this.$store.state.app.routes
            },
            activeMenu() {
                return this.$route.path
            }
        },
        created() {
            this.$store.commit('app/SET_ROUTES',currencyRoutes)
        },
        methods: {
            toggleOpen(){
                this.$store.commit('app/toggleOpen',!this.opend)
            }
        }
    }
</script>

<style scoped lang="scss">
    .sideBar {
        width: 200px;
        &.closeBar {
            width: 64px !important;
        }
        height: calc(100% - 50px);
        background-color: #3a3f51;
        text-align: left;
        position: fixed;
        bottom: 0;
        left: 0;
        overflow: hidden;
        transition: width 0.3s ease-in-out;
        z-index: 999;

        .el-menu {
            height: 100%;
            border: none;
        }
    }
</style>