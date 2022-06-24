<template>
  <div>
    <label>Buscar peleador por ID: </label>
    <form @submit.prevent="seachPeleador(id)">
      <input type="text" v-model="id" placeholder="Ingrese ID">
      <button type="submit">Buscar</button>
    </form>
    <br>
  </div>
</template>

<script>
export default {
  name: "Seach",
  data() {
    return {
      id:""
    }
  },
  methods:{
    seachPeleador: function (id) {
      console.log(id)
      this.$router.push(`/list/${id}`)

    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>