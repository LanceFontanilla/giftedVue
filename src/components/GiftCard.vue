<template>
    <div class="col-12">
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

export default {
  props: {gift: {type: Gift, required: true}},



  setup(props) {
  return {};

},
};
</script>


<style lang = "scss" scoped>
</style>