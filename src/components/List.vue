<template>
  <div class="options-container">
    <ul>
      <li
          v-for="peleador in peleadores"
          :key="peleador.id"
          @click="findPeleadores(peleador.id)"
      >
        {{ peleador.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      peleadores: []
    }
  },
  created() {
    fetch("/fixtures/peleadores.json")
        .then((res) => res.json())
        .then((data) => {
          this.peleadores = data;
        });
  },
  methods: {
    findPeleadores(id) {
      this.$router.push(`/list/${id}`);
    },
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}

li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>