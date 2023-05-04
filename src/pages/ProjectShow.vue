<script>
import Default from '../layouts/Default.vue';
import axios from 'axios'

export default {
    components: {
        Default
    },
    data() {
        return {
            project: null
        }
    },
    props: ['slug'],
    methods: {
        fetchProjects(slug) {
            axios.get(`http://127.0.0.1:8000/api/projects/${slug}`)
                .then(res => {
                    const { success, project } = res.data
                    console.log(res.data)
                    if (success) {
                        this.project = project
                    }
                }).catch(err => {
                    console.log(err)
                })
        }
    },
    created() {
        this.fetchProjects(this.slug)
    },

}
</script>
<template>
    <Default>
        <template v-if="project">
            <div class="container">
                <h1> {{ project.title }} </h1>
                <p>{{ project.description }}</p>
            </div>
        </template>



    </Default>
</template>
<style></style>