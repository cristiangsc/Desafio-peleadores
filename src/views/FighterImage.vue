.<template>
  <div>
    <div v-if="peleador">
      <h1>¡Peleador encontrado!</h1>
      <p>{{peleador.id}}</p>
      <p>{{peleador.nombre}}</p>
      <img :src="peleador.imgSrc" alt="">
    </div>

    <div v-if="!peleador">
      <h1>El peleador que buscas no existe 😓 </h1>
      <h1>Esta página no existe 😕</h1>
    </div>
  </div>
</template>

<script>
export default {
data(){
  return {
    peleador: ""
  }
},
  created() {
  const idPeleador = this.$route.params.id
    console.log(idPeleador)
    fetch("/fixtures/peleadores.json")
    .then((resp)=> resp.json())
    .then((data)=>{
      console.log(data)
      this.peleador = data.find((item) => (item.id === idPeleador));
    })

  }
}
</script>

<style>

</style>