import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        priceFilter: 0,
        hotels: [],
        checked: null,
        loaded: false
    },
    mutations: {
        setHotels(state) {
            state.hotels = JSON.parse(localStorage.getItem('hotels'))
            state.loaded = true
        },
        checkHotel(state, payload) {
            state.checked = +payload
        },
        setPriceFilter(state, payload) {
            if (!isNaN(payload)) state.priceFilter = +payload
        }
    },
    actions: {
        saveHotels(store) {
            return new Promise((res, rej) => {
                fetch('/list.json')
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('hotels', JSON.stringify(data.hotels))
                        store.commit('setHotels')
                        res()
                    })
                    .catch(err => rej(err))
            })
        }
    }
})
