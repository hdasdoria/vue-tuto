<template>
    <div class="card">
        <div class="card-body">
            <div class="card-title">
                {{ item.name }}
            </div>
            <span class="card-subtitle text-muted" v-if="parentType === 'stocks'">
                (price: {{ item.price }})
            </span>
            <span class="card-subtitle text-muted" v-else>
                (price: {{ item.price }} | quantity : {{ item.quantity }})
            </span>
            <div class="input-group mb-3">
                <input class="form-control" type="text" v-model.number="quantity" aria-describedby="button-addon2">
                <div class="input-group-append">
                    <button
                            class="btn btn-success"
                            type="button"
                            id="button-addon2"
                            v-if="parentType === 'stocks'"
                            @click="buyItem({stockId: item.stockId, quantity})">Buy</button>
                    <button
                            class="btn btn-danger"
                            type="button"
                            id="button-addon2"
                            v-else
                            @click="sellItem({stockId: item.stockId, quantity})">Sell</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as types from '../store/types'
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                quantity: 0
            }
        },
        props: [ 'index', 'item', 'parentType' ],
        methods: {
            ...mapActions({
                buyItem: types.BOUGHT_PORTFOLIO_ITEMS,
                sellItem: types.SOLD_PORTFOLIO_ITEMS
            })
        }
    }
</script>

<style scoped>
    .card {
        min-width: 40%;
        margin: 20px auto;
    }
</style>