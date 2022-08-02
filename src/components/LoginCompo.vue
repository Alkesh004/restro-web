<template>
<img class="logo" src="../assets/restro-logo.png" />
<h2>Login</h2>

<div class="login">

    <input type="email" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="login" type="button">Login</button>
    <p>
        Don't have an account ? <router-link to="/sign-up">Sign Up</router-link>
    </p>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginCompo',
    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        async login() {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.paaword}`
            );
            console.warn(result);
        }
    },

    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({
                name: 'HomeCompo'
            })
        }
    }
}
</script>
