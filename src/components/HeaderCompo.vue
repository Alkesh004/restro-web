<template>
<div>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="add">Add Restaurant</router-link>
        <router-link to="update">Update Restaurent</router-link>
        <a v-on:click="logout">Logout</a>
    </div>
</div>
</template>

<script>
export default {
    name: 'HeaderCompo',

    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({name:'LoginCompo'})
        }
    },

}
</script>
