<template>
<HeaderCompo/>
<h1>Hello..! User  Welcome to Update Restaurant Page</h1>

<form class="add">
    <input type="text" placeholder="Enter Name" v-model="restaurant.name" name="name" />
    <input type="text" placeholder="Enter Address" v-model="restaurant.address" name="address" />
    <input type="number" placeholder="Enter Contact" v-model="restaurant.contact" name="contact" />
    <button type="button" v-on:click="addRestaurant">Update Restaurant</button>
</form>
</template>

<script>
import HeaderCompo from './HeaderCompo.vue'

export default {
    name: "UpdateCompo",
    components: {
        HeaderCompo
    },
    data() {
        return {
            restaurant: {
                name: "",
                address: "",
                contact: "",
            },
        };
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
