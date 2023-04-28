<template>
   <NavBar />

   <div class="d-flex">
        <div class="col-4">
            <EntryList />
        </div>

        <div class="col">
            <router-view></router-view>
        </div>
   </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        NavBar: defineAsyncComponent( ()=>import('@/modulos/diario/components/NavBar.vue') ),
        EntryList: defineAsyncComponent( ()=>import('@/modulos/diario/components/EntryList.vue') )
    }
}
</script>
