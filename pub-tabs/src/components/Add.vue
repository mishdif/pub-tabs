<template>
    <TopHeader />
    <h1>Hello {{this.name}}, Welcome to Add Restaurant Page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name"/>
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address"/>
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact"/>
        <button type="button" v-on:click="addRestaurant">Add new Restaurant</button>
    </form>
</template>

<script>
import TopHeader from "./TopHeader.vue"
import axios from "axios";
export default {
    name: "AddRestaurant",
    components: {
        TopHeader
    },
    data() 
    {
        return {
            name: "",
            restaurant: {
                name: "",
                address: "",
                contact: ""
            }
        }
    },
    methods: {
        async addRestaurant() {
            console.log(this.restaurant);
            const result = await axios.post("http://localhost:3000/restaurants", {
               name: this.restaurant.name,
               address: this.restaurant.address,
               contact: this.restaurant.contact
            });

            if (result.status === 201) {
                this.$router.push({name: "HomePage"})
            }
        }
    },
    async mounted() {
        let user = sessionStorage.getItem("user-info");
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({name: "SignUp"})
        }
        let result = await axios.get("http://localhost:3000/restaurants");
        // console.warn(result);
        this.restaurant = result.data;
    }
}
</script>