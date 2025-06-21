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
  display: flex;
  flex-direction: column; /* stack cards vertically */
  gap: 20px;
  padding: 20px;
  max-width: 1200px;       /* optional: limit for readability */
  margin: 0 auto;
  box-sizing: border-box;
}
</style>