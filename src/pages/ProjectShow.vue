<script>
import Default from '../layouts/Default.vue';
import axios from 'axios'
export default {
    components: {
        Default
    },

    methods: {
        fetchProjects() {
            axios.get("http://127.0.0.1:8000/api/projects/${this.$route.params.slug}").then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
    },
    created() {
        this.fetchProjects()
    },
    mounted() {

        console.log('slug:', this.$route.params.slug)
    }
}
</script>
<template>
    <Default>

        <div class="container">
            <h1>Titolo: </h1>
            <h2>slug: {{ $route.params.slug }}</h2>
        </div>

    </Default>
</template>
<style></style>