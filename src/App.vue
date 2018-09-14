<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <app-header></app-header>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header'
    import { mapGetters, mapActions, mapMutations } from 'vuex'
    import * as types from './store/types'

    export default {
        components: {
            appHeader: Header
        },
        created() {
            this.loadData()
        },
        methods: {
            ...mapActions({
                loadData: types.LOADING_DATA
            })
        }
    }
</script>

<style>
</style>
