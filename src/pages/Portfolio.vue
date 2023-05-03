<script>
import Default from '../layouts/Default.vue';
import Project from '../components/Project.vue';
export default {
    components: {
        Project,
        Default
    }
}
</script>
<template>
    <Default>
        <div>
            <div class="container">
                <h1>PORTFOLIO</h1>
                <Project></Project>
            </div>
        </div>
    </Default>
</template>
<style></style>