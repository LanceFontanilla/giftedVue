<template>

    <!-- <button @click="getGifts()" class="btn btn-primary">Get Gifts</button> -->

  <section class="row g-1">

    <div v-for="g in gifts" :key="g.id" class="col-md-4">

      <GiftCard :gift="g"/>
    </div>
  </section>



</template>

<script>
import {computed, onMounted, onUnmounted, onUpdated } from 'vue';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import{ giftsService } from '../services/GiftsService.js'
import { AppState } from '../AppState.js';

export default {
  setup() {

    onMounted(getGifts)
    onUpdated(() => logger.log('updated homepage'))
    onUnmounted(() => logger.log('unmounted homepage'))


    async function getGifts(){
      try {
        logger.log('get gifts')
        await giftsService.getGifts()
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      getGifts,
    }
  },
  
  gifts : computed(()=> AppState.gifts)


}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
