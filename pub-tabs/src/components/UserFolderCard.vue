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
    <div class="content">
    <!-- <div class="content" v-if="expanded"> -->
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
  color: #343434;
  width: 95%;
  margin: auto;
  position: relative;
  /* top: calc(-160px * var(--i)); /* each card is shifted up */
  margin-top: -160px;
  z-index: calc(100 + var(--i)); /* higher cards are lower */
  transition: transform 0.4s ease-in-out;
  padding: 20px;
  padding-top: 40px;
  border: 1px solid #ccc;
  border-top: 2px solid #ccc;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.78);
}

.card.expanded {
  z-index: 999;
  margin-bottom: 160px;
  /* bottom: calc(-24px * var(--i)); /* each card is shifted up */
  /* bottom: calc(300px * var(--i)); /* each card is shifted down */
  transform: scale(1.01);
  /* box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.78); */
}

.tab {
  position: absolute;
  top: -15px;
  left: -1px;
  /* background: #f7d674; */
  background: white;
  /* border: 1px solid #e0c252; */
  padding: 5px 15px;
  border-radius: 5px 5px 0 0;
  border-top: 2px solid #ccc;
  border-left: 1px solid #ccc;
  font-weight: bold;
  cursor: pointer;
  /* box-shadow: 0 2px 4px rgba(0,0,0,0.15); */
  box-shadow: 0px -2px 2px rgba(0,0,0,0.3);
}

.content p {
  margin: 8px 0;
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
  border: 1px dashed #aaa;
  box-shadow: inset 2px 2px 0px rgba(0,0,0,0.5);
}

.dot.filled {
  background: white;
  box-shadow: none;
}
</style>