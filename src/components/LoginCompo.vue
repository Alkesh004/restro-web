<template>
<img class="logo" src="../assets/restro-logo.png" />
<h2>Login Page</h2>

<div class="register">

    <input type="email" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button type="button">Login</button>
    <p>
        Don't have an account ? <router-link to="/sign-up">Sign Up</router-link>
    </p>
</div>
</template>

<script>
export default {
    name: 'LoginCompo'
}
</script>
