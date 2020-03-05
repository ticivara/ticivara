<template>
  <div id="page-wrap" :class="[lang]">
    <AppNav />
    <section id="content-wrap" class="section">
      <nuxt />
    </section>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav.vue';

export default {
  components: {
    AppNav
  },
  computed: {
    lang() {
      return this.$store.state.lang;
    }
  }
};
</script>
