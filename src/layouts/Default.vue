<script>
import NavBar from '../components/NavBar.vue';
export default {
    components: {
        NavBar
    }
}
</script>
<template>
    <NavBar></NavBar>
    <main>

        <slot />

    </main>
    <footer>FOOTER</footer>
</template>
<style></style>