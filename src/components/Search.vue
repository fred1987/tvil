<template>
    <header>
        <div class="search">
            <span>Поиск по цене от</span>
            <input type="text"
                   :value="priceFilter"
                   @input="search"
            />
        </div>
    </header>
</template>

<script>

    import {mapState} from 'vuex'

    export default {
        name: 'search_component',
        computed: {
            ...mapState(['priceFilter'])
        },
        methods: {
            search(e) {
                this.$store.commit('setPriceFilter', e.target.value)
            }
        }
    }
</script>

<style scoped>
    header {
        width: 100%;
        background-color: #222d32;
        padding: 0 11px;

    }

    .search {
        max-width: 1000px;
        margin: 0 auto;
        height: 50px;
    }

    span {
        color: white;
        line-height: 50px;
        margin-right: 7px;
    }

    input {
        padding: 5px;
        width: 70px;
        text-align: center;
    }
</style>