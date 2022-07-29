<template>
<img class="logo" src="../assets/restro-logo.png" />
<h2>Sign Up</h2>

<div class="register">
    <input type="text" placeholder="Enter Name"/>
    <input type="email" placeholder="Enter Email"/>
    <input type="password" placeholder="Enter Password"/>
    <button type="button">Sign Up</button>
</div>
</template>

<script>
export default {
    name: "SignUp",
};
</script>

<style scoped>
.logo{width: 150px;}
.register input{width: 300px; height: 40px; padding-left: 20px; display: block; margin: 0 auto 30px auto; border: 1px solid #c7c7c7; }
.register button{width: 320px; height: 40px; border: 1px solid #f29400; color: #ffffff; background-color:#f29400; cursor: pointer;}
.register button:hover{background-color: transparent; color: #f29400;}
</style>