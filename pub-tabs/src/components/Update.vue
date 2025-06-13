<template>
    <TopHeader />
    <h1>Hello {{this.name}}, Welcome to Update Restaurant Page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Name" v-model="restaurant.name"/>
        <input type="text" name="address" placeholder="Address" v-model="restaurant.address"/>
        <input type="text" name="contact" placeholder="Contact" v-model="restaurant.contact"/>
        <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
    </form>
</template>

<script>
import TopHeader from "./TopHeader.vue"
import axios from "axios";
export default {
    name: "UpdateRestaurant",
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
                contact: "",
            }
        }
    },
    methods: {
        async updateRestaurant() {
            console.log(this.restaurant);
            const result = await axios.put('http://localhost:3000/restaurants/'+this.$route.params.id, {
               name: this.restaurant.name,
               address: this.restaurant.address,
               contact: this.restaurant.contact
            });

            if (result.status === 200) {
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
        
        let result = await axios.get('http://localhost:3000/restaurants/'+this.$route.params.id);
        this.restaurant = result.data;
    }
}
</script>