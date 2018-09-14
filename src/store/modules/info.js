import * as type from '../types'


const state = {
    general: {
        money: 10000,
        day: 1
    }
}

const getters = {
    /**
     *
     * @param state
     * @returns {Array|*|DataTransferItemList}
     */
    [type.GET_INFO]: (state) => {
        return state.general;
    }
}


const mutations = {
    /**
     *
     * @param state
     * @param info
     */
    [type.MUTATE_SET_INFO]: (state, { info }) => {
        state.general = info[0]
    },
    /**
     *
     * @param state
     * @param amount
     */
    [type.MUTATE_ADD_MONEY]: (state, { amount }) => {
        state.general.money += amount
    }
}

const actions = {
    /**
     *
     * @param commit
     * @param groups
     */
    [type.SET_INFO]: ({ commit }, { info }) => {
        commit(type.MUTATE_SET_INFO, { info })
    },
    /**
     *
     * @param context
     * @param amount
     */
    [type.BOUGHT_INFO_ITEMS]: ({ commit }, { amount }) => {
        commit(type.MUTATE_ADD_MONEY, { amount })
    },
    /**
     *
     * @param state
     * @param amount
     * @returns {boolean}
     */
    [type.IS_MONEY_ENOUGH]: ({ state }, { amount }) => {
        return state.general.money >= amount
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}