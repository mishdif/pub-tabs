<template>
  <div
    class="card"
    :class="{ expanded: expanded }"
    :style="`--i: ${index}`"
  >
    <div class="tab" @click="expanded = !expanded">
      {{ user.name }}
    </div>
    <div class="content">
    <!-- <div class="content" v-if="expanded"> -->
      <div class="card-body">
        <div class="info">
          <p><strong>ID:</strong> {{ user.id }}</p>
          <p><strong>Phone:</strong> {{ user.phone }}</p>
          <p><strong>Username:</strong> {{ user.username }}</p>
        </div>
        <div class="tab-display">
          <p><strong>Punches: </strong> {{ user.tab }}</p>
          <div class="punches">
            <span
              v-for="n in punchOrder"
              :key="n"
              :class="['dot', { punched: n <= 10 - user.tab }]"
            ></span>
          </div>
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
  },
  computed: {
    punchOrder() {
      // Creates row-first ordering: 1-5 on top, 6-10 below
      return [
        1, 2, 3, 4, 5,  // top row
        6, 7, 8, 9, 10  // bottom row
      ];
    }
  }
};
</script>

<style scoped>
.card {
  color: #343434;
  /* width: 95%; */
  /* margin: auto; */
  margin: -190px 0px 40px;
  position: relative;
  /* top: calc(-160px * var(--i)); /* each card is shifted up */
  /* margin-top: -160px; */
  z-index: calc(100 + var(--i)); /* higher cards are lower */
  transition: transform 0.4s ease-in-out;
  padding: 20px;
  /* padding-top: 40px; */
  border: 1px solid #ccc;
  border-top: 2px solid #ccc;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.78);
}

.card-body {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}

.card.expanded {
  z-index: 999;
  margin-bottom: 190px;
  /* bottom: calc(-24px * var(--i)); /* each card is shifted up */
  /* bottom: calc(300px * var(--i)); /* each card is shifted down */
  transform: scale(1.01);
  /* box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.78); */
}

.info {
  margin-top: 15px;
  text-align: left;
}

.tab-display {
  text-align: left;
  margin-right: 160px;
}

.tab {
  position: absolute;
  top: -15px;
  left: -0.9px;
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
  border: 1px dotted #ccc;
  border-bottom: 1px dotted #aaa;
  border-left: 1px dotted #aaa;
  padding: 15px 15px 15px;
  border-radius: 3px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(5, 1fr);
  gap: 6px;
  margin-top: 5px;
  justify-items: center;
  width: 120px; /* ensures consistent width */
  height: 60px;
  margin-bottom: 40px;
  grid-auto-flow: row
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: white;
  box-shadow: none;
  border: 1px dashed #aaa;
}

.dot.punched {
  background: #ddd;
  box-shadow: inset 2px 2px 0px rgba(0,0,0,0.5);
}
</style>