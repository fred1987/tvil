<template>
    <div class="content">
        <book-component/>
        <router-link
                :to="{name: 'home'}">
            Вернуться к списку отелей
        </router-link>
    </div>
</template>

<script>
    import BookComponent from '@/components/Hotels/Book'

    export default {
        name: 'book',
        components: {
            BookComponent
        }
    }
</script>