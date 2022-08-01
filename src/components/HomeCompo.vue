<template>
<h1>Hello..! Welcome to Home Page</h1>
</template>

<script>
export default {
    name: "HomeCompo",

     mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }
    },
}


</script>
