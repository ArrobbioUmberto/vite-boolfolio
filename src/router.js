import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import AboutUs from './pages/AboutUs.vue'
import Contacts from './pages/Contacts.vue'
import ProjectShow from './pages/ProjectShow.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio,
        },
        {
            path: '/about-us',
            name: 'about',
            component: AboutUs,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts,
        },
        {
            path: '/portfolio/:slug',
            name: 'projects.show',
            component: ProjectShow,
            props: true,
        }
    ],
})

export { router }