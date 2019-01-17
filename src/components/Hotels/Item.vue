<template>
    <tr>
        <td class="name">
            {{ hotel.name }}
        </td>
        <td class="price">
            {{ hotel.price }} руб.
        </td>
        <td>
            <router-link :to="{name: 'book', params: {id: hotel.id}}"
                         v-if="checked !== hotel.id">
                Выбрать
            </router-link>
            <span v-else class="red">Текущий выбор</span>
        </td>
    </tr>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'hotel_component',
        props: {
            hotel: {
                type: Object,
                required: true
            }
        },
        computed: {
            ...mapState(['checked'])
        }
    }
</script>

<style scoped>

</style>