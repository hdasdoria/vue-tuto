<template>
    <div class="card container-full">
        <div class="card-body">
            <list-item
                    v-for="item in getStocks()"
                    :key="item.id"
                    :item="item"
                    :parentType="'stocks'"></list-item>
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
                getStocks: types.GET_STOCKS
            })
        },
        created() {
            this.items = this.getStocks()
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