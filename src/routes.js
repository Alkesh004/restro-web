import HomeCompo from './components/HomeCompo.vue';
import SignUp from './components/SignUp.vue';
import LoginCompo from './components/LoginCompo.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: 'HomeCompo',
        component: HomeCompo,
        path: '/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'LoginCompo',
        component: LoginCompo,
        path:'/login'
    }

]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router