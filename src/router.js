import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import Home from './views/Home.vue'
import Book from './views/Book.vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/:id',
        name: 'book',
        component: Book
    }
]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (!store.state.loaded) {
        store.dispatch('saveHotels').then(() => next())
    } else {
        next()
    }
})

export default router
