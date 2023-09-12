<template>
    <div class="col-12" @click="openGift(`${gift.id}`)">
     <section class="row g-1">
        <div  class="col-md-4">
          <div class="card elevation-1">

            <img class="img-fluid" :src="gift.url" alt="">
            
            <p class="p-1 mb-1 text-center">
            {{ gift.tag }}
            </p>
          
          </div>
        </div>
      </section>
    </div>

</template>

<script>

import { Gift } from '../models/Gift.js';
import { giftsService } from '../services/GiftsService.js';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';

export default {
  props: {gift: {type: Gift, required: true}},



  setup() {
  return {
    async openGift(giftId){
      try {
        logger.log(giftId)
        await giftsService.openGift(giftId)
      } catch (error) {
        Pop.error(error)
      }
    }

  };
},
};
</script>


<style lang = "scss" scoped>
</style>