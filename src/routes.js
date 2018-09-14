import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Stocks from './components/Stocks'


export const routes = [
    {
        path: '/',
        name: 'homepage',
        component: Home
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio
    },
    {
        path: '/stocks',
        name: 'stocks',
        component: Stocks
    },
]

