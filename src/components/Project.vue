<script>
import axios from 'axios'
import ProjectCard from './ProjectCard.vue';

export default {
    data() {
        return {
            projects: []
        };
    },
    methods: {
        fetchProjects() {
            axios.get("http://127.0.0.1:8000/api/projects")
                .then(res => {
                    // console.log(res)
                    const results = res.data.results;
                    this.projects = results.data;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    mounted() {
        this.fetchProjects();
    },
    components: { ProjectCard }
}
</script>
<template>
    <div class="container d-flex">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project"></ProjectCard>
    </div>
</template>
<style scoped></style>