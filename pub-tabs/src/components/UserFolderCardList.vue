<template>
  <div class="user-list">
    <UserFolderCard
        v-for="(user, index) in users"
        :key="user.id"
        :user="user"
        :index="index"
    />
  </div>
</template>

<script>
import UserFolderCard from './UserFolderCard.vue';

export default {
  components: { UserFolderCard },
  props: {
    users: {
        type: Array,
        required: true
    }
  }
};
</script>

<style scoped>
.user-list {
  position: relative;
  display: flex;
  flex-direction: column; /* stack cards vertically */
  width: 100%;
  background-color: #343434;
  border-radius: 15px;
  /* gap: 20px; */
  padding: 50px 20px;
  /* max-width: 1200px;       /* optional: limit for readability */
  margin: auto;
  box-sizing: border-box;
}
/* Give the first card a normal margin-top */
.user-list > .card:first-child {
  margin-top: 0;
}
</style>