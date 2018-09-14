import axios from 'axios'

import * as types from './types'


/**
 *
 * @param commit
 * @param dispatch
 */
const loadData = ({ commit, dispatch }) => {
    axios.get(
        'http://localhost:3000/stocks'
    )
        .then(stocks => {
            dispatch(types.SET_STOCKS, { stocks: [ ...stocks.data ] })
        })
        .then(
            axios.get(
                'http://localhost:3000/portfolio'
            )
                .then(portfolio => {
                    dispatch(types.SET_PORTFOLIO, { portfolio: [ ...portfolio.data ] })
                })
        )
        .then(
            axios.get(
                'http://localhost:3000/info'
            )
                .then(info => {
                    dispatch(types.SET_INFO, { info: [ info.data ] })
                })
        )
}

export default {
    [ types.LOADING_DATA ]: (context) => {
        loadData(context)
    },
}