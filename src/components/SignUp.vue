<template>
<img class="logo" src="../assets/restro-logo.png" />
<h2>Sign Up</h2>

<div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="email" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="signup()" type="button">Sign Up</button>
    <p>
        Already have an account ? <router-link to="/login">Login</router-link>
    </p>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: "SignUp",
    data() {
        return {
            name: "",
            email: "",
            password: "",
        };
    },

    methods: {
        async signup() {
            console.warn("clicked", this.name, this.email, this.password);
            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                email: this.email,
                password: this.password,
            });
            console.warn(result);
            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({
                    name: 'HomeCompo'
                })
            }
        },
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({
                name: 'HomeCompo'
            })
        }

    },

};
</script>


