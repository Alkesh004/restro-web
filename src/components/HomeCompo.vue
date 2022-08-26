<template>
<HeaderCompo />
<h1>Hello..! <span style="text-transform: capitalize">{{name}}</span> Welcome to Home Page</h1>

<table border="1">
    <tr>
        <td>id</td>
        <td>Name</td>
        <td>Address</td>
        <td>Contact</td>
        <td>Actions</td>
    </tr>
    <tr v-for="item in restaurants" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.address}}</td>
        <td>{{item.contact}}</td>
        <td>
            <router-link :to="'/update/'+item.id">Update</router-link>
        </td>
    </tr>
</table>
</template>

<script>
import axios from 'axios';
import HeaderCompo from './HeaderCompo.vue'

export default {
    name: "HomeCompo",
    components: {
        HeaderCompo
    },

    data() {
        return {
            name: '',
            restaurants: [],
        }
    },

    async mounted() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }
        let result = await axios.get("http://localhost:3000/restaurant");
        console.warn(result)
        this.restaurants = result.data
    }
}
</script>

<style>
td {
    height: 30px;
    padding: 4px 10px;
}
</style>
