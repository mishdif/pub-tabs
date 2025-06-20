<template>
  <div>
    <img class="icon" alt="Beer logo" src="./assets/beers-icon.png">
    <h1>Welcom to PUB-TABS!</h1>
  </div>
  <AddTab></AddTab>
   <TabsList></TabsList>
</template>

<script>
import TabsList from './components/TabsList.vue';
import AddTab from './components/AddTab.vue';
export default {
  name: 'App',
  components: {
    TabsList,
    AddTab
  }
}
</script>

<style>
body {
  background-image: url("@/assets/background-planks-texture.png");
  background: cover;
  background-size: cover;
  background-repeat: no-repeat;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.icon {
  width: 100px;
  height: 100px;
}
</style>
