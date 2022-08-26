<template>
<!-- <SignUp/> -->
<router-view />
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
    
}

body {
    margin: 0;
    padding: 0;
}

.nav{background-color: #f2940026; overflow: hidden;}
.nav a{text-decoration: none; padding: 10px 14px; float: left; margin-left: 5px; color:#8a151b; font-weight: 400; cursor: pointer;}
.nav a:hover{background-color: #f29400; color: #ffffff;}

/* #8a151b */
.logo {
    width: 150px;
}

.register input,
.login input, .add input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin: 0 auto 30px auto;
    border: 1px solid #c7c7c7;
}

.register button,
.login button, .add button {
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
