<template>
    <div class="card container-full">
        <div class="card-body">
            <list-item
                    v-for="item in getPortfolio()"
                    :key="item.id"
                    :item="item"
                    :parentType="'portfolio'"
                    v-if="item.quantity > 0"></list-item>
        </div>
    </div>
</template>

<script>
    import Item from './Item'
    import { mapGetters, mapActions, mapMutations } from 'vuex'
    import * as types from '../store/types'

    export default {
        data() {
            return {
                items: []
            }
        },
        components: {
            listItem: Item
        },
        methods: {
            ...mapGetters({
                getPortfolio: types.GET_PORTFOLIO
            })
        },
        created() {
            this.items = this.getPortfolio()
        }
    }
</script>

<style scoped>
    .card-body {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>