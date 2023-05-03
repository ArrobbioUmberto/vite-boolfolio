<script>
import NavBar from './components/NavBar.vue';

// import Project from './components/Project.vue';
export default {
  components: {
    NavBar
  }
}
</script>

<template>
  <NavBar></NavBar>
  <main>

    <router-view></router-view>

  </main>
  <footer>FOOTER</footer>
</template>

<style scoped></style>
