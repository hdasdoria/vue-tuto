import * as type from '../types'

const state = {
    items: []
}

/**
 *
 * @param state
 * @param stockId
 * @returns {[]}
 */
const getStocksById = (state, stockId) => {
    return state.items.filter(item => item.id === stockId);
}

const getters = {
    /**
     *
     * @param state
     * @returns {Array|*|DataTransferItemList}
     */
    [ type.GET_STOCKS ]: (state) => {
        return state.items;
    }
}


const mutations = {
    /**
     *
     * @param state
     * @param groups
     */
    [ type.MUTATE_SET_STOCKS ]: (state, { stocks }) => {
        state.items = stocks
    }
}

const actions = {
    /**
     *
     * @param commit
     * @param groups
     */
    [ type.SET_STOCKS ]: ({ commit }, { stocks }) => {
        commit(type.MUTATE_SET_STOCKS, { stocks })
    },
    /**
     *
     * @param commit
     * @param groups
     */
    [ type.SET_STOCKS ]: ({ commit }, { stocks }) => {
        commit(type.MUTATE_SET_STOCKS, { stocks })
    },
    /**
     *
     * @param state
     * @param stockId
     * @returns {*[]}
     */
    [ type.GET_STOCK ]: ({ commit, state }, { stockId }) => {
        return getStocksById(state, stockId)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}