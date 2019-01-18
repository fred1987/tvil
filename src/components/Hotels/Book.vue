<template>
    <p>
        Спасибо за использование нашего сервиса. Ваше бронирование в
        {{ hotelName }} подтверждено!
    </p>
</template>

<script>
    export default {
        name: 'book_component',
        created() {
            this.$store.commit('checkHotel', this.$route.params.id)
        },
        computed: {
            hotelName() {
                return this.$store.getters.hotelName(this.$route.params.id)
            }
        }
    }
</script>
