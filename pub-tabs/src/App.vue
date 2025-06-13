<template>
  <router-view />
</template>

<script>
export default {
  name: "App"
}
</script>

<!-- <template>
  <Home></Home>
  <SignUp></SignUp>
</template>

<script>
import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue';

export default {
  name: 'App',
  components: {
    Home,
    SignUp
  }
}
</script> -->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding: 0;
  margin: 0;
}
.logo {
    width: 100px
}
.register input, .login input, .home input, .add input {
    margin-bottom: 30px;
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid, skyblue;
  }
  .register button, .login button, .home button, .add button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;

}
</style>