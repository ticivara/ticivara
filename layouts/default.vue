<template>
  <div id="page-wrap" :class="[lang]">
    <AppNav :lang="lang" />
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

  data() {
    let lang = 'english';
    if (this.$route.path.startsWith('/th/')) {
      lang = 'thai';
    }
    return {
      lang
    };
  }
};
</script>
