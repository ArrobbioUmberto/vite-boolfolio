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
                        console.log(project)
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
                <div class="card-body">
                    <h5 class="card-title">Titolo: {{ project.title }}</h5>
                    <p class="card-text">Descrizione: {{ project.description }}</p>
                    <span class="list-group-item">Cliente: {{ project.client }}</span>
                    <span class="list-group-item ">URL: {{ project.url }}</span>
                </div>
            </div>
        </template>



    </Default>
</template>
<style></style>