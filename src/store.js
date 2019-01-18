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
    getters: {
        hotelName: state => id => {
            return state.hotels.find(item => item.id === id).name
        }
    },
    mutations: {
        setHotels(state, payload) {
            state.hotels = payload
            state.loaded = true
        },
        checkHotel(state, payload) {
            state.checked = +payload
        },
        setPriceFilter(state, payload) {
            state.priceFilter = (!isNaN(payload)) ? +payload : 0
        }
    },
    actions: {
        saveHotels(store) {
            return new Promise((res, rej) => {
                const hotels = localStorage.getItem('hotels')
                if (hotels) {
                    store.commit('setHotels', JSON.parse(hotels))
                    res()
                } else {
                    fetch('/list.json')
                        .then(res => res.json())
                        .then(data => {
                            localStorage.setItem('hotels', JSON.stringify(data.hotels))
                            store.commit('setHotels', data.hotels)
                            res()
                        })
                        .catch(err => rej(err))
                }
            })
        }
    }
})
