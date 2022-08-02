<template>
<HeaderCompo />
<h1>Hello..! User Welcome to Add Restaurant Page</h1>
</template>

<script>
import HeaderCompo from './HeaderCompo.vue'

export default {
    name: "AddCompo",
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
