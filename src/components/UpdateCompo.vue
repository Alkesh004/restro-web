<template>
<HeaderCompo/>
<h1>Hello..! User  Welcome to Update Restaurant Page</h1>
</template>

<script>
import HeaderCompo from './HeaderCompo.vue'

export default {
    name: "UpdateCompo",
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
