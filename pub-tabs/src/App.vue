<template>
  <header>
    <TopHeader class="top-header"/>    
  </header>
  <main>
    <TabsList class="tabs-list"/>
  </main>
  <!-- <AddTab></AddTab> -->
</template>

<script>
import TopHeader from './components/TopHeader.vue';
import TabsList from './components/TabsList.vue';
// import AddTab from './components/AddTab.vue';
export default {
  name: 'App',
  components: {
    TabsList,
    // AddTab,
    TopHeader
  }
}
</script>

<style>
:root {
  --header-height: 160px;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  z-index: 1000; /* to keep it above other elements */
}
main {
  padding-top: var(--header-height);
}
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-image: url("@/assets/background-planks-texture.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1; /* Push it behind everything */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
/* .tabs-list {
  margin-top: 100px;
  margin-bottom: 100px;
} */
</style>
