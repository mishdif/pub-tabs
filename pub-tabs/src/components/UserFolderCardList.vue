<template>
  <div class="user-list">
    <input
      type="text"
      v-model="searchQuery"
      class="search-input"
      placeholder="Search by name..."
    />

    <div class="cards-wrapper">
      <UserFolderCard
        v-for="(user, index) in filteredUsers"
        :key="user.id"
        :user="user"
        :index="index"
      />
    </div>
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
  },
  data() {
    return {
      searchQuery: ''
    };
  },
  computed: {
    filteredUsers() {
      const query = this.searchQuery.trim().toLowerCase();
      if (!query) return this.users;
      return this.users.filter(user =>
        user.name.toLowerCase().includes(query)
      );
    }
  }
};
</script>

<style scoped>
.search-input {
  /* width: 95%; */
  padding: 12px 16px;
  size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  margin: 0px 0px 30px;
}

.cards-wrapper {
  position: relative;
  margin-top: 190px; /* creates space between search and first card */
}

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

.user-list > .card:last-child {
  margin-bottom: 0;
}
</style>