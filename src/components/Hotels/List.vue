<template>
    <div class="content">
        <table>
            <thead>
            <tr>
                <th>Отель</th>
                <th colspan="2">Цена за сутки</th>
            </tr>
            </thead>
            <tbody>
            <tr is="hotel"
                v-if="filteredHotels.length > 0"
                v-for="hotel in filteredHotels"
                :hotel="hotel"
                :key="hotel.id">
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Hotel from './Item'

    export default {
        name: 'hotel_list_component',
        components: {Hotel},
        computed: {
            ...mapState(['hotels', 'priceFilter']),
            filteredHotels() {
                return this.hotels.filter(item => item.price > this.priceFilter)
            }

        }
    }
</script>
