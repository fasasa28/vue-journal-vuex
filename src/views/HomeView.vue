<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
   
    <button @click="gotoDiario" class="btn btn-success">Diario</button>
  </div>
</template>

<script>
    export default{
      methods: {
        gotoDiario(){
          // this.$router.push({ name: 'diario'})
          this.$router.push({ name: 'no-entry'})          
        }
      }
    }
</script>
