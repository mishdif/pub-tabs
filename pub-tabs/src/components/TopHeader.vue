<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Restaurant</router-link>
        <a v-on:click="logOut" href="#">Logout</a>
    </div>
</template>

<script>
export default {
    name: "TopHeader",
        methods: {
        logOut() {
            sessionStorage.removeItem("user-info");
            this.$router.push({name: "Login"});
        }
    }
}
</script>

<style>
.nav {
    background-color: #333;
    overflow: hidden;
}
.nav a {
    float: left;
    color: #f2f2f2f2;
    padding: 14px 14px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover {
    background: #ddd;
    color: #333;
}
</style>