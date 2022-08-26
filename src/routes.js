import HomeCompo from './components/HomeCompo.vue';
import SignUp from './components/SignUp.vue';
import LoginCompo from './components/LoginCompo.vue';
import AddCompo from './components/AddCompo.vue';
import UpdateCompo from './components/UpdateCompo.vue';


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
    },
    {
        name:'AddCompo',
        component: AddCompo,
        path:'/add'
    },
    {
        name:'UpdateCompo',
        component: UpdateCompo,
        path:'/update/:id',
    }

]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router