<script>
export default {

}
</script>
<template>
    <header>
        <div>
            <div class="container nav">
                <router-link :to="{ name: 'home' }">Boolfolio</router-link>
                <ul class="nav__menu">
                    <li>
                        <router-link :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li><router-link :to="{ name: 'portfolio' }">Projects</router-link></li>
                    <li><router-link :to="{ name: 'about' }">About-Us</router-link></li>
                </ul>
            </div>
        </div>
    </header>
</template>
<style>
.nav,
.nav__menu {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.nav__menu {
    margin-left: auto;
}
</style>