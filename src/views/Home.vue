<template>
    <div class="home">
        <search/>
        <hotels/>
    </div>
</template>

<script>
    import Search from '@/components/Search'
    import Hotels from '@/components/Hotels/List'

    export default {
        name: 'home',
        components: {
            Search,
            Hotels
        }
    }
</script>
