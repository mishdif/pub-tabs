<template>
  <div
    class="card"
    :class="{ expanded: expanded }"
    :style="`--i: ${index}`"
  >
    <!-- Folder Tab -->
    <div class="tab" @click="expanded = !expanded">
      {{ user.name }}
    </div>

    <!-- Details (Visible When Expanded) -->
    <div class="content" v-if="expanded">
      <p><strong>Username:</strong> {{ user.username }}</p>
      <p><strong>ID:</strong> {{ user.id }}</p>
      <p><strong>Phone:</strong> {{ user.phone }}</p>

      <div class="tab-section">
        <p><strong>Tab:</strong> {{ user.tab }} punches left</p>
        <div class="punches">
          <span
            v-for="n in 10"
            :key="n"
            :class="['dot', { filled: n <= user.tab }]"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
    index: Number
  },
  data() {
    return {
      expanded: false
    };
  }
};
</script>

<style scoped>
.card {
  width: 100%;
  position: relative;
  top: calc(-30px * var(--i)); /* each card is shifted up */
  z-index: calc(100 + var(--i)); /* higher cards are lower */
  transition: transform 0.2s ease-in-out;
  padding: 20px;
  padding-top: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #fff8dc;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
}


.card.expanded {
  z-index: 999;
  transform: scale(1.01);
}

.tab {
  position: absolute;
  top: -15px;
  left: 15px;
  background: #f7d674;
  border: 1px solid #e0c252;
  padding: 5px 15px;
  border-radius: 5px 5px 0 0;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
}

.content p {
  margin: 8px 0;
  color: black;
}

.tab-section {
  margin-top: 15px;
}

.punches {
  display: flex;
  gap: 5px;
  margin-top: 5px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ddd;
  border: 1px solid #bbb;
}

.dot.filled {
  background: #4caf50;
}
</style>
