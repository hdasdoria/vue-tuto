<template>
    <ul class="nav nav-pills">
        <li class="nav-item">
            <router-link :to="{ name: 'homepage' }" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{ name: 'portfolio' }" class="nav-link">Portfolio</router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{ name: 'stocks' }" class="nav-link">Stocks</router-link>
        </li>
        <li class="nav-item">
            <a class="nav-link" @click.prevent="getMoney" href="#">End Day</a>
        </li>
        <div class="nav-item dropdown">
            <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Save & Load
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <span class="dropdown-item">Save</span>
                <span class="dropdown-item">Load</span>
            </div>
        </div>
        <li class="nav-item">
            <p class="nav-link disabled">
                Your Funds: {{ getMoney() }}$
            </p>
        </li>
    </ul>
</template>

<script>
    import { mapGetters } from 'vuex'
    import * as types from '../store/types'

    export default {
        data() {
            return {
                money: 0
            }
        },
        methods: {
            ...mapGetters({
                getInfo: types.GET_INFO
            }),
            getMoney() {
                return this.getInfo().money
            }
        },
        created() {
            this.money = this.getInfo().money
        }
    }
</script>

<style scoped>
    ul.nav {
        margin: 50px 0 30px;
    }
</style>