<template>
   <div
     class="entry-container mb-3 pointer p-2"
     @click="$router.push( { name: 'entry', params: { id:10}} )"
   >
        <!-- titulo de la entrada -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="text-success fs-5 fw-bold">Julio</span>
            <span class="text-success fs-5 fw-bold">2023</span>
        </div>

        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quibusdam non adipisci id temporibus aut magnam neque numquam vero provident, animi molestiae architecto deleniti in labore nobis praesentium iure corporis.
        </div>
   </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
      background-color: lighten($color: grey, $amount: 45);
      transition: 0.2s all ease-in;
    }

    .entry-description{
      font-size: 12px;
    }
  }
</style>