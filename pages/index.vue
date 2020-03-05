<template>
  <LandingHero />
</template>

<script>
import LandingHero from '@/components/LandingHero.vue';

export default {
  components: {
    LandingHero
  },

  fetch(context) {
    context.store.commit('setLangFromPath', context.route.path);
  }
};
</script>
