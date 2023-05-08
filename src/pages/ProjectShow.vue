<script>
import Default from '../layouts/Default.vue';
import axios from 'axios'
import ProjectCard from '../components/ProjectCard.vue'
export default {
    components: {
        Default,
        ProjectCard
    },
    data() {
        return {
            project: null
        }
    },
    props: ['slug'],
    computed: {
        imagePath() {
            return this.project.cover_image && this.project ? `http://127.0.0.1:8000/storage/${this.project.cover_image}` : null;
        }
    },
    methods: {
        fetchProjects(slug) {
            axios.get(`http://127.0.0.1:8000/api/projects/${slug}`)
                .then(res => {
                    const { success, project } = res.data
                    console.log(res.data)
                    if (success) {
                        this.project = project
                        console.log(project)
                        console.log(project.cover_image)
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
            <div class="container m-auto">

                <div class="card mt-5 col">
                    <img class="card-img" v-if="project.cover_image" :src="imagePath" alt="">
                    <div class="card-body p-2">
                        <h5 class="card-title">Titolo: {{ project.title }}</h5>
                        <p class="card-text">Descrizione: {{ project.description }}</p>
                        <span class="list-group-item p-2">Cliente: {{ project.client }}</span>
                        <span class="list-group-item p-2">URL: {{ project.url }}</span>
                    </div>
                </div>

            </div>
        </template>



    </Default>
</template>
<style></style>