<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">No hay nada seleccionado</h1>        
    </div>
    <BotonesEntry />
</template>

<script>
 import { defineAsyncComponent } from "vue";
export default {
   components:{        
        BotonesEntry: defineAsyncComponent( ()=>import('@/modulos/diario/components/BotonesEntry.vue') )
   }
}
</script>

<style lang="scss" scoped>
    div {
        height: 100%;    
    }
</style>