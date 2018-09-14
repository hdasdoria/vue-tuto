import * as type from '../types'


const getStock = (state, stockId) => {
    return state.items.filter((item) => {
        return item.stockId === stockId
    }, {})
}

const state = {
    items: []
}

const getters = {
    /**
     *
     * @param state
     * @returns {Array|*|DataTransferItemList}
     */
    [type.GET_PORTFOLIO]: (state) => {
        return state.items;
    }
}

const mutations = {
    /**
     *
     * @param state
     * @param portfolio
     */
    [type.MUTATE_SET_PORTFOLIO]: (state, { portfolio }) => {
        state.items = portfolio
    },
    /**
     *
     * @param state
     * @param item
     */
    [type.MUTATE_ADD_PORTFOLIO_ITEM]: (state, { item }) => {
        state.items.push(item)
    },
    /**
     *
     * @param state
     * @param stockId
     * @param quantity
     */
    [type.MUTATE_BOUGHT_PORTFOLIO_ITEMS]: (state, { stockId, quantity }) => {
        state.items = state.items.map((item) => {
            if (item.stockId === stockId) {
                item.quantity += quantity
            }
            return item
        })
    },
    /**
     *
     * @param state
     * @param stockId
     * @param quantity
     */
    [type.MUTATE_SOLD_PORTFOLIO_ITEMS]: (state, { stockId, quantity }) => {
        state.items = state.items.map((item) => {
            if (item.stockId === stockId) {
                item.quantity -= quantity
            }
            return item
        })
    }
}

const actions = {
    /**
     *
     * @param commit
     * @param dispatch
     * @param portfolio
     */
    [type.SET_PORTFOLIO]: ({ commit, dispatch }, { portfolio }) => {

        portfolio.map(item => {
            dispatch(type.GET_STOCK, { stockId: item.stockId })
                .then((data) => {
                    item = Object.assign(data[0], item);
                    commit(type.MUTATE_ADD_PORTFOLIO_ITEM, { item })
                });
        })
    },
    /**
     *
     * @param commit
     * @param dispatch
     * @param stockId
     * @param quantity
     */
    [type.BOUGHT_PORTFOLIO_ITEMS]: ({ commit, dispatch }, { stockId, quantity }) => {
        const price = getStock(state, stockId)[0].price * quantity

        dispatch(type.IS_MONEY_ENOUGH, { amount: price })
            .then(data => {
                if (!data) {
                    alert('Not enough money');
                    return;
                }
                commit(type.MUTATE_BOUGHT_PORTFOLIO_ITEMS, { stockId, quantity })
                dispatch(type.BOUGHT_INFO_ITEMS, { amount: -price })
            })
    },
    /**
     *
     * @param commit
     * @param dispatch
     * @param stockId
     * @param quantity
     */
    [type.SOLD_PORTFOLIO_ITEMS]: ({ commit, dispatch }, { stockId, quantity }) => {
        const price = getStock(state, stockId)[0].price * quantity


        commit(type.MUTATE_SOLD_PORTFOLIO_ITEMS, { stockId, quantity })
        dispatch(type.BOUGHT_INFO_ITEMS, { amount: +price })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}