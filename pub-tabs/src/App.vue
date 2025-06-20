<template>
  <TopHeader />
  <!-- <AddTab></AddTab>
   <TabsList></TabsList> -->
</template>

<script>
import TopHeader from './components/TopHeader.vue';
// import TabsList from './components/TabsList.vue';
// import AddTab from './components/AddTab.vue';
export default {
  name: 'App',
  components: {
    // TabsList,
    // AddTab,
    TopHeader
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background-image: url("@/assets/background-planks-texture.png");
  background: cover;
  background-size: cover;
  /* background-repeat: no-repeat; */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
