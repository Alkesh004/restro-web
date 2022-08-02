<template>
<HeaderCompo/>
<h1>Hello..! Welcome to Home Page</h1>
</template>

<script>
import HeaderCompo from './HeaderCompo.vue'

export default {
    name: "HomeCompo",
    components: {
        HeaderCompo
    },

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
