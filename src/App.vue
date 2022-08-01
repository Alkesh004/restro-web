<template>
<!-- <SignUp/> -->
<router-view/>
</template>

<script>
// import SignUp from "./components/SignUp.vue";

export default {
    name: "App",
    // components: {
    //     SignUp,
    // },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.logo {
    width: 150px;
}

.register input, .login input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin: 0 auto 30px auto;
    border: 1px solid #c7c7c7;
}

.register button, .login button {
    width: 320px;
    height: 40px;
    border: 1px solid #f29400;
    color: #ffffff;
    background-color: #f29400;
    cursor: pointer;
}

button:hover {
    background-color: transparent;
    color: #f29400;
}
</style>
