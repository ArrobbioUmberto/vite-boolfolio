<script>

export default {

    props: {
        project: {
            type: Object,
            required: true
        },
        technologies: {
            type: Array,
            required: false
        },
        type: {
            type: String,
            required: false
        }
    },
    mounted() {
        // console.log(this.project.technologies);
    }

}
</script>
<template>
    <div class="card col-3 m-3 ">
        <div class="card-body">
            <h5 class="card-title">Titolo: {{ project.title }}</h5>
            <p class="card-text">Descrizione: {{ project.description }}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Cliente: {{ project.client }}</li>
            <li class="list-group-item ">URL: {{ project.url }}</li>
            <li class="list-group-item">Tecnologie: <span class="badge text-bg-primary p-2 m-2"
                    v-for="item in project.technologies" :key="item.id">{{
                        item.name ?
                        item.name : 'No' }},</span> </li>
            <li class="list-group-item" v-if="project.type !== null"> Tipologia: <span class="badge text-bg-secondary">{{
                project.type.name
            }}</span> </li>
            <li class="list-group-item" v-else="project.type == null"> Tipologia: Nessuna</li>
        </ul>
    </div>
</template>
<style scoped></style>