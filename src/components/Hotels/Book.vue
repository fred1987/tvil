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
            this.hotelName = this.$store.state.hotels.find(item => item.id == this.$route.params.id).name
        },
        data() {
            return {
                hotelName: ''
            }
        }
    }
</script>
